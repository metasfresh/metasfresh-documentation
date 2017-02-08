---
title: How do I update metasfresh using Docker
layout: default
tags:
  - Installation
lang: en
---

## Updating with Docker

1. stop all docker containers
1. backup of the docker-workspace
1. Löschen der images app webui und webapi vom host
1. retrieve new docker files from github 
1. change hostname in config.js
1. rebuild images 
1. start docker containers


## Example

```
docker-compose stop
tar cvzf ../backup.tar.gz ./<mydocker fir>/* --BACKUP
docker-compose rm app webui webapi 
git pull
vi ./webui/sources/configs/config.js
docker-compuse build app webui webapi
docker-compose up -d
```

