---
title: Wie setze ich den Servercache zurück?
layout: default
tags:
  - System Administration
lang: de
ref: how_to_reset_server_cache
---

## Overview
Jedes Mal, wenn Du Einstellungen änderst, muss der Servercache zurückgesetzt werden, damit die Änderungen angenommen werden.


## Schritte
1. Füge Deinen Servernamen und Port in diesen Link ein:
`http://<yourhostname>/rest/api/debug/cacheReset`
1. Kopiere den Link in Deinen Browser, in dem Du eine metasfresh Sitzung geöffnet hast, und führe ihn aus.<br>
`http://mydockerhost:8080/rest/api/debug/cacheReset`

Bei erfolgreicher Cache-Zurücksetzung wird nur eine weiße Seite angezeigt.
