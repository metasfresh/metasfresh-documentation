---
title: How do I backup metasfresh database using docker?
layout: default
tags:  
  - Docker
  - Maintenance
lang: en
---

## Backup Database

Run this command on your **docker host** to export the Database from the docker container to your docker host:

`docker exec -u postgres metasfreshdocker_db_1 pg_dump -Fc -d metasfresh > ./metasfresh_backup.pgdump `

Note: you can check the actual docker-name using `docker ps`


## Exclude Big Tables in Export

Use this parameter to export big tables that contain data you do not want to persist:

`-T <schema>.<tablename>`

Example: 

`docker exec -u postgres mf_db_1 pg_dump -Fc -d metasfresh -T public.ad_issue  > ./metasfresh_backup.pgdump`
