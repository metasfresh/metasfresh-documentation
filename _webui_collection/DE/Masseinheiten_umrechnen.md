---
title: Wie rechne ich Maßeinheiten um?
layout: default
tags:
  - Stammdaten
  - Produkt
  - Maßeinheiten
lang: de
sequence: 10
ref: convert_uoms
---

## Übersicht
Weicht die Bestandsmengeneinheit eines Produktes von der Verkaufsmengeneinheit ab, muss eine Umrechnung angelegt werden.

#### Zum Beispiel:
Du führst Erdbeeren mit der Bestandsmengeneinheit (BME) "Kilogramm" im Bestand. Du verkaufst sie allerdings in 250g Schalen, also in der Verkaufsmengeneinheit (VME) "Stück".

Ergo:<br>
Aus 1 Kilogramm Erdbeeren erhältst Du 4 Stück 250g Schalen.<br>
1 Schale enthält somit 0,25 kg Erdbeeren.

## Schritte
1. Öffne den Eintrag eines bestehenden [Produktes](Menu) bzw. [lege ein neues an](NeuesProdukt).
1. Gehe zur Registerkarte "Maßeinheit Umrechnung" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Das Feld **Maßeinheit** muss mit der Bestandsmengeneinheit des Artikels übereinstimmen, z.B. hier "Kilogramm" (Quellmaßeinheit).
1. Das Feld **Ziel-Einheit** bestimmt die Maßeinheit, in die umgerechnet werden soll, z.B. hier "Stück".
1. Das Feld **Faktor von Ziel-Einheit** bestimmt den Faktor, mit dem die Menge in der Quellmaßeinheit multipliziert werden soll, um die entsprechende Menge in der Zielmaßeinheit zu erhalten (d.h. *x Ziel pro 1 Quelle*).<br>
***Beispiel:*** `1 kg × 4 = 4 Stk.`
1. Das Feld **Faktor in Ziel-Einheit** bestimmt den Faktor, mit dem die Menge in der Zielmaßeinheit multipliziert werden soll, um die entsprechende Menge in der Quellmaßeinheit zu erhalten (d.h. *x Quelle pro 1 Ziel*).<br>
***Beispiel:*** `1 Stk. × 0,25 = 0,25 kg`.
 >**Hinweis:** Bei der Eingabe des einen Faktors wird der jeweils andere automatisch berechnet.

1. Setze ein Häkchen bei **Ziel ist Catch-Maßeinheit**, sofern es sich um Gewichtsware handelt, bei der das [Catch-Weight-Gewicht](Auftrag_Catch_Weight) ausschlaggebend für die Fakturierung ist.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Umrechnung zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole die Schritte 2 bis 8, um weitere Umrechnungen anzulegen.

## Beispiel
![](assets/Masseinheiten_umrechnen.gif)
