---
title: Wie verwalte ich Kundenwarenrückgaben?
layout: default
tags:
  - Workflow
  - Verkauf
  - Reklamationen
lang: de
sequence: 40
ref: customer_returns
---

## Voraussetzungen
1. Du benötigst ein "[Beanstandungslager](Beanstandungslager_anlegen)", an das die Warenrücksendungen weitergeleitet werden können.
1. [Erfasse einen Auftrag](Auftrag_erfassen) und [stelle ihn fertig](BelegverarbeitungFertigstellen).
1. [Kommissioniere den Auftrag](Auftrag_kommissionieren).
1. [Erstelle eine Lieferung mit der kommissionierten Menge](Lieferung_mit_kommissionierter_Menge).

## Schritte

### Kundenrücklieferung erstellen
1. Öffne den Eintrag eines Auftrages, für den Du eine [kommissionierte Lieferung erstellt](Lieferung_mit_kommissionierter_Menge) hast, die zurückgegangen ist.
1. [Springe zur](SpringezuBelegen) "Lieferung" des Auftrages.
 >**Hinweis:** Drücke `Alt` + `6` / `⌥ alt` + `6`, um die Sidebar mit den verknüpften Belegen zu öffnen.

1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten#listenansicht) den betreffenden Lieferschein.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Kundenrücklieferung Gebinde auswählen". Es öffnet sich der "HU Editor".
 >**Hinweis:** Diese Aktion findest Du ebenfalls im Aktionsmenü sowohl in der Listenansicht als auch in der Einzelansicht eines Eintrages.

1. [Selektiere](AuswahlBelege) die zurückgegangene HU.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Kundenrücklieferung". Die HU wird nun in das Beanstandungslager verschoben.
1. Klicke auf "Bestätigen", um den "HU Editor" zu schließen.
1. Du erhältst oben rechts eine [Benachrichtigung](Benachrichtigungsarten) ![](assets/NotificationBell_WebUI.png), sobald die Kundenrücklieferung erstellt ist.
1. Klicke auf die Benachrichtigung, um den Kundenrücklieferungsbeleg zu öffnen.
 >**Hinweis:** Öffne alternativ den Eintrag des Auftrages, für den Du eine Kundenrücklieferung erhalten hast, [springe zur](SpringezuBelegen) "Kundenrücklieferung" und öffne den entsprechenden Eintrag der Kundenwarenrückgabe.

1. [Öffne die PDF-Vorschau](PDFVorschau) des Belegs.

## Beispiel
<kbd><img src="assets/Kundenwarenrueckgabe.gif" alt="GIF: Kundenwarenrückgabe"></kbd>
