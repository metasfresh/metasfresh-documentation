---
title: How do I find the WebUI version number?
layout: default
tags:
  - System Administration
lang: de
---

Öffne diese URL in deinem Webbrowser:

`http://<your-server-name>/info`

Der Server wird dir mit einem JSON String antworten, der ungefäht so aussieht:

```
{"build":{"ciBuildNo":"379","ciBuildTag":"jenkins-metasfresh-webui-379","ciBuildUrl":"https://jenkins.metasfresh.com/job/metasfresh-webui/job/379/","ciJobName":"metasfresh-webui/FRESH-112"}}
```

Du findest die Versionsnummer hinter `"ciBuildNo":`. In diesem Fall ist es die `379`.
