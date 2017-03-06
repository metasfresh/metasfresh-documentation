---
title: Wie installiere ich den metasfresh Stack mit Docker ?
layout: default
tags:
  - Docker
lang: de
sequence: 10
---

## Installation mit Docker

*Systemvoraussetzung:* min. 3 GB RAM, min. 10 GB freien Festplattenspeicher


*Einsatzzweck:* Diese Installation ist zum Testen des neuen WebUI gedacht.

1. [Docker installieren](https://docs.docker.com/engine/installation/linux/ubuntu/)
1. [Docker Compose installieren](https://docs.docker.com/compose/install/)
1. metasfresh installieren:

```
git clone https://github.com/metasfresh/metasfresh-docker.git
vi ./metasfresh-docker/webui/sources/configs/config.js    #Replace "MYDOCKERHOST" with FQDN of the Dockerhost
cd metasfresh-docker
docker-compose build
docker-compose up -d  #to run the stack in the background.
```

## Zugriff

Nach erfolgreicher Installation auf die WebUI so zugreifen:

http://MYDOCKERHOST


## Feedback

Wenn Du Fragen oder Probleme hast, frag einfach nach Support im offiziellen Forum: [forum.metasfresh.org](http://forum.metasfresh.org)
