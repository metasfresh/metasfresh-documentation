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
1. [Sicherstellen, dass Versand an zentrale Debug-Mailadresse aus ist](Wie_kann_ich_zu_testzwecken_alle_mails_an_eine_email_adresse_schicken)
1. Systemschalter [org.compiere.model.MRequest.EnableNotifications](org.compiere.model.MRequest.EnableNotifications) aktivieren um Notifikationen generell zu aktivieren
1. Beim Nutzer die Benachrichtigungsart "Email" einstellen
1. Beim Nutzer eine Email-Adresse hinterlegen

## Test

1. Fenster "Vorgänge" öffnen
1. einen neuen Vorgang anlegen
1. einen Benutzer als Verantwortlichen eintragen

Erwartung: Der Benutzer erhält eine Email mit der Nachricht, dass ein neuer Vorgang für ihn vorliegt.

### Systemschalter per SQL setzen

```
update ad_sysconfig
set value = 'Y'
where name =  'org.compiere.model.MRequest.EnableNotifications';
```
