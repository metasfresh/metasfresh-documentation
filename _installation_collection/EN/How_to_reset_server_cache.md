---
title: How do I reset the Server Cache?
layout: default
tags:
  - System Administration
lang: en
ref: how_to_reset_server_cache
---

## Overview
Whenever you change settings, it is necessary to reset the server cache for the changes to be take effect.

## Steps
1. [Log in](../../webui_collection/EN/Login) as any user to the system where you want to perform a server cache reset.
 > **Note:** Without an active user session you cannot perform the next steps.

1. Enter your server name and port into the following link: `https://<yourhostname>/rest/api/debug/cacheReset`.
1. Copy the link into the address bar of the browser where you have an open session of metasfresh and execute it by pressing `↵ Enter`.<br>
`https://mydockerhost:8080/rest/api/debug/cacheReset`
1. In case of success, only a blank page will be displayed.
