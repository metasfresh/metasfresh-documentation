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
vi ./metasfresh-docker/webui/sources/configs/config.js
#Replace "MYDOCKERHOST" with FQDN of the Dockerhost
cd metasfresh-docker
docker-compose build
docker-compose up -d  #to run the stack in the background.
```

## Zugriff

Nach erfolgreicher Installation auf die WebUI so zugreifen:

http://MYDOCKERHOST
(oder bei lokaler Installation http://localhost)

## Hinweis

Sollte nicht bekannt sein, mit was MYDOCKERHOST:PORT in der config.js zu ersetzen ist, einfach diesen Punkt überspringen und nach dem 'docker-compose build' und 'docker-compose up -d' folgendes tun:

```
#docker network config anzeigen, um die ip Adresse des webapi docker containers heraus zu finden
docker network inspect bridge

#nun die webapi docker container id heraus finden
docker ps

#ein terminal des docker container öffnen
docker exec -it <container id> /bin/bash

#zum interessierenden Ordner wechseln
cd /opt/metasfresh-webui-frontend/dist

#backup der config.js or not, up to you
cp config.js config.jsBAK

#Inhalt der config.js ausgeben, genau diese Struktur muss im nächsten Schritt eingegeben werden
cat config.js

#kein vi verfügbar! cat nutzen, um die Datei zu überschreiben; speichern mit CTRL+d:
cat > config.js

#Datei mit eigener Konfiguration inkl. der oben erhaltenen IP Adresse schreiben und den Standard Port 8080 nutzen

#metasfresh webui im Browser öffnen (http://localhost sofern nichts anderes geändert wurde) und es sollte die Login Maske anstatt des leeren Inhalts erscheinen ohne Fehler in der Browser Konsole (evtl. muss zuvor der Browser cache geleert werden)
```

## Feedback

Wenn Du Fragen oder Probleme hast, frag einfach nach Support im offiziellen Forum: [forum.metasfresh.org](http://forum.metasfresh.org)
