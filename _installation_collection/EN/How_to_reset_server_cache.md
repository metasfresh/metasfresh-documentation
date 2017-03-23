---
title: How do I reset Server cache ?
layout: default
tags:
  - System Administration
lang: en
permalink: /mypageurl/
---

## Overview

In case you changes settings its necessary to reset the server cache in case to make the change active

## Steps

1. Put your server name and port into this link:
`http://<yourhostname>/rest/api/debug/cacheReset`
1. Copy it to your browser where you have an open session with metasfresh and execute it<br>
`http://mydockerhost:8080/rest/api/debug/cacheReset`

In case of success just a white page will be displayed.
