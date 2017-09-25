---
title: Wie sichere ich die metasfresh Datenbank in Docker?
layout: default
tags:
  - Docker
  - Wartung
lang: de
ref: how_do_I_backup_metasfresh_docker
---

## Backup der Datenbank

Führe diesen Befehl auf dem **Dockerhost** aus, um die Datenbank aus dem Docker Container auf den Dockerhost zu exportieren:

`docker exec -u postgres metasfreshdocker_db_1 pg_dump -Fc -d metasfresh > ./metasfresh_backup.pgdump `

>Hinweis: Du kannst den tatsächlichen Dockernamen mit `docker ps` herausfinden.


## Große Tabellen vom Export ausschließen

Mit diesem Parameter kannst Du große Tabellen mit Daten, die Du nicht übertragen möchtest, vom Export ausschließen:

`-T <schema>.<tabellenname>`

**Beispiel:**

`docker exec -u postgres mf_db_1 pg_dump -Fc -d metasfresh -T public.ad_issue > ./metasfresh_backup.pgdump`
