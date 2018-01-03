---
title: Configure Async Queue Processor Start Delay (Async_InitDelayMillis)
layout: default
tags:  
  - System Config
lang: en
---

## Overview
Allows to control when the asynchronous queue processors are started after starting the app server.


## Example

Set wait time after starting the app server to 1 second:

```
  update ad_sysconfig
  set value='10000'
  where name='de.metas.async.Async_InitDelayMillis'
```