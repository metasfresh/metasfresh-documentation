---
title: Wie benutze ich den Java Client mit Docker ?
layout: default
tags:
  - Systemadministration
  - Installation
  - Docker
lang: de
---

## Voraussetzung

[Metasfresh Intstallation mit Docker](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker)

## anpassen der Docker-Compose.yml

Diese Ports braucht es zusätzlich für den Java Client:

1. db: 5432
1. app: 8282 and 61616

## Aktivieren der Änderungen

` sudo docker-compose up -d`

## Beispiel

```
db:
  build: db
  ports:
    - "5432:5432"
  restart: always
  volumes:
    - ./volumes/db/data:/var/lib/postgresql/data
    - ./volumes/db/log:/var/log/postgresql
    - /etc/localtime:/etc/localtime:ro
  environment:
    - METASFRESH_USERNAME=metasfresh
    - METASFRESH_PASSWORD=metasfresh
    - METASFRESH_DBNAME=metasfresh
    - DB_SYSPASS=System
app:
  build: app
  hostname: app
  links:
    - db:db
  ports:
    - "8282:8282"
    - "61616:61616"
  restart: always
  volumes:
    - ./volumes/app/log:/opt/metasfresh/log:rw
    - /etc/localtime:/etc/localtime:ro
  environment:
    - METASFRESH_HOME=/opt/metasfresh
webapi:
  build: webapi
  links:
    - app:app
    - db:db
  restart: always
  volumes:
    - ./volumes/webapi/log:/opt/metasfresh-webui-api/log:rw
    - /etc/localtime:/etc/localtime:ro
webui:
  build: webui
  links:
    - webapi:webapi
  ports:
    - "80:80"
  restart: always

```

## Zugriff

füge Deiner lokalen Host Datei den Eintrag "db" mit der IP des Dockerhosts hinzu

Nun installiere und nutze den Java Client wie üblich

## Feedback

Bei Fragen oder Problemen wende Dich an das metasfresh Forum: [forum.metasfresh.org](http://forum.metasfresh.org)
