---
title: How do I update metasfresh using Docker? (Install Release Candidate)
layout: default
tags:
  - Docker
  - Updating
lang: en
sequence: 10
ref: install_release_candidate_using_docker
---

## Requirements
1. You will need a [running Docker-based metasfresh system](How_do_I_setup_the_metasfresh_stack_using_Docker).
1. Make sure you are using **PostgreSQL database version 15** on your metasfresh instance (since release version 5.175). [Follow this guide to upgrade your database accordingly](update_release_5.175_incl_upgrade_to_postgres_v15).

## Steps for Version Update
1. Stop all Docker containers.
    ```sh
    docker-compose stop
    ```
1. Create a backup of the entire current Docker workspace.
    ```sh
    tar cvzf ../backup.tar.gz ./<mydocker fir>/* --BACKUP
    docker-compose rm
    ```
1. In the [metasfresh-docker directory](https://github.com/metasfresh/metasfresh-docker), change the Dockerfile versions of [App](https://github.com/metasfresh/metasfresh-docker/blob/master/app/Dockerfile), [WebAPI](https://github.com/metasfresh/metasfresh-docker/blob/master/webapi/Dockerfile), [WebUI](https://github.com/metasfresh/metasfresh-docker/blob/master/webui/Dockerfile) and [DB](https://github.com/metasfresh/metasfresh-docker/blob/master/db/Dockerfile) (in the subdirectories) to the next version number, e.g., [`5.175`](update_release_5.175_incl_upgrade_to_postgres_v15).
1. Rebuild the images.
    ```sh
    docker-compose build --no-cache
    ```
1. Start the Docker containers.
    ```sh
    docker-compose up -d
    ```

### Alternative Steps
If you want to pull the new [Docker files from GitHub](https://github.com/metasfresh/metasfresh-docker) directly, please proceed as follows:

1. Stop all Docker containers.
1. Create a backup of the current Docker workspace.
1. Delete the host's images of **app**, **webui** and **webapi**.
1. Get the new Docker files and configurations from GitHub.
1. Adjust the hostname in the `docker-compose.yml` file.
1. Rebuild the images.
1. Start the Docker containers.

#### Commands
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
