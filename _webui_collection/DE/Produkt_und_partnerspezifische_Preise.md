---
title: Wie verwalte ich produkt- und partnerspezifische Preise?
layout: default
tags:
  - Preisgestaltung
  - Preiskonditionen
  - Erweiterte Preisgestaltung
lang: de
sequence: 10
ref: product_and_partner-specific_prices
---

## Übersicht
In metasfresh kannst Du eine Preisliste für mehrere Geschäftspartner verwenden. Doch was ist, wenn Du individuelle Preise für bestimmte Partner festlegen möchtest? Sicherlich möchtest Du keine neue Preisliste für jeden einzelnen erstellen und am Ende duplizierte Daten und zusätzlichen Organisationsaufwand haben.

In diesem Fall kannst Du ganz einfach Preiskonditionen über das Rabattschema erstellen und diese mit dem betreffenden Geschäftspartner verknüpfen. <br> Hierzu stehen Dir zwei Möglichkeiten zur Auswahl:

- **Festpreis:** Du kannst einen neuen Standardpreis als Festpreis festlegen.
- **Aufschlag auf Standardpreis:** Du kannst einen Aufschlag auf den in einem Preissystem vorhandenen Standardpreis festlegen.

## Schritte
1. Folge der Anleitung zum [Anlegen eines Rabattschemas](Rabattschema_anlegen) bis zum **Schritt 9**.
1. Setze ein Häkchen bei **IsPriceOverride**. Es erscheint ein neues Feld **PriceBase**.

### a) Festpreis festlegen
1. Wähle im Feld **PriceBase** *Fixed* aus.
1. Trage einen **Standardpreis** ein, der bei Erfüllung der Preiskonditionen als Festpreis für das/die Produkt/e genommen werden soll.

### b) Aufschlag auf einen Standardpreis festlegen
1. Wähle im Feld **PriceBase** *Pricing System* aus. Es erscheint ein neues Feld **Base_PricingSystem_ID**.
1. Gib im Feld **Base_PricingSystem_ID** das gewünschte Basis-Preissystem ein und wähle es aus den Ergebnissen aus.
 >**Hinweis 1:** Drücke die `LEERTASTE`, um alle Preissysteme zu sehen.<br><br>
 >**Hinweis 2:** Auswahl des Treffers mit Maus oder ![](assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).

1. Trage einen **Aufschlag auf Standardpreis** ein, der bei Erfüllung der Preiskonditionen auf den im Basis-Preissystem festgelegten Standardpreis draufgerechnet werden soll.

### Nächste Schritte
1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Preiskondition zur Liste hinzuzufügen.
1. [Verknüpfe das Rabattschema mit einem Geschäftspartner](Rabattschema_mit_GP_verknuepfen).

## Beispiel
![](assets/Produkt_und_partnerspezifische_Preise.gif)
