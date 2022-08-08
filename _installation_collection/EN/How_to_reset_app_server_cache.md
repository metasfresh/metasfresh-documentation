---
title: How do I reset the App Server Cache?
layout: default
tags:
  - System Administration
lang: en
ref: how_to_reset_app_server_cache
---

## Overview
Whenever you change any settings, it is necessary to reset the App Server Cache (API) for the changes to take effect.

## Requirements
- [Prepare an API authentication token](../../webui_collection/EN/Authentication_token).

## Steps
1. In the following link, replace `<yourhostname>` with your server name and port, and `<userAuthToken>` with your [authentication token](../../webui_collection/EN/Authentication_token):<br>`https://<yourhostname>/app/api/v2/test/cacheReset?apiKey=<userAuthToken>`.
    - For example: `https://mydockerhost:8080/app/api/v2/test/cacheReset?apiKey=12a345b6cd7e89fg00h123456789312i`
1. Copy the link into the address bar of your browser and execute it by pressing `↵ Enter`.
1. If a page showing only the ID of the user who requested the server reset appears (e.g., `{"requestId":1234567}`), then the cache reset was successful.
