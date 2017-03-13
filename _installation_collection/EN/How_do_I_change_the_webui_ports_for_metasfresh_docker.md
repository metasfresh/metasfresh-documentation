---
title: How do I change the WebUI ports for metasfresh-docker?
layout: default
tags:  
  - Docker
lang: en
---

## Overview
In some cases, you may want to change the ports which you use to access your metasfresh-docker environment, e.g. if you're already running a service on your dockerhost that requires port `80/TCP` or `443/TCP`.

Please use the following guide to change your ports for your metasfresh-docker stack.

## Change external ports of metasfresh-docker
1. Stop your metasfresh-docker stack
1. Remove your current metasfresh-docker images
1. Modify your `docker-compose.yml` and assign new ports
1. Change your `config.js` and confirm your custom ports
1. Rebuild your metasfresh-docker images including the changes you performed
1. Start your metasfresh-docker containers

## Example

On your docker-host `myserver.com` you're already running a service on port `443/TCP` and want to assign metasfresh-docker a new port `8443/TCP`.


```bash
cd metasfresh-docker
docker-compose stop
docker-compose rm -f
vi ./docker-compose.yml
#change '80:80' and '443:443' to eg. '8080:80' and '8443:443'
vi ./webui/sources/configs/config.js
#change URL "https://myserver.com" to "https://myserver:8443.com"
docker-compose build
docker-compose up -d
```
You should now be able to reach your metasfresh-webui using the new URL `https://myserver.com:8443`
