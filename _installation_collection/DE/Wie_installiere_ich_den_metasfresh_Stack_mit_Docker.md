---
title: Wie installiere ich den metasfresh-Stack mittels Docker?
layout: default
tags:
  - Docker
  - Installation
lang: de
sequence: 10
ref: How_do_I_setup_the_metasfresh_stack_using_Docker
---

## Überblick
Diese Anleitung beschreibt die Installation der folgenden Dienste gemäß [dieser Übersicht](../../howto_collection/Wie_sieht_die_Architektur_aus):
- DB
- App
- API
- WebUI
- Search

## Hardware-Anforderungen

|  | Mindestens | Empfohlen |
| :--- | :--- | :--- |
| RAM | 4 GB | 8 GB (steigt mit Größe der Datenbank) |
| CPU | 1 VCPU | 4 VCPU |
| HDD | 10 GB | 20 GB |
| OS Empfehlung | Linux Server | Ubuntu 22.04 |

## Installation mit Docker

### Docker und Docker Compose installieren
Installiere Docker über das offizielle Docker Repository und anschließend das Docker-Compose-Plugin.
1. <a href="https://docs.docker.com/engine/installation/linux/ubuntu/" title="Install Docker Engine on Ubuntu | docs.docker.com" target="\_blank">Docker installieren</a>.
1. <a href="https://docs.docker.com/compose/install/linux/#install-using-the-repository" title="Install using the repository | docs.docker.com" target="\_blank">Docker-Compose-Plugin installieren</a>.

### metasfresh installieren
1. Klone den metasfresh-docker Ordner und wechsle in das neu erstellte Verzeichnis.

   ```
   git clone https://github.com/metasfresh/metasfresh-docker.git
   cd metasfresh-docker/
   ```

1. Im Verzeichnis befinden sich `docker-compose.yml` und `docker-compose_v3.yml`. Ersetze die `docker-compose.yml` mit der `docker-compose_v3.yml`, z.B. durch `cp docker-compose_v3.yml docker-compose.yml`

