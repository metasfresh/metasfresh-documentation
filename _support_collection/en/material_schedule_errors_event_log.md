---
layout: default
title: Analyze event-based errors for material schedule
tags:
  - Material Schedule
lang: en
---

## Error
Example of an error in the material schedule log about failing to connect to spring-boot-admin (which is not installed on Docker):

```
material-dispo_1  | 2019-07-17 09:14:35.743  WARN 15 --- [gistrationTask1] d.c.b.a.c.r.ApplicationRegistrator       :
Failed to register application as Application [name=metasfresh-material-dispo, managementUrl=http://85626827e6e0:8283, healthUrl=http://85626827e6e0:8283/health, serviceUrl=http://85626827e6e0:8283]
at spring-boot-admin ([http://localhost:9090/api/applications]): I/O error on POST request for "http://localhost:9090/api/applications":
Connection refused (Connection refused); nested exception is java.net.ConnectException: Connection refused (Connection refused)
```

## Symptoms
Possible symptoms may be that no data are shown in the material schedule.

## Analysis
Go to the window "[Event Log](..\..\webui_collection/EN/Menu.html)" (`/window/540394`) and check there for messages helping to analyze the problem.
