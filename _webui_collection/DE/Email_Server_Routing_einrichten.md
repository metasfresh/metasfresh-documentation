---
title: Wie richte ich ein E-Mail-Server-Routing für ausgehende Belege ein?
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Einrichtung
lang: de
sequence: 30
ref: setup_email_server_routing
---

## Überblick
In metasfresh kannst Du mittels E-Mail-Server-Routing einstellen, an welchen [Kontakt/Nutzer](GPartner_Nutzer_hinzufuegen) ein bestimmter Beleg bei seiner Erstellung automatisch adressiert wird, um den E-Mail-Versand aus "Ausgehende Belege" einfacher und effizienter zu machen.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "EMail Server Routing" oder "EMail Server Konfiguration" (je nach Versionsstand).
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle im Feld **Mail Box** ein [Postfach](Ausgehende_Belege_Mail_Server_einrichten) aus, über das E-Mails aus metasfresh versendet werden sollen.
1. ***Optional:*** Wähle im Feld **Individueller Typ** eine Routing-Klasse aus, z.B. `org.compiere.util.Login` (siehe auch "[Passwort zurücksetzen](Passwort_aendern)").
1. Wähle im Feld **Spalte Nutzer nach** entweder *Ansprechpartner* oder *Rechnungskontakt* aus, je nachdem, von welchem Kontakt/Nutzer die E-Mail-Adresse übernommen werden soll.
 >**Hinweis:** Stelle sicher, dass die [E-Mail-Adresse des jeweiligen Kontaktes](GPartner_Nutzer_hinzufuegen) im Eintrag des dazugehörigen Geschäftspartners angegeben ist.

1. Wähle einen **Dokument Basis Typ** aus, bei dessen Erstellung der zuvor bestimmte Kontakt/Nutzer benachrichtigt werden soll, z.B. *Auftrag*, *Rechnung (Debitorenkonten)*, *Warenlieferung* usw.
1. ***Optional:*** Wähle einen konkreten **Prozess** aus.
1. ***Optional:*** Wähle eine **Sub Belegart** aus.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Versende ausgehende Belege per E-Mail](Email_senden_ausgehende_Belege).
