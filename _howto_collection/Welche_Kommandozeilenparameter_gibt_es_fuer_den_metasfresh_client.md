---
title: Welche Kommandozeilenparameter gibt es für den metasfresh Client?
layout: default

tags:
  - Systemadministration

lang: de
---

## RUN_metasfresh.exe

Zur Zeit unterstützt die EXE keine Parameter. Wenn Du Parameter verwenden möchtest, nimm statt dessen das [Startskript](Wie_benutze_ich_das_Startskript) für Windows oder Linux


## RUN_metasfresh.bat/.sh

Wenn der Client über das [Startskript](Wie_benutze_ich_das_Startskript) gestartet wird kannst Du über das Startskript folgende Parameter mitgeben:


## Parameter

**Anwendungssprache -Dorg.adempiere.client.lang**

Stellt eine feste Anwendungssprache ein und blendet das Feld Sprache bei der Anmeldung aus. 

Mögliche Werte findest Du so heraus: [SQL Abfrage](List_Languages)

Beispiel für die Sprache Deutsch

```
 -Dorg.adempiere.client.lang=\"de_DE\"
```

**Versionsprüfung -Dde.metas.clientcheck.Enabled**

Wenn dieser wert auf "false" gesetzt wird überprüft der client nicht ob er zu der Version des Servers passt.

```
 -Dde.metas.clientcheck.Enabled=false
```
