---
title: Welche Kommandozeilenparameter gibt es für den metasfresh Client?
layout: default

tags:
  - Systemadministration

lang: de
---

## RUN_metasfresh.bat

Wenn der Client über das Skript "RUN_metasfresh.bat" gestartet wird kannst Du über das Startskript folgende Parameter mitgeben:



**Sprache des Clients einstellen**

Belegt das Feld bei der Anmeldung vor. Mögliche Werte findest Du so heraus: [SQL Abfrage](List_Languages)

```
 -Dorg.adempiere.client.lang=\"de_CH\"
```

**Versionsprüfung ausschalten**

Wenn dieser wert auf "false" gesetzt wird überprüft der client nicht ob er zu der Version des Servers passt.

```
 -Dde.metas.clientcheck.Enabled=false
```