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
Über die Produktplandaten kannst Du festlegen, was automatisch passieren soll, wenn ein Auftrag für ein Produkt erstellt wird, das nur noch in geringer Menge vorrätig ist. Ein Produkt kann ein einzelnes Fertigprodukt sein oder aus mehreren Komponenten bestehen (siehe: [Stückliste](Stueckliste_erstellen)). Tritt der Fall ein, dass der Bedarf an dem Produkt oder den einzelnen Komponenten nicht (vollständig) gedeckt werden kann, so geben die Produktplandaten vor, ob neue Waren **eingekauft** oder **produziert** werden müssen, um die Lagerbestände wieder aufzufüllen und den Bedarf zu decken. Im Fenster [*Handling Unit Editor*](Menu) erhältst Du eine Übersicht der Produkte auf Lager.

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
1. Setze ein Häkchen bei **Beleg erstellen**, wenn das Produkt von der Materialdisposition berücksichtigt und Bestellungen automatisch erzeugt werden sollen.
1. Setze das Feld **Wird eingekauft** auf *Ja*.
1. [metasfresh speichert automatisch](Speicheranzeige).

    | **Wichtiger Hinweis:** |
    | :--- |
    | Vergewissere dich außerdem, dass das zu bestellende Produkt mit einem [gegenwärtigen Lieferanten verknüpft](Gegenwaertigen_Lieferanten_festlegen) ist. |

#### b) Für die Produktion konfigurieren
1. Wähle eine **BOM & Formula** ([*Stücklistenkonfiguration*](Stueckliste_erstellen)) aus.
1. Wähle einen **Workflow** (*Arbeitsablauf*) aus.
1. Wähle im Feld **Ressource** eine Produktionsressource aus.
1. Setze ein Häkchen bei **Beleg erstellen**, wenn das Produkt und seine Stücklistenbestandteile von der Materialdisposition berücksichtigt und Produktionsaufträge automatisch erzeugt werden sollen.
1. Setze ein Häkchen bei **Beleg fertigstellen**, wenn der Produktionsauftrag automatisch fertiggestellt werden soll.
1. Setze das Feld **Wird produziert** auf *Ja*.
1. ***Optional:*** Gib eine **Max. Menge pro Produktionsauftrag** ein, z.B. um die Rückverfolgung bestimmter Produktionsbestandteile zu gewährleisten.
 >**Hinweis:** Bleibt das Feld leer oder enthält einen Wert &#8924; 0, so gibt es keine Mengenbegrenzung.

1. [metasfresh speichert automatisch](Speicheranzeige).

    | **Hinweis:** |
    | :--- |
    | Bei Fertigstellung eines [Auftrages](Auftrag_erfassen) für ein Produkt, das mittels Plandaten für die Produktion konfiguriert ist, wird zur Bedarfsdeckung automatisch ein [Produktionsauftrag](NeuerProduktionsauftrag) erstellt und mit dem Auftrag verknüpft. |

## Nächste Schritte (optional)
- [Erstelle automatische Bestellkontrollen zur kontrollierten Auftragsbearbeitung](Automatische_Bestellkontrollen).
