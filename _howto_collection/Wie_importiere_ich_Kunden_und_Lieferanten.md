---
title: Wie importiere ich Kunden und Lieferanten ?
layout: default
tags:
  - Datenimport
lang: de
---
## Importformat anlegen

Auf Basis des Standarddefinition für den Partnerimport möchten wir ein eigenes Importformat anlegen.

1. Fenster "Import-Format" öffnen
1. Neuen Datensatz anlegen
1. Feld Name: z.B. "Partnerimport" eintragen
1. Feld DB-Tabelle: "I_BPartner_Import - Geschäftspartner" auswählen
1. Feld Format: Trennzeichen auswählen. z.B. Komma
1. Datensatz speichern
1. Button "Positionen kopieren" anklicken
1. Import-Format "Geschäftspartner Standard" auswählen
1. OK klicken. 
  Jetzt wird das soeben angelegte Import-Format "Partnerimport" um die Standardfelder ergänzt. Das Ergebnis steht als Datensatzliste im Register "Format-Feld".

## Importformat anpassen

1. Register "Format-Feld" öffnen
Die angezeigten Felder müssen den Felder der CSV Datei entsprechen die Du importieren möchtest. Dabei besonders wichtig: Die **Startno** legt die Reihenfolge der Felder fest wie sie von metasfresh beim Import erwartet werden.

## Importdatei erstellen

Erstelle eine CSV Datei und achte dabei besonders auf Folgendes:
- Das Trennzeichen muss demjenigen entsprichen das Du im Importfomat angebenen hast. z.B. Komma
- Die Reihenfolge der Spalten muss den Werten von **startno** entsprechen. Beispiel. Feld mit startno = 3 muss in der Datei an dritter Stelle kommen.

## Importieren

1. Fenster "Ladeprogramm für Import-Datei" öffnen
1. Datei auswählen
1. Import-Format auswählen. z.B. "Partnerimport"
1. OK drücken

Jetzt verarbeitet metasfresh die Zeilen aus der CSV Datei. Anschließend meldet es:

```
erfolgreicher Import:

Zeilen in Datei / geladen und bereit für Importiert:
#1388
```


