---
title: Wie setze ich den Web API Server-Cache zurück?
layout: default
tags:
  - System Administration
lang: de
ref: how_to_reset_web_api_server_cache
---

## Overview
Jedes Mal, wenn Du Einstellungen änderst, muss der Web API Server-Cache (WebUI) zurückgesetzt werden, damit die Änderungen wirksam werden.

## Schritte
1. [Melde Dich](../../webui_collection/DE/Anmeldung) mit einem beliebigen Nutzer bei dem System an, dessen Server-Cache Du zurücksetzen möchtest.
 >**Hinweis:** Ohne aktive Nutzersitzung können die folgenden Schritte nicht durchgeführt werden.

1. Ersetze im folgenden Link `<yourhostname>` durch den Namen und den Port deines Servers: `https://<yourhostname>/rest/api/debug/cacheReset`.
    - Zum Beispiel: `https://mydockerhost:8080/rest/api/debug/cacheReset`
1. Kopiere den Link in die Adressleiste Deines Browsers, in dem Du eine metasfresh Sitzung geöffnet hast, und führe ihn mit `↵ Enter` aus.
1. Bei erfolgreicher Cache-Zurücksetzung wird nur eine weiße Seite angezeigt.
