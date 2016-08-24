---
title: Find a a particular artifact in the jenkins build job logs
layout: default
tags: CI, infrastructure
lang: en
---

Scenario: 

There is a problematic artifact and you need to know which build job has produced that artifact. 
In our scenario, the artifact's file name includes `sync-api-1-master-20160823.083618-8`.

To find the log record that mentions the file beeing uploaded to the artifact repository, you can ssh to the jenkins master and do

```sh
cd ~jenkins/jobs
grep --include=log -R 'sync-api-1-master-20160823.083618-8' ./*
```

Notes:
* each build job's log file is named `log`
* on our jenkins master, the search takes a while
* from the full path of the `log`files found by the grep, you can discern the actual build job.
