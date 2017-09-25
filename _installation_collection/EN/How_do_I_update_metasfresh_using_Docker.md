---
title: How do I update metasfresh using Docker?
layout: default
tags:
  - Docker
  - Updating
lang: en
sequence: 10
ref: how_do_I_update_metasfresh_using_docker
---

## Requirements

You will need a [running docker based metasfresh system](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Updating using docker

1. Stop all docker containers.
1. Create a backup of the current docker workspace.
1. Delete the host's images of **app**, **webui** and **webapi**.
1. Get the new dockerfiles from github.
1. Change the hostname to `docker-compose.yml`.
1. Rebuild the images.
1. Start docker containers.


## Example

```bash
cd metasfresh-docker
docker-compose stop
tar cvzf /backup/backup.tar.gz ./*
docker-compose rm
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```
