---
title: Wie definiere ich ein Importformat ?
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
1. Feld **DB-Tabelle**: z.B. "I_BPartner_Import - Geschäftspartner" auswählen   
1. Feld **Format**: Trennzeichen auswählen. z.B. Tab
1. Datensatz speichern
1. Button "Positionen kopieren" anklicken
1. Wähle nun das Standardformat aus von dem Du die Einstellungen kopieren möchtest. z.B. "Geschäftspartner Standard"
1. OK klicken. 

   Jetzt wird das soeben angelegte Import-Format um die Standardfelder ergänzt. Das Ergebnis steht als Datensatzliste im Register "Format-Feld".

## Importformat anpassen

Die aktiven Felder mit deren Startno müssen den Feldern der CSV Datei entsprechen die Du importieren möchtest. 

1. Register "Format-Feld" öffnen
1. [Prüfe mittels dieser Liste](Welche_Felder_kann_ich_importieren) welche Felder Du mindestens importieren kannst / musst
1. setze nicht benötigte Felder auf inaktiv
1. Feld **startno** setzen

   Die **Startno** bestimmt die Position an der eine Spalte von metasfresh beim Import erwartet wird.
   Dabei ist es nicht nötig, dass die Felder in einer festen und aufsteigenden Reihenfolge sind.
   

### Beispiel


![img](../images/de_excel_spalten.png)


![img](../images/de_importformat.png)