---
title: Wie ändere ich die WebUI Ports für metasfresh-docker?
layout: default
tags:  
  - Docker
  - Einrichtung
lang: de
ref: how_do_I_change_the_webui_ports_for_metasfresh_docker
---

## Übersicht
In einigen Fällen bietet es sich an, die Standard-Ports, die metasfresh-docker nutzt, zu ändern. Zum Beispiel, wenn bereits ein Dienst auf Deinem Server läuft, der Port `80/TCP` oder `443/TCP` nutzt.

Wenn du die WebUI-Ports von metasfresh-docker ändern möchtest, folge bitte diesen Schritten:

## Ändern der Ports für WebUI in metasfresh-docker
1. Ändere die Datei `docker-compose.yml` und vergib neue Portnummern (`ports:` im Bereich `webui`).
1. Ändere die Datei `docker-compose.yml` und vergib eine neue URL (`WEBAPI_URL=` im Bereich `webui`).
1. Aktualisiere Deinen `metasfresh docker`-compose container.

## Beispiel

Auf Deinem Dockerhost `myserver.com` läuft bereits ein Dienst auf dem Port `443/TCP` und Du möchtest daher den Port, unter dem deine Clients die WebUI erreichen, auf den Port `8443/TCP` ändern.


```bash
cd metasfresh-docker
vi ./docker-compose.yml
##ändere '80:80' und '443:443' durch '8080:80' und '8443:443' im Eintrag 'ports:'
#ändere die URL von "https://myserver.com" zu "https://myserver.com:8443" im
#Eintrag 'WEBAPI_URL='
#kommentiere auch den Eintrag 'environment:' aus
docker-compose up -d
```
Du kannst die WebUI von nun an unter der neuen URL `https://myserver.com:8443` erreichen.

### Beispiel Sektion webui in docker-compose.yml:
```yml
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
    - WEBAPI_URL=http://myserver.com:8443
```
