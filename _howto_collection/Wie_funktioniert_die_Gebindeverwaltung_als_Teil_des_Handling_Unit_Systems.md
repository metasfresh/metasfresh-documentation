---
title: Wie funktioniert die Gebindeverwaltung als Teil des Handling Unit Systems?
layout: default
tags:
  - Konzepte
lang: de
---
## Übersicht

metasfresh ermöglicht Dir ein Produkt nicht nur platt mit Bestandsmenge zu führen, sondern auch abzubilden in welcher Form der Artikel vorliegt.

So kann ein Produkt in einem Gebinde von z.B. 10 Stück in einer Kiste vorliegen, von denen wiederum 20 Kisten auf einer Palette stehen.

Das System um ein Produkt (Customer Unit = CU) mitsamt seiner Verpackung (Transport Unit = TU) und dessen Ladehilfsmittel (Loading Unit = LU) abzubilden, nennen wir **Handling Unit System**.
Somit ist eine CU in einer TU in einer LU eine **Handling Unit**.

![Handling Unit](../images/en_drawing_Handling_Unit_System.png)

## Beispiele

HU|typ|Beispiel
---|---|---
CU|Produkt|Stückgut (z.B. Salatkopf), Schüttgut (z.B. Sand) oder Fließgut (z.B. Milch)
TU|Verpackung|Einwegkiste, Mehrwegkiste (z.B. Eurobox, IFCO), Aufsteller,Getränkekiste, usw.
LU|Ladehilfsmittel|Palette, Container, Paloxe, usw.

## Einrichtung

HU|Konfiguration
---|---|---
CU|[Wie konfiguriere ich ein Produkt für die Nutzung im Gebinde ?](Wie_konfiguriere_ich_ein_Produkt_für_die_Nutzung_im_Gebinde)
TU|[Wie erstelle ich eine Packvorschrift ?](Wie_erstelle_ich_eine_Packvorschrift) 
LU|Wie weise ich eine LU einer Packvorschrift zu?

## Begriffsklärung

| Begriff         | Beantwortet diese Fragen                                    |
| --------------- | ----------------------------------------------------------- |
| CU (Customer Unit)  |  Was ist mein Produkt?|
| TU (Transport Unit) |  In welcher Verpackung ist mein Produkt ?|
| LU (Loading Unit)	  | Welches Ladehilfsmittel wird verwendet? |
| Packvorschrift  | Welche Regeln gelten für eine Packung ?                     |
| Packmittel      |  Aus welchem Packmittel besteht die Verpackung?             |
| Packgut         | Darf ich in diese Packung auch ein Produkt tun?             |
| VirtualPI		  |	Ist die HU eine physikalische Packung oder eine virtuelle?  |
| Handling Unit Typ| Handelt es sich um eine VirtualPI, TU oder LU ?				|



