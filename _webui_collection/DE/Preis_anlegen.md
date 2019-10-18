---
title: Wie lege ich einen Preis an?
layout: default
tags:
  - Preisgestaltung
  - Preise
  - Preisdefinition
lang: de
sequence: 50
ref: add_price
---

## Überblick
![](assets/Preissystem Hierarchie - Preis.png)

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkt Preise".
1. [Lege einen neuen Preiseintrag an](Neuer_Datensatz_Fenster_Webui).
1. Gib das [**Produkt**](NeuesProdukt) ein, für das der Preis gelten soll, und wähle es aus den Treffern der [Dropdown-Liste](Keyboard_Shortcuts_Liste) aus.
1. Wähle im Feld **Version Preisliste** eine [Preislistenversion](Preislistenversion_anlegen) aus.
1. Trage einen **Standardpreis** ein.
1. Wähle eine **Maßeinheit** aus, für die der Preis gilt (Verkaufsmengeneinheit).
 >**Hinweis:** Ist die Verkaufsmengeneinheit ≠ Bestandsmengeneinheit (siehe [Produkt](NeuesProdukt)), muss eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) definiert werden.

1. Wähle im Feld **Steuerkategorie** eine Mehrwertsteuerkategorie aus, wie z.B. *normal*, *reduziert*, *steuerfrei* usw.
1. Wähle im Feld **Abr. Menge basiert auf** aus, welches Gewicht bei der Fakturierung ausschlaggebend ist, z.B. *Nominalgewicht* (Standard) oder *Catch Weight* ([bei gewichtsabhängigen Produkten](Auftrag_Catch_Weight)).
1. [metasfresh speichert automatisch](Speicheranzeige).

## Weitere Informationen

| Feldname | Hinweis |
| :--- | :--- |
| Auszeichnungspreis | Bestimmt den Listenpreis, welcher später auf den Belegen aufgeführt wird. |
| Standardpreis | Bestimmt den tatsächlich geltenden Einkaufs- bzw. Verkaufspreis (je nachdem, ob es sich um eine Einkaufs- oder Verkaufspreisliste handelt). |
| Mindestpreis | Darf von einer manuellen Preisänderung durch den Benutzer, z.B. in der Auftragszeile, nicht unterschritten werden! |
| Maßeinheit | Bestimmt die Maßeinheit, *für die der Preis gilt* (Verkaufsmengeneinheit) und ist ***nicht zu verwechseln*** mit der Maßeinheit des Artikels für die Bestandsführung (Bestandsmengeneinheit)! |
| Abr. Menge basiert auf | Bestimmt, welches Gewicht bei der Fakturierung ausschlaggebend ist.<br> &#8226;&nbsp;*Nominalgewicht*: Das Standardgewicht, welches durch [Maßeinheitenumrechnung](Masseinheiten_umrechnen) zwischen Bestands- und Verkaufsmengeneinheit erlangt wird (Durchschnittsgewicht).<br> &#8226;&nbsp;*Catch Weight*: Das tatsächliche Gewicht eines Produktes, welches durch Wiegen der Ware erlangt wird. ([Verwaltung von Gewichtsware](Auftrag_Catch_Weight)) |

## Nächste Schritte
- [Weise die Preise einem Partner zu](Zuweisung_Preise_Partner).

## Beispiel
![](assets/Preis_anlegen.gif)
