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
1. Ändere die Datei `docker-compose.yml` und ändere die Portnummern
1. Ändere die Datei `docker-compose.yml` ändere die URL
1. Führe ein docker-compose container-update für metasfresh-docker durch

## Beispiel

Auf deinem docker-host `myserver.com` läuft bereits ein Dienst auf dem Port `443/TCP` und du möchtest daher den Port unter dem deine Clients die WebUI erreichen auf den Port `8443/TCP` ändern.


```bash
cd metasfresh-docker
vi ./docker-compose.yml
##ändere '80:80' und '443:443' durch '8080:80' und '8443:443' im Eintrag 'ports:'
#ändere die URL von "https://myserver.com" zu "https://myserver.com:8443" im
#Eintrag 'WEBAPI_URL='
docker-compose up -d
```
Du kannst die WebUI von nun an unter `https://myserver.com:8443` erreichen.
