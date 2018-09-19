---
title: Wie erzeuge ich eine auftragsbezogene Bestellung?
layout: default
tags:
  - Workflow
  - Einkauf
lang: de
sequence: 50
ref: generate_so-related_po
---

## Übersicht
Möchtest Du gezielt alle Produkte in beauftragter Menge aus einem bestimmten Auftrag in eine Bestellung übertragen, kannst Du diese auftragsbezogene Bestellung einfach direkt aus dem fertiggestellten Auftrag erzeugen. Gehe hierzu wie folgt vor:

## Voraussetzungen
**Folgende Bedingungen müssen erfüllt sein:**

1. Die zu bestellenden [Produkte](NeuesProdukt) müssen mit einem [Geschäftspartner (Lieferanten)](Neuer_Geschaeftspartner_Lieferant) [verknüpft](Produkt_mit_Geschaeftspartner_verknuepfen) sein.
1. Dieser Geschäftspartner muss als [**gegenwärtiger Lieferant**](Gegenwaertigen_Lieferanten_festlegen) für die Produkte festgelegt sein.
1. Dieser Lieferant muss mit derselben/denselben [Preisliste/n](ProduktPreis) wie die zu bestellenden Produkte verknüpft sein.

## Schritte
1. [Erfasse einen Auftrag](Auftrag_erfassen) und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Starte die Aktion](AktionStarten) "Bestellung aus Auftrag generieren". Es öffnet sich ein Overlay-Fenster.
1. Wähle den gewünschten **Lieferanten** aus.
1. Klicke auf "Start", um die Bestellung zu erzeugen und das Overlay-Fenster zu schließen.
 >**Hinweis 1:** Die auftragsbezogene Bestellung mit der Auftragsnummer als **Referenz** findest Du unter dem Menüpunkt "[Bestellungen](Menu)" als Entwurf wieder.<br><br>
 >**Hinweis 2:** Über die [verknüpften Belege](SpringezuBelegen) kannst Du aus dem Auftrag ***direkt*** zur Bestellung springen.

## Beispiel
![](assets/Bestellung aus Auftrag generieren.gif)
