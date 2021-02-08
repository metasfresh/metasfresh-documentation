---
title: Wie erstelle ich einen Wareneingang zu einer Bestellung?
layout: default
tags:
  - Einkauf
lang: de
sequence: 30
ref: creategoodsreceipt
---

## Schritte
1. Öffne den Eintrag einer [fertiggestellten Bestellung](Bestellung_erfassen).
1. [Springe zur](SpringezuBelegen) "Wareneingangsdisposition".

### Waren empfangen
1. [Selektiere](AuswahlBelege) die Zeilen, die Du als Wareneingang buchen möchtest.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "CUs annehmen". Es öffnet sich ein Overlay-Fenster, der "HU Editor".
    >**Hinweis:** Verfügt das Produkt über eine Packvorschrift, so erscheint diese auf dem Quick-Actions-Button.

    ![](assets/Zu_Bestellung_Wareneingang_erstellen-99aab.png)

### Waren mit Seriennummern empfangen (optional)
1. [Selektiere](AuswahlBelege) die Warenposition der HU, die in Form von einzelnen Produkten mit Seriennummern empfangen werden soll.
1. [Starte die Quick-Action](AktionStarten#quick-actions) "Add CUs with Serial Numbers". Es öffnet sich ein Overlay-Fenster.
1. Trage in das Feld **SerialNo** die Seriennummer der empfangenen HU ein. Mehrere Seriennummern können mittels Zeilenumbrüchen (`⇧ Shift` + `↵ Enter`) erfasst werden.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und die seriellen HUs zu generieren.

### Wareneingang erstellen
1. [Selektiere](AuswahlBelege) die empfangenen HUs.
1. Bestätige den Wareneingang mit dem Button ![](assets/Zu_Bestellung_Wareneingang_erstellen-3191c.png).
1. Klicke auf "Bestätigen", um den "HU Editor" zu schließen.
1. Du erhältst oben rechts eine [Benachrichtigung](Benachrichtigungsarten) ![](assets/NotificationBell_WebUI.png) über die erfolgreiche Erstellung des Wareneingangs.

## Nächste Schritte
- [Erstelle eine Rechnung](Zu_Bestellung_Eingangsrechnung_erstellen) zu der Bestellung.

## Beispiel
<kbd><img src="assets/Zu_Bestellung_Wareneingang_erstellen_walkthrough.gif" alt="GIF: Wareneingang zu einer Bestellung erstellen"></kbd>
