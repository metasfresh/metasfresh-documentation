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

Durch die hierarchische Verknüpfung von Packvorschriften können auch verschiedene HU Typen ([TU/LU](Handling_Unit_System)) einander zugeordnet und zu logistischen Einheiten zusammengefasst werden (z.B. ein Karton auf einer Europalette).

<!--
https://logistikknowhow.com/planung-und-organisation-eines-lagers/logistische-einheit/
Verpackungseinheit = Lagereinheit = Bestelleinheit = Ladeeinheit = Transporteinheit = Verkaufseinheit

https://www.gs1-germany.de/gs1-solutions/supply-chain-management/efficient-unit-loads/
-->

## Schritte

### Neue Packvorschrift anlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Packvorschrift".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Packvorschrift im Feld **Name**.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Eine Version der Packvorschrift definieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Packvorschrift Version".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle die gewünschte **Packvorschrift** aus.
1. Benenne die Version im Feld **Name**.
1. Wähle einen **Handling Unit Typ** aus, z.B. *Transport Unit*.
1. Setze ein Häkchen bei **Aktuell gültige Version**.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Optional: Packgut definieren
In metasfresh steht "Packgut" synonym für "[Verkaufseinheit (CU)](Handling_Unit_System)" und definiert, ob und wie viel Ware gemäß Packvorschrift verpackt werden darf.

1. Gehe zur Registerkarte "Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Positionsart** *Packgut* aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Position zur Liste hinzuzufügen.
1. Klicke in der neu hinzugefügten Packgut-Zeile doppelt auf das Feld in der Spalte **Menge** und trage dort die zulässige Höchstmenge der zu verpackenden Ware ein. Bestätige mit `↵ Enter` oder durch Klicken auf einen leeren Bereich.

### Optional: Packmittel festlegen
Über das Packmittel wird die Packvorschrift mit einem physischen Produkt auf Lager verknüpft, das zum Verpacken von [Verkaufseinheiten (CU)](Handling_Unit_System) verwendet werden soll. Packmittel kommen vor allem beim Einsatz von Mehrweggebinden/-verpackungen zur Anwendung, die auf den Aufträgen/Bestellungen separat ausgewiesen werden sollen.

1. Gehe zur Registerkarte "Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Positionsart** *Packmittel* aus. Es erscheint ein neues Feld "[**Packmittel**](Packmittel_einrichten)".
1. Wähle das gewünschte **Packmittel** aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Packmittel zur Liste hinzuzufügen.

### Optional: Mehrstufige Packvorschriften (Unterpackvorschriften)
Unterpackvorschriften dienen dazu, verschiedene HU Typen zu logistischen Einheiten zusammenzufassen, z.B. wenn gemäß Packvorschrift Kartons ([Verpackung/TU](Handling_Unit_System)) auf eine Europalette ([Ladungsträger/LU](Handling_Unit_System)) geladen werden sollen.

<!-- https://help.sap.com/docs/SAP_S4HANA_CLOUD/32da8359c8ee4e8b8e8c5e15cacba5aa/691db9537cceb44ce10000000a174cb4.html?locale=de-DE#funktionsumfang -->

1. Gehe zur Registerkarte "Position" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Positionsart** *Unter-Packvorschrift* aus. Es erscheinen neue Felder.
1. Wähle die gewünschte **Unterpackvorschrift** aus, z.B. *Karton*.
1. Gib eine **Menge** ein, die angibt, wie viele Einzelpackstücke der Unterpackvorschrift in/auf die übergeordnete Packvorschrift dürfen.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Unterpackvorschrift zur Liste hinzuzufügen.

## Nächste Schritte
- [Verknüpfe die Packvorschrift mit einem Produkt](CU-TU_Zuordnung) und lege die Menge des Packgutes fest.

## Beispiel
![](assets/Packvorschrift_erstellen.gif)
