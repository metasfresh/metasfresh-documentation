---
title: Wie setze ich mittels Docker die Datenbank in den Ursprungszustand zurück?
layout: default
tags:  
  - Docker
  - Wartung
lang: de
ref: how_do_I_reset_database_using_docker
---
## Übersicht

In manchen Fällen hilft es, die Datenbank auf ihren Ursprungszustand zurückzusetzen, wenn Du in deiner Testumgebung nicht mehr weiterkommst. Hier siehst Du, wie dies geht.

>**VORSICHT**: ALLE DATEN WERDEN GELÖSCHT, wenn Du sie nicht vorher [gesichert](Wie_sichere_ich_metasfresh_docker) hast!

## Datenbank löschen / zurücksetzen

```
docker-compose stop
docker-compose rm
rm -r ./volumes/db
docker-compose up -d
```
