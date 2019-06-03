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
Mithilfe der Importfunktion kannst Du extern gespeicherte Daten (wie z.B. Excel-Tabellen mit Daten zu Geschäftspartnern oder Produkten) ganz schnell in metasfresh importieren und so ebenfalls bestehende Einträge aktualiseren. Hierzu musst Du die Daten erst entsprechend formatiert als CSV- oder TXT-Datei hochladen und kannst sie dann einfach über das [Aktionsmenü](AktionStarten) importieren.

## Voraussetzungen

| Zu importierende Daten | Entsprechende DB-Tabelle |
| :---: | :---: |
| Geschäftspartnerdaten | Import - Geschäftspartner |
| Nachbestelldaten | Import Replenishment |
| Produktdaten | Import - Produkt |

1. [Lege ein Importformat mit entsprechender Datenbanktabelle an](Importformat_anlegen) (siehe oben), in dem Du die Daten bzw. Spalten sowie deren Datentypen festlegst, welche aus der Importdatei in metasfresh übertragen werden sollen.
1. Halte eine [Importdatei](Importdatei_nuetzliche_Hinweise) mit den dem Importformat entsprechend formatierten Daten bereit.<br> ***Formatbeispiele:***
 - [Geschäftspartnerdatenimport](Importformat_Beispiel_GPartner)
 - [Nachbestelldatenimport](Importformat_Beispiel_Nachbestellung)
 - [Produktdatenimport](Importformat_Beispiel_Produkt)

1. Importiere Deine Daten unter Verwendung des entsprechenden Importformats.
 >**Hinweis:** Beachte dabei, dass das Trennzeichen aus der Importdatei mit dem aus dem Importformat übereinstimmt (Komma, Tabulatorzeichen, Semikolon usw.).

 - [Folge dieser Anleitung](GPartnerdaten_importieren), um externe Daten zu **Geschäftspartnern** in metasfresh zu importieren.
 - [Folge dieser Anleitung](GPartnerdaten_importieren), um externe Daten zu **Nachbestellungen** in metasfresh zu importieren.
 - [Folge dieser Anleitung](Produktdaten_importieren), um externe Daten zu **Produkten** in metasfresh zu importieren.
