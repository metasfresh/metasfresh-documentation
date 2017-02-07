---
title: How do I find the WebUI version number ?
layout: default
tags:
  - WebUI
lang: en
---

Open this URL in your webbrowser:

`http://<your-server-name>/info`

the answer is a JSON String which looks like this:
```
{"build":{"ciBuildNo":"379","ciBuildTag":"jenkins-metasfresh-webui-379","ciBuildUrl":"https://jenkins.metasfresh.com/job/metasfresh-webui/job/379/","ciJobName":"metasfresh-webui/FRESH-112"}}
```

You find the version number after `"ciBuildNo":`
