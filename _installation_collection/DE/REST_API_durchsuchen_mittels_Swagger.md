---
title: Wie durchsuche ich die REST API mittels Swagger?
layout: default
tags:
  - System Administration
lang: de
ref: how_do_i_browse_the_rest_api_using_swagger
---

## Überblick

metasfresh verwendet Swagger, um REST API Funktionen darzustellen.

Mit dem folgenden Link kannst Du die REST API per Swagger durchsuchen:

`http://<deinserver:port>/swagger-ui.html#`

## Stelle die Sprache der Benutzersitzung mittels Swagger ein

1. Öffne Swagger.
1. Suche nach **PUT** `/rest/api/userSession/language`.
1. Gib den Sprachencode `de_DE` in das Feld **adLanguage** ein.
1. Klicke auf "Try it out".
1. Aktualisiere die metasfresh-Browsersitzung, damit die Änderung wirksam wird.
