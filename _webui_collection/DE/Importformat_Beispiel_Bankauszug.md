---
title: Formatbeispiel für den Import von Bankauszugsdaten
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Bankauszugsdatenimport
lang: de
sequence: 10
ref: import_format_example_bank_statement
---

## Überblick
Für den Bankauszugsdatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import - Bankauszug* eingestellt ist.

In dem folgenden Beispiel wird der Dateninhalt aus einer Datei einer Tabellenkalkulationssoftware (hier z.B. eine *Excel*-Datei vor der [Konvertierung in eine CSV- oder TXT-Datei](Importdatei_nuetzliche_Hinweise)) dem Importformat für Bankauszugsdaten gegenübergestellt:

![](assets/Bankauszugsdatenimport_Excel-Tabelle_Format.png)

### Erläuterungen zum Beispiel
- Die **Spalte A** der Excel-Tabelle (*Effektives Datum*) steht an erster Stelle, d.h. das entsprechende Formatfeld bekommt die **Start-Nr. 1**. Demzufolge erhält das Formatfeld für die **Spalte B** die **Start-Nr. 2** usw.<br> Die **Reihenfolge** der Formatfelder ist dabei unerheblich.
 >**Hinweis:** metasfresh erwartet ***keine Spaltennamen*** in der Importdatei. Alleine die ***Position*** der Spalte muss mit der Startnummer übereinstimmmen.

- Der **Name** des Formatfeldes ist frei wählbar und muss nicht mit der Benennung der Spalte aus der Importdatei übereinstimmen.
- Die **Spalte** des Formatfeldes bestimmt, wohin metasfresh den Inhalt der Spalte aus der Importdatei übertragen soll.
- Der **Datentyp** bestimmt, ob es sich bei den Importdaten z.B. um eine *Zeichenfolge* oder *Zahl* handelt.
- Das erste Formatfeld "Kopfzeile IBAN" in der Liste mit dem Datentyp *Konstant* verfügt über keine Startnummer und muss daher nicht in der Importdatei enthalten sein. Die im Feld in der Spalte **Konstante** eingetragene IBAN wird immer als Transaktionskonto des Unternehmens für Zahlungsein- und -ausgänge verwendet.

### Einige nützliche Hinweise
Die Angabe der Pflichtfelder sowie die vorausgesetzte Zuordnung der IBANs zu existierenden Bankkonten sind unerlässlich für einen erfolgreichen Datenimport!

| Pflichtfeld | <abbr title="Bewege den Mauszeiger über den Feldnamen, um den entspr. Spaltennamen zu sehen.">Feldname</abbr> | Beispiel | Hinweis |
| :---: | :---: | :--- | :--- |
| X | <abbr title="IBAN_IBAN">Kopfzeile IBAN</abbr> | DE00 1234 5678 9876 5432 10 | IBAN des Kontos, auf das Zahlungsein- und -ausgänge gebucht werden (üblicherweise z.B. das Unternehmenskonto), wird hier als Konstante angegeben. Sie muss daher nicht in der Importdatei enthalten sein. |
|  | <abbr title="ValutaDate_Effective date">Effektives Datum</abbr> | 14.05.2018 | Datum, ab dem der Geldbetrag effektiv zur Verfügung steht. |
|  | <abbr title="StatementLineDate_Valuta Datum">Valutadatum</abbr> | 15.05.2018 | Wertstellungsdatum |
|  | <abbr title="Bill_BPartner_Name_Name Rechnungspartner">Rechnungspartner</abbr> | Sequoia GmbH | Name des Rechnungspartners |
| X | <abbr title="IBAN_To_IBAN_To">IBAN von/zu</abbr> | CH10 9876 5432 1234 5678 90 | IBAN des Empfänger- oder Zahlungskontos |
|  | <abbr title="TrxType_Transaction Type">Buchungsart</abbr> | SEPA Überweisung | Buchungsart der Auszugsposition |
|  | <abbr title="LineDescription_Positions-Beschreibung">Positionsbeschreibung</abbr> | Stammkapital | Beschreibung der Auszugsposition |
| X | <abbr title="StmtAmt_Statement amount">Summe Auszug</abbr> | 12.500,00 | Betrag der Auszugsposition |
| X | <abbr title="ISO_Code_ISO Währungscode">Währung</abbr> | EUR | Dreistelliger Buchstabencode (gem. ISO 4217).<br> (*Den ISO-Währungscode kannst Du unter dem Menüpunkt "[Währung](Menu)" nachschauen.*) |

## Nächste Schritte
- [Bankauszugsdaten importieren](Bankauszugsdaten_importieren).
