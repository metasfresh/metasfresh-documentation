---
title: Update to release version 5.175 using Docker (incl. required PostgreSQL database upgrade)
layout: default
tags:
  - Docker
  - Updating
lang: en
sequence: 30
ref: update_release_5.175_incl_upgrade_to_postgres_v15
---

<!--
See also original issue comment: https://github.com/metasfresh/me03/issues/17356#issuecomment-1798485895
-->

## Overview
We upgraded our database since our [release 5.174](https://metasfresh.com/2022/03/25/release-5-174/) from PostgreSQL version 9.5 to version 15.

In order to [install the update package](https://docs.metasfresh.org/installation_collection/EN/install_Release_Candidate_using_docker.html) "Release 5.175" (and future release versions, too), your **database needs to be upgraded**.

The following guide will help you perform both the **database upgrade** using the relevant scripts provided in the [metasfresh-docker repository](https://github.com/metasfresh/metasfresh-docker), specifically in the "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)" directory (see also instructions below), and the **metasfresh update** to the release version 5.175.

The main script executing the database upgrade (`upgrade_postgres.sh`) comprises the following actions:
- It stops your metasfresh instance.
- It alters your existing database to remove any upgrade conflicts.
    - It handles database tables with OIDs, which aren't supported by newer Postgres versions.
- It upgrades your database to PostgreSQL version 15.
    - It creates a new database (`newdb`) in a new database volume.
    - The old database volume is preserved as a backup/fallback.
- After the upgrade the script
    - copies the configuration files to the new database.
    - renames both the original database volume (`db` => `olddb`) and the new volume (`newdb` => `db`).
    - vaccums and re-indexes your database.

## Prerequisites
1. Make sure that **enough storage space** is available to store a second database volume.
    - The volumes can be found at [`metasfresh-docker`](https://github.com/metasfresh/metasfresh-docker)`/volumes/db`.
    >**Note:** During the upgrade, your existing database will be duplicated (hence the required increased storage space) and preserved as a backup, so **all your data is safe**.

1. Replace the Postgres password with your own (follow steps below).

## Steps

### Add new files and scripts to your directory
1. Copy the folder "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)" from [metasfresh-docker](https://github.com/metasfresh/metasfresh-docker) containing all needed docker-compose files and scripts.
1. Paste the folder in the appropriate location in your directory in order to add all new files.
1. Navigate to the "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)" directory.
    ```sh
    cd ./extras
    ```

### Adjust the Postgres password
Adjust the Postgres password in the docker-compose files to match the Postgres password of your instance. To do so, please proceed as follows:
1. Replace the **POSTGRES_PASSWORD** with your own in the following files in the "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)" directory:
    - `docker-compose-before-upgrade-postgres.yml`
    - `docker-compose-upgrade-postgres.yml`
    - `docker-compose-after-upgrade-postgres.yml`

### Run the Upgrade
1. Start the upgrade script (from the "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)" directory).
    ```sh
    nohup bash ./upgrade_postgres.sh
    ```
1. Check log and wait for completion.
    ```sh
    tail -f nohup.out
    ```
1. Add a new parameter `shm_size: 256m` to your database in the [`docker-compose.yml`](https://github.com/metasfresh/metasfresh-docker/blob/master/docker-compose.yml) file.
1. Change the Dockerfile versions of [App](https://github.com/metasfresh/metasfresh-docker/blob/master/app/Dockerfile), [WebAPI](https://github.com/metasfresh/metasfresh-docker/blob/master/webapi/Dockerfile), [WebUI](https://github.com/metasfresh/metasfresh-docker/blob/master/webui/Dockerfile) and [DB](https://github.com/metasfresh/metasfresh-docker/blob/master/db/Dockerfile) to `5.175`.
1. Rebuild the images (from `metasfresh-docker` directory).
    ```sh
    # go back to metasfresh-docker
    cd ..
    docker-compose build --no-cache
    ```
    - ***Optional:*** You can also use the [`docker-compose_v3.yml`](https://github.com/metasfresh/metasfresh-docker/blob/master/docker-compose_v3.yml) and add your custom changes there.

| Special Note: |
| :--- |
| If the upgrade fails the **new database** volume (`newdb`) will be removed and your instance with your **original database** (backup) can be restarted and used as usual. **No data will be lost**.<br>After resolving the conflicts, the upgrade process can be started anew.<br>Only after a **successful upgrade**, both the original and the new databases are renamed and indexed accordingly. The original database is retained as a backup. |

### Start the instance after successfull upgrade
1. Start the upgraded instance with:
    ```sh
    docker-compose up -d
    ```

## Voilà! Enjoy working with your updated version of metasfresh 5.175 under PostgreSQL 15
If you have any questions, you can contact us via our [metasfresh Community Forum](https://forum.metasfresh.org/).
