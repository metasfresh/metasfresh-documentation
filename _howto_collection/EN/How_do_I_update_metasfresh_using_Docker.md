---
title: How do I update metasfresh using Docker
layout: default
tags:
  - System Administration
  - Installation
  - Docker
lang: en
---

## Updating using docker

1. Stop all docker containers
1. Create a backup of the current docker-workspace
1. Delete the images of app, webui and webapi
1. Get the new docker files from github
1. Change the hostname in `docker-compose.yml`
1. Rebuild the images
1. Start docker containers


## Example

```bash
cd metasfresh-docker
docker-compose stop
tar cvzf /backup/backup.tar.gz .
docker-compose rm
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```
