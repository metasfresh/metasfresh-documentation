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
You will need a [running Docker-based metasfresh system](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Updating using Docker
1. Stop all Docker containers.
1. Create a backup of the current Docker workspace.
1. Delete the host's images of **app**, **webui** and **webapi**.
1. Get the new Docker files from GitHub.
1. Change the hostname in the `docker-compose.yml` file.
1. Rebuild the images.
1. Start Docker containers.

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
