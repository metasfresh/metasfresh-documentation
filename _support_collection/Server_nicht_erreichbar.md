---
title: Server nicht erreichbar
layout: default
tags:  
  - Support
lang: de
---


## Problem beim Kontaktieren des metasfresh Servers

### Symptom

Fehlermeldung auf dem Client: 

```
Problem beim Kontaktieren des metasfresh Servers
java.lang.RuntimeException: Could not connect to broker URL: tcp://metasfreshdemo1:61616. 
Reason: java.net.UnknownHostException: metasfreshdemo
```

Der metasfresh Client kann sich nicht mit dem Server binden.

### Ursache 1 - Client kann Serverhost nicht auflösen

Teste ob der Servername (z.B. metasfreshdemo) vom Client aus auf die richtige IP aufgelöst wird.


### Ursache 2 - Server kann sich selbst nicht auflösen
**Verifikation:**

Im [Serverlog](../howto_collection/Wo_finde_ich_das_Serverlog) taucht nach dem Starten von metasfresh diese Meldung auf:
```
 threw exception; nested exception is java.awt.HeadlessException
```
