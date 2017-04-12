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

```bash
git clone https://github.com/metasfresh/metasfresh-docker.git

#"MYDOCKERHOST:PORT" mit einem extern erreichbaren Hostnamen
#des Dockerhost ersetzen, welcher Zugriff auf die WebUI bietet
#z.B.: 'http://myhost.provider.com/rest/api'
#(ggf. PORT verzeichnen, falls die WebUI nicht den Standard Port 80 verwendet)  
vi ./metasfresh-docker/webui/sources/configs/config.js

cd metasfresh-docker
docker-compose build

#'-d' um den metasfrash stack im Hintergrund laufen zu lassen. Beim ersten Start kann es ein paar Minuten dauern, bis die Datenbank initialisiert und die Services verfügbar sind
docker-compose up -d
```

## Zugriff

Nach erfolgreicher Installation auf die WebUI so zugreifen:

http://MYDOCKERHOST:PORT oder

http://MYDOCKERHOST
(falls der Standard Port 80 mit der WebUI benutzt wird, was oft der Fall ist)

## Feedback

Wenn Du Fragen oder Probleme hast, frag einfach nach Support im offiziellen Forum: [forum.metasfresh.org](http://forum.metasfresh.org)
