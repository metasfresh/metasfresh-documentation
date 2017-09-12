---
title: Wie führe ich metasfresh-docker mit SSL aus?
layout: default
tags:  
  - Docker
  - Einrichtung
lang: de
ref: how_do_i_setup_metasfresh_docker_with_ssl
---

## SSL-Zertifikate installieren
1. Wenn du eine Neuinstallation durchführst, benutze diese [Anleitung](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker), aber führe den Befehl `docker-compose build` noch nicht aus. Fahre stattdessen mit dem `Schritt 4` dieser Anleitung fort.
1. Stoppe alle laufenden metasfresh-docker Container.
1. Entferne Deine vorhandenen Docker-Images.
1. Generiere oder erwerbe Dein SSL-Zertifikat.
1. Platziere Deine Fullchain .pem-Datei und Deine Private Key .pem-Datei als `fullchain.pem` und `privkey.pem` in `./metasfresh-docker/webui/sources/certs/`.
1. Ändere Deine `./metasfresh-docker/docker-compose.yml`, sodass sie den neuen Port und die neue URL widerspiegelt (z.B. `https` statt `http`).
1. Lasse Deine metasfresh-docker Images neu bauen und starte die Container.
1. Deine SSL metasfresh-WebUI Oberfläche erreichst du über den Port `443/TCP` (Default).


## Beispiel

```bash
cd metasfresh-docker
docker-compose stop
docker-compose rm -f
cp /my/cert-storage/myfullchain.pem ./webui/sources/certs/fullchain.pem
cp /my/cert-storage/myprivatekey.pem ./webui/sources/certs/privkey.pem
vi ./docker-compose.yml #change to "https"
docker-compose build
docker-compose up -d
```