1. Öffne als nächstes mit einem Editor deiner Wahl (z.B. nano, vi) die `docker-compose.yml` und passe diese so an, wie du es benötigst, oder beispielhaft wie es in den folgenden Punkten beschrieben wird.
  >**Hinweis:** Ein Beispiel dafür findest Du [am Ende dieser Anleitung](#beispiel-docker-compose-yml).

1. Lege fest, unter welcher URL das Webinterface aufgerufen werden soll. Die entsprechenden DNS Einträge müssen entweder real existieren, oder es müssen auf den beteiligten Systemen entspreche Hosts Einträge gesetzt werden. Für unser Beispiel benutzen wir: `http://example.com`.

1. Kommentiere `environment` und `http://example.com:8080` ein und ersetzte `example.com:8080` durch die URL und den Port, unter denen der Server vom Browser aus erreichbar sein soll. In unserem Beispiel setzen wir den Wert also auf `WEBAPI_URL=http://example.com:8080`. 

  >**Wichtig:** Der hier gesetzte `WEBAPI_URL` Wert **darf** keinen Slash am Ende enthalten.

Weiterhin müssen wir den port unter `ports` ` "80:80"`entsprechend anpassen auf `8080:80`, damit der oben gesetzt Port benutzt wird. Den Port 443 kommentieren wir aus.

Die Datei sollte dann wie folgt aussehen:

```
   ...
  webui:
    build: webui
    links:
      - webapi:webapi
    ports:
      - "8080:80"
    #  - "443:443"
    restart: always
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    #uncomment and set to URL where metasfresh will be available from browsers
    environment:
      - WEBAPI_URL=http://example.com:8080
   ...
   ```

   >**Hinweis:** Ein anderer Port, wie z.B. `:8080`, wird dann benötigt, wenn ein anderer als Port 80 verwendet werden soll. In der Regel würde man noch einen Proxy davorschalten, für den Port 80/443 dann ja bereits reserviert ist. <br> Siehe hierzu auch: [Wie ändere ich die WebUI-Ports für metasfresh-Docker?](Wie_aendere_ich_die_ports_fuer_webui_in_docker)

   | **WICHTIG:** |
   | :--- |
   | Solltest Du eine RPM-basierende Distribution einsetzen und/oder auf Deinem Host die Datei `/etc/timezone` nicht vorfinden, lösche oder kommentiere die Zeile `- /etc/timezone:/etc/timezone:ro` aus deiner `docker-compose.yml` aus! |

1. Erstelle die Docker Container.

   `docker compose build`

1. Mit folgenden Befehlen kann Docker gestartet oder ggf. wieder gestoppt werden.

   >**Hinweis:** Beim ersten Start wird es sehr wahrscheinlich ein paar Minuten dauern, bis die Datenbank initialisiert ist und die Services verfügbar sind. Bei der erstmaligen Initialisierung können es durchaus 5-10 Minuten sein. Darauf folgende Starts sollten deutlich weniger Zeit benötigen.

   ```
   #starten#
   docker compose up -d

   #stoppen#
   docker compose down
   ```


## Zugriff
Nach erfolgreicher Installation kannst Du hierüber auf das WebUI zugreifen:

- `http://example.com:8080`

oder

- `http://example.com:PORT` (falls ein anderer Port gesetzt wurde).

## Weitere Konfigurationswerte in der DB setzen
Nun müssen allerdings noch folgende Konfigurationswerte gesetzt werden:

```
docker exec -u postgres metasfresh-docker-db-1 psql -d metasfresh -c "UPDATE AD_SysConfig SET Value='http://example.com:8080' WHERE Name='webui.frontend.url'"
```

```
docker exec -u postgres metasfresh-docker-db-1 psql -d metasfresh -c "UPDATE AD_SysConfig SET Value='http://app:8282/adempiereJasper/ReportServlet' WHERE Name ilike '%de.metas.adempiere.report.jasper.JRServerServlet%';"
```

```
docker exec -u postgres metasfresh-docker-db-1 psql -d metasfresh -c "UPDATE AD_SysConfig SET Value='http://app:8282/adempiereJasper/BarcodeServlet' WHERE Name ilike '%de.metas.adempiere.report.barcode.BarcodeServlet%';"
```

Daraufhin muss die Instanz noch ein letztes mal neugestartet werden: `docker compose down && docker compose up -d`


## Nächste Schritte
- [Wie führe ich metasfresh-docker mit SSL aus?](Wie_richte_ich_ssl_in_metasfresh_docker_ein)

## <a name="beispiel-docker-compose-yml">Beispiel docker-compose.yml</a>
```yml
version: '3'
services:
  db:
    build: db
    shm_size: 256m
    restart: always
    volumes:
      - ./volumes/db/data:/var/lib/postgresql/data
      - ./volumes/db/log:/var/log/postgresql
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    environment:
      - METASFRESH_USERNAME=metasfresh
      - METASFRESH_PASSWORD=metasfresh
      - METASFRESH_DBNAME=metasfresh
      - DB_SYSPASS=System
      - POSTGRES_PASSWORD=ip2LmNzXX8p8iXg9lZTWEJ9524kQDbXFudB7LR03T-xK9fLweX3TLMkA2AYcEiaS
    logging:
      options:
        max-size: '30m'
        max-file: '3'
      driver: json-file
  app:
    build: app
    hostname: app
    links:
      - db:db
      - rabbitmq:rabbitmq
      - search:search
    expose:
      - "8282"
      - "8788"
    restart: always
    volumes:
      - ./volumes/app/log:/opt/metasfresh/log:rw
      - ./volumes/app/heapdump:/opt/metasfresh/heapdump:rw
      - ./volumes/app/external-lib:/opt/metasfresh/external-lib:rw
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    environment:
      - METASFRESH_HOME=/opt/metasfresh
    logging:
      options:
        max-size: '30m'
        max-file: '3'
      driver: json-file
  webapi:
    build: webapi
    links:
      - app:app
      - db:db
      - rabbitmq:rabbitmq
      - search:search
    expose:
      - "8789"
  # to access the webui-api directly
  # (eg. for debugging or connecting your app to the metasfresh api)
  # uncomment following port:
    #ports:
     #- "8080:8080"
    restart: always
    volumes:
      - ./volumes/webapi/log:/opt/metasfresh-webui-api/log:rw
      - ./volumes/webapi/heapdump:/opt/metasfresh-webui-api/heapdump:rw
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    logging:
      options:
        max-size: '30m'
        max-file: '3'
      driver: json-file
  webui:
    build: webui
    links:
      - webapi:webapi
    ports:
      - "8080:80"
      # - "443:443"
    restart: always
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    #uncomment and set to URL where metasfresh will be available from browsers
    #environment:
      #- WEBAPI_URL=http://example.com:8080
    logging:
      options:
        max-size: '30m'
        max-file: '3'
      driver: json-file
  rabbitmq:
    build: rabbitmq
    expose:
      - "5672"
    restart: always
    volumes:
      - ./volumes/rabbitmq/log:/var/log/rabbitmq/log
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    environment:
      RABBITMQ_DEFAULT_USER: "metasfresh"
      RABBITMQ_DEFAULT_PASS: "metasfresh"
      RABBITMQ_DEFAULT_VHOST: "/"
    logging:
      options:
        max-size: '30m'
        max-file: '3'
      driver: json-file
  search:
    build: search
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    cap_add:
      - IPC_LOCK
  # to access the search api directly
  # (e.g. if you did docker-compose up search to have the deachboard with your locally running metasfresh services)
  # uncomment following ports:
  # ports:
  #   - "9200:9200"
  #   - "9300:9300"
    volumes:
      - ./volumes/search/data:/usr/share/elasticsearch/data
      - /etc/localtime:/etc/localtime:ro
      - /etc/timezone:/etc/timezone:ro
    environment:
      - "ES_JAVA_OPTS=-Xms128M -Xmx256m"
    restart: always
    logging:
      options:
        max-size: '30m'
        max-file: '3'
      driver: json-file
```

## Sichtbar machen der Reports zwecks Bearbeitung
Möchte man die Reports, welche im metasfresh App-Docker-Image enthalten sind, editierbar machen, so muss man diese im `docker-compose.yml` zuerst als Volume nach außen legen.

```
# Neues Volume reports hinzugefügt, um die Jasper
# Reports Dateien anpassen zu können
  volumes:
    - ./volumes/app/reports:/opt/metasfresh/reports:rw
    - ./volumes/app/log:/opt/metasfresh/log:rw
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
```

| **ACHTUNG:** |
| :--- |
| Hier liegen natürlich die kompilierten Jasper-Dateien. Man muss sich also zum Ändern der Reports zuerst das Repository mit den Quellen der Reports ziehen und dann mit Jasper Reports kompilieren. |

## Visualisierung der Docker-Container
In diesem <a href="https://forum.metasfresh.org/t/docker-gui-recommendation" title="Docker GUI recommendation | forum.metasfresh.org" target="\_blank">Forumsbeitrag</a> (*auf Englisch*) über dieses Thema werden zwei weit verbreitete Tools empfohlen.

## Feedback
Bei Fragen oder Problemen kannst Du uns gerne in unserem offiziellen Forum um Unterstützung bitten:
- <a href="http://forum.metasfresh.org" title="metasfresh Community Forum | forum.metasfresh.org" target="\_blank">forum.metasfresh.org</a>.
