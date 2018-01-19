---
title: Wie konfiguriere ich den ESR Zahlschein ?
layout: default
tags:
  - Systemadministration
  - ESR
lang: de
---

# ESR-Aktivierung im System

## via SQL

1. [SQL Script ausführen](https://github.com/metasfresh/metasfresh-dist-orgs/blob/master/misc/sql/configuration/5475402_cli_ESR_enable.sql)
1. Anwendungsserver neustarten

## ESR-Aktivierung manuell

Alternativ zu dem oben augeführten Skript kannst Du den ESR auch manuell einrichten:

1. melde Dich mit der Rolle "System Administrator" am Mandanten "System" an
1. Systemschalter `de.metas.payment.esr.Enabled` [aktivieren](Systemschalter)

### Referenzen aktivieren

1. Öffne [Fenster "Reference Number Type"](Wie_finde_und_öffne_ich_ein_Fenster)
1. setze den Haken im Feld **aktiv** bei den Einträgen mit den Namen "ESRReferenceNumber"
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. setzen den Haken ebenfalls im unteren Register "assigned tables"
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. setze den Haken im Feld **aktiv** bei den Einträgen mit den Namen "InvoiceReference"
1. setzen den Haken ebenfalls im unteren Register "assigned tables"
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)

![img](..\images\de_reference_number_type.png)

### Server Neustart
Starte den Anwendungsserver einmal neu. Falls Du nicht weißt wie das geht, kontaktiere den Serveradmin.

# fachliche ESR-Einrichtung

Nach der Aktivierung des ESR braucht es dann noch die Fachliche Einrichtung.

## Einrichtung Organisation

Der Geschäftspartner der Organisation muss eine Schweizer Adresse haben damit der ESR Zahlschein überhaupt in der Rechnung angezeigt wird.

## Einrichtung Bankkonto

Damit der ESR Zahlschein-String erstellt werden kann braucht es ein ESR Konto beim Geschäftspartner der Organisation:

1. Feld **ESR-Konto** aktivieren
1. Feld **ESR-Teilnehmer Nummer** füllen. z.B. 1-23456-7
1. Feld **Rendered ESR Receiver** eintragen
