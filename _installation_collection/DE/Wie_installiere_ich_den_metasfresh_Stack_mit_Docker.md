---
title: Wie installiere ich den metasfresh Stack mittels Docker?
layout: default
tags:
  - Docker
  - Installation
lang: de
sequence: 10
ref: How_do_I_setup_the_metasfresh_stack_using_Docker
---

## Übersicht
Diese Anleitung beschreibt die Installation der folgenden Dienste gemäß [dieser Übersicht](../../howto_collection/Wie_sieht_die_Architektur_aus):
* DB
* App
* API
* WebUI
* Search


## Hardware Voraussetzung

|     | Mindestens      | Empfohlen
| :------------- | :------------- |
| RAM | 3 GB       | 4 GB
| CPU | 1 VCPU | 4 VCPU
| HDD | 10 GB | 20 GB


## Installation mit Docker

### Docker und Docker Compose installieren
1. [Docker installieren](https://docs.docker.com/engine/installation/linux/ubuntu/).
1. [Docker Compose installieren](https://docs.docker.com/compose/install/).


### metasfresh installieren

1. Klone die Docker-Compose Datei und wechsel in das neu erstelle Directory

   ```
   git clone https://github.com/metasfresh/metasfresh-docker.git
   cd metasfresh-docker/
   ```

1. Kommentiere `http://beispiel.com:8080` aus und ersetze die Zeile durch einen vom Browser extern erreichbaren Hostnamen und Port.

   `vi ./docker-compose.yml`
   ```
   ...
   #environment:
    #- WEBAPI_URL=http://beispiel.com:8080
   ...
   ```
   >**Hinweis:** PORT `:8080` ist nur nötig, wenn ein anderer als port 80 verwendet werden soll. Siehe auch [Wie ändere ich die WebUI Ports für metasfresh-docker?](Wie_aendere_ich_die_ports_fuer_webui_in_docker.html)

   >WICHTIG: solltest du eine RPM basierende Distribution einsetzen und/oder du auf deinem Host die Datei `/etc/timezone` nicht vorfinden, kommentiere die Zeile `- /etc/timezone:/etc/timezone:ro` aus deiner `docker-compose.yml` aus!

1. Baue das Docker Projekt. <br>

   `docker-compose build`

1. Starte das Docker Projekt. <br>

   `docker-compose up -d`

   >**Hinweis:** Beim ersten Start kann es ein paar Minuten dauern, bis die Datenbank initialisiert und die Services verfügbar sind.


## Zugriff

Nach erfolgreicher Installation kannst Du hierüber auf die WebUI zugreifen:

http://MYDOCKERHOST

oder

http://MYDOCKERHOST:PORT  (falls der Port nicht 80 ist)

## Beispiel docker-compose.yml
```yml
db:
  build: db
  restart: always
  volumes:
    - ./volumes/db/data:/var/lib/postgresql/data
    - ./volumes/db/log:/var/log/postgresql
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
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
    - search:search
  expose:
    - "8282"
    - "61616"
  restart: always
  volumes:
    - ./volumes/app/log:/opt/metasfresh/log:rw
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
  environment:
    - METASFRESH_HOME=/opt/metasfresh
webapi:
  build: webapi
  links:
    - app:app
    - db:db
    - search:search
  #for accessing the api directly (eg. for debugging or connecting your
  #app to the metasfresh api) uncomment following lines:
  #ports:
    #- "8080:8080"
  restart: always
  volumes:
    - ./volumes/webapi/log:/opt/metasfresh-webui-api/log:rw
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
webui:
  build: webui
  links:
    - webapi:webapi
  ports:
    - "80:80"
    - "443:443"
  restart: always
  volumes:
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
  #uncomment and set to URL where metasfresh will be available from browsers
  environment:
    - WEBAPI_URL=http://myserver.com
    search:
      build: search
      ulimits:
        memlock:
          soft: -1
          hard: -1
        nofile:
          soft: 65536
          hard: 65536
      cap_add:
        - IPC_LOCK
      volumes:
        - ./volumes/search/data:/usr/share/elasticsearch/data
        - /etc/localtime:/etc/localtime:ro
        - /etc/timezone:/etc/timezone:ro
      environment:
        - "ES_JAVA_OPTS=-Xms128M -Xmx256m"
      restart: always
```

## Visualisierung der Docker Container

In diesem [Forumpost](https://forum.metasfresh.org/t/docker-gui-recommendation) (in Englisch) über dieses Thema werden zwei weit verbreitete Tools empfohlen.

## Feedback

Bei Fragen oder Problemen kannst Du uns gerne in unserem offiziellen Forum um Unterstützung bitten: [forum.metasfresh.org](http://forum.metasfresh.org).
