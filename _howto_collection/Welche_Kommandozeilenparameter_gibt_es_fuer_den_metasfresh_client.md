---
title: Welche Kommandozeilenparameter gibt es für den metasfresh Client?
layout: default

tags:
  - Systemadministration

lang: de
---

## RUN_metasfresh.bat

Wenn der Client über das Skript "RUN_metasfresh.bat" gestartet wird kannst Du im Startskript stehen folgende Parameter zu Verfügung:

**Sprache des Clients einstellen**

```
 -Dorg.adempiere.client.lang=\"de_CH\"
 ```

**Versionsprüfung ausschalten**

Wenn dieser wert auf false gesetzt wird überprüft der client nicht ob er zu der Version des Servers passt.

```
 -Dde.metas.clientcheck.Enabled=false
 ```