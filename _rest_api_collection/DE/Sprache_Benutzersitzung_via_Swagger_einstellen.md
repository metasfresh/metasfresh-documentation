---
title: Wie ändere ich die Sprache der Benutzersitzung mittels Swagger?
layout: default
tags:
  - Anfängertipps für den metasfresh Webservice
lang: de
sequence: 30
ref: set_user_session_language_via_swagger
---

## Schritte
1. [Öffne Swagger](REST_API_durchsuchen_mittels_Swagger).
1. Suche nach **PUT** `/rest/api/userSession/language`.
1. Gib den Code der gewünschten Sprachein das Feld **adLanguage** ein, z.B. `de_DE` oder `en_US`.
1. Klicke auf "Try it out".
1. Aktualisiere die metasfresh WebUI-Browsersitzung, damit die Änderung wirksam wird.
