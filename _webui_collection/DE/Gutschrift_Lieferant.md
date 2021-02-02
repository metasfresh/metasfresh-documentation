---
title: Wie erstelle ich eine Lieferanten-Gutschrift?
layout: default
tags:
  - Buchhaltung
  - Fakturierung
  - Gutschriften und Nachbelastungen
  - Lieferanten
lang: de
sequence: 10
ref: credit_memo_vendor
---

## Überblick
In metasfresh können Lieferanten-Gutschriften erstellt werden, wenn sich ein Guthaben zu Deinen Gunsten ergibt aufgrund von Abweichungen zwischen der Eingangsrechnung des Lieferanten und der tatsächlich erhaltenen Lieferung. Die Gutschriften werden sofort mit den Eingangsrechnungen verrechnet, sofern diese noch nicht bezahlt wurden.

## Voraussetzungen
- [Stelle sicher, dass die **Belegart** *Gutschrift (Lieferant)* seriennummerngeführt ist](Belegart_Belegnummer_zuweisen).

## Schritte

### Gutschrift erstellen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Kreditoren Rechnungen".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle die **Belegart** *Gutschrift (Lieferant)* aus.
1. Gib in das Feld **Rechnung von** einen Teil des Namens oder der Nummer des [Lieferanten](Neuer_Geschaeftspartner_Lieferant) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
 >**Hinweis:** Wird der gewünschte Partner nicht angezeigt, kannst Du ihn per [Schnellerfassung](Neuer_Geschaeftspartner_Schnellerfassung) neu anlegen.

### Rechnungszeilen erfassen
1. Gehe zur Registerkarte "Rechnungsposition" unten auf der Seite und klicke auf !["Massen Erfassung"](assets/Massen_Erfassung_Button.png), um die Rechnungszeileneingabe zu öffnen.
 >**Hinweis:** Drücke `Alt` + `Q` / `⌥ alt` + `Q`.

1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des von der Gutschrift betroffenen [Produktes](NeuesProdukt) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib eine **Menge** ein.
 >**Hinweis:** Wechsle in das Feld mit der Maus oder `Tab ↹`-Taste.

1. Drücke `↵ Enter`, um die Zeile hinzuzufügen.
 >**Hinweis:** Wiederhole die Schritte 1 bis 4 so oft, bis Du alle relevanten Rechnungszeilen erfasst hast.

### Gutschrift fertigstellen
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. [Öffne die PDF-Vorschau](PDFVorschau).

## Beispiel
![](assets/Gutschrift_Lieferant.gif)
