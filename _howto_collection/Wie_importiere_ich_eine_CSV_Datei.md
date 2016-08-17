---
title: Wie importiere ich eine CSV Datei ?
layout: default
tags:
  - Datenimport
lang: de
---

1. Fenster "Ladeprogramm für Import-Datei" öffnen
1. Datei auswählen
1. Import-Format auswählen. z.B. "Mein Partnerimport"
1. OK drücken

   Jetzt verarbeitet metasfresh die Zeilen aus der CSV Datei und kopiert diese in die Importtabelle - einsehbar über das Fenster z.B. "Import - Geschäftspartner":

```
erfolgreicher Import:

Zeilen in Datei / geladen und bereit für Importiert:
#1388
```
   
   Anschließend versucht metasfresh die Daten in die Produktivtabellen zu übernehmen.

   Es erscheint eine [Notifikation](Wie_sieht_eine_Notifikation_aus) die anzeigt wieviele Datensätze erfolgreich in die Livedatenstruktur importiert werden konnten:

```
999 records imported, 0 records updated to Produkt table
```

## Importdaten Nachbearbeiten

Datensätze die nicht in die Produktivtabellen übernommen werden konnten wurden nur in die Importtabelle eingespielt und können dort bearbeitet werden.
Alternativ kannst Du auch die CSV-Datei für die Problemfälle ändern und diese neu einspielen. So machst Du einen [gesamten Import rückgängig](Wie_mache_ich_einen_CSV_Import_komplett_rückgängig).

1. Das passende [Importfenster öffnen](Wie_finde_und_öffne_ich_ein_Fenster) wie z.B. "Partner-Import"
1. Den Grund für den Importfehler findest Du in Feld **Import-Fehlermeldung** 
1. Ändere die Daten entweder direkt im Fenster oder in der CSV Datei und importiere erneut
1. Bei einer manuellen Änderung kannst Du über den Button "Geschäftspartner importieren" eine neue Verarbeitung angestoßen

<!--
Docs ToDO
Spalte "status" auswerten da manche noch nicht einmal in die import tabelle landen.
beispiel greetings import
-->
