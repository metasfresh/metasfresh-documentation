---
title: Wie installiere ich den metasfresh Stack mit Docker ?
layout: default
tags:
  - Docker
  - Installation
lang: de
sequence: 10
---

## Übersicht
Diese Anleitung beschreibt die Installation der folgenden Dienste gemäß [dieser Übersicht](../_howto_collection/Wie_sieht_die_Architektur_aus):
* DB
* App
* API
* WebUI
* Search


## Hardware Voraussetzung

|     | Mindestens      | empfohlen
| :------------- | :------------- |
| RAM | 3 GB       | 4 GB
| CPU | 1 VCPU | 4 VCPU
|HDD | 10 GB | 20 GB

## Installation mit Docker

### Docker und Docker Compose installieren
1. [Docker installieren](https://docs.docker.com/engine/installation/linux/ubuntu/)
1. [Docker Compose installieren](https://docs.docker.com/compose/install/)


### metasfresh installieren

1. docker compose file klonen  
`git clone https://github.com/metasfresh/metasfresh-docker.git`
1. "MYDOCKERHOST:PORT" mit einem extern erreichbaren Hostnamen des ockerhost ersetzen <br>
> Hinweis: PORT ist nur nötig wenn nicht 80 verwendet wird.

  `vi ./metasfresh-docker/webui/sources/configs/config.js`
1. Docker Projekt bauen <br>

 `docker-compose build`

1. Docker Projekt starten <br>

 `docker-compose up -d`

 > Hinweis: Beim ersten Start kann es ein paar Minuten dauern, bis die Datenbank initialisiert und die Services verfügbar sind


## Zugriff

Nach erfolgreicher Installation auf die WebUI so zugreifen:

http://MYDOCKERHOST

oder

http://MYDOCKERHOST:PORT  (falls der Port nicht 80 ist )

## Visualisierung der docker container

Siehe [Post im Forum](https://forum.metasfresh.org/t/docker-gui-recommendation) (in englisch) über dieses Thema, welcher zwei weit verbreitete Tools empfiehlt.

## Feedback

Wenn Du Fragen oder Probleme hast, frag einfach nach Support im offiziellen Forum: [forum.metasfresh.org](http://forum.metasfresh.org)
