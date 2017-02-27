---
title: Wie sichere ich die metasfresh Datenbank in Docker?
layout: default
tags:
  - Systemadministration
  - Installation
  - Docker
lang: de
---

## Backup der Databank

Führe diesen Befehen auf dem **docker host** aus um die Datenbank aus dem Container auf den Dockerhost zu exportieren:

`docker exec -u postgres metasfreshdocker_db_1 pg_dump -Fc -d metasfresh > ./metasfresh_backup.pgdump `

*Hinweis:* Du kannst den tatsächlichen Docker Namen mit `docker ps` herausfinden.
