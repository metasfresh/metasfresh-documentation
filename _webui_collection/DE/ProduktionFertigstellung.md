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

## Überblick
metasfresh bietet zwei Möglichkeiten, den Materialverbrauch bei der Produktion zu protokollieren:
1. Ein Produkt herstellen, ohne Material zu verbrauchen.
1. Ein Produkt herstellen und Materialverbrauch protokollieren.

## Voraussetzungen
- Vergewissere Dich vor der Produktion, dass die benötigten Produkte in ausreichender Menge für den Verbrauch auf Lager sind.<br>
Um den Bestand aufzufüllen, kannst Du einen [Wareneingang erstellen](Zu_Bestellung_Wareneingang_erstellen).

## Schritte
1. Öffne den Eintrag eines [fertiggestellten Produktionsauftrags](NeuerProduktionsauftrag).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Produzieren". Es öffnet sich ein Overlay-Fenster, das Produktionsfenster.
 >**Hinweis:** Hast Du den Produktionsauftrag in der [Listenansicht](Ansichten#listenansicht) selektiert, kannst Du ebenfalls über den [Quick-Actions](AktionStarten#quick-actions)-Button oben rechts die Aktion ![](assets/Actionbutton_Produzieren.png) starten.

### a) Produkt herstellen, ohne Material zu verbrauchen
Dies ist die einfachste Möglichkeit in metasfresh zu produzieren. Hierbei wird die produzierte Menge einfach dem Bestand zugebucht, ohne dass die benötigten Stücklistenkomponenten abgebucht werden.

1. [Selektiere](AuswahlBelege) im Produktionsfenster das Produkt (**MP**), welches Du herstellen möchtest, z.B. "Karotten gestückelt".
 <kbd><img src="assets/ProduktionFertigstellung_Produktionsfenster.png" alt="Abb.: Produktionsfenster"></kbd>

1. [Starte die Quick-Action](AktionStarten#quick-actions) "Empfangen".<br>
 ![](assets/ProduktionFertigstellung_empfangen_1.png)<br>
 >**Hinweis:** Wurde dem Produkt eine Packvorschrift zugewiesen, erscheint diese auf dem Quick-Actions-Button anstelle von "Empfangen".
  <kbd><img src="assets/ProduktionFertigstellung_empfangen_2.png" alt="Abb.: HUs empfangen"></kbd>

1. Es öffnet sich ein weiteres Overlay-Fenster.
 <kbd><img src="assets/ProduktionFertigstellung-ea202.png" alt="Abb.: HUs empfangen (Overlay)"></kbd>

1. ***Optional:*** Wähle eine **Packvorschrift TU** aus.
1. ***Optional:*** Wähle eine **Packvorschrift LU** aus.
1. Trage in das Feld **Menge CU** die empfangene Menge des Produktes ein.
1. Trage in das Feld **Menge TU** die Anzahl der Transporteinheiten ein.
 >**Hinweis 1:** Das Feld **Menge TU** erscheint nur, wenn auch eine **Packvorschrift TU** ausgewählt wurde.<br><br>
 >**Hinweis 2:** Die Menge TU muss ***mindestens 1*** betragen.

1. Trage in das Feld **Menge LU** die Anzahl der Ladehilfsmittel ein.
 >**Hinweis 1:** Das Feld **Menge LU** erscheint nur, wenn auch eine **Packvorschrift LU** ausgewählt wurde.<br><br>
 >**Hinweis 2:** Das Feld **Packvorschrift LU** erscheint nur, wenn auch eine **Packvorschrift TU** ausgewählt wurde.<br><br>
 >**Hinweis 3:** Die Menge LU muss ***mindestens 1*** betragen.

1. Klicke auf "Start", um die empfangenen HUs zu erfassen und das Overlay-Fenster zu schließen.
1. Nach erfolgreicher Zuordnung werden die empfangenen HUs unterhalb des herzustellenden Produktes aufgelistet:
 <kbd><img src="assets/ProduktionFertigstellung-a5222.png" alt="Abb.: Empfangene HUs nach Zuordnung"></kbd>
  >**Hinweis:** Möchtest Du die Zuordnung rückgängig machen, wähle einfach die hinzugefügte HU aus, gehe zum Quick-Actions-Button und klicke auf "HU entfernen".

1. [Starte die Quick-Action](AktionStarten#quick-actions) "Verarbeiten", um die Materialbuchung vorzunehmen. Dadurch werden die Zeilen schreibgeschützt:
 <kbd><img src="assets/ProduktionFertigstellung-ed689.png" alt="Abb.: Materialbuchung"></kbd>

1. Klicke auf "Bestätigen", um das Produktionsfenster zu schließen.

## Beispiel 1
<kbd><img src="assets/ProduktionFertigstellung_walkthrough.gif" alt="GIF: Produktion-Fertigstellung (Walkthrough 1)"></kbd>

---

### b) Produkt herstellen und Materialverbrauch protokollieren
Hierbei werden die für die Produktion benötigten Stücklistenkomponenten vom Bestand abgebucht. Die Zubuchung der produzierten Menge erfolgt wie oben beschrieben.

1. [Selektiere](AuswahlBelege) im Produktionsfenster die Stücklistenkomponente (**CO**), welche Du vom Bestand abbuchen möchtest, z.B. "Karotten ungewaschen".
 <kbd><img src="assets/ProduktionFertigstellung_Materialverbrauch.png" alt="Abb.: Materialverbrauch"></kbd>

1. [Starte die Quick-Action](AktionStarten#quick-actions) "HU-Auswahlfenster öffnen".<br>
 ![](assets/HU-Auswahlfenster_oeffnen.png)

1. Es öffnet sich eine Übersicht auf der rechten Seite mit den passenden Handling Units (HU) vom Lager.
 <kbd><img src="assets/ProduktionFertigstellung_Lagerübersicht.png" alt="Abb.: Lagerübersicht"></kbd>

1. [Selektiere](AuswahlBelege) die HU, welche für die Produktion verbraucht werden soll.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Komplette HUs hinzufügen".
1. Nach erfolgreicher Zuordnung siehst Du die hinzugefügte HU unterhalb der Komponente.
 <kbd><img src="assets/ProduktionFertigstellung_Abbuchung.png" alt="Abb.: Abbuchung"></kbd>
 >**Hinweis:** Möchtest Du die Abbuchung rückgängig machen, wähle einfach die hinzugefügte HU aus und starte die Quick-Action "HU entfernen".

1. [Starte die Quick-Action](AktionStarten#quick-actions) "Verarbeiten", um die Abbuchung vorzunehmen. Dadurch werden die Zeilen schreibgeschützt:
 <kbd><img src="assets/HU_booking_readonly.png" alt="Abb.: HU-Abbuchung (schreibgeschützt)"></kbd>

1. Klicke auf "Bestätigen", um das Produktionsfenster zu schließen.

## Beispiel 2
<kbd><img src="assets/ProduktionFertigstellung_Verbrauch.gif" alt="GIF: Produktion-Fertigstellung mit Verbrauch (Walkthrough 2)"></kbd>
