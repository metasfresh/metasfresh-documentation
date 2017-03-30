---
title: Systemschalter
layout: default
tags:
  - System
lang: de
---

## Übersicht

Es gibt verschiedene Systemschalter, die das Verhalten von metasfresh steuern und die Du auf zwei Arten konfigurieren kannst.

### Systemschalter im Fenster setzen

1. Anmeldung mit der Rolle "System Administrator"
1. Öffne [Fenster "System-Konfiguration"](Wie_finde_und_öffne_ich_ein_Fenster)
1. suche im Feld **Name** nach `<Schaltername>`
1. Im Feld **Wert** trage anstelle N den Wert Y ein
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)


### Systemschalter per SQL setzen

Aktivierung durch:

```
update ad_sysconfig
set value = 'Y'
where name =  <Schaltername>;
```
