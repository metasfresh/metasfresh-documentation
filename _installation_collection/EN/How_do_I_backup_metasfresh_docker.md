---
title: How do I backup metasfresh database using docker?
layout: default
tags:  
  - Docker
  - Maintenance
lang: en
ref: how_do_I_backup_metasfresh_docker
---

## Backup Database

Run this command on your **docker host** to export the database from the docker container to your docker host:

`docker exec -u postgres metasfreshdocker_db_1 pg_dump -Fc -d metasfresh > ./metasfresh_backup.pgdump `

 >**Note:** You can check the actual docker name using `docker ps`.


## Exclude Big Tables in Export

Use this parameter to exclude big tables that contain data you do not want to transfer:

`-T <schema>.<tablename>`

**Example:**

`docker exec -u postgres mf_db_1 pg_dump -Fc -d metasfresh -T public.ad_issue > ./metasfresh_backup.pgdump`
