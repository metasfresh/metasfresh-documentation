---
layout: default
title: How to change the language of the metasfresh user to english ?
tags:
  - FAQ
lang: en
---

1. log on to the system where you want to change the language of your current user session
1. open swagger e.g. <your system>/swagger-ui.html#/user-session-rest-controller/setLanguageUsingPUT
1. click "try it out"
1. enter this code
  ```JSON
  {
      "key": "en_US", 
  "caption": "null"
  }
```
1. click on "execute"

![](assets/usersession_post.png)
