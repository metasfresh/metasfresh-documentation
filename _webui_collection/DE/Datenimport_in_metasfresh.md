---
title: Datenimport in metasfresh
layout: default
tags:
  - Datenverwaltung
  - Datenimport
lang: de
sequence: 10
ref: data_import_metasfresh
---

## Überblick
Mithilfe der Importfunktion kannst Du extern gespeicherte Daten (wie z.B. Excel-Tabellen mit Daten zu Geschäftspartnern oder Produkten) ganz schnell in metasfresh importieren. Hierzu musst Du die Daten erst entsprechend formatiert als CSV- oder TXT-Datei hochladen und kannst sie dann einfach über das [Aktionsmenü](AktionStarten) importieren.

## Voraussetzungen
1. [Lege ein Importformat mit entsprechender Datenbanktabelle an](Importformat_anlegen), in dem Du die Daten bzw. Spalten sowie deren Datentypen festlegst, welche aus der Importdatei in metasfresh übertragen werden sollen.

| Zu importierende Daten | Entsprechende DB-Tabelle |
| :---: | :---: |
| Geschäftspartnerdaten | Import - Geschäftspartner |
| Produktdaten | Import - Produkt |

2. Halte eine [Importdatei](Importdatei_nuetzliche_Hinweise) mit dem Importformat entsprechend formatierten Daten bereit.<br> ***Formatbeispiele:***
 - [Geschäftspartnerdatenimport](Importformat_Beispiel_GPartner)
 - [Produktdatenimport](Importformat_Beispiel_Produkt)

1. Importiere Deine Daten unter Verwendung des entsprechenden Importformats.
 >**Hinweis:** Beachte dabei, dass das Trennzeichen aus der Importdatei mit dem aus dem Importformat übereinstimmt (Komma, Tabulatorzeichen, Semikolon usw.).

 - [Folge dieser Anleitung](GPartnerdaten_importieren), um externe Daten zu **Geschäftspartnern** in metasfresh zu importieren.
 - [Folge dieser Anleitung](Produktdaten_importieren), um externe Daten zu **Produkten** in metasfresh zu importieren.
