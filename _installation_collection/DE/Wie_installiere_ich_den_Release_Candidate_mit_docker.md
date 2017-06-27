---
title: Wie installiere ich den Release Candidate mit Docker?
layout: default
tags:
  - Docker
  - Update
lang: de
sequence: 20
---

## Voraussetzung

[Laufendes metasfresh System auf Docker basis](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker)

## Schritte für Versionsupdate

1. Alle docker-container stoppen
1. Backup des gesamten docker-workspaces
1. Dockerfiles in den Unterverzeichnissen auf die nächste Versionsnummer setzen. z.B. /webapi/Dockerfile
1. Images auf dem host neu bauen lassen
1. docker-container starten


## Beispiel

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
