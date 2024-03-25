---
title: Wie richte ich zu Testzwecken eine einzige E-Mail-Adresse für alle ausgehenden Belege ein? (Systemadministrator)
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Einrichtung
lang: de
sequence: 40
ref: testing_send_emails_to_single_address
---

## Voraussetzungen
1. [Richte die ausgehenden Belege ein](Ausgehende_Belege_Konfig).
1. [Richte ein E-Mail-Postfach für ausgehende Belege ein](Ausgehende_Belege_Mail_Server_einrichten).

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) "Systemadministrator".
1. [Gehe ins Menü](Menu) und öffne das Fenster "Systemkonfigurator".
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach der Systemkonfiguration mit dem **Namen** `org.adempiere.user.api.IUserBL.DebugMailTo`.
1. Öffne den Systemkonfigurationseintrag.
1. Trage in das Feld **Suchschlüssel** die E-Mail-Adresse ein, an die alle Belege versendet werden sollen.
 >**Hinweis:** Wird nichts in das Feld eingetragen, werden die E-Mails direkt an die jeweiligen Benutzer gesendet. Die Test-E-Mail-Funktion ist somit deaktiviert.

1. [metasfresh speichert automatisch](Speicheranzeige). Die Änderungen sind sofort aktiv.

## Nächste Schritte
- [Richte ein E-Mail-Server-Routing für ausgehende Belege ein](Email_Server_Routing_einrichten).
- [Versende ausgehende Belege per E-Mail](Email_senden_ausgehende_Belege).
- **Für Admins:** [Den fehlgeschlagenen E-Mail-Versand eines ausgehenden Beleges beheben](Ausgehende_Belege_Fehlerbehebung).
