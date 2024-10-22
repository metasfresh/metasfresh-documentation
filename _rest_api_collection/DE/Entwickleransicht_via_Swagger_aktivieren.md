---
title: Wie aktiviere ich die Entwickleransicht mittels Swagger?
layout: default
tags:
  - Anfängertipps für den metasfresh Webservice
lang: de
sequence: 40
ref: enable_developer_view_via_Swagger
---

## Überblick
Wenn Du die Spalten hinter den Feldern (unabhängig von den Spracheinstellungen) und die ID der Registerkarten sehen möchtest, kannst Du die *Entwickleransicht* aktivieren.

## Schritte
1. [Öffne Swagger](REST_API_durchsuchen_mittels_Swagger).
1. Suche nach `/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`<br> oder rufe diese URL direkt auf<br> `https://<deinserver:port>/swagger-ui/index.html#/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`.
1. Gib den Sprachencode `true` in das Feld **adLanguage** ein.
1. Klicke auf "Try it out".
1. Aktualisiere die metasfresh WebUI-Browsersitzung, damit die Änderung wirksam wird.

## Beispiel

### Vor der Aktivierung der Entwickleransicht

<kbd><img src="assets/How_do_I_enable_developer_view_using_Swagger-defcb.png" alt="Abb.: Vor der Aktivierung der Entwickleransicht"></kbd>

### Nach der Aktivierung der Entwickleransicht

<kbd><img src="assets/How_do_I_enable_developer_view_using_Swagger-fbec7.png" alt="Abb.: Nach der Aktivierung der Entwickleransicht"></kbd>
