---
title: Wie führe ich eine Inventur durch? (oder&#58; Handling Units erstellen)
layout: default
tags:
  - Stammdaten
  - Lagerverwaltung
  - Inventur
lang: de
sequence: 10
ref: physical_inventory_create_hus
---

## Überblick
In metasfresh kannst Du mittels einer Inventur Bestandsmengen erfassen sowie neue [Handling Units](Handling_Unit_System) zum Bestand hinzufügen.

## Voraussetzungen
- Du benötigst ein [Lager](Neues_Lager_anlegen) sowie einen [Lagerort](Neues_Lager_anlegen#lagerort), auf den die gezählte Bestandsmenge gebucht werden kann.

## Schritte

### Erstelle einen neuen Inventurbeleg
1. [Gehe ins Menü](Menu) und öffne das Fenster "Inventur".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle ein [**Lager**](Neues_Lager_anlegen) aus.
1. Wähle eine **Kostenstelle** aus.

### Zählmenge erfassen
1. Gehe zur Registerkarte "Bestandszählungs Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein, dessen Bestandsmenge Du erfassen möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib in das Feld **Maßeinheit** einen Teil der Bezeichnung der [Maßeinheit](Menu) ein, in der Du die Produktbestandsmenge erfassen möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib in das Feld **Lagerort** einen Teil der [Lagerortbezeichnung](Neues_Lager_anlegen#lagerort) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Trage die **Zählmenge** des Produktes ein.
1. ***Optional:*** Wähle eine bestehende Handling Unit aus, um darauf die Zählmenge zu buchen. Gib hierzu in das Feld **Handling Units** einen Teil des Namens oder der Nummer der Handling Unit ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Setze ein Häkchen bei **Gezählt**.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Bestandszählung zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole die oben beschriebenen Schritte, um weitere Bestandszählungen zu erfassen.

1. [Stelle den Beleg fertig](BelegverarbeitungFertigstellen) sobald alle Inventurzeilen erfasst wurden. Die Lagerbestände kannst Du im "[Material Cockpit](Material-Cockpit)" jederzeit nachschauen.
