---
title: Wie aktualisiere ich metasfresh mittels Docker?
layout: default
tags:
  - Systemadministration
  - Installation
  - Docker
lang: de
---

## Voraussetzung

[Laufendes metasfresh System auf Docker basis](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker)

## Schritte für Versionsupdate

1. docker-container stoppen
1. backup des gesamten docker-workspaces
1. Löschen der images app webui und webapi vom host
1. neue dockerfiles und configs von github ziehen
1. `docker-compose.yml` anpassen
1. images app webui und webapi auf dem host neu bauen lassen
1. docker-container starten


## Beispiel

```
docker-compose stop
tar cvzf ../backup.tar.gz ./<mydocker fir>/*
docker-compose rm
git pull
vi ./webui/sources/configs/docker-compose.yml
docker-compose build
docker-compose up -d
```
