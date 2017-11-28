---
title: Wie erstelle ich eine Bestellung für ausgewählte Produkte aus einem Auftrag?
layout: default
tags:
  - Workflow
  - Einkauf
lang: de
sequence: 60
ref: create_individual_po_from_so
---

## Übersicht
Möchtest Du ausgewählte Produkte aus einem Auftrag in selbst bestimmter Menge in eine Bestellung übertragen, kannst Du diese Bestellung einfach direkt aus dem fertiggestellten Auftrag erstellen. Gehe hierzu wie folgt vor:

## Voraussetzungen
**Folgende Bedingungen müssen erfüllt sein:**

1. Die zu bestellenden [Produkte](NeuesProdukt) müssen mit einem [Geschäftspartner (Lieferanten)](Neuer_Geschaeftspartner_Lieferant) [verknüpft](Produkt_mit_Geschaeftspartner_verknuepfen) sein.
1. Dieser Geschäftspartner muss als [**gegenwärtiger Lieferant**](Gegenwaertigen_Lieferanten_festlegen) für die Produkte festgelegt sein.
1. Dieser Lieferant muss mit derselben/denselben [Preisliste/n](ProduktPreis) wie die zu bestellenden Produkte verknüpft sein.

## Schritte
1. [Erfasse einen Auftrag](Auftrag_erfassen) und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Selektiere](AuswahlBelege) ein oder mehrere Produkte, welche Du bestellen möchtest.
1. [Starte die Aktion](AktionStarten) "Create purchase orders". Es öffnet sich ein neues Fenster.
 >**Hinweis:** Diese Aktion wird erst verfügbar, wenn mindestens eine Zeile ausgewählt ist.

1. Gib die gewünschte **Bestellmenge** der Produkte in die jeweiligen Felder ein.
1. Klicke auf "Bestätigen", um die Bestellung zu erstellen und das Fenster zu schließen.
1. Du erhältst oben rechts eine Benachrichtigung ![](assets/NotificationBell_WebUI.png), sobald die Bestellung erstellt ist.
1. Folge dem Link in der Benachrichtigung, um die Bestellung zu öffnen.
 >**Hinweis:** Die Bestellung ist bereits fertiggestellt.

## Beispiel
![](assets/Einzelne Bestellung aus Auftrag erstellen.gif)
