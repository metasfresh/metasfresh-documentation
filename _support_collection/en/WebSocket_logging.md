---
title: Verify WebUI API/Front-End Communication via WebSocket Logging
layout: default
description: "How to verify WebUI API/Front-End communication via WebSocket logging"
tags:
  - WebSocket Logging
lang: en
sequence: 10
ref: websocket_logging
---

## Steps
1. Enable WebSocket logging:<br>**https://{% raw %}<code>{{ base.URL }}</code>{% endraw %}/rest/api/debug/websocketLogging?enabled=true&maxLoggedEvents=500**
1. Perform your normal test.
1. From time to time check:<br>**https://{% raw %}<code>{{ base.URL }}</code>{% endraw %}/rest/api/debug/websocketEvents**
  - Search for your documents to see if the front end was informed.
  - Keep your Chrome Developer Tools open and also check the "Network" tab.
  - See if the front end asked for the document.
