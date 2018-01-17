---
title: Configure to send all mails to central email address (DebugMailTo)
layout: default
tags:  
  - System Config
lang: en
---

## Overview
Allows to configure sending all emails to a central email address for debug reasons.


## Example

Set wait time after starting the app server to 1 second:
```
  update ad_sysconfig
  set value='debugemail@test.com' 
  where name='org.adempiere.user.api.IUserBL.DebugMailTo'
```