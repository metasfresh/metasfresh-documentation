---
title: Wie versetze ich die Datenbank in den Auslieferungszustand?
layout: default
tags:  
  - Docker
  - Wartung
lang: de
---
## Übersicht

In manchen Fällen möchtest du die Datenbank auf ihren Ursprungszustand zurücksetzen. Die folgenden Schritte zeigen dir wie.

**VORSICHT**: ALLE DATEN WERDEN GELÖSCHT, wenn du sie nicht [gesichert](Wie_sichere_ich_metasfresh_docker) hast!

## Datenbank löschen / Reset

```
docker-compose stop
docker-compose rm
rm -r ./volumes/db
docker-compose up -d
```
