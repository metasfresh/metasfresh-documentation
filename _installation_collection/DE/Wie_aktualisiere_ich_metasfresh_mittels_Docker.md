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
1. Ziehe Dir die neuen Dockerfiles und Configs von GitHub.
1. Passe den Hostnamen in der `docker-compose.yml`-Datei an.
1. Lasse die Images auf dem Host neu bauen.
1. Starte die Docker Container.

## Beispiel

```bash
cd metasfresh-docker
docker-compose down
tar cvzf ../backup.tar.gz ./*
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```

Wenn Du die `docker-compose.yml`-Datei angepasst hast (z.B. andere Ports) und sie erst sichern möchtest, dann verwende:

```bash
cd metasfresh-docker
docker-compose down
tar cvzf ../backup.tar.gz ./*
cp -a ./docker-compose.yml ../
git pull
mv ../docker-compose.yml ./
docker-compose build
docker-compose up -d
```
