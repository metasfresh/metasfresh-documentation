---
title: Build System Overview
layout: default
tags: CI, infrastructure
---

# Intro

When building and deploying artifacts on our CI infrastructure, we build the "master" branch, but also feature branches like "FRESH-123".

The master builds are what we potentially roll out for our users, so they need to be unimpaired by ongoing work.

Feature builds are important to validate contributions before they are integrated into the main line of development.
We might, for example, want to deploy them to a dedicated server for integration testing.

Finally, when developing locally, we need our local changes to take precedence, but also want to fall back to the "standard" version of those artifacts we need, but don't really care for.

Some side notes
* when building in our CI infrastructure, we make heavy use of the [versions-maven-plugin](http://www.mojohaus.org/versions-maven-plugin) to edit the `version` value of our `pom.xml` files, before we build and deploy the respective projects.
* This work was to a great extend inspiered by these two articles
** https://opensource.com/business/15/12/next-gen-ci
** https://axelfontaine.com/blog/final-nail.html
* obviously, this would not have been possible without the great people that provided us with jenkins, git, the jenkins-git-plugin, linux etc. etc.

# The `metasfresh-dependency.version` build property

The property **`metasfresh-dependency.version`** plays an important role when resolving metasfresh dependencies.
It is specified in the [pom.xml](https://github.com/metasfresh/metasfresh-parent/blob/master/pom.xml) of our [metasfresh-parent](https://github.com/metasfresh/metasfresh-parent), and there it is set to
`[1-master-SNAPSHOT],[${project.version}]`,
which is our default value, but can be overidden from outside.
`${project.version}` in turn resolves to `3-development-SNAPSHOT`.

Note 1: as we further elaborate on this elsewhere, `1-master-SNAPSHOT` is a "master" build version, created and deployed by our CI infrastructure. So, for all artifacts that you did not build locally by yourself, maven can fall back to the "1-master-SNAPSHOT" version.

Note 2: in case you wonder why it's actually `[1-master-SNAPSHOT],[3-development-SNAPSHOT]` and where the `2-...` went, see the section about "feature" builds.

So, when building locally, maven tries to get the `3-development-SNAPSHOT` version for each metasfresh dependency, but is ready to fall back to `1-master-SNAPSHOT`.

However, when projects are built on our CI infrastructure, this property will be set to different values.

On the CI side, we distinguish between "master" builds and "feature" builds.

Note that there are dedicated "master" and "feature" build jobs, to  make it easier to e.g. provide a dedicated build agent for each kind of job, or to be able to prefer master builds to feature builds if needed.

# "master" build

When doing a "master" build, all metasfresh dependencies are built from their respective git repositories' master branches.
Also, the build artifacts' versions are each set to `1-master-SNAPSHOT`, as well as the value of the `metasfresh-dependency.version` property, and then the actual build starts.

Therefore, in a "master" build, only artifacts from the master branch are considered as dependencies.

This scenario is comparatively boring and ***not*** the reason why we need the metasfresh-dependency.version property and all build jobs & documentation.

# "feature" build

When doing a "feature" build, it means that the respective build itself ***or at least one of its metasfresh dependencies*** are built from their respective repositories' "not-master" branches.
Typically, this is a branch like "FRESH-123", but it might also be some other branch.
So, calling it a "feature" build is usually correct and seems to be relatively clear to me, but calling it "not-master" build would actually be more correct.

## A concrete example

In this section, we describe a concrete example, from a high-level view.

Note that in order to support feature builds in the described way, we need different types of jobs which end with `_feature_webhook` and `_feature_downstream`. The difference is described in another section. I think that in order to follow the example, it's not requred to userstand the difference.

Three repositories are playing a role in this example:
* [metasfresh](https://github.com/metasfresh/metasfresh)
* [metasfresh-commons-cxf](https://github.com/metasfresh/metasfresh-commons-cxf)
* [metasfresh-procurement-webui](https://github.com/metasfresh/metasfresh-procurement-webui)

To follow this example, it is not required to understand what those repositories are actually about functionally.

As of now, `metasfresh-procurement-webui` depends on both `metasfresh-commons-cxf` and `metasfresh`.
Further, `metasfresh` and `metasfresh-commons-cxf` don't depend on each other. On a sidenote, this is about to change, but for the sake of this documentation, it's pretty convenient this way.

Assume that `metasfresh-commons-cxf` has a feature branch `FRESH-276` while `metasfresh` and `metasfresh-procurement-webui` both do not have that branch.

Now we push a change on `metasfresh-commons-cxf`, branch `FRESH-276`.

The push causes the git repository to notify our CI server (which is Jenkins), which in turn starts the build job **`metasfresh-commons-cxf_feature_webhook`**.

This build job now does a number of things:

1. check out the latest of branch `origin/FRESH-276` from the git repository
1. get the branch name (i.e. "FRESH-276")
1. call the [versions-maven-plugin](http://www.mojohaus.org/versions-maven-plugin) to set the pom's version to `2-FRESH-276-SNAPSHOT`
1. run the maven build with `metasfresh-dependency.version=[1-master-SNAPSHOT],[2-FRESH-276-SNAPSHOT]` and deploy the artifacts
1. invoke the downstream build jobs - which by the way have all their names end with "_feature_downstream" - one of which is `metasfresh-procurement-webui_feature_downstream`.
When invoking the downstream jobs, it also passes the maven version (i.e. `2-FRESH-276-SNAPSHOT`) on to them.

So, now the build job `metasfresh-procurement-webui_feature_downstream` is invoked with a version parameter `2-FRESH-276-SNAPSHOT`. It does the following:

1. attempt to check out the branch `origin/FRESH-276`, but as there is no such branch, it falls back to the `origin/master` branch
1. call the [versions-maven-plugin](http://www.mojohaus.org/versions-maven-plugin) to set the pom's version also to `2-FRESH-276-SNAPSHOT`.
So, note that when dedicing on the maven version to go with, the parameter we got from the upstream build job takes precedence over the actual branch which the job is building!
1. run the maven build, again with `metasfresh-dependency.version=[1-master-SNAPSHOT],[2-FRESH-276-SNAPSHOT]`.
Note that as maven versioning goes, everything starting with "2" is greater than everything starting with "1", so when resolving artifacts, maven will prefer `2-FRESH-276-SNAPSHOT`.
This means that maven will resolve `metasfresh` to the latest `1-master-SNAPSHOT` version and `metasfresh-commons-cxf` to the latest `2-FRESH-276-SNAPSHOT` version.

So, to summarize: in this example
* `metasfresh-procurement-webui` is build from the `master` branch, but the build is triggered from the `FRESH-276` branch of `metasfresh-commons-cxf`
* Because it contains one "feature" artifact from branch `FRESH-276`, this from-master-branch-build's result is versioned as `2-FRESH-276-SNAPSHOT`. This is important to avoid mixing it up with a "master" build of `metasfresh-procurement-webui`.
* When resolving its `metasfresh` dependencies the "feature" build of `metasfresh-procurement-webui` prefers `2-FRESH-276-SNAPSHOT`, but willingly falls back to `1-master-SNAPSHOT` in the case of metasfresh.

## `_feature_webhook` vs `_feature_downstream` build jobs

In the previous section, we described how a `_feature_webhook` build job was notified by github and later, how a `_feature_downstream` job was invoked to check for the `feature`-branch and fall back to the `master`-branch if there wasn't a feature branch.

Why do we need two different build jobs?

Unfortunately, we need two differnt jobs for the two different scenarios, because yours truly is not capable of making one job do both things. Instead we have:

* to be notified by the git repository and find out, which feature branch(es) have changes and need to be build => `_feature_webhook` job
* to be invoked by an upstream job, try feature-branch first, master-branch second => `_feature_downstream` job

The two kinds of job differ in their git plugin configuration.
For the `_feature_webhook` we pretty much leave the jenkins git plugin alone, and let it do it's job of figuring out which recents changes were not yet build.

But for the fallback ability of the `_feature_downstream` scenario, we need to use the [Git Chooser Alternative Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Chooser+Alternative+Plugin). And it turned out, that with this plugin being active for a build job, the git plugin is not able any more to idendfiy the changes is has to build.

Thus the two different jobs.
As usual, be would be grateful for help and improvements.
