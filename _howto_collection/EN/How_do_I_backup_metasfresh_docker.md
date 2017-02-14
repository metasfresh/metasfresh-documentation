---
title: How do I backup metasfresh Database?
layout: default
tags:
  - System Administration
lang: en
---

## Running Docker

Run this command on your **Docker host** to export the db from the docker container on to your Docker Host drive:

`docker exec -u postgres metasfreshdocker_db_1 pg_dump -Fc -d metasfresh > ./metasfresh_backup.pgdump `