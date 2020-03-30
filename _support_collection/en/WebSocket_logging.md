---
title: Verify Web Server/Browser Communication via WebSocket Logging
layout: default
description: "How to verify web server/browser communication via WebSocket logging"
tags:
  - WebSocket Logging
lang: en
sequence: 10
ref: websocket_logging
---

## Steps
1. Enable WebSocket logging:<br>https://{% raw %}<code>{{ base.URL }}</code>{% endraw %}/rest/api/debug/websocketLogging?enabled=true&maxLoggedEvents=500
1. Perform your normal test.
1. From time to time check:<br>https://{% raw %}<code>{{ base.URL }}</code>{% endraw %}/rest/api/debug/websocketEvents
  - Search for your documents to see if the frontend was informed.
  - Keep your Chrome Developer Tools open and also check the "Network" tab.
  - See if the frontend asked for the document.
