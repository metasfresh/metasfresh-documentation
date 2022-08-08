---
title: How do I reset the Web API Server Cache?
layout: default
tags:
  - System Administration
lang: en
ref: how_to_reset_web_api_server_cache
---

## Overview
Whenever you change any settings, it is necessary to reset the Web API Server Cache (WebUI) for the changes to take effect.

## Steps
1. [Log in](../../webui_collection/EN/Login) as any user to the system where you want to perform a server cache reset.
 > **Note:** Without an active user session you cannot perform the next steps.

1. In the following link, replace `<yourhostname>` with your server name and port:<br>`https://<yourhostname>/rest/api/debug/cacheReset`.
    - For example: `https://mydockerhost:8080/rest/api/debug/cacheReset`
1. Copy the link into the address bar of the browser where you have an open session of metasfresh and execute it by pressing `↵ Enter`.
1. If a blank page appears, the cache reset was successful.
