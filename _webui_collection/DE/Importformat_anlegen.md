---
title: Wie lege ich ein Importformat an?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
lang: de
sequence: 20
ref: add_import_format
---

## Überblick
Mithilfe des Importformats kannst Du festlegen, welche Daten bzw. Spalten aus der Importdatei übernommen werden sollen, wie diese Spalten benannt und voneinander getrennt sind (Trennzeichen) und in welche Datenbanktabellen die Importdaten übertragen werden sollen.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Formate".
1. [Lege ein neues Importformat an](Neuer_Datensatz_Fenster_Webui).
1. Benenne das Importformat im Feld **Name**.
1. Wähle die entsprechende **DB-Tabelle** aus, in die die Daten importiert werden sollen, z.B. für Geschäftspartner *Import - Geschäftspartner* und für Produkte *Import - Produkt*.
1. Wähle ein **Format** (Trennzeichen) aus, z.B. *Tabulator-separiert*.
 >**Hinweis:** Für einen erfolgreichen Datenimport muss das Trennzeichen der Importdatei mit dem aus dem Importformat übereinstimmen (Komma, Tabulatorzeichen, Semikolon usw.).

### Formatfelder hinzufügen
1. Gehe zur Registerkarte "Format-Feld" unten auf der Seite und klicke auf ![](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein neues Fenster.
1. Benenne das Formatfeld im Feld **Name**, z.B. "Suchschlüssel".
1. Wähle eine **Spalte** aus, in die der Inhalt der Importdatei übertragen werden soll, z.B. *Value_Suchschlüssel*.
1. Wähle einen **Datentyp** aus, z.B. *Zeichenfolge* oder *Zahl*, je nach Art der Importdaten.
1. Vergib eine **Start-Nr.**
 >**Hinweis:** Die **Startnummer** bestimmt die Position, an der in der Importdatei eine Spalte von metasfresh beim Import erwartet wird, und hat nichts mit der **Reihenfolge**, in der die Formatfelder zum Importformat hinzugefügt wurden, zu tun. Es ist daher nicht nötig, dass die Felder in einer festen und aufsteigenden Reihenfolge sind, solange die Startnummern mit den Spaltenpositionen in der Importdatei übereinstimmen.

1. Klicke auf "Bestätigen", um das Fenster zu schließen und das Formatfeld zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole die Schritte 1 bis 6, um weitere Formatfelder hinzuzufügen.

## Formatfelder übertragen
Möchtest Du ein neues Importformat anlegen mit den gleichen Formatfeldern wie ein bestehendes Format, dann kannst Du die Formatfelder ganz einfach über das [Aktionsmenü](AktionStarten) aus dem bestehenden in das neue Importformat übertragen. Gehe hierzu wir folgt vor:

1. Lege ein neues Importformat an, wie oben in den **Schritten 1 bis 5** beschrieben.
1. [Starte die Aktion](AktionStarten) "Positionen kopieren". Es öffnet sich ein neues Fenster.
1. Wähle das entsprechende **Importformat** aus, aus dem Du die Formatfelder übertragen möchtest.
 >**Hinweis:** Um die Formatfelder aus einem bestehenden Importformat erfolgreich zu übertragen, muss in dem neuen Format **_dieselbe_ DB-Tabelle** eingestellt sein wie in dem bestehenden.

1. Klicke auf "Start", um die Formatfelder zu übertragen und das Fenster zu schließen.

## Nächste Schritte
- [Geschäftspartnerdaten importieren](GPartnerdaten_importieren).
- [Produktdaten importieren](Produktdaten_importieren).

## Beispiel
![](assets/Importformat_anlegen.gif)
