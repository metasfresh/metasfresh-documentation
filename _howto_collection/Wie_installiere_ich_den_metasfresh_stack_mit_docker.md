---
title: Wie installiere ich den metasfresh Stack mit Docker ?
layout: default
tags:
  - Systemadministration
  - Installation
lang: de
---

## Installation mit Docker

Diese Installation ist für die Demonstration des WebUI gedacht.

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
 
Nach erfolgreicher Installation auf die WebUI so zugreifen:

http://MYDOCKERHOST 

