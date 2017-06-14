---
title: Wie benutze ich den Java Client mit Docker ?
layout: default
tags:
  - Docker
  - Setup  
lang: de
---

## Voraussetzung

[Metasfresh Intstallation mit Docker](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker)

## Nutzen der docker-compose_javaclient.yml

Diese Ports braucht es zusätzlich für den Java Client:

1. db: 5432
1. app: 8282 and 61616

Sie sind in der docker-compose_javaclient.yml zum Docker Host exponiert.
Dementsprechend dürfen diese Ports auf dem Docker Host nicht von anderen Programmen belegt sein, sonst fährt das docker image nicht hoch.

Via `docker-compose --file` kann mitgeteilt werden, dass ein bestimmtes Konfigurationsfile (z.B. docker-compose_javaclient.yml) benutzt werden soll, statt dem Standardfile namens docker-compose.yml

## Beispiel

```bash
# ins docker Verzeichnis wechseln
cd metasfresh-docker

# prüfen, ob metasfresh-docker noch läuft
docker-compose ps

# falls metasfresh-docker noch läuft, herunterfahren und docker images entfernen
docker-compose down

# metasfresh-docker mit Java Client Zugriff starten
docker-compose --file docker-compose_javaclient.yml up -d

# prüfen, ob alle docker images hochgefahren sind
docker-compose ps
# alle images müssen den Status "Up" vorweisen
```

## Zugriff

Stelle sicher, dass Dein PC den Dockerhost mit einem DNS-Namen (z.b. MYDOCKERHOST) auflösen kann. Z.B. indem Du Deiner lokalen Host Datei den Servernamen mit der IP des Dockerhosts hinzufügst.

Zusätzlich muss dein PC die Datenbank direkt erreichen können. Füge hierfür Deiner lokalen Host Datei den Eintrag `db` mit der IP des Dockerhosts hinzu.

Nun lade den Java Client via
http://MYDOCKERHOST:8282
herunter und installiere und nutze ihn wie üblich.

## Feedback

Bei Fragen oder Problemen wende Dich an das metasfresh Forum: [forum.metasfresh.org](http://forum.metasfresh.org)
