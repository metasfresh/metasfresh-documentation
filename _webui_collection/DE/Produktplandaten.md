---
title: Wie konfiguriere ich meine Produktplandaten?
layout: default
tags:
  - Materialwirtschaft
  - Materialdisposition
lang: de
sequence: 10
ref: product_planning
---

## Überblick
Über die Produktplandaten kannst Du festlegen, was passieren soll, wenn ein Auftrag für ein Produkt erstellt wird, das nur noch in geringer Menge vorrätig ist. Ein Produkt kann ein einzelnes Fertigprodukt sein oder aus mehreren Komponenten bestehen (siehe: [Stückliste](Stueckliste_erstellen)). Tritt der Fall ein, dass der Bedarf an dem Produkt oder den einzelnen Komponenten nicht (vollständig) gedeckt werden kann, so geben die Produktplandaten vor, ob neue Waren **eingekauft** oder **produziert** werden müssen, um die Lagerbestände wieder aufzufüllen und den Bedarf zu decken. Im Fenster [*Handling Unit Editor*](Menu) erhältst Du eine Übersicht der Produkte auf Lager.

Zusätzlich überprüft die [*Materialdisposition*](Materialdisposition_Grundlagen) von metasfresh bei Auftragserstellung anhand der Produktplandaten automatisch, welche Produkte auf Lager sind, eingekauft oder produziert werden müssen und erzeugt dann ebenfalls automatisch Bestellungen bzw. Produktionsaufträge.

## Voraussetzungen
- [Lege ein Produkt an](NeuesProdukt), für das Du die Plandaten konfigurieren möchtest.

## Schritte

### Plandaten konfigurieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkt Plandaten".
1. [Erstelle einen neuen Plandateneintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle ein [**Lager**](Neues_Lager_anlegen) aus, in dem das Produkt aufbewahrt wird.

#### a) Für den Einkauf konfigurieren
1. Soll das Produkt von der Materialdisposition berücksichtigt und Bestellungen automatisch erzeugt werden, setze ein Häkchen bei **Beleg erstellen**.
1. Setze das Feld **Wird eingekauft** auf *Ja*.
1. [metasfresh speichert automatisch](Speicheranzeige).

#### b) Für die Produktion konfigurieren
1. Wähle eine **BOM & Formula** (*Stücklistenkonfiguration*) aus.
1. Wähle einen **Workflow** (*Arbeitsablauf*) aus.
1. Wähle im Feld **Ressource** eine Produktionsressource aus.
1. Sollen das Produkt und seine Stücklistenbestandteile von der Materialdisposition berücksichtigt und Produktionsaufträge automatisch erzeugt werden, setze ein Häkchen bei **Beleg erstellen**.
1. Soll der Produktionsauftrag automatisch fertiggestellt werden, setze ein Häkchen bei **Beleg fertigstellen**.
1. Setze das Feld **Wird produziert** auf *Ja*.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte (optional)
- [Erstelle automatische Bestellkontrollen zur kontrollierten Auftragsbearbeitung](Automatische_Bestellkontrollen).
