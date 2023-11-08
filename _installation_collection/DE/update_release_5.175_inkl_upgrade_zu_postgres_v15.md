---
title: Update auf Version 5.175 mit Docker (mit erforderlichem Upgrade der PostgreSQL-Datenbank)
layout: default
tags:
  - Docker
  - Update
lang: de
sequence: 20
ref: update_release_5.175_incl_upgrade_to_postgres_v15
---

<!--
See also original issue comment: https://github.com/metasfresh/me03/issues/17356#issuecomment-1798485895
-->

## Überblick
Wir haben unsere Datenbank seit unserem [Release 5.174](https://metasfresh.com/2022/03/25/release-5-174/) von PostgreSQL Version 9.5 auf die Version 15 aktualisiert.

Um das Update-Paket "Release 5.175" (und auch künftige Release-Versionen) zu [installieren](Wie_installiere_ich_den_Release_Candidate_mit_docker), muss zunächst ein **Upgrade deiner Datenbank** durchgeführt werden.

Die folgende Anleitung hilft dir sowohl bei der Durchführung des **Datenbank-Upgrades** unter Verwendung der entsprechenden Skripte, die im [metasfresh-docker Repository](https://github.com/metasfresh/metasfresh-docker), speziell im Verzeichnis "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)", zur Verfügung gestellt werden (siehe auch Schritte unten), als auch beim **Update von metasfresh** auf die Release-Version 5.175.

Das Hauptskript, das das Datenbank-Upgrade ausführt (`upgrade_postgres.sh`), umfasst die folgenden Aktionen:
- Es stoppt deine metasfresh-Instanz.
- Es modifiziert deine bestehende Datenbank, um eventuelle Upgrade-Konflikte zu beseitigen.
    - Es verarbeitet Datenbanktabellen mit OIDs, die von neueren Postgres-Versionen nicht unterstützt werden.
- Es aktualisiert deine Datenbank auf PostgreSQL Version 15.
    - Es wird eine neue Datenbank (`newdb`) in einem neuen Datenbank-Volume erstellt.
    - Das alte Datenbank-Volume bleibt als Backup/Fallback erhalten.
- Nach dem Upgrade
    - werden die Konfigurationsdateien in die neue Datenbank kopiert.
    - werden sowohl das ursprüngliche Datenbank-Volume (`db` => `olddb`) als auch das neue Volume (`newdb` => `db`) umbenannt.
    - wird deine Datenbank bereinigt und neu indiziert.

## Voraussetzungen
1. Stelle sicher, dass **genügend Speicherplatz** vorhanden ist, um ein zweites Datenbank-Volume zu speichern.
    - Die Volumes befinden sich unter [`metasfresh-docker`](https://github.com/metasfresh/metasfresh-docker)`/volumes/db`.
    >**Hinweis:** Während des Upgrades wird deine bestehende Datenbank dupliziert (daher der erhöhte Speicherplatzbedarf) und als Backup aufbewahrt, so dass **alle deine Daten sicher sind**.

1. Ersetzte das Postgres-Passwort durch dein eigenes (siehe Schritte unten).

## Schritte

### Neue Dateien und Skripte zum Verzeichnis hinzufügen
1. Kopiere den Ordner "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)" aus [metasfresh-docker](https://github.com/metasfresh/metasfresh-docker), der alle benötigten docker-compose Dateien und Skripte enthält.
1. Füge den Ordner an der entsprechenden Stelle in Deinem Verzeichnis ein, um alle neuen Dateien hinzuzufügen.
1. Wechsle in das Verzeichnis "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)".
    ```sh
    cd ./extras
    ```

### Postgres-Passwort anpassen
Passe das Postgres-Passwort in den docker-compose-Dateien so an, dass es mit dem Postgres-Passwort deiner Instanz übereinstimmt. Gehe hierzu wie folgt vor:

1. Ersetze das **POSTGRES_PASSWORD** durch dein eigenes in den folgenden Dateien im Verzeichnis "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)":
    - `docker-compose-before-upgrade-postgres.yml`
    - `docker-compose-upgrade-postgres.yml`
    - `docker-compose-after-upgrade-postgres.yml`

### Upgrade durchführen
1. Führe das Upgrade-Skript aus (aus dem Verzeichnis "[extras](https://github.com/metasfresh/metasfresh-docker/tree/master/extras)").
    ```sh
    nohup bash ./upgrade_postgres.sh
    ```
1. Kontrolliere das Log und warte auf die Fertigstellung.
    ```sh
    tail -f nohup.out
    ```
1. Füge einen neuen Parameter `shm_size: 256m` zu deiner Datenbank in der [`docker-compose.yml`](https://github.com/metasfresh/metasfresh-docker/blob/master/docker-compose.yml)-Datei hinzu.
1. Ändere die Dockerfile-Versionen von [App](https://github.com/metasfresh/metasfresh-docker/blob/master/app/Dockerfile), [WebAPI](https://github.com/metasfresh/metasfresh-docker/blob/master/webapi/Dockerfile), [WebUI](https://github.com/metasfresh/metasfresh-docker/blob/master/webui/Dockerfile) und [DB](https://github.com/metasfresh/metasfresh-docker/blob/master/db/Dockerfile) auf `5.175`.
1. Lasse die Images auf dem Host neu aufbauen (aus dem Verzeichnis `metasfresh-docker`).
    ```sh
    # go back to metasfresh-docker
    cd ..
    docker-compose build --no-cache
    ```
    - ***Optional:*** Du kannst auch die [`docker-compose_v3.yml`](https://github.com/metasfresh/metasfresh-docker/blob/master/docker-compose_v3.yml)-Datei verwenden und dort deine eigenen Änderungen hinzufügen.

| Besonderer Hinweis: |
| :--- |
| Wenn das Upgrade fehlschlägt, wird das **neue Datenbank**-Volume (`newdb`) entfernt und deine Instanz mit deiner **ursprünglichen Datenbank** (Backup) kann neu gestartet und wie gewohnt verwendet werden. **Es gehen keine Daten verloren**.<br>Nach Behebung der Konflikte kann der Upgrade-Prozess erneut gestartet werden.<br>Erst nach einem **erfolgreichen Upgrade** werden sowohl die ursprüngliche als auch die neue Datenbank entsprechend umbenannt und indiziert. Die ursprüngliche Datenbank bleibt als Backup erhalten. |

### Instanz nach erfolgreichem Upgrade starten
1. Starte die aktualisierte Instanz mit:
    ```sh
    docker-compose up -d
    ```

## Voilà! Viel Spaß bei der Arbeit mit der aktualisierten Version von metasfresh 5.175 unter PostgreSQL 15
Bei Fragen kannst du uns über unser [metasfresh Community Forum](https://forum.metasfresh.org/) kontaktieren.
