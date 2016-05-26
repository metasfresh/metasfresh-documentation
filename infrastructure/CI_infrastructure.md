---
tags: CI, infrastructure
---

When building and deploying artifacts on our CI infrastructure, we build the "master" branch, but also feature branches like "FRESH-123"

We distinguish between "master" builds and "feature" builds. 

Note that there are dedicated "master" and "feature" build jobs, to  make it easier to e.g. provide a dedicated build agent for each kind of job, or to be able to prefer master builds to feature builds if needed.

"master" build

When doing a "master" build, all metasfresh dependencies are build from their respective git repositories' master branches. 
Also, the build artifacts' versions are each set to 1-master-SNAPSHOT, as well as the value of the metasfresh-dependency.version property, and then the actual build starts.

Therefore, in a "master" build, only artifacts from the master branch are considered as dependencies.

This scenario is comparatively boring and ***not*** the reason why need the metasfresh-dependency.version property and all build jobs & documentation.
 
"feature" build

Feature builds are important to validate contributions before they are integrated into the main line of development.

When doing a "feature" build, it means that the respective build itself ***or at least one of its metasfresh dependencies*** are build from their respective repositories' "not-master" branches.
Typically, this is a branch like "FRESH-123, but it might also be some branch. 
So, calling it a "feature" build is usually correct and seems to be relatively clear to me, but calling it "not-master" build would actually be more correct. 
 
To illustrate this case, I'll go with a concrete example:

Three repositories are playing a role in this example:
* metasfresh
* metasfresh-commons-cxf
* metasfresh-procurement-webui

As of now, metasfresh-procurement-webui depends on both metasfresh-commons-cxf and metasfresh. 
metasfresh and metasfresh-commons-cxf don't depend on each other. On a sidenote, this is about to change, but for the same of this documentation, it's pretty convenient this way. 

Assume that metasfresh-commons-cxf has a feature branch "FRESH-276" while metasfresh and metasfresh-procurement-webui both do not have that branch.

Now we push a change on metasfresh-commons-cxf, branch "FRESH-276".

The push causes the git repository to notify our CI server (which is Jenkins) which in turn starts the build job metasfresh-commons-cxf_feature.

This build job now does a number of things:
1. check out the latest of branch origin/FRESH-276 from the git repository
1. get the branch name (i.e. "FRESH-276")
1. call the versions-maven-plugin to set the pom's version to 2-FRESH-276-SNAPSHOT
1. run the maven build with metasfresh-dependency.version=[1-master-SNAPSHOT],[2-FRESH-276-SNAPSHOT] and deploy the artifacts
1. invoke the downstream build jobs - which by the way have all have their names end with "_feature" - one of which is metasfresh-procurement-webui. 
When invoking the downstream jobs, if also passes the maven version (i.e. "2-FRESH-276-SNAPSHOT") on to them.

So, now the build job metasfresh-procurement-webui_feature is invoked with a version parameter "2-FRESH-276-SNAPSHOT". It does the following:
1. attempt to check out origin/FRESH-276, but if there is not such branch, falls back to "origin/master"
1. call the versions-maven-plugin to set the pom's version also to 2-FRESH-276-SNAPSHOT. 
So, when dedicing the maven version to go with, the parameter we got from the upstream build job takes precedence over the actual branch which the job is building!
1. run the maven build, again with metasfresh-dependency.version=[1-master-SNAPSHOT],[2-FRESH-276-SNAPSHOT]. 
Note that as maven versioning goes, everything starting with "2" is greater than everything starting with "1", so maven when resolving artifacts, maven will prefer "2-FRESH-276-SNAPSHOT".
This means that maven will resolve metasfresh to the latest 1-master-SNAPSHOT version and metasfresh-commons-cxf to the latest 2-FRESH-276-SNAPSHOT version.

So, to summarize: in this example
* metasfresh-procurement-webui is build from the master branch, but the build is triggered from the "FRESH-276" branch of metasfresh-commons-cxf
* Because it contains one "feature" artifact from branch FRESH-276, the result is versioned as 2-FRESH-276-SNAPSHOT. This is important to avoid mixing it up with a "master" build of metasfresh-procurement-webui  
* When resolving its metasfresh dependencies the "feature" build of metasfresh-procurement-webui prefers 2-FRESH-276-SNAPSHOT, but willingly falls back to 1-master-SNAPSHOT in the case of metasfresh.
