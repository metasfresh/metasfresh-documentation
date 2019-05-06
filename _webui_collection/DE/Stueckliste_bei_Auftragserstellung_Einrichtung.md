---
title: Wie richte ich eine automatische Stücklistenerstellung bei Auftragserstellung ein?
layout: default
tags:
  - Stammdaten
  - Stückliste
lang: de
sequence: 20
ref: create_bom_upon_so_generation_setup
---

## Übersicht
In metasfresh kannst Du in [Angeboten](Angebot_erstellen) einzelne [Produkte](NeuesProdukt), die miteinander kombiniert ein neues Produkt ergeben, zu einer Angebotsgruppe zusammenfassen (allg. auch als *Kompensationsgruppe* bezeichnet) und das Angebot dann Deinem Kunden unterbreiten. Ist er damit einverstanden, kannst Du das Angebot einfach in einen Auftrag umwandeln und die Lieferung des neuen Produktes in die Wege leiten.

Bei der Umwandlung in einen Auftrag kreiert metasfresh dann automatisch aus der Kombination der Produktionsbestandteile eine neue Stückliste, woraufhin das daraus resultierende neue Produkt sofort und ohne zusätzlichen Mehraufwand für zukünftige Aufträge verfügbar wird.

## Schritte

### 1) Produktionsbestandteile und Produktkategorien überprüfen
1. Stelle sicher, dass die für die Gruppierung vorgesehenen Produkte (Produktionsbestandteile) ein und derselben [**Produktkategorie** zugeordnet](NeuesProdukt) sind.
1. Stelle sicher, dass die Produktkategorie der Produktionsbestandteile einer anderen [untergeordnet](Uebergeordnete_Produktkategorie) ist.
 >**Hinweis:** Die **übergeordnete Kategorie** wird für die Kategorisierung des Produktionsergebnisses benötigt.

1. Stelle sicher, dass die übergeordnete Kategorie über eine eigene [**Produktnummernfolge**](Belegnummern_definieren) verfügt.
 >**Hinweis:** Diese Nummernfolge wird für die Nummerierung der Stückliste und des dazugehörigen Produktes benötigt.

### 2) Gruppierungsprodukt erstellen
1. [Erstelle ein Gruppierungsprodukt](Produkt_für_Gruppenrabatt), das zum Ausweisen mehrerer Produkte als Angebotsgruppe dient.
1. Stelle sicher, dass das Gruppierungsprodukt derselben **Produktkategorie** angehört wie die Produktionsbestandteile (siehe 1.1 oben).
1. Öffne die "[Erweiterte Erfassung](Ansichten)" aus dem [Aktionsmenü](AktionStarten) des Gruppierungsproduktes.
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

1. Scrolle runter bis zum Kontrollkästchen **Ist Angebotsgruppe** und setze dort ein Häkchen.
1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.

### 3) Kompensationsgruppenschema erstellen
1. [Erstelle ein **Kompensationsgruppenschema** samt Kombinierungsprodukt](Kompensationsgruppenschema_anlegen), um später im Auftrag mehrere Produktzeilen zu einer Kompensationsgruppe zusammenzufügen.
 >**Hinweis:** Der Name des Kompensationsgruppenschemas wird später für die Benennung der Stückliste und des dazugehörigen Produktes verwendet.

1. [Verknüpfe das **Kompensationsgruppenschema** mit der **Produktkategorie**](Kompensationsgruppenschema_Produktkategorie) der Produktionsbestandteile (siehe 1.1 oben).

### 4) Vorhandensein eines Produktplanungsschemas überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Product Planning Schema".
1. Öffne den dortigen standardmäßig enthaltenen Eintrag.
1. Stelle sicher, dass in dem Feld **M_ProductPlanningSchema_Selector** *Angebotsprodukt Plandaten Schema Selektor* eingestellt ist.
1. Keine weiteren Änderungen vornehmen!

## Nächste Schritte
- [Erstelle bei der Umwandlung eines Angebotes in einen Auftrag automatisch eine Stückliste bestehend aus der Kompensationsgruppe des Angebotes](Stueckliste_bei_Auftragserstellung).


## Beispiel
![](assets/Stueckliste_bei_Auftragserstellung_Einrichtung.gif)
