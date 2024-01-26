---
title: Wie richte ich eine automatische Stücklistenerstellung bei Auftragsgenerierung aus einem Angebot ein?
layout: default
tags:
  - Stammdaten
  - Stückliste
lang: de
sequence: 50
ref: create_bom_upon_so_generation_setup
---

## Überblick
In metasfresh kannst Du in [Angeboten](Angebot_erstellen) einzelne [Produkte](NeuesProdukt), die miteinander kombiniert ein neues Verkaufsprodukt ergeben, zu einer Angebotsgruppe zusammenfassen (allg. auch als *Kompensationsgruppe* bezeichnet) und das Angebot dann Deinem Kunden unterbreiten. Ist er damit einverstanden, kannst Du das Angebot einfach in einen Auftrag umwandeln und die Lieferung des neuen Produktes in die Wege leiten.

Bei der Umwandlung in einen Auftrag kreiert metasfresh dann automatisch aus der Kombination der Produktionsbestandteile eine neue Stückliste, woraufhin das neu zusammengestellte Verkaufsprodukt sofort und ohne zusätzlichen Mehraufwand für zukünftige Aufträge zur Verfügung steht.

<kbd><img src="assets/Stücklistenerstellung bei Auftragsgenerierung von Angebot.png" alt="Abb.: Stücklistenerstellung bei Auftragsgenerierung von Angebot"></kbd>

## Schritte

### Gruppierungsprodukt mit übergeordneter Produktkategorie anlegen
1. [Lege ein Gruppierungsprodukt an](Gruppierungsprodukt_anlegen), das zum Ausweisen mehrerer Produkte als Angebotsgruppe dient.
 >**Hinweis:** Stelle sicher, dass das Gruppierungsprodukt für die Angebotsgruppierung aktiviert ist.

1. Stelle eine [übergeordnete Produktkategorie](Uebergeordnete_Produktkategorie) für die Produktkategorie des Gruppierungsproduktes ein.
 >**Hinweis:** Die **übergeordnete Kategorie** wird für die Kategorisierung des zusammengestellten Verkaufsproduktes benötigt.

1. Stelle sicher, dass die übergeordnete Kategorie über eine eigene [**Produktnummernfolge**](Belegnummern_definieren) verfügt.
 >**Hinweis:** Diese Nummernfolge wird für die Nummerierung der Stückliste und des dazugehörigen Verkaufsproduktes benötigt.

### Vorhandensein eines Produktplanungsschemas überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Product Planning Schema".
1. Öffne den dortigen standardmäßig enthaltenen Eintrag.
1. Stelle sicher, dass in dem Feld **M_ProductPlanningSchema_Selector** *Angebotsprodukt Plandaten Schema Selektor* eingestellt ist.
1. Keine weiteren Änderungen vornehmen!

## Nächste Schritte
- [Erstelle bei der Umwandlung eines Angebots in einen Auftrag automatisch eine Stückliste bestehend aus der Kompensationsgruppe des Angebots](Stueckliste_bei_Auftragsgenerierung).

## Beispiel
<kbd><img src="assets/Stueckliste_bei_Auftragsgenerierung_Einrichtung.gif" alt="GIF: Stückliste bei Auftragsgenerierung (Einrichtung)"></kbd>
