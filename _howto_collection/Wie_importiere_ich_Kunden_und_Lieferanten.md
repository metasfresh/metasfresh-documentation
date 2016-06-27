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
1. Feld **Name**: z.B. "Partnerimport" eintragen
1. Feld **DB-Tabelle**: "I_BPartner_Import - Geschäftspartner" auswählen
1. Feld **Format**: Trennzeichen auswählen. z.B. Tab
1. Datensatz speichern
1. Button "Positionen kopieren" anklicken
1. Import-Format "Geschäftspartner Standard" auswählen
1. OK klicken. 

   Jetzt wird das soeben angelegte Import-Format "Partnerimport" um die Standardfelder ergänzt. Das Ergebnis steht als Datensatzliste im Register "Format-Feld".

## Importformat anpassen

1. Register "Format-Feld" öffnen
1. nicht benötigte Felder auf inaktiv setzen. Die aktiven Felder müssen den Feldern der CSV Datei entsprechen die Du importieren möchtest. 

   Diese Felder brauchst Du mindestens:
   - Suchschlüssel
   - Firmenname
   - Straße und Nr
   - Ort
   - ISO Ländercode (Zweistelliger Code wie z.B. "DE")
 
  
1. Feld **startno** setzen

   Die **Startno** bestimmt die Position an der eine Spalte von metasfresh beim Import erwartet wird.
   Dabei ist es nicht nötig, dass die Felder in einer festen und aufsteigenden Reihenfolge sind.

### Beispiel

![img](de_excel_spalten.png)


![img](de_importformat.png)


## Importdatei erstellen

Erstelle eine CSV Datei und achte dabei besonders auf Folgendes:
- Das Trennzeichen muss demjenigen entsprichen das Du im Importfomat angebenen hast. z.B. Tab
- Die Reihenfolge der Spalten muss den Werten von **startno** entsprechen. Beispiel. Feld mit startno = 3 muss in der Datei an dritter Stelle kommen.
- Das Encoding der Datei muss mit der Auswahl im Fenster "Ladeprogramm für Import-Datei" öffnen

*Tip:* Wenn Du Excel zum Erstellen der CSV-Datei verwendest, wähle als Speicherformat "Textdatei (Tabstop-getrennt)(*.txt)" aus.

## CSV-Datei Importieren

1. Fenster "Ladeprogramm für Import-Datei" öffnen
1. Datei auswählen
1. Import-Format auswählen. z.B. "Partnerimport"
1. OK drücken

   Jetzt verarbeitet metasfresh die Zeilen aus der CSV Datei und kopiert diese in die Importtabelle - einsehbar über das Fenster "Import - Geschäftspartner":

```
erfolgreicher Import:

Zeilen in Datei / geladen und bereit für Importiert:
#1388
```

   Anschließend migriert metasfresh die Daten von der Importtabelle in die eigentliche Live Tabellen und prüft dabei die Konsistenz der Daten. Übernommen werden nur Datensätze die korrekt sind.
   Sobald dieser Vorgang abgeschlossen ist, erscheint eine Notifikation die anzeigt wieviele Datensätze erfolgreich in die Livedatenstruktur importiert werden konnten.
   
## Importdaten korrigieren

metasfresh importiert alle CSV Daten in die LIVE-Tabellen außer diejenigen die bei der Konsistenzprüfung nicht bestehen. Diese Daten können dann im Fenster "Partner-Import" selektiert und nachbearbeitet werden.
Über den Button "Geschäftspartner importieren" kann dann ein erneuter Import angestoßen werden.

Die genaue Fehlermeldung warum der Partner nicht importiert werden konnte steht im Feld **Import-Fehlermeldung**.
   
## Import rückgängig machen

Um einen erfolgreichen Import rückgängig zu machen bleibt nur die erstellten Daten wieder zu löschen.
**ACHTUNG:** Dabei werden ALLE Daten des heutigen Tages gelöscht.

1. Führe diese SQL via PGAdmin auf der Datenbank aus:

   ```
--Revert todays Import
delete from aD_user where created::date = now()::date; --löscht Kontakte
delete from c_bpartner_location  where created::date = now()::date; --löscht Adressenzuordnungen
delete from c_location where created::date = now()::date; --löscht Adressdaten
delete from c_bpartner where created::date = now()::date; --löscht Partner
delete from I_BPartner where created::date = now()::date;  --löscht Partnerimportdaten
```
