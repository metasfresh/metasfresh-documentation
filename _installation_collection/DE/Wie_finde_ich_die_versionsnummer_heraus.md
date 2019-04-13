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
{"build":{"name":"metasfresh-webui-api","time":1554368261000,"version":"5.99.1-13675+master","jenkinsJobName":"metasfresh-webui/master","jenkinsBuildNo":"13675","group":"de.metas.ui.web","jenkinsBuildTag":"jenkins-metasfresh-webui-master-13675","artifact":"metasfresh-webui-api","jenkinsBuildUrl":"https://jenkins.metasfresh.com/job/metasfresh-webui/job/master/13675/"},"AD_System":{"implementationVersion":"5.99.1-10484+master","dbVersion":"5.99.1-14944+master"}}
```

Du findest die Versionsnummer hinter `"dbVersion":`. In diesem Fall ist es die Version `5.99.1-14944+master` was der Hauptversion '5.99' entspricht.
