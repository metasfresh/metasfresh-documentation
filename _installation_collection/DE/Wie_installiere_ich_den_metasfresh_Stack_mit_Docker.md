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

1. Klone die Docker-Compose Datei.

   `git clone https://github.com/metasfresh/metasfresh-docker.git`

1. Kommentiere `http://beispiel.com:8080` aus und ersetze die Zeile durch einen vom Browser extern erreichbaren Hostnamen und Port.

   `vi ./metasfresh-docker/docker-compose.yml`
   ```
   ...
  #environment:
    #- WEBAPI_URL=http://beispiel.com:8080
   ...
   ```
   > Hinweis: PORT `:8080` ist nur nötig, wenn nicht 80 verwendet wird.

1. Baue das Docker Projekt. <br>

   `docker-compose build`

1. Starte das Docker Projekt. <br>

   `docker-compose up -d`

   >Hinweis: Beim ersten Start kann es ein paar Minuten dauern, bis die Datenbank initialisiert und die Services verfügbar sind.


## Zugriff

Nach erfolgreicher Installation kannst Du hierüber auf die WebUI zugreifen:

http://MYDOCKERHOST

oder

http://MYDOCKERHOST:PORT  (falls der Port nicht 80 ist)

## Visualisierung der Docker Container

In diesem [Forumpost](https://forum.metasfresh.org/t/docker-gui-recommendation) (in Englisch) über dieses Thema werden zwei weit verbreitete Tools empfohlen.

## Feedback

Bei Fragen oder Problemen kannst Du uns gerne in unserem offiziellen Forum um Unterstützung bitten: [forum.metasfresh.org](http://forum.metasfresh.org).
