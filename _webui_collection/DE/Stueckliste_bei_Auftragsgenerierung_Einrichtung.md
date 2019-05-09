---
title: Wie richte ich eine automatische Stücklistenerstellung bei Auftragsgenerierung aus einem Angebot ein?
layout: default
tags:
  - Stammdaten
  - Stückliste
lang: de
sequence: 20
ref: create_bom_upon_so_generation_setup
---

## Übersicht
In metasfresh kannst Du in [Angeboten](Angebot_erstellen) einzelne [Produkte](NeuesProdukt), die miteinander kombiniert ein neues Verkaufsprodukt ergeben, zu einer Angebotsgruppe zusammenfassen (allg. auch als *Kompensationsgruppe* bezeichnet) und das Angebot dann Deinem Kunden unterbreiten. Ist er damit einverstanden, kannst Du das Angebot einfach in einen Auftrag umwandeln und die Lieferung des neuen Produktes in die Wege leiten.

Bei der Umwandlung in einen Auftrag kreiert metasfresh dann automatisch aus der Kombination der Produktionsbestandteile eine neue Stückliste, woraufhin das neu zusammengestellte Verkaufsprodukt sofort und ohne zusätzlichen Mehraufwand für zukünftige Aufträge zur Verfügung steht.

## Schritte

### 1) Produktionsbestandteile und Produktkategorien überprüfen
1. Stelle sicher, dass die für die Gruppierung vorgesehenen Produkte (Produktionsbestandteile) ein und derselben [**Produktkategorie** zugeordnet](NeuesProdukt) sind.
1. Stelle sicher, dass die Produktkategorie der Produktionsbestandteile einer anderen [untergeordnet](Uebergeordnete_Produktkategorie) ist.
 >**Hinweis:** Die **übergeordnete Kategorie** wird für die Kategorisierung des zusammengestellten Verkaufsproduktes benötigt.

1. Stelle sicher, dass die übergeordnete Kategorie über eine eigene [**Produktnummernfolge**](Belegnummern_definieren) verfügt.
 >**Hinweis:** Diese Nummernfolge wird für die Nummerierung der Stückliste und des dazugehörigen Verkaufsproduktes benötigt.

### 2) Gruppierungsprodukt anlegen
1. [Lege ein Gruppierungsprodukt an](Gruppierungsprodukt_anlegen), das zum Ausweisen mehrerer Produkte als Angebotsgruppe dient.
1. Stelle sicher, dass das Gruppierungsprodukt derselben **Produktkategorie** angehört wie die Produktionsbestandteile (siehe 1.1 oben).

### 3) Kompensationsgruppenschema erstellen
1. [Erstelle ein **Kompensationsgruppenschema**](Kompensationsgruppenschema_anlegen) samt [Kombinierungsprodukt](Kombinierungsprodukt_Kompensationsgruppen), um später im Angebot mehrere Auftragszeilen zu einer Kompensationsgruppe zusammenzufügen.
 >**Hinweis:** Der Name des Kompensationsgruppenschemas wird später für die Benennung der Stückliste und des dazugehörigen Verkaufsproduktes verwendet.

1. [Verknüpfe das **Kompensationsgruppenschema** mit der **Produktkategorie**](Kompensationsgruppenschema_Produktkategorie) der Produktionsbestandteile (siehe 1.1 oben).

### 4) Vorhandensein eines Produktplanungsschemas überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Product Planning Schema".
1. Öffne den dortigen standardmäßig enthaltenen Eintrag.
1. Stelle sicher, dass in dem Feld **M_ProductPlanningSchema_Selector** *Angebotsprodukt Plandaten Schema Selektor* eingestellt ist.
1. Keine weiteren Änderungen vornehmen!

## Nächste Schritte
- [Erstelle bei der Umwandlung eines Angebots in einen Auftrag automatisch eine Stückliste bestehend aus der Kompensationsgruppe des Angebots](Stueckliste_bei_Auftragsgenerierung).


## Beispiel
![](assets/Stueckliste_bei_Auftragsgenerierung_Einrichtung.gif)
