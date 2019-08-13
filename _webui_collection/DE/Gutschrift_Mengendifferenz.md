---
title: Wie erstelle ich eine Gutschrift bei Mengendifferenzen nach Rechnungsstellung?
layout: default
tags:
  - Buchhaltung
  - Fakturierung
  - Gutschriften und Nachbelastungen
  - Kunden
lang: de
sequence: 20
ref: credit_memo_quantity_difference
---

## Übersicht
In metasfresh können Gutschriften erstellt werden, wenn sich nach Rechnungsstellung ein Guthaben zugunsten des Kunden ergibt, z.B. aufgrund von Mengendifferenzen nach einer Lieferung. Die Gutschriften werden direkt mit den dazugehörigen Rechnungen verknüpft, wodurch die Änderungen für die Buchhaltung problemlos nachvollziehbar sind.

## Schritte

### Gutschrift erstellen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Debitoren Rechnungen".
1. [Verwende die Filterfunktion](Filterfunktion), um den Eintrag der fertiggestellten Rechnung zu finden, für die Du eine Gutschrift erstellen möchtest und öffne ihn.
 >**Hinweis:** [Springe alternativ über die verknüpften Belege](SpringezuBelegen) eines [Auftrages](Auftrag_erfassen) in den dazugehörigen [Rechnungseintrag](Zu_Auftrag_Rechnung_erstellen).

1. [Starte die Aktion](AktionStarten) "Gutschrift erstellen". Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Belegart** *Gutschrift - Lieferdifferenz* aus.
1. Klicke auf "Start", um einen Rechnungsbeleg für die Gutschrift zu erstellen und das Overlay-Fenster zu schließen.

### Mengendifferenz erfassen
1. [Springe über die verknüpften Belege](SpringezuBelegen) der fertiggestellten Rechnung erneut in das Fenster "Debitoren Rechnungen" (unter FAKTURIERUNG und dann "Rechnung" in der Sidebar) und öffne dort den dazugehörigen, bereits [herausgefilterten](Filterfunktion) Rechnungseintrag mit der **Belegart** *Gutschrift - Lieferdifferenz*.
1. Gehe zur Registerkarte "Rechnungsposition" unten auf der Seite und trage dort in das Feld in der Spalte **Menge TU** und/oder **Menge** der betreffenden Zeile die Höhe der Mengendifferenz ein.
1. [Selektiere](AuswahlBelege) und lösche alle Zeilen, die nicht von der Gutschrift betroffen sind.
1. ***Optional:*** Klicke auf ![](assets/Massen_Erfassung_Button.png), um Zeilen hinzuzufügen.
 >**Hinweis:** Drücke `Alt` + `Q` / `⌥ alt` + `Q`.

### Gutschrift fertigstellen
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. [Öffne die PDF-Vorschau](PDFVorschau).

## Beispiel
![](assets/Gutschrift_Mengendifferenz.gif)
