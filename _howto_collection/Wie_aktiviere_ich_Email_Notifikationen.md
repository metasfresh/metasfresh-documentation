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

1. [Email-Server einrichten](Wie_richte_ich_einen_ausgehenden_Mailserver_ein)
1. Systemschalter `org.compiere.model.MRequest.EnableNotifications` aktivieren um die Funktion zu aktivieren
1. Beim Nutzer die Benachrichtigungsart "Email" einstellen


### Systemschalter per SQL setzen

```
update ad_sysconfig
set value = 'Y'
where name =  'org.compiere.model.MRequest.EnableNotifications';
```
