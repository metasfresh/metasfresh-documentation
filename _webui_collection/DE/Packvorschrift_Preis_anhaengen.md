---
title: Wie hänge ich eine Packvorschrift an einen Preis?
layout: default
tags:
  - Stammdaten
  - Produkt
  - Packvorschriften
lang: de
sequence: 20
ref: add_packing-instructions_to_price
---

## Übersicht
Wenn Du ein Produkt verkaufst, tust Du dies nicht unbedingt immer nach der Bestandsmengeneinheit, sondern legst eine abweichende Verkaufsmengeneinheit fest, die je nachdem auch in Gebinden zusammengefasst wird.

Unter "Produkt Preise" kannst Du daher sowohl Packvorschriften festlegen als auch einstellen, ob der Preis von der Bestandsmengeneinheit oder der Verkaufsmengeneinheit abhängig ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkt Preise".
1. Öffne den Eintrag eines bestehenden Preises bzw. [lege einen neuen an](Preis_anlegen).
1. Wähle eine **Packvorschrift** aus.
 >**Hinweis:** Packvorschriften werden erst angezeigt, wenn sie vorher dem [Produkt zugeordnet](CU-TU_Zuordnung) wurden.

1. Soll der Preis auf Grundlage der im Eintrag festgelegten Verkaufsmengeneinheit berechnet werden, dann setze ein Häkchen bei **Preis ist attributabhängig**. Ansonsten gilt die Bestandsmengeneinheit des Produkts.
 >**Hinweis:** Ist die Verkaufsmengeneinheit ≠ Bestandsmengeneinheit, muss eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) angelegt werden.

1. [metasfresh speichert automatisch](Speicheranzeige).

<br>
#### Wie funktioniert die "Attributabhängigkeit"?
**Fall 1:** Der Preis ist *NICHT* attributabhängig.

Das Kästchen **Preis ist attributabhängig** ist nicht abgehakt:<br>
![](assets/Preis_nicht_attributabhaengig.png)

***Folgen:*** metasfresh berechnet die Auftragszeilensumme im Auftrag auf Grundlage der Bestandsmengeneinheit des Produkts.

Auftrag:<br>
![](assets/Auftrag_pro_BME.png)<br>

Bestandsmengeneinheit:<br>
![](assets/BME_Preistab.png)

<br>
**Fall 2:** Der Preis *IST* attributabhängig.

Das Kästchen **Preis ist attributabhängig** ist abgehakt:<br>
![](assets/Preis_attributabhaengig.png)

***Folgen:*** metasfresh berechnet die Auftragszeilensumme im Auftrag auf Grundlage der Verkaufsmengeneinheit des Produkts (siehe oben).

Auftrag:<br>
![](assets/Auftrag_pro_VME.png)

## Beispiel
![](assets/Packvorschrift_Preis_anhaengen.gif)
