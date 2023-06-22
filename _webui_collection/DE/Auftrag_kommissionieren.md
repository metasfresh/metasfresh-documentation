---
title: Wie kommissioniere ich einen Auftrag für die Lieferung unter Nutzung von Handling Units? (Kommissionier-Terminal)
layout: default
tags:
  - Verkauf
  - Kommissionierung
lang: de
sequence: 10
ref: order_picking_terminal
---

## Überblick
In metasfresh kannst Du ausgewählte *Handling Units* ([HUs](Handling_Unit_System)) für Lieferungen kommissionieren. Die kommissionierte Menge der HUs wird dann von Deinem Lagerbestand abgebucht.<br>
Den Lagerbestand kannst Du im "[Handling Unit Editor](Menu)" jederzeit nachschauen.

## Voraussetzungen
- [Erfasse einen Auftrag](Auftrag_erfassen) und [stelle ihn fertig](BelegverarbeitungFertigstellen).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Kommissionier-Terminal".
1. ***Optional:*** [Verwende die Filterfunktion](Filterfunktion), um Dir bei der Suche nach dem gewünschten Produkt zu helfen, für das Du HUs kommissionieren möchtest.
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten#listenansicht) das Produkt.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Kommissionieren". Es öffnet sich das Kommissionierfenster.
1. [Selektiere](AuswahlBelege) in der linken Hälfte des Kommissionierfensters den zu kommissionierenden Auftrag.
1. [Selektiere](AuswahlBelege) in der rechten Hälfte einen Kommissionierplatz, z.B. "101.0", und [starte die Quick-Action](AktionStarten#quick-actions) "HU-Auswahlfenster öffnen".
1. [Selektiere](AuswahlBelege) eine HU und [starte die Quick-Action](AktionStarten#quick-actions) "HU kommissionieren". Nun befindet sich die HU auf dem Kommissionierplatz 101.0.
 >**Hinweis:** Sollte die gewünschte HU nicht aufgelistet sein, prüfe, ob ein [Filter](Filterfunktion) gesetzt ist und entferne ihn, um weitere Vorschläge zu sehen.

1. [Selektiere](AuswahlBelege) die HU-Zeile und [starte die Quick-Action](AktionStarten#quick-actions) "Kommissionierung verarbeiten". Die HU-Zeile wird schreibgeschützt.
 >**Hinweis:** Die HU-Zeile muss ausgewählt sein, damit die Quick-Action verfügbar wird.<br><br>
 ![](assets/Kommissionierung_HU_auswählen.png)

1. Klicke auf "Bestätigen", um das Kommissionierfenster zu schließen.

## Nächste Schritte
- [Erstelle eine Lieferung mit der kommissionierten Menge](Lieferung_mit_kommissionierter_Menge).

## Beispiel
![](assets/Auftrag_kommissionieren.gif)
