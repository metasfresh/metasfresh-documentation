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

`http://<your-server-name>/info`

The server will answer with a JSON String, which looks like this:

```
{"build":{"name":"metasfresh-webui-api","time":1504872684000,"version":"5.26.1-5415+master","jenkinsJobName":"metasfresh-webui/master","jenkinsBuildNo":"5415","group":"de.metas.ui.web","jenkinsBuildTag":"jenkins-metasfresh-webui-master-5415","artifact":"metasfresh-webui-api","jenkinsBuildUrl":"https://jenkins.metasfresh.com/job/metasfresh-webui/job/master/5415/"}}
```

You will find the version number after `"version":`. In this case it is the version `5.26.1`.


## Version of WebUI Frontend

that version can be found on the server in this file:

`/opt/metasfresh-webui-frontend/dist/info.json`
