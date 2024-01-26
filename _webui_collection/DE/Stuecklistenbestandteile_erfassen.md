---
title: Wie erfasse ich Stücklistenbestandteile (Komponenten)?
layout: default
tags:
  - Stammdaten
  - Stückliste
lang: de
sequence: 30
ref: add_bom_components
---

## Voraussetzungen
1. [Erstelle eine Stückliste für das zu fertigende Produkt](Stueckliste_erstellen).
1. [Erstelle eine Stücklistenversion](Stuecklistenversion_erstellen).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Stückliste Version".
1. Öffne den Eintrag einer bestehenden Stücklistenversion bzw. [lege eine neue an](Stuecklistenversion_erstellen).
1. Gehe zur Registerkarte "Stücklistenbestandteile" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein, welches Du als Bestandteil (Komponente) zur Stückliste hinzufügen möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle einen **Komponententyp** aus, z.B. *Komponente*.
 >**Hinweis:** Das *Co-Produkt* ist ein Nebenerzeugnis (Kuppelprodukt) aus der Produktion des Hauptproduktes und kann anschließend selbst als Fertigprodukt geführt werden.

1. Gib eine **Menge** ein.<br>Um die Menge in Prozent zu erfassen, setze ein Häkchen bei **Ist %** und trage den Betrag in das anschließend erscheinende Feld **% Menge** ein. (Das Feld **Menge** wird folglich versteckt und deaktiviert.)
 >**Hinweis:** Eine Stückliste enthält die Angaben für **ein einzelnes Fertigprodukt**. Bei Anwendung der Stückliste wird die hier angegebene Menge also mit der jeweils beauftragten Menge multipliziert.

1. Trage in das Feld **% Scrap** den Prozentsatz ein, der als Ausschuss auf die oben angegebene Menge automatisch draufgerechnet werden soll.
1. Wähle eine **Maßeinheit** für die Komponente aus.
 >**Hinweis:** Bei Abweichungen der hier ausgewählten Maßeinheit mit der des Komponentenproduktes muss eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) definiert werden.

1. Wähle eine **Zuteil Methode** aus, wie die verbrauchten Materialien verbucht werden sollen, z.B. *Backflush* (retrograde Entnahme, Rückmeldung der Mengen) oder *Issue only for what was received*.
 >**Hinweis 1:** Um die Materialmenge pro Stücklistenbestandteil einzeln abzubuchen (rückzumelden), wähle "Backflush".<br><br>
 >**Hinweis 2:** Um die Zuteilung zu automatisieren, d.h. nur die tatsächlich verbrauchte Materialmenge abzubuchen, wähle "Issue only for what was received".

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Bestandteil zur Liste hinzuzufügen.
 >**Hinweis:** Du kannst auf diese Weise beliebig viele Bestandteile zur Stückliste hinzufügen.

| **Hinweis:** |
| :--- |
| Die einzelnen Stücklistenbestandteile kannst Du ebenfalls unter dem Menüpunkt "[Stücklistenbestandteile](Menu)" übersichtlich einsehen. |

## Nächste Schritte
- [Stelle die Stückliste fertig und verifiziere sie](Stueckliste_verifizieren).

## Beispiel
<kbd><img src="assets/Stueckliste_erstellen.gif" alt="GIF: Stückliste erstellen"></kbd>
