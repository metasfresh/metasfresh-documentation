---
title: Wie installiere ich den Release Candidate mit Docker?
layout: default
tags:
  - Docker
  - Update
lang: de
sequence: 20
ref: install_release_candidate_using_docker
---

## Voraussetzung

Du benötigst ein [laufendes metasfresh System auf Docker-Basis](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker).

## Schritte für Versionsupdate

1. Stoppe alle Docker Container.
1. Erstelle ein Backup des gesamten Docker Workspace.
1. Setze die Dockerfiles in den Unterverzeichnissen auf die nächste Versionsnummer, z.B. /webapi/Dockerfile.
1. Lasse die neuen Images auf dem Host bauen.
1. Starte die Docker Container.


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
