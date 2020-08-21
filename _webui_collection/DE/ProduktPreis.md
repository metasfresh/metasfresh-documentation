---
title: Wie gebe ich einem Produkt einen Preis?
layout: default
tags:
  - Stammdaten
  - Produkt
lang: de
sequence: 20
ref: productprice
---

## Schritte
1. Öffne den Eintrag eines bestehenden [Produktes](Menu) bzw. [lege ein neues an](NeuesProdukt).
1. Gehe zur Registerkarte "Preis" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Version Preisliste** eine [Preislistenversion](Preislistenversion_anlegen) aus, z.B. "Testpreise Kunden" ([Verkaufspreisliste](Zuweisung_Preise_Partner#verkaufspreisliste)) oder "Testpreise Lieferanten" ([Einkaufspreisliste](Zuweisung_Preise_Partner#einkaufspreisliste)).
1. Trage einen **Standardpreis** ein.
1. Wähle eine **Maßeinheit** aus, für die der Preis gilt (Verkaufsmengeneinheit).
 >**Hinweis:** Ist die Verkaufsmengeneinheit ≠ Bestandsmengeneinheit (siehe [Produkt](NeuesProdukt)), muss eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) definiert werden.

1. Wähle im Feld **Steuerkategorie** eine Mehrwertsteuerkategorie aus, wie z.B. *normal*, *reduziert*, *steuerfrei* usw.
1. Wähle im Feld **Abr. Menge basiert auf** aus, welches Gewicht bei der Fakturierung ausschlaggebend ist, z.B. *Nominalgewicht* (Standard) oder *Catch Weight* ([bei gewichtsabhängigen Produkten](Auftrag_Catch_Weight)).
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Preis zur Liste hinzuzufügen.

## Weitere Informationen

| Feldname | Hinweis |
| :--- | :--- |
| Auszeichnungspreis | Bestimmt den Listenpreis, welcher später auf den Belegen aufgeführt wird. |
| Standardpreis | Bestimmt den tatsächlich geltenden Einkaufs- bzw. Verkaufspreis (je nachdem, ob es sich um eine Einkaufs- oder Verkaufspreisliste handelt). |
| Mindestpreis | Darf von einer manuellen Preisänderung durch den Benutzer, z.B. in der Auftragszeile, nicht unterschritten werden! |
| Maßeinheit | Bestimmt die Maßeinheit, *für die der Preis gilt* (Verkaufsmengeneinheit) und ist ***nicht zu verwechseln*** mit der Maßeinheit des Artikels für die Bestandsführung (Bestandsmengeneinheit)! |
| Abr. Menge basiert auf | Bestimmt, welches Gewicht bei der Fakturierung ausschlaggebend ist.<br> &#8226;&nbsp;*Nominalgewicht*: Das Standardgewicht, welches durch [Maßeinheitenumrechnung](Masseinheiten_umrechnen) zwischen Bestands- und Verkaufsmengeneinheit erlangt wird (Durchschnittsgewicht).<br> &#8226;&nbsp;*Catch Weight*: Das tatsächliche Gewicht eines Produktes, welches durch Wiegen der Ware erlangt wird. ([Verwaltung von Gewichtsware](Auftrag_Catch_Weight)) |

## Beispiel
<kbd><img src="assets/neuerproduktpreis.gif" alt="GIF: Produktpreis vergeben"></kbd>
