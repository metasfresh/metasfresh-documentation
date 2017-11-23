---
title: Wie kommissioniere ich eine Lieferung?
layout: default
tags:
  - Workflow
  - Verkauf
lang: de
sequence: 60
ref: howto_use_picking_terminal
---

## Übersicht
In metasfresh kannst Du *Handling Units* (HUs) für Lieferungen kommissionieren. Diese HUs werden dann von Deinem Lagerbestand abgebucht.<br>
Deinen Lagerbestand kannst Du in dem [*Handling Unit Editor*](Menu) jederzeit überprüfen.

## Schritte
1. Öffne einen [fertiggestellten Auftrag](Auftrag_erfassen).
1. [Springe zum](SpringezuBelegen) Kommissionier-Terminal.
 >**Hinweis 1:** Drücke `Alt + 6`, um die Sidebar mit den verknüpften Belegen zu öffnen.<br><br>
 >**Hinweis 2:** Bei neu fertiggestellten Aufträgen dauert es ca. 5 Sekunden, bis das Kommissionier-Terminal in der Sidebar erscheint.

1. [Selektiere den Auftrag](AuswahlBelege), den Du kommissionieren möchtest, in der [Listenansicht](Ansichten).
1. Starte die [Quick-Action](AktionStarten) "Kommissionieren". Es öffnet sich das Kommissionierfenster.
1. Wähle einen Kommissionierplatz aus, z.B. "101.0", und starte die [Quick-Action](AktionStarten) "HU-Auswahlfenster öffnen".
1. Wähle eine HU aus und starte die [Quick-Action](AktionStarten) "HU kommissionieren". Nun befindet sich die HU auf dem Kommissionierplatz 101.0.
1. Wähle die HU-Zeile aus und starte die [Quick-Action](AktionStarten) "Kommissionierung verarbeiten". Der Kommissionierplatz wird schreibgeschützt.
 >**Hinweis:** Die HU-Zeile muss ausgewählt sein, damit die Quick-Action funktioniert.
 ![](assets/Kommissionierung_HU_auswählen.png)

1. Klicke auf "Bestätigen", um das Kommissionierfenster zu schließen.

### Kommissionierte Menge liefern und Lieferschein erstellen
1. Öffne einen kommissionierten Auftrag.
1. [Springe zur](SpringezuBelegen) Lieferdisposition.
 >**Hinweis:** Drücke `Alt + 6`, um die Sidebar mit den verknüpften Belegen zu öffnen.

1. [Selektiere die Auftragszeilen](AuswahlBelege), die Du liefern möchtest.
1. [Starte die Aktion](AktionStarten) "Auswahl liefern".
1. Setze ein Häkchen bei **Erstellung mit kommissionierter Menge statt Liefermenge**.
1. Bestätige mit "Start".
1. Du erhältst oben rechts eine Benachrichtigung ![](assets/NotificationBell_WebUI.png), sobald die Lieferung erstellt ist.
1. Folge dem Link in der Benachrichtigung, um den Lieferschein zu öffnen.
1. [Öffne die PDF-Version](PDFVorschau) des Belegs, um ihn auszudrucken.<br>

## Beispiel

![](assets/Lieferung_kommissionieren.gif)
