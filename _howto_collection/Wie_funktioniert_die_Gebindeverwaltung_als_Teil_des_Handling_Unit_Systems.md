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

HU|Konfiguration|Erklärung
---|---|---
CU|[Wie lege ich ein Produkt an?](Wie_lege_ich_ein_neues_Produkt_an)|Zeigt wie Du eine CU erstellst und ihr eine oder mehrere Packvorschriften (CU-TU Zuordnung) zuweist.
TU|Wie lege ich eine Packvorschrift an? 
LU|Wie weise ich eine LU einer Packvorschrift zu?

## Begriffsklärung

|                 | Beantwortet diese Fragen                                    | Wo in metasfresh zu finden?                |
| --------------- | ----------------------------------------------------------- | ------------------------------------------ |
| CU-TU Zuordnung | In welche Verpackungen (TUs) kann ich mein Produkt packen?  | Fenster Produkt → Register CU-TU Zuordnung |
|                 | Wie viele Produkte passen in eine Verpackung (TU)?          | Feld Menge                                 |
| Packvorschrift  |                                                             | Fenster Packvorschrift                     |
| Packmittel      |  Aus welchem Packmittel besteht die Verpackung?             | Fenster Packvorschrift  → Packmittel       |
| Packgut         | Darf ich in diese Packung auch ein Produkt tun?             | Fenster Packvorschrift  → Packgut          |