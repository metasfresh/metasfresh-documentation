---
title: Wie aktiviere ich die Entwickleransicht mittels Swagger?
layout: default
tags:
  - System Administration
lang: de
ref: how_do_i_enable_developer_view_using_swagger
---

## Übersicht
Wenn Du die Spalten hinter den Feldern (unabhängig von den Spracheinstellungen) und die ID der Registerkarten sehen möchtest, solltest Du die *Entwickleransicht* aktivieren.


## Schritte
1. Öffne Swagger.
1. Suche nach `/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`<br>
oder rufe diese URL direkt auf<br> `http://<yourserver:port>/swagger-ui.html#!/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`.
1. Gib den Sprachencode `true` in das Feld **adLanguage** ein.
1. Klicke auf "Try it out".
1. Aktualisiere die metasfresh-Browsersitzung, damit die Änderung wirksam wird.

## Beispiel

### Vor der Aktivierung der Entwickleransicht

![](assets/How_do_I_enable_developer_view_using_Swagger-defcb.png)

### Nach der Aktivierung der Entwickleransicht

![](assets/How_do_I_enable_developer_view_using_Swagger-fbec7.png)
