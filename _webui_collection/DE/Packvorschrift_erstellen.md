---
title: Wie erstelle ich eine neue Packvorschrift?
layout: default
tags:
  - Stammdaten
  - Produkt
  - Packvorschriften
lang: de
sequence: 40
ref: create_packing_instructions
---

## Überblick
Mithilfe von Packvorschriften wird festgelegt, welches [Packmittel](Packmittel_einrichten) für eine Verpackung ([TU](Handling_Unit_System)) oder ein Ladehilfsmittel ([LU](Handling_Unit_System)) verwendet werden soll sowie ob und wie viel Packgut darin bzw. darauf verpackt werden darf.

## Schritte

### Neue Packvorschrift anlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Packvorschrift".
1. [Lege einen neuen Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Packvorschrift im Feld **Name**.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Eine Version der Packvorschrift definieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Packvorschrift Version".
1. [Lege einen neuen Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Wähle die gewünschte **Packvorschrift** aus.
1. Benenne die Version im Feld **Name**.
1. Wähle einen **Handling Unit Typ** aus, z.B. *Transport Unit*.
1. Setze ein Häkchen bei **Aktuell gültige Version**.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Packmittel festlegen
1. Gehe zur Registerkarte "Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Positionsart** *Packmittel* aus. Es erscheint ein neues Feld **Packmittel**.
1. Wähle das gewünschte **Packmittel** aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Packmittel zur Liste hinzuzufügen.

### Packgut erlauben
1. Gehe zur Registerkarte "Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Positionsart** *Packgut* aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Positionsart zur Liste hinzuzufügen.

## Nächste Schritte
- [Konfiguriere ein Produkt für die Nutzung im Gebinde](CU-TU_Zuordnung) und lege die Menge des Packgutes fest.

## Beispiel
![](assets/Packvorschrift_erstellen.gif)
