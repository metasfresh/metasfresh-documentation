---
title: Wie aktualisiere ich metasfresh mittels Docker? (Installation Release Candidate)
layout: default
tags:
  - Docker
  - Update
lang: de
sequence: 10
ref: install_release_candidate_using_docker
---

## Voraussetzung
1. Du benötigst ein [laufendes metasfresh System auf Docker-Basis](Wie_installiere_ich_den_metasfresh_Stack_mit_Docker).
1. Stelle sicher, dass du die **PostgreSQL Datenbankversion 15** auf deiner metasfresh Instanz verwendest (seit <a href="https://metasfresh.com/2022/03/25/release-5-174/" title="Release 5.174 &#124; metasfresh.com" target="\_blank">Version 5.175</a>). [Folge dieser Anleitung, um deine Datenbank entsprechend zu aktualisieren](update_release_5.175_inkl_upgrade_zu_postgres_v15).

## Schritte für das Versions-Update
1. Stoppe alle Docker-Container.
    ```sh
    docker-compose stop
    ```
1. Erstelle ein Backup des gesamten aktuellen Docker-Workspace.
    ```sh
    tar cvzf ../backup.tar.gz ./<mydocker fir>/* --BACKUP
    docker-compose rm
    ```
1. Ändere im [metasfresh-docker Verzeichnis](https://github.com/metasfresh/metasfresh-docker) die Dockerfile-Versionen von [App](https://github.com/metasfresh/metasfresh-docker/blob/master/app/Dockerfile), [WebAPI](https://github.com/metasfresh/metasfresh-docker/blob/master/webapi/Dockerfile), [WebUI](https://github.com/metasfresh/metasfresh-docker/blob/master/webui/Dockerfile) und [DB](https://github.com/metasfresh/metasfresh-docker/blob/master/db/Dockerfile) (in den Unterverzeichnissen) auf die nächste Versionsnummer, z.B. [`5.175`](update_release_5.175_incl_upgrade_to_postgres_v15).
1. Lasse die Images auf dem Host neu aufbauen.
    ```sh
    docker-compose build --no-cache
    ```
1. Starte die Docker-Container.
    ```sh
    docker-compose up -d
    ```

### Alternative Schritte
Wenn du die neuen [Docker-Dateien direkt von GitHub](https://github.com/metasfresh/metasfresh-docker) ziehen möchtest, gehe bitte wie folgt vor:

1. Stoppe alle Docker-Container.
1. Erstelle ein Backup des gesamten aktuellen Docker-Workspace.
1. Lösche die Images **app**, **webui** und **webapi** des Hosts.
1. Ziehe dir die neuen Dockerfiles und Konfigurationen von GitHub.
1. Passe den Hostnamen in der `docker-compose.yml`-Datei an.
1. Lasse die Images auf dem Host neu aufbauen.
1. Starte die Docker-Container.

#### Befehle
```bash
cd metasfresh-docker
docker-compose down
tar cvzf ../backup.tar.gz ./*
git pull
vi ./docker-compose.yml
docker-compose build
docker-compose up -d
```

Wenn Du die `docker-compose.yml`-Datei angepasst hast (z.B. andere Ports) und sie zuerst sichern möchtest, dann verwende:

```bash
cd metasfresh-docker
docker-compose down
tar cvzf ../backup.tar.gz ./*
cp -a ./docker-compose.yml ../
git pull
mv ../docker-compose.yml ./
docker-compose build
docker-compose up -d
```
