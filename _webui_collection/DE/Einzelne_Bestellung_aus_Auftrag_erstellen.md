---
title: Wie erstelle ich eine Bestellung für ausgewählte Produkte aus einem Auftrag?
layout: default
tags:
  - Einkauf
lang: de
sequence: 60
ref: create_individual_po_from_so
---

## Überblick
Möchtest Du ausgewählte Produkte aus einem Auftrag in selbst bestimmter Menge in eine Bestellung übertragen, kannst Du diese Bestellung einfach direkt aus dem Auftrag (Entwurf oder fertiggestellt) erstellen. Gehe hierzu wie folgt vor:

## Voraussetzungen
**Folgende Bedingungen müssen erfüllt sein:**

1. Die zu bestellenden [Produkte](NeuesProdukt) müssen mit einem [Geschäftspartner (Lieferanten)](Neuer_Geschaeftspartner_Lieferant) [verknüpft](Produkt_mit_Geschaeftspartner_verknuepfen) sein.
1. Dieser Geschäftspartner muss als [**gegenwärtiger Lieferant**](Gegenwaertigen_Lieferanten_festlegen) für die Produkte festgelegt sein.
1. Dieser Lieferant muss mit derselben/denselben [Preisliste/n](ProduktPreis) wie die zu bestellenden Produkte sowie [mit einem Rabattschema verknüpft](Rabattschema_mit_GP_verknuepfen) sein.

## Schritte
1. [Erfasse einen Auftrag](Auftrag_erfassen).
1. [Selektiere](AuswahlBelege) die Auftragszeilen mit den Produkten, welche Du bestellen möchtest.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Bestellungen disponieren". Es öffnet sich ein Overlay-Fenster.
 >**Hinweis:** Diese Aktion wird erst verfügbar, wenn mindestens eine Auftragszeile ausgewählt ist.

1. Klicke links in der Bestellzeile auf !['+'](assets/expand_list_plus.png), um sie aufzuklappen.
 >**Hinweis:** Drücke `+`.

1. Gib die gewünschte **Bestellmenge** der Produkte in die jeweiligen Felder ein und bestätige mit `↵ Enter`.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Bestellung zu erstellen.

### Fall 1: Auftrag als Entwurf
Hast Du nur einen Entwurf des Auftrages erstellt, wird die Bestellung an die Bestelldisposition weitergeleitet und erst dann generiert, wenn der Auftrag [fertiggestellt](BelegverarbeitungFertigstellen) wird. Um die disponierte Bestellung einzusehen, [gehe ins Menü](Menu) und öffne das Fenster "Bestelldisposition".

### Fall 2: Fertiggestellter Auftrag
Wenn Du den Auftrag [fertigstellst](BelegverarbeitungFertigstellen) oder die Bestellung aus einem fertiggestellten Auftrag erstellst, dann wird sie sofort generiert:

1. Du erhältst oben rechts eine [Benachrichtigung](Benachrichtigungsarten) ![](assets/NotificationBell_WebUI.png), sobald die Bestellung erstellt ist.
1. Klicke auf die Benachrichtigung, um die Bestellung zu öffnen.
 >**Hinweis 1:** Über die [verknüpften Belege](SpringezuBelegen) kannst Du aus dem Auftrag auch ***direkt*** zur Bestellung springen.<br><br>
 >**Hinweis 2:** Die Bestellung ist bereits fertiggestellt.

## Beispiel
<kbd><img src="assets/Einzelne Bestellung aus Auftrag erstellen.gif" alt="GIF: Einzelne Bestellung aus Auftrag erstellen"></kbd>
