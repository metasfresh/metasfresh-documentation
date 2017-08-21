---
title: Wie aktualisiere ich metasfresh mittels Docker?
layout: default
tags:
  - Docker
  - Update
lang: de
sequence: 10
---

## Voraussetzung

[Laufendes metasfresh System auf Docker basis](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker)

## Schritte für Versionsupdate

1. Alle docker-container stoppen
1. Backup des gesamten docker-workspaces
1. Löschen der images app webui und webapi vom host
1. Neue dockerfiles und configs von github ziehen
1. `docker-compose.yml` anpassen
1. Images auf dem host neu bauen lassen
1. docker-container starten


## Beispiel

```bash
cd metasfresh-docker
docker-compose stop
tar cvzf ../backup.tar.gz ./<mydocker fir>/* --BACKUP
docker-compose rm
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```
