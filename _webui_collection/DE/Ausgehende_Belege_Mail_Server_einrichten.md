---
title: Wie richte ich ein E-Mail-Postfach für ausgehende Belege ein?
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Einrichtung
lang: de
sequence: 20
ref: outbound_documents_setup_email_server
---

## Übersicht
In metasfresh kannst Du ein eigenes E-Mail-Postfach einrichten, das für den Versand ausgehender Belege verwendet wird. Über ein [E-Mail-Server-Routing](Email_Server_Routing_einrichten) kannst Du zudem einstellen, an welchen [Kontakt/Nutzer](GPartner_Nutzer_hinzufuegen) ein bestimmter Beleg bei seiner Erstellung automatisch adressiert wird, um den E-Mail-Versand aus "Ausgehende Belege" einfacher und effizienter zu machen.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Outbound Email Server (SMTP)".
1. [Lege einen neuen E-Mail-Server-Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Trage in das Feld **E-Mail-Server** entweder den Hostnamen oder die IP-Adresse des Servers für SMTP und IMAP ein.
1. Trage in das Feld **E-Mail** eine E-Mail-Adresse ein.
1. Trage in das Feld **SMTP Login** den Nutzernamen zur SMTP-Anmeldung ein.
1. Trage in das Feld **SMTP Kennwort** das Passwort zur SMTP-Anmeldung ein.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte (optional)
- [Richte ein E-Mail-Server-Routing für ausgehende Belege ein](Email_Server_Routing_einrichten).
