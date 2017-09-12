---
title: How do I reset the Server Cache?
layout: default
tags:
  - System Administration
lang: en
ref: how_to_reset_server_cache
---

## Overview
Whenever you change settings, it is necessary to reset the server cache in order to apply the changes.

## Steps

1. Enter your server name and port into this link:
`http://<yourhostname>/rest/api/debug/cacheReset`
1. Copy the link into your browser where you have an open session of metasfresh and execute it.<br>
`http://mydockerhost:8080/rest/api/debug/cacheReset`

In case of success, only a white page will be displayed.
