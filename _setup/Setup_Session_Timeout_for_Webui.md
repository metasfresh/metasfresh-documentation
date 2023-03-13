---
title: Setup Session Timeout for WebUI
layout: default
tags:
  - System
lang: en
ref: sessiontimeout

---



### configure

```
webapi
...
  environment:
    JAVA_MAX_HEAP: "3072M"
    JAVA_JVM_PARAMS: "-Dspring.session.timeout=4h"   # add additional parameters here if required
```

