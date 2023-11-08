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
You will need a [running Docker-based metasfresh system](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Steps for version update

1. Stop all docker containers.
    ```sh
    docker-compose stop
    ```
1. Create a backup of the entire docker workspace.
    ```sh
    tar cvzf ../backup.tar.gz ./<mydocker fir>/* --BACKUP
    docker-compose rm
    ```
1. Change the Dockerfile versions of [App](https://github.com/metasfresh/metasfresh-docker/blob/master/app/Dockerfile), [WebAPI](https://github.com/metasfresh/metasfresh-docker/blob/master/webapi/Dockerfile), [WebUI](https://github.com/metasfresh/metasfresh-docker/blob/master/webui/Dockerfile) and [DB](https://github.com/metasfresh/metasfresh-docker/blob/master/db/Dockerfile) (in the subdirectories) to the next version number, e.g. [`5.175`](update_release_5.175_incl_upgrade_to_postgres_v15).
1. Rebuild the images.
    ```sh
    docker-compose build --no-cache
    ```
1. Start the docker containers.
    ```sh
    docker-compose up -d
    ```
