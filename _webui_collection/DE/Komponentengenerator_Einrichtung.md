---
title: Wie richte ich den Komponentengenerator ein?
layout: default
tags:
  - Stammdaten
  - Stückliste
  - Komponentengenerator (Einrichtung)
lang: de
sequence: 10
ref: component_generator_setup
---

## Überblick
Mithilfe des Komponentengenerators können in metasfresh auf Grundlage von [Produktionsaufträgen](NeuerProduktionsauftrag) gefertigte Produkte mit individuellen Merkmalen, wie z.B. eigenen Seriennummern, versehen werden.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Komponentengenerator".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Dienstleistungsproduktes](Komponentengenerator_Dienstleistungsprodukt) ein, das die zu generierende Komponente beschreibt, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle eine **Java Klasse** aus, z.B. *Passwort Generator*, *MAC Address Generator* oder *Serial No Generator*.

### Konfiguration der Java-Klassen

#### Passwort Generator: Parameter definieren
1. Gehe zur Registerkarte "Parameters" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle einen Parameter aus und definiere seine Eigenschaften im Feld **Suchschlüssel**.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Parameter zur Liste hinzuzufügen.

#### MAC Address Generator
1. [Richte eine benutzerdefinierte Belegnummerierung ein](Belegnummern_definieren).
1. Wähle im Feld **Reihenfolge** diese Belegnummerierung aus.

#### Serial No Generator
1. [Richte eine benutzerdefinierte Belegnummerierung ein](Belegnummern_definieren).
1. Wähle im Feld **Reihenfolge** diese Belegnummerierung aus.
