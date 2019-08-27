---
title: Wie erfasse ich eine Leergutausgabe?
layout: default
tags:
  - Logistik
  - Leergutverwaltung
  - Leergutausgaben
lang: de
sequence: 10
ref: record_empties_return
---

## Überblick
Leergutausgaben spielen dann eine Rolle, wenn Du Deine bestellte Lieferware erhalten hast und die Packmittel, mit dem die gelieferten Produkte transportiert wurden (z.B. [Verpackungen wie Kisten oder Ladehilfsmittel wie Paletten](Handling_Unit_System)), an den Lieferanten zurückgeben möchtest.

Die Rückgabe dieses Leergutes kann sowohl mit Bezug zu einer bestimmten Bestellung als auch gesondert geschehen.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Wareneingangsdisposition".

### a) Gesonderte Leergutausgabe
1. [Starte die Quick-Action](AktionStarten) "Leergutausgabe". Es öffnet sich in demselben Tab das Fenster "[Leergutausgabe](Menu)".
 >**Hinweis:** Diese Aktion findest Du ebenfalls im Aktionsmenü in der Listenansicht.

1. Gib im Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Lieferanten](Neuer_Geschaeftspartner_Lieferant) ein, an den das Leergut zurückgeht, und klicke auf den passenden Treffer in der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
 >**Hinweis:** Wird der gewünschte Partner nicht angezeigt, kannst Du ihn per [Schnellerfassung](Neuer_Geschaeftspartner_Schnellerfassung) neu anlegen.

### b) Bestellbezogene Leergutausgabe
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten) den Eintrag der [Bestellung](Bestellung_erfassen), zu der Du eine Leergutausgabe erfassen möchtest.
1. [Starte die Quick-Action](AktionStarten) "Leergutausgabe". Es öffnet sich in demselben Tab das Fenster "[Leergutausgabe](Menu)".
 >**Hinweis:** Diese Aktion findest Du ebenfalls im Aktionsmenü sowohl in der Listenansicht als auch in der Einzelansicht eines Eintrages.

1. In diesem Eintrag sind bereits alle auftragsrelevanten Daten erfasst (siehe auch in der "[Erweiterten Erfassung](Ansichten)" aus dem [Aktionsmenü](AktionStarten)).

### Leergüter erfassen
1. Gehe zur Registerkarte "Positionen" unten auf der Seite und klicke auf !["Massen Erfassung"](assets/Massen_Erfassung_Button.png), um die Leergüter zu erfassen.
 >**Hinweis:** Drücke `Alt` + `Q` / `⌥ alt` + `Q`.

1. Gib in das Feld **Packmittel** einen Teil des Namens des auszugebenden [Packmittels](Packmittel_einrichten) ein und klicke auf den passenden Treffer in der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
1. Gib eine **Menge** ein.
 >**Hinweis:** Wechsle in das Feld mit der Maus oder `Tab ↹`-Taste.

1. Drücke `↵ Enter`, um die Zeile hinzuzufügen.
 >**Hinweis:** Wiederhole die Schritte 1 bis 4 so oft, bis Du alle Packmittel erfasst hast.

<br>

| **Allgemeiner Hinweis:** |
| :--- |
| Es können auch negative Werte als **Menge** erfasst werden, wodurch eine Leergutausgabe als [Leergutrücknahme](Leergutruecknahme_erfassen) verbucht werden kann, ohne diese in einem separaten Beleg erfassen zu müssen. Dies kann z.B. bei einem Leergutaustausch zwischen Lieferanten nützlich sein.<br><br> Um eine negative Menge zu erfassen, erfasse erst das Leergut mit positivem Wert und klicke dann doppelt auf das Feld **Menge** der Leergutzeile, um dort den positiven Wert zu einem negativen (`-`) umzuändern. |

### Leergutausgabe fertigstellen
1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen).
1. [Öffne die PDF-Vorschau](PDFVorschau).

## Nächste Schritte (optional)
- [Storniere die Leergutausgabe](Leergutausgabe_stornieren).

## Beispiel
![](assets/Leergutausgabe_erfassen.gif)
