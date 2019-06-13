---
title: Wie richte ich zu Testzwecken eine einzige E-Mail-Adresse für alle ausgehenden Belege ein?
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Einrichtung
lang: de
sequence: 40
ref: testing_send_emails_to_single_address
---

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung) mit der [Benutzerrolle](NeueBenutzerrolle) „Systemadministrator“.
1. [Gehe ins Menü](Menu) und öffne das Fenster „Systemkonfigurator“.
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach der Systemkonfiguration mit dem **Namen** `org.adempiere.user.api.IUserBL.DebugMailTo`.
1. Öffne den Systemkonfigurationseintrag.
1. Trage in das Feld **Suchschlüssel** die E-Mail-Adresse ein, an die alle Belege versendet werden sollen.
 >**Hinweis:** Wird nichts in das Feld eingetragen, werden die E-Mails direkt an die jeweiligen Benutzer gesendet. Die Testmail-Funktion ist somit deaktiviert.

1. [metasfresh speichert automatisch](Speicheranzeige). Die Änderungen sind ab sofort aktiv.
