---
title: Wie verarbeite ich Aufträge mit gewichtsabhängigen Produkten? (Verwaltung von Gewichtsware)
layout: default
tags:
  - Workflow
  - Verkauf
  - Catch Weight Management
lang: de
sequence: 10
ref: sales_order_catch_weight
---

## Überblick
Beim Catch Weight Management handelt es sich um die Verwaltung von gewichtsabhängigen Produkten, die einerseits mit einem durchschnittlichen Standardgewicht (welches durch [Maßeinheitenumrechnung](Masseinheiten_umrechnen) erlangt wird) bestandsgeführt, verkauft, empfangen, transportiert, kommissioniert und versendet werden, andererseits aber auch gewogen und mit dem tatsächlichen Gewicht (dem sogenannten *Catch-Weight-Gewicht*) abgerechnet werden.

Daher bietet metasfresh die Möglichkeit, das abweichende Catch-Weight-Gewicht von Produkten vor ihrem Versand in der Lieferdisposition zu erfassen und so bei der Fakturierung sicherzustellen, dass nur die Menge abgerechnet wird, die der Kunde auch tatsächlich erhalten hat.

## Voraussetzungen
1. Konfiguriere das betreffende Produkt als "Catch-Weight-Produkt", indem Du ihm entweder [einen Preis hinzufügst](ProduktPreis) oder [einen neuen Produktpreis anlegst](Preis_anlegen) und dabei jeweils im Feld **Abr. Menge basiert auf** *Catch Weight* einstellst.

   <kbd><img src="assets/Catch_Weight_Produktpreis.png" alt="Abb.: Abr. Menge basiert auf 'Catch Weight'"></kbd>

1. Lege eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) an, in der das Kontrollkästchen **Ziel ist Catch-Maßeinheit** aktiviert ist.

   <kbd><img src="assets/Catch_Masseinheit_Umrechnung.png" alt="Abb.: Ziel ist Catch-Maßeinheit ='Y'"></kbd>

## Schritte

### Auftrag erfassen
1. [Erfasse einen Auftrag](Auftrag_erfassen) mit dem Catch-Weight-Produkt und [stelle ihn fertig](BelegverarbeitungFertigstellen).

### Catch-Weight-Gewicht erfassen
1. [Springe zur](SpringezuBelegen) "Lieferdisposition".
1. Öffne den Lieferdispo-Eintrag mit dem Catch-Weight-Produkt.
1. Trage rechts unten in das Feld **Abw. Catch Weight Menge** das tatsächliche Gewicht des beauftragten Produktes ein.
1. Klicke auf den "Zurück"-Button Deines Browsers, um wieder in die [Listenansicht](Ansichten#listenansicht) der Lieferdisposition zu gelangen.
 >**Hinweis:** Wiederhole die Schritte 2 bis 4, um die Catch-Weight-Gewichte weiterer Produkte zu erfassen.

### Lieferschein und Rechnung erstellen
1. [Erstelle den Lieferschein für das ausgelieferte Catch-Weight-Produkt](Zu_Auftrag_Lieferschein_erstellen).
 >**Hinweis:** Auf der [PDF-Vorschau](PDFVorschau) des Lieferscheines wird das Nominalgewicht des Produktes ausgewiesen.

1. [Erstelle die Rechnung für das ausgelieferte Catch-Weight-Produkt](Zu_Auftrag_Rechnung_erstellen).
 >**Hinweis:** Auf der [PDF-Vorschau](PDFVorschau) des Rechnungsbeleges wird das Catch-Weight-Gewicht ausgewiesen und der Rechnungsbetrag entsprechend berechnet.

## Beispiel
<kbd><img src="assets/Auftrag_Catch_Weight.gif" alt="GIF: Auftrag (Catch Weight)"></kbd>
