---
title: Wie setze ich den Servercache zurück?
layout: default
tags:
  - System Administration
lang: de
ref: how_to_reset_server_cache
---

## Overview
Jedes Mal, wenn Du Einstellungen änderst, muss der Server-Cache zurückgesetzt werden, damit die Änderungen wirksam werden.

## Schritte
1. [Melde Dich](../../webui_collection/DE/Anmeldung) mit einem beliebigen Nutzer bei dem System an, dessen Server-Cache Du zurücksetzen möchtest.
 >**Hinweis:** Ohne aktive Nutzersitzung können die folgenden Schritte nicht durchgeführt werden.

1. Füge Deinen Servernamen und Port in den folgenden Link ein: `https://<yourhostname>/rest/api/debug/cacheReset`.
1. Kopiere den Link in die Adressleiste Deines Browsers, in dem Du eine metasfresh Sitzung geöffnet hast, und führe ihn mit `↵ Enter` aus.<br>
`https://mydockerhost:8080/rest/api/debug/cacheReset`

Bei erfolgreicher Cache-Zurücksetzung wird nur eine weiße Seite angezeigt.
