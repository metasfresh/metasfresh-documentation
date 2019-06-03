---
title: Formatbeispiel für den Import von Nachbestelldaten
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Nachbestelldatenimport
lang: de
sequence: 10
ref: import_format_example_replenishments
---

## Überblick
Für den Nachbestelldatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import Replenishment* eingestellt ist.

In dem folgenden Beispiel wird der Dateninhalt aus einer Datei einer Tabellenkalkulationssoftware (hier z.B. eine *Excel*-Datei vor der [Konvertierung in eine CSV- oder TXT-Datei](Importdatei_nuetzliche_Hinweise)) dem Importformat für Nachbestelldaten gegenübergestellt:

![](assets/Nachbestellung_Excel-Tabelle_Format.png)

### Erläuterungen zum Beispiel
- Die **Spalte A** der Excel-Tabelle (*Produktschlüssel*) steht an erster Stelle, d.h. das entsprechende Formatfeld bekommt die **Start-Nr. 1**. Demzufolge erhält das Formatfeld für die **Spalte B** die **Start-Nr. 2** usw.<br> Die **Reihenfolge** der Formatfelder ist dabei unerheblich.
 >**Hinweis:** metasfresh erwartet ***keine Spaltennamen*** in der Importdatei. Alleine die ***Position*** der Spalte muss mit der Startnummer übereinstimmmen.

- Der **Name** des Formatfeldes ist frei wählbar und muss nicht mit der Benennung der Spalte aus der Importdatei übereinstimmen.
- Die **Spalte** des Formatfeldes bestimmt, wohin metasfresh den Inhalt der Spalte aus der Importdatei übertragen soll.
- Der **Datentyp** bestimmt, ob es sich bei den Importdaten z.B. um eine *Zeichenfolge* oder *Zahl* handelt.

### Einige nützliche Hinweise

| Information | Beispiel |  Hinweis |
| :---: | :--- | :--- |
| Source Warehouse Value | Lager_01 | **Suchschlüssel** des Ausgangslagers. |
| Organisation Key<br> (=OrgValue) | metasfresh AG | **Suchschlüssel** der Organisation. _**Achtung:** Nicht der Name!_<br> (*Den Suchschlüssel kannst Du unter dem Menüpunkt "[Organisation](Menu)" nachschauen.*) |

## Nächste Schritte
- [Nachbestelldaten importieren](Nachbestelldaten_importieren).
