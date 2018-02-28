---
title: Wie produziere ich ein Produkt?
layout: default
tags:
  - Workflow
  - Produktion
lang: de
sequence: 20
ref: productioncompletion
---

## Übersicht
metasfresh bietet zwei Möglichkeiten, den Materialverbrauch bei der Produktion zu protokollieren:
1. Ein Produkt herstellen, ohne Material zu verbrauchen.
1. Ein Produkt herstellen und Materialverbrauch protokollieren.

## Vorbereitung
Stelle sicher, dass Du diejenigen Produkte, die Du bei der Produktion verbrauchst, vorher auch auf Lager hast.
[Hier](Zu_Bestellung_Wareneingang_erstellen) kannst Du nachlesen, wie Du einen Wareneingang erstellst.

## Schritte
1. Öffne einen [fertigen Produktionsauftrag](NeuerProduktionsauftrag).
1. [Starte die Aktion](AktionStarten) "Produzieren". Es öffnet sich das Produktionsfenster.
 >**Hinweis:** Hast Du den Produktionsauftrag in der Listenansicht selektiert, kannst Du ebenfalls über den [Quick-Actions](AktionStarten)-Button oben rechts die Aktion ![](assets/Actionbutton_Produzieren.png) starten.

### 1. Produkt herstellen, ohne Material zu verbrauchen
Dies ist die einfachste Möglichkeit in metasfresh zu produzieren. Hierbei wird die produzierte Menge einfach zugebucht, ohne die benötigten Produkte von der Stückliste abzubuchen.

1. Selektiere im Produktionsfenster das Produkt (**MP**), welches Du herstellen möchtest, z.B. "Karotten gestückelt".
 ![](assets/ProduktionFertigstellung_Produktionsfenster.png)

1. Wähle über den Quick-Actions-Button "Empfangen" aus.<br>
 ![](assets/ProduktionFertigstellung_empfangen_1.png)<br>
 >**Hinweis:** Wurde dem Produkt eine Packvorschrift zugewiesen, erscheint diese auf dem Quick-Actions-Button anstelle von "Empfangen".
  ![](assets/ProduktionFertigstellung_empfangen_2.png)

1. Es öffnet sich ein neues Fenster.
 ![](assets/ProduktionFertigstellung-ea202.png)

1. ***Optional:*** Wähle eine **Packvorschrift TU** aus.
1. ***Optional:*** Wähle eine **Packvorschrift LU** aus.
1. Trage im Feld **Menge CU** die empfangene Menge des Produkts ein.
1. Trage im Feld **Menge TU** die Anzahl der Transporteinheiten ein.
 >**Hinweis 1:** Das Feld **Menge TU** erscheint nur, wenn auch eine **Packvorschrift TU** ausgewählt wurde.<br><br>
 >**Hinweis 2:** Die Menge TU muss **mindestens 1** betragen.

1. Trage im Feld **Menge LU** die Anzahl der Ladehilfsmittel ein.
 >**Hinweis 1:** Das Feld **Menge LU** erscheint nur, wenn auch eine **Packvorschrift LU** ausgewählt wurde.<br><br>
 >**Hinweis 2:** Das Feld **Packvorschrift LU** erscheint nur, wenn auch eine **Packvorschrift TU** ausgewählt wurde.<br><br>
 >**Hinweis 3:** Die Menge LU muss **mindestens 1** betragen.

1. Klicke auf "Start", um die empfangenen HUs zu erfassen und das Fenster zu schließen.
1. Nach erfolgreicher Zuordnung werden die empfangenen HUs unterhalb des herzustellenden Produkts aufgelistet:
 ![](assets/ProduktionFertigstellung-a5222.png)
  >**Hinweis:** Möchtest Du die Zuordnung rückgängig machen, wähle einfach die hinzugefügte HU aus, gehe zum Quick-Actions-Button und klicke auf "HU entfernen".

1. Wähle über den Quick-Actions-Button "Verarbeiten" aus, um die Materialbuchung vorzunehmen. Dadurch werden die Zeilen schreibgeschützt:
 ![](assets/ProduktionFertigstellung-ed689.png)

1. Klicke auf "Bestätigen", um das Fenster zu schließen.

## Beispiel 1
![](assets/ProduktionFertigstellung_walkthrough.gif)

---

### 2. Produkt herstellen und Materialverbrauch protokollieren
Hierbei werden die für die Produktion benötigten Produkte von der Stückliste abgebucht. Die Zubuchung der produzierten Menge erfolgt wie oben beschrieben.

1. Selektiere im Produktionsfenster die Komponente (**CO**), welche Du von der Stückliste abbuchen möchtest, z.B. "Karotten ungewaschen".
 ![](assets/ProduktionFertigstellung_Materialverbrauch.png)

1. Wähle über den Quick-Actions-Button "HU-Auswahlfenster öffnen" aus.<br>
 ![](assets/HU-Auswahlfenster_oeffnen.png)

1. Es öffnet sich eine Übersicht mit den passenden Handling Units (HU) vom Lager.
 ![](assets/ProduktionFertigstellung_Lagerübersicht.png)

1. Selektiere die HU, welche für die Produktion verbraucht werden soll.
1. Wähle über den Quick-Actions-Button "Komplette HUs hinzufügen" aus.
1. Nach erfolgreicher Zuordnung siehst Du die hinzugefügte HU unterhalb der Komponente.
![](assets/ProduktionFertigstellung_Abbuchung.png)
 >**Hinweis:** Möchtest Du die Abbuchung rückgängig machen, wähle einfach die hinzugefügte HU aus, gehe zum Quick-Actions-Button und klicke auf "HU entfernen".

1. Wähle über den Quick-Actions-Button "Verarbeiten" aus, um die Abbuchung vorzunehmen. Dadurch werden die Zeilen schreibgeschützt:
 ![](assets/HU_booking_readonly.png)

1. Klicke auf "Bestätigen", um das Fenster zu schließen.

## Beispiel 2
![](assets/ProduktionFertigstellung_Verbrauch.gif)
