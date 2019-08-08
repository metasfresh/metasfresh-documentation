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
Stimmt die Bestandsmengeneinheit eines Produktes nicht mit seiner Verkaufsmengeneinheit überein, muss eine Umrechnung angelegt werden.

#### Zum Beispiel:
Du führst Erdbeeren mit der Bestandsmengeneinheit (BME) "Kilogramm" im Bestand. Du verkaufst sie allerdings in 250g Schalen, also in der Verkaufsmengeneinheit (VME) "Stück".

Ergo:<br>
Aus 1 Kilogramm erhältst Du 4 Stück 250g Schalen Erdbeeren.<br>
1 Schale enthält 0,25 kg Erdbeeren.

## Schritte
1. Öffne den Eintrag eines bestehenden [Produktes](Menu) bzw. [lege ein neues an](NeuesProdukt).
1. Gehe zur Registerkarte "Maßeinheit Umrechnung" unten auf der Seite und klicke auf ![](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Das Feld **Maßeinheit Quelle** muss mit der Bestandsmengeneinheit des Artikels übereinstimmen, z.B. hier "Kilogramm".
1. Das Feld **Maßeinheit Ziel** bestimmt die Maßeinheit, in die umgerechnet werden soll, z.B. hier "Stück".
1. Das Feld **Quelle-Ziel Faktor** bestimmt den Faktor, mit dem die Menge in der Quellmaßeinheit multipliziert werden soll, um die entsprechende Menge in der Zielmaßeinheit zu erhalten.<br>
***Beispiel:*** `1 kg × 4 = 4 Stk.`
1. Das Feld **Ziel-Quelle Faktor** bestimmt den Faktor, mit dem die Menge in der Zielmaßeinheit multipliziert werden soll, um die entsprechende Menge in der Quellmaßeinheit zu erhalten.<br>
***Beispiel:*** `1 Stk. × 0,25 = 0,25 kg`.
 >**Hinweis:** Bei der Eingabe des einen Faktors wird der jeweils andere automatisch berechnet.

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Umrechnung zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole die Schritte 2 bis 7, um weitere Umrechnungen anzulegen.

## Beispiel
![](assets/Masseinheiten_umrechnen.gif)
