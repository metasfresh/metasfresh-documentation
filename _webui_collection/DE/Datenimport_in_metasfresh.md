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
Mithilfe der Importfunktion kannst Du extern gespeicherte Daten (wie z.B. Excel-Tabellen mit Daten zu Geschäftspartnern oder Produkten) ganz schnell nach metasfresh importieren und so ebenfalls bestehende Einträge aktualiseren. Hierzu musst Du die Daten erst entsprechend formatiert als CSV- oder TXT-Datei hochladen und kannst sie dann einfach über das [Aktionsmenü](AktionStarten) importieren.

## Voraussetzungen

| Zu importierende Daten | Entsprechende DB-Tabelle |
| :--- | :---: |
| Geschäftspartnerdaten | Import - Geschäftspartner |
| IFA-Herstellerdatenimport | Import Pharma BPartners |
| IFA-Produktdaten | Import Pharma Product |
| Nachbestelldaten | Import Replenishment |
| Produktdaten | Import - Produkt |
| Rabattschemadaten | I_DiscountSchema |

1. [Lege ein Importformat mit entsprechender Datenbanktabelle an](Importformat_anlegen) (siehe oben), in dem Du die Daten bzw. Spalten sowie deren Datentypen festlegst, welche aus der Importdatei in metasfresh übertragen werden sollen.
1. Halte eine [Importdatei](Importdatei_nuetzliche_Hinweise) mit den dem Importformat entsprechend formatierten Daten bereit.<br> ***Formatbeispiele:***
 - [Geschäftspartnerdatenimport](Importformat_Beispiel_GPartner)
 - [IFA-Herstellerdatenimport](Importformat_Beispiel_GPartner_Pharma)
 - [IFA-Produktdatenimport](Importformat_Beispiel_Produkt_Pharma)
 - [Nachbestelldatenimport](Importformat_Beispiel_Nachbestellung)
 - [Produktdatenimport](Importformat_Beispiel_Produkt)
 - [Rabattschemadatenimport](Importformat_Beispiel_Rabattschema)

1. Importiere Deine Daten unter Verwendung des entsprechenden Importformats.
 >**Hinweis:** Beachte dabei, dass das Trennzeichen aus der Importdatei mit dem aus dem Importformat übereinstimmt (Komma, Tabulatorzeichen, Semikolon usw.).

 - [Folge dieser Anleitung](GPartnerdaten_importieren), um externe Daten zu **Geschäftspartnern** nach metasfresh zu importieren.
 - [Folge dieser Anleitung](GPartnerdaten_importieren_Pharma), um externe Daten zu **IFA-Herstellern** nach metasfresh zu importieren.
 - [Folge dieser Anleitung](Produktdaten_importieren_Pharma), um externe Daten zu **IFA-Produkten** nach metasfresh zu importieren.
 - [Folge dieser Anleitung](Nachbestelldaten_importieren), um externe Daten zu **Nachbestellungen** nach metasfresh zu importieren.
 - [Folge dieser Anleitung](Produktdaten_importieren), um externe Daten zu **Produkten** nach metasfresh zu importieren.
 - [Folge dieser Anleitung](Rabattschema_importieren), um externe Daten zu **Rabattschemata** nach metasfresh zu importieren.
