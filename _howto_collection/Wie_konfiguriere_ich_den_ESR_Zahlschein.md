---
title: Wie konfiguriere ich den ESR Zahlschein ?
layout: default
tags:
  - Systemadministration
  - ESR
lang: de
---

## Systemweite Aktivierung

1. melde Dich mit der Rolle "System Administrator" am Mandanten "System" an

### Funktion in Systemkonfig aktivieren

Option 1 - SQL Script verwenden

```
update ad_sysconfig  set value = 'Y' where name ='de.metas.payment.esr.Enabled';

Option 2 - manuell

1. Öffne [Fenster "System-Konfiguration"](Wie_finde_und_öffne_ich_ein_Fenster)
1. suche im Feld **Name** nach "de.metas.payment.esr.Enabled"
1. Im Feld **Wert** trage anstelle N den Wert Y ein
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)

### Referenzen aktivieren
Option 1 - SQL Script verwenden

```
update C_ReferenceNo_Type set isactive = 'Y' where name in ('InvoiceReference','ESRReferenceNumber');
update c_referenceno_type_table set isactive = 'Y' where c_referenceno_type_id in (select c_referenceno_type_id from c_referenceno_type where isactive = 'Y')
```

Option 2 - manuell

1. Öffne [Fenster "Reference Number Type"](Wie_finde_und_öffne_ich_ein_Fenster)
1. setze den Haken im Feld **aktiv** bei den Einträgen mit den Namen "ESRReferenceNumber" 
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. setzen den Haken ebenfalls im unteren Register "assigned tables"
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. setze den Haken im Feld **aktiv** bei den Einträgen mit den Namen "InvoiceReference"
1. setzen den Haken ebenfalls im unteren Register "assigned tables"
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)

![img](...\images\de_reference_number_type.png)

### Server Neustart
1. starte den Anwendungsserver einmal neu

## Einrichtung Organisation

Der Geschäftspartner der Organisation muss eine Schweizer Adresse haben damit der ESR Zahlschein überhaupt in der Rechnung angezeigt wird.

## Einrichtung Bankkonto

Damit der ESR Zahlschein-String erstellt werden kann braucht es ein ESR Konto beim Geschäftspartner der Organisation:

1. Feld **ESR-Konto** aktivieren
1. Feld **ESR-Teilnehmer Nummer** füllen. z.B. 1-23456-7
1. Feld **Rendered ESR Receiver** eintragen