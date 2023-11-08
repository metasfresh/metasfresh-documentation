---
title: How do I update metasfresh using Docker?
layout: default
tags:
  - Docker
  - Updating
lang: en
sequence: 
ref: how_do_I_update_metasfresh_using_docker
published: false
---

## Requirements
You will need a [running Docker-based metasfresh system](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Updating using Docker
1. Stop all Docker containers.
1. Create a backup of the current Docker workspace.
1. Delete the host's images of **app**, **webui** and **webapi**.
1. Get the new Docker files from GitHub.
1. Adjust the hostname in the `docker-compose.yml` file.
1. Rebuild the images.
1. Start Docker containers.

## Example

```bash
cd metasfresh-docker
docker-compose down
tar cvzf ../backup.tar.gz ./*
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```

If you've changed the `docker-compose.yml` file (e.g., different ports) and want to save it first, use:

```bash
cd metasfresh-docker
docker-compose down
tar cvzf ../backup.tar.gz ./*
cp -a ./docker-compose.yml ../
git pull
mv ../docker-compose.yml ./
docker-compose build
docker-compose up -d
```
