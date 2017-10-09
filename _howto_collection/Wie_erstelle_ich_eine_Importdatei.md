---
title: Wie erstelle ich eine Importdatei ?
layout: default
tags:
  - Datenimport
lang: de
---

Erstelle eine CSV Datei und achte dabei besonders auf Folgendes:

- Die Felder müssen dem [Importformat entsprechen](Wie_definiere_ich_ein_Importformat)
- Das Trennzeichen muss demjenigen entsprichen das Du im Importfomat angebenen hast. z.B. Tab, Komma
- Die Position der Spalten muss den Werten von **startno** entsprechen. Beispiel. Das Feld mit **startno** = 3 muss in der Datei an dritter Stelle kommen.

   *Hinweis:* metasfresh erwartet keine Spaltennamen in der CSV Datei. Alleine die Position des Feldes muss mit der **startno** übereinstimmmen.

- Das Encoding der Datei muss mit der Auswahl im Fenster "Ladeprogramm für Import-Datei" übereinstimmen. Zum Beispiel "Win-1252".
- Spalten dürfen leer sein insofern es sich nicht um Pflichtfelder (siehe [Liste mit Pflichtfelder](Welche_Felder_kann_ich_importieren)) handelt. 


## Tips für Tabellenkalkulation
- Wenn Du eine Tabellenkalkulationssoftare zum Erstellen der CSV-Datei verwendest, wähle als Speicherformat "Textdatei (Tabstop-getrennt)(*.txt)" aus.
- Stelle sicher dass es keine Zeilenumbrüche gibt. Dafür einfach mit Taste ALT die Zahlen 010 im Suchfeld eingaben und Alle suchen
