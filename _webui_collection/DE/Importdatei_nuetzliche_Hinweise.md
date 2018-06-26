---
title: Nützliche Hinweise für die Erstellung einer Importdatei (*.csv und *.txt)?
layout: default
tags:
  - Datenimport
lang: de
sequence: 30
ref: import_file_useful_tips
---

## Überblick
Damit Du extern gespeicherte Daten in metasfresh importieren kannst, musst Du sie erst entsprechend formatiert als CSV- oder TXT-Datei hochladen und kannst sie dann einfach über das [Aktionsmenü](AktionStarten) importieren.

Hier sind ein paar Formatbeispiele für den Import von:
- [Geschäftspartnerdaten](Importformat_Beispiel_GPartner)
- [Produktdaten](Importformat_Beispiel_Produkt)

## Nützliche Hinweise
Bitte achte bei der Erstellung einer Importdatei auf Folgendes:

- Das **Trennzeichen** in der Importdatei muss mit demjenigen aus dem [Importformat](Importformat_anlegen) übereinstimmen (Komma, Tabulatorzeichen, Semikolon usw.).
- Möchtest Du eine Importdatei mit dem **Komma** als Trennzeichen erstellen und verwendest dazu eine Tabellenkalkulationssoftware wie z.B. *Microsoft Excel*, dann wähle beim Speichern einfach das Dateiformat `CSV (Trennzeichen-getrennt)(*.csv)` aus.
- Möchtest Du eine Importdatei mit dem **Tabulatorzeichen** als Trennzeichen erstellen und verwendest dazu eine Tabellenkalkulationssoftware wie z.B. *Microsoft Excel*, dann wähle beim Speichern einfach das Dateiformat `Text (Tabstopp-getrennt)(*.txt)` aus.
- Die Positionen der Spalten in der Importdatei müssen den Werten der **Startnummern** der Formatfelder des Importformats entsprechen.<br> ***Beispiel:*** Die **Spalte C** der Excel-Tabelle steht an dritter Stelle, d.h. das entsprechende Formatfeld bekommt die **Start-Nr. 3**.
 >**Hinweis:** metasfresh erwartet ***keine Spaltennamen*** in der Importdatei. Alleine die ***Position*** der Spalte muss mit der Startnummer übereinstimmmen.

## Nächste Schritte
- [Geschäftspartnerdaten importieren](GPartnerdaten_importieren).
- [Produktdaten importieren](Produktdaten_importieren).

## Beispiel: Excel-Tabelle (Produktdaten)
![](assets/Excel-Tabelle_Produktdaten.png)

## Beispiel: CSV-Datei, Trennzeichen-getrennt (Produktdaten)
![](assets/CSV-Datei_Produktdaten.png)

## Beispiel: TXT-Datei, Tabstopp-getrennt (Produktdaten)
![](assets/TXT-Datei_Produktdaten.png)
