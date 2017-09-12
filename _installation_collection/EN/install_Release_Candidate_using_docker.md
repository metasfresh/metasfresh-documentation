---
title: How do I install the Release Candidate using Docker?
layout: default
tags:
  - Docker
  - Updating
lang: en
sequence: 20
ref: install_release_candidate_using_docker
---

## Requirements

You will need a [running docker based metasfresh system](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Steps for version update

1. Stop all docker containers.
1. Create a backup of the entire docker workspace.
1. Set the dockerfiles in the subdirectories to the next version number, e.g. /webapi/Dockerfile.
1. Rebuild the images.
1. Start docker containers.


## Example

```bash
cd metasfresh-docker
docker-compose stop
tar cvzf ../backup.tar.gz ./<mydocker fir>/* --BACKUP
docker-compose rm
vi webapi/Dockerfile
vi db/Dockerfile
vi app/Dockerfile
vi webui/Dockerfile
docker-compose build
docker-compose up -d
```
