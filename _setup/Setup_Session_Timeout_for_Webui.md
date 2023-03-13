---
title: Setup Session Timeout for WebUI
layout: default
tags:
  - System
lang: en
sequence:
ref: sessiontimeout
---

### Configuration

Set `"-Dspring.session.timeout=4h"` to get 4 hours session timeout to override the default timeout which is 30 min.

```
webapi
...
  environment:
    JAVA_MAX_HEAP: "3072M"
    JAVA_JVM_PARAMS: "-Dspring.session.timeout=4h"   # add additional parameters here if required
```
