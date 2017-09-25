---
title: How do I change the WebUI ports for metasfresh-docker?
layout: default
tags:  
  - Docker
  - Setup
lang: en
ref: how_do_I_change_the_webui_ports_for_metasfresh_docker
---

## Overview
In some cases, you may want to change the standard ports which you use to access your metasfresh-docker environment, e.g. if you are already running a service on your dockerhost that requires port `80/TCP` or `443/TCP`.

Please use the following guide to change your ports for your metasfresh-docker stack.

## Change external ports of metasfresh-docker
1. Modify your `docker-compose.yml` and assign new ports (`ports:` in `webui` section).
1. Modify your `docker-compose.yml` to uncomment and assign a new URL (`WEBAPI_URL=` in `webui` section).
1. Update your `metasfresh-docker` compose project.


## Example

On your docker-host `myserver.com` you are already running a service on port `443/TCP` and want to assign metasfresh-docker a new port `8443/TCP`.


```bash
cd metasfresh-docker
vi ./docker-compose.yml
#change '80:80' and '443:443' to eg. '8080:80' and '8443:443' in entry 'ports:'
#of section 'webui'
#uncomment and change URL "https://myserver.com:8080" to "https://myserver.com:8443" in entry
#'WEBAPI_URL' if section 'webui'
#also uncomment the entry `environment:`

docker-compose up -d
```
You can now reach your metasfresh-WebUI using the new URL `https://myserver.com:8443`.

### Example webui-entry in docker-compose.yml
```yml
webui:
  build: webui
  links:
    - webapi:webapi
  ports:
    - "80:80"
    - "443:443"
  restart: always
  volumes:
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
  #uncomment and set to URL where metasfresh will be available from browsers
  environment:
    - WEBAPI_URL=http://myserver.com:8443
```
