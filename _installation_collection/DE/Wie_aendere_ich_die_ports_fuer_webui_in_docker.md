---
title: Wie ändere ich die WebUI Ports für metasfresh-docker?
layout: default
tags:  
  - Docker
  - Setup
lang: de
---

## Übersicht
In einigen Fällen bietet es sich an, die Standard-Ports, die metasfresh-docker nutzt zu ändern. Zum Beispiel, wenn bereits ein Dienst auf deinem Server läuft, der Port `80/TCP` oder `443/TCP` nutzt.

Wenn du die WebUI-Ports von metasfresh-docker ändern möchtest, kannst du dies auf folgende Weise einrichten:

## Ändern der Ports für WebUI in metasfresh-docker
1. Stoppe deinen metasfresh-docker Stack
1. Entferne die derzeitigen metasfresh-docker Abbilder
1. Ändere die Datei `docker-compose.yml` und ändere die Portnummern
1. Passe die Datei `config.js` entsprechend den Änderungen an
1. Erstelle die metasfresh-docker Abbilder mit deinen Änderungen neu
1. Starte die container für metasfresh-docker

## Beispiel

Auf deinem docker-host `myserver.com` läuft bereits ein Dienst auf dem Port `443/TCP` und du möchtest daher den Port unter dem deine Clients die WebUI erreichen auf den Port `8443/TCP` ändern.


```bash
cd metasfresh-docker
docker-compose stop
docker-compose rm -f
vi ./docker-compose.yml
##ändere '80:80' und '443:443' durch '8080:80' und '8443:443'
vi ./webui/sources/configs/config.js
#ändere die URLs von "https://myserver.com" zu "https://myserver:8443.com"
docker-compose build
docker-compose up -d
```
Nach 2-3 Minuten sollte dein System gestartet sein und du kannst die WebUI von nun an unter `https://myserver.com:8443` erreichen.
