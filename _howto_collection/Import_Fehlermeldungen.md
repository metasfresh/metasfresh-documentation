---
title: Importfehlermeldungen und was sie bedeuten
layout: default
tags:
  - Datenimport
lang: de
---

## Importfehlermeldung kommt im Fenster Ladeprogramm

Problem:

```
   Caused by: org.adempiere.exceptions.AdempiereException: @notfound@ @record_id@
    at org.adempiere.impexp.spi.impl.AsyncImportProcessBuilder.buildAndEnqueue(AsyncImportProcessBuilder.java:79)
    at org.compiere.apps.form.VFileImport.cmd_importSchedule(VFileImport.java:618)
    ... 9 common frames omitted
```

Lösungsideen:

1. Schau nach Spalten wie z.B. Anrede, Land, Gruppe die einen Listwert enthalten und somit beim Import aufgelöst werden
