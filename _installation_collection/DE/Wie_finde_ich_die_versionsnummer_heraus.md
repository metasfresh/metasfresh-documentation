---
title: Wie finde ich die WebUI Versionsnummer heraus?
layout: default
tags:
  - System Administration
lang: de
ref: how_do_I_find_webui_version_number
---

Öffne diese URL in Deinem Internetbrowser:

`http://<your-server-name>/info`

Der Server wird Dir mit einem JSON String antworten, der ungefähr so aussieht:

```
{"build":{"name":"metasfresh-webui-api","time":1504872684000,"version":"5.26.1-5415+master","jenkinsJobName":"metasfresh-webui/master","jenkinsBuildNo":"5415","group":"de.metas.ui.web","jenkinsBuildTag":"jenkins-metasfresh-webui-master-5415","artifact":"metasfresh-webui-api","jenkinsBuildUrl":"https://jenkins.metasfresh.com/job/metasfresh-webui/job/master/5415/"}}
```

Du findest die Versionsnummer hinter `"version":`. In diesem Fall ist es die Version `5.26.1`.
