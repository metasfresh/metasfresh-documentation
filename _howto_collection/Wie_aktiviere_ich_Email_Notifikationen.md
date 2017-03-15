---
title: Wie aktiviere ich Email Notifikationen ?
layout: default
tags:
  - Systemadministration
lang: de
---

## Übersicht

Wenn Du bei neuen Vorgängen Deine Benutzer automatisch per Mail informieren möchtest, kannst Du diese Anleitung zur Aktivierung verwenden.

## Schritte


1. Systemschalter `org.compiere.model.MRequest.EnableNotifications` aktivieren um die Funktion zu aktivieren
2. Beim Nutzer die Benachrichtigungsart "Email" einstellen


### Systemschalter per SQL setzen

```
update ad_sysconfig
set value = 'Y'
where name =  'org.compiere.model.MRequest.EnableNotifications';
```
