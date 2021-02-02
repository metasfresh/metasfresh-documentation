---
title: Wie erzeuge ich eine auftragsbezogene Bestellung?
layout: default
tags:
  - Einkauf
lang: de
sequence: 50
ref: generate_so-related_po
---

## Überblick
Möchtest Du gezielt alle Produkte in beauftragter Menge aus einem bestimmten Auftrag in eine Bestellung übertragen, kannst Du diese auftragsbezogene Bestellung einfach direkt aus dem fertiggestellten Auftrag erzeugen. Gehe hierzu wie folgt vor:

## Voraussetzungen
**Folgende Bedingungen müssen erfüllt sein:**

1. Die zu bestellenden [Produkte](NeuesProdukt) müssen mit einem [Geschäftspartner (Lieferanten)](Neuer_Geschaeftspartner_Lieferant) [verknüpft](Produkt_mit_Geschaeftspartner_verknuepfen) sein.
1. Dieser Geschäftspartner muss als [**gegenwärtiger Lieferant**](Gegenwaertigen_Lieferanten_festlegen) für die Produkte festgelegt sein.
1. Dieser Lieferant muss mit derselben/denselben [Preisliste/n](ProduktPreis) wie die zu bestellenden Produkte sowie [mit einem Rabattschema verknüpft](Rabattschema_mit_GP_verknuepfen) sein.

## Schritte
1. [Erfasse einen Auftrag](Auftrag_erfassen) und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Bestellung aus Auftrag generieren". Es öffnet sich ein Overlay-Fenster.
1. ***Optional:*** Wähle einen abweichenden **Lieferanten** aus.
 >**Hinweis 1:** Wird kein abweichender Lieferant ausgewählt, so kommt standardmäßig der gegenwärtige Lieferant zur Anwendung.<br><br>
 >**Hinweis 2:** Abweichende Lieferanten müssen ebenso wie der gegenwärtige [mit einem Rabattschema verknüpft](Rabattschema_mit_GP_verknuepfen) sein.

1. Klicke auf "Start", um die Bestellung zu erzeugen und das Overlay-Fenster zu schließen.
1. [Springe über die verknüpften Belege](SpringezuBelegen) des Auftrages in das Fenster "[Bestellungen](Menu)" (unter BESCHAFFUNG in der Sidebar). Dort findest Du die auftragsbezogene Bestellung im Status *Entwurf* mit der Auftragsnummer als **Referenz** wieder.<br><br>

## Beispiel
<kbd><img src="assets/Bestellung aus Auftrag generieren.gif" alt="GIF: Bestellung aus Auftrag generieren"></kbd>
