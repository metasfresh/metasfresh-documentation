---
title: Wie aktualisiere ich metasfresh mittels Docker?
layout: default
tags:
  - Docker
  - Update
lang: de
sequence: 10
ref: how_do_I_update_metasfresh_using_docker
---

## Voraussetzung

Du benötigst ein [laufendes metasfresh System auf Docker-Basis](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker).

## Versionsupdate mittels Docker

1. Stoppe alle Docker Container.
1. Erstelle ein Backup des gesamten Docker Workspace.
1. Lösche die Images **app**, **webui** und **webapi** des Hosts.
1. Ziehe dir die neuen Dockerfiles und Configs von github.
1. Ändere den Hostnamen zu `docker-compose.yml` um.
1. Lasse die neuen Images auf dem Host bauen.
1. Starte die Docker Container.


## Beispiel

```bash
cd metasfresh-docker
docker-compose stop
tar cvzf ../backup.tar.gz ./<mydocker dir>/* --BACKUP
docker-compose rm
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```
