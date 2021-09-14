---
title: Wie lege ich einen neuen Merkmalssatz für Produktkategorien an?
layout: default
tags:
  - Stammdaten
  - Produkt
  - Produktkategorie
  - Merkmale und Merkmalssätze
lang: de
sequence: 20
ref: add_new_attribute_set
---

## Überblick
Ein Merkmalssatz besteht aus einem oder mehreren [Merkmalen](Merkmal_Produkt_neu_anlegen) und kann mithilfe von [Produktkategorien](NeueProduktkategorie) mit [Produkten](NeuesProdukt) verknüpft werden. Die Angabe von Merkmalen kann optional oder Pflicht sein, je nachdem, welche Eigenschaften ein Produkt aufweist und wie es im Bestand geführt wird bzw. für die Kommissionierung zur Verfügung stehen soll.

## Voraussetzungen
- [Lege neue Merkmale an](Merkmal_Produkt_neu_anlegen), sofern die notwendigen Merkmale noch nicht im System erfasst wurden.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Merkmals Satz".
1. [Lege einen neuen Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Benenne den Merkmalssatz im Feld **Name**.
1. Stelle im Feld **Pflichtfeld Art** ein, ob der Merkmalssatz als Pflichtangabe behandelt werden soll oder nicht, z.B. über die Optionen *Wenn in Auslieferung*, *Always Mandatory* oder *Not Mandatory*.
1. ***Optional:*** Setze ein Häkchen bei **Serien Nr.**.
 >**Hinweis:** Diese Einstellung wird für [Merkmale](Merkmal_Produkt_neu_anlegen) von [Fertigungsprodukten](NeuerProduktionsauftrag) benötigt, deren Merkmalswerte mit dem [Komponentengenerator](Komponentengenerator_Einrichtung) in der [Produktion](ProduktionFertigstellung#komponentengenerator-produktion) erzeugt werden können, wie Seriennummern oder werkseitige Passwörter.

### Merkmale hinzufügen
1. Gehe zur Registerkarte "Merkmals-Verwendung" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle das gewünschte [**Merkmal**](Merkmal_Produkt_neu_anlegen) aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Merkmal zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole diese Schritte, um weitere Merkmale hinzuzufügen.

1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte (optional)
- [Verwende den Merkmalssatz in einer Produktkategorie](NeueProduktkategorie).
