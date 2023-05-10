---
title: How do I find the systems version number?
layout: default
tags:
  - System Administration
lang: en
ref: how_do_I_find_webui_version_number
---

## Version of the System

Open this URL in your web browser:

`https://<your-server-name>/info`

The server will answer with a JSON String, which looks like this:

```
{"build":{"name":"metasfresh-webui-api","time":1554368261000,"version":"5.99.1-13675+master","jenkinsJobName":"metasfresh-webui/master","jenkinsBuildNo":"13675","group":"de.metas.ui.web","jenkinsBuildTag":"jenkins-metasfresh-webui-master-13675","artifact":"metasfresh-webui-api","jenkinsBuildUrl":"https://jenkins.metasfresh.com/job/metasfresh-webui/job/master/13675/"},"AD_System":{"implementationVersion":"5.99.1-10484+master","dbVersion":"5.99.1-14944+master"}}
```

You will find the version number after `"dbVersion":`. In this case it is the version `5.99.1-14944+master` which is major '5.99'.


## Version of WebUI Front End

that version can be found on the server in this file:

`/opt/metasfresh-webui-frontend/dist/info.json`
