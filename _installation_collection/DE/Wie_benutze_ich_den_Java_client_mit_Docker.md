---
title: Wie benutze ich den Java Client mit Docker?
layout: default
tags:
  - Docker
  - Einrichtung  
lang: de
ref: how_do_i_use_java_client_using_docker
---

## Voraussetzung

[metasfresh Installation mit Docker](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker).

## Verwende die docker-compose_javaclient.yml

Diese Ports braucht es zusätzlich, um den Java Client zu benutzen:

1. db: 5432 (Zugriff auf Postgres via JDBC)
1. app: 8282 (Web für den Java Client Download)
1. app: 61616 (activeMQ für Benachrichtigungen)

Sie sind in der **docker-compose_javaclient.yml**-Datei zum Dockerhost exponiert. Dementsprechend dürfen diese Ports auf dem Dockerhost nicht von anderen Programmen belegt sein, sonst fährt das Docker Image nicht hoch.

Mit `docker-compose --file` kannst Du bestimmen, welche Konfiguratonsdatei anstelle der Standarddatei namens **docker-compose.yml** benutzt werden soll (z.B. docker-compose_javaclient.yml).

## Beispiel

```bash
# ins docker Verzeichnis wechseln
cd metasfresh-docker

# prüfen, ob metasfresh-docker noch läuft
docker-compose ps

# falls metasfresh-docker noch läuft, herunterfahren und docker images entfernen
docker-compose stop

# metasfresh-docker mit Java Client Zugriff starten
docker-compose --file docker-compose_javaclient.yml up -d

# prüfen, ob alle docker images hochgefahren sind
docker-compose ps

# alle images müssen den Status "Up" vorweisen
```

## Zugriff

Stelle sicher, dass Dein PC den Dockerhost mit einem DNS-Namen (z.B. MYDOCKERHOST) auflösen kann. Beispielsweise indem Du Deiner lokalen Host-Datei den Servernamen mit der IP des Dockerhosts hinzufügst.

Zusätzlich muss dein PC die Datenbank direkt erreichen können. Füge hierfür Deiner lokalen Host-Datei den Eintrag `db` mit der IP-Adresse des Dockerhosts hinzu.

Nun lade den Java Client über http://MYDOCKERHOST:8282 herunter, installiere und nutze ihn wie gewohnt.

## Feedback
Bei Fragen oder Problemen kannst Du uns gerne in unserem offiziellen Forum um Unterstützung bitten: [forum.metasfresh.org](http://forum.metasfresh.org).
