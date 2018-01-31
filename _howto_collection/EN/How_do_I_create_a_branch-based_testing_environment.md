---
title: How do I create a branch-based testing environment ?
layout: default
tags:
  - Setup
  - Testing
lang: en
---

# How do I create a branch-based testing environment?


1. Select the task you want to test: 
	* =>  must be in review, but NOT yet integrated in master!
	
1. Open the github issue for your task and check the pull requests: 
	* =>  issue must have at least ![1 pull request](../images/en_pull_request.png)
	
1. Click the tab Pull requests, and make sure that the branch has no conflicts with the base branch:
	* =>  should say it somewhere at the ![bottom of the page](../images/en_no_conflict_branch.png)
	
1. Right-click the link to the jenkins page:
	* =>  ![continuous-integration/jenkins/branch: Details](../images/en_continuous_integration.png)
	
1. Look for the link to the dist build in console:
	* =>  in console, it says "[metasfresh_dist] Starting building..." somewhere towards the end, the link after that is ![the one you're looking for](../images/en_metasfresh_dist.png)
	
1. Use this link to get to the build in metasfresh.dist you want to perform testing on:
	* =>  copy the tag/name of the version
	
1. Click the 2nd link to create the build:
	* =>  jenkins-job that will create the ![package from this build](../images/en_jenkinslink.png)
	
1. Enter your email address so you will get informed by mail when the instance was built

1. You will receive an email with the link to your testing docker environment with the resp. user name & pw

1. Click the link in the email:
	* =>  login screen for your testing environment opens
	
1. Check the db version to make sure it's the correct one that was built:
	* =>  db-version shall be the same as the one in tag/name of the ![version you copied earlier](../images/en_branchversion.png)
