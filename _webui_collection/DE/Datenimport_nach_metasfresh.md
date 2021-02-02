---
title: Datenimport nach metasfresh
layout: default
tags:
  - Datenverwaltung
  - Datenimport
lang: de
sequence: 10
ref: data_import_metasfresh
---

## Überblick
Mithilfe der Importfunktion kannst Du extern gespeicherte Daten (wie z.B. Excel-Tabellen mit Daten zu Geschäftspartnern oder Produkten) ganz schnell nach metasfresh importieren und so ebenfalls bestehende Einträge aktualiseren. Hierzu musst Du die Daten erst entsprechend formatiert als CSV- oder TXT-Datei hochladen und kannst sie dann einfach über das [Aktionsmenü](AktionStarten#aktionsmenue) importieren.

## Voraussetzungen
1. [Lege ein Importformat mit entsprechender Datenbanktabelle an](Importformat_anlegen) (siehe Übersicht unten), in dem Du die Daten bzw. Spalten sowie deren Datentypen festlegst, welche aus der Importdatei nach metasfresh übertragen werden sollen.
1. Halte eine [Importdatei](Importdatei_nuetzliche_Hinweise) mit den dem Importformat entsprechend formatierten Daten bereit (siehe **Formatbeispiele** in der Übersicht unten).
1. Importiere Deine Daten unter Verwendung des passenden Importformats (siehe **Anleitungen** in der Übersicht unten).

   | **Wichtiger Hinweis:** |
   | :--- |
   | **1)** Beachte dabei, dass das ***Trennzeichen*** aus der Importdatei mit dem aus dem Importformat übereinstimmt (Komma, Tabulatorzeichen, Semikolon usw.).<br> **2)** Beachte außerdem, dass sowohl das ***Dezimaltrennzeichen*** als auch das ***Tausendertrennzeichen*** aus der Importdatei mit Deinen jeweiligen sprachspezifischen Systemeinstellungen übereinstimmen (z.B. dt.: *€ 1.999,95* vs. engl.: *$ 1,999.95*). |

### Übersichtstabelle

| Importdaten | DB-Tabelle | Formatbeispiel | Anleitung |
| :--- | :--- | :---: | :---: |
| Bankauszugsdaten | Import - Bankauszug | [ansehen](Importformat_Beispiel_Bankauszug) | [lesen](Bankauszugsdaten_importieren) |
| Benutzerdefinierte Dateneingaben | Import Data Entry Record | [ansehen](Importformat_Beispiel_Dateneingabe) | [lesen](Dateneingaben_importieren) |
| Geschäftspartnerdaten | Import - Geschäftspartner | [ansehen](Importformat_Beispiel_GPartner) | [lesen](GPartnerdaten_importieren) |
| IFA-Herstellerdatenimport | Import Pharma BPartners | [ansehen](Importformat_Beispiel_GPartner_Pharma) | [lesen](GPartnerdaten_importieren_Pharma) |
| IFA-Produktdaten | Import Pharma Product | [ansehen](Importformat_Beispiel_Produkt_Pharma) | [lesen](Produktdaten_importieren_Pharma) |
| Kontenrahmendaten | Import - Kontendefinition | [ansehen](Importformat_Beispiel_Kontenrahmen) | [lesen](Kontenrahmendaten_importieren) |
| Nachbestelldaten | Import Replenishment | [ansehen](Importformat_Beispiel_Nachbestellung) | [lesen](Nachbestelldaten_importieren) |
| Nutzerdaten | Import User | [ansehen](Importformat_Beispiel_Nutzer) | [lesen](Nutzerdaten_importieren) |
| Postalische Daten | Import Postal Data | [ansehen](Importformat_Beispiel_postalische_Daten) | [lesen](Postalische_Daten_importieren) |
| Produktdaten | Import - Produkt | [ansehen](Importformat_Beispiel_Produkt) | [lesen](Produktdaten_importieren) |
| Rabattschemadaten | I_DiscountSchema | [ansehen](Importformat_Beispiel_Rabattschema) | [lesen](Rabattschema_importieren) |
