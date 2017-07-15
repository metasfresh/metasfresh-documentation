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

## Vorbereitung
Stelle sicher, dass Du diejenigen Produkte, die Du bei der Produktion verbrauchst, vorher auch auf Lager hast.
[Hier](Zu_Bestellung_Wareneingang_erstellen) kannst Du nachlesen, wie Du einen Wareneingang erstellst.

## Schritte

1. Lege einen [neuen Produktionsauftrag](NeuerProduktionsauftrag) an.
1. Wähle den Produktionsauftrag in der [Listenansicht](Ansichten) unter "[Produktionsaufträge](Menu)" aus.
1. [Starte die Aktion](AktionStarten) "Produzieren". Es öffnet sich das Produktionsfenster.

### Produkt herstellen, ohne Material zu verbrauchen
Dies ist die einfachste Möglichkeit in metasfresh zu produzieren. Hierbei wird die produzierte Menge einfach zugebucht, ohne die benötigten Produkte aus der Stückliste abzubuchen.


1. Klicke im Produktionsfenster das Produkt an, welches Du herstellen möchtest, z.B. "Karotten gestückelt".
 ![](assets/ProduktionFertigstellung_Produktionsfenster.png)

1. Wähle über den Aktionsbutton "empfangen" aus.
 ![](assets/ProduktionFertigstellung_empfangen_1.png)<br>
 >Hinweis: Wurde dem Produkt eine Gebindekonfiguration zugewiesen, erscheint diese auf dem Aktionsbutton anstelle von "empfangen".
  ![](assets/ProduktionFertigstellung_empfangen_2.png)

1. Es öffnet sich ein neues Fenster.
 ![](assets/ProduktionFertigstellung-ea202.png)

1. Im Feld **Menge CU** trägst Du die fertiggestellte Menge des Produkts ein.

1. Im Feld **Menge TU** trägst Du die Menge der Verpackungseinheiten ein.
  >Hinweis: Die Menge TU muss **mindestens 1** betragen.

1. Im Feld **Menge LU** trägst Du die Menge der Ladehilfsmittel ein.
 > Hinweis: Wenn Du keine Menge LU benötigst, klicke einfach auf das ![](assets/DeleteButton_X.png) bei der Packvorschrift. Dann verschwindet dieses Feld.

1. Klicke auf "Start", um die Zuordnung zu speichern.

1. Nach erfolgreicher Zuordnung siehst Du die zugeordneten Produkte unterhalb des herzustellenden Produktes:
 ![](assets/ProduktionFertigstellung-a5222.png)

1. Wähle über den Aktionsbutton "Status: Planning complete" aus, um die Materialbuchungen vorzunehmen. Dadurch werden die Zeilen schreibgeschützt:
 ![](assets/ProduktionFertigstellung-ed689.png)

1. Klicke auf "Bestätigen", um das Fenster zu schließen.

## Beispiel
![](assets/ProduktionFertigstellung_walkthrough.gif)
