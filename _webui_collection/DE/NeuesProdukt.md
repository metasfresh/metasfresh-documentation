---
title: Wie lege ich ein neues Produkt an?
layout: default
tags:
  - Stammdaten
  - Produkt
lang: de
sequence: 10
ref: newproduct
---

## Schritte

1. [Gehe ins Menü](Menu) und öffne den Link "Produkt".
1. [Lege einen neues Produkt an](Neuer_Datensatz_Fenster_Webui).
1. Fülle das Feld **Artikelname** aus.
 > Hinweis: Dieser Name taucht auf den Belegen wie Auftragsbestätigung usw. auf.

1. Wähle als nächstes eine **Artikelkategorie** aus.
 > Hinweis: Die **Artikelkategorie** kann verwendet werden, um die Rabattierung, Kontierung und den Merkmalsatz eines Artikels zu steuern.

1. Fülle das Feld **Artikelnummer** aus.
 > Hinweis 1: Diese Nummer taucht auf den Belegen wie Auftragsbestätigung usw. auf.

 > Hinweis 2: Diese Nummer kann auch automatisch vergeben werden.

### Nächste Schritte
- [Einkaufs- oder Verkaufspreis hinterlegen](ProduktPreis)
- Produkt für die Produktion konfigurieren

## Beispiel

![](assets/neuesprodukt.gif)

## Weitere wichtige Felder

- Das Feld **Maßeinheit** bestimmt, in welcher Einheit der Artikel im Bestand geführt wird.
 > Hinweis 1: Sobald der erste Beleg existiert, in dem der Artikel verwendet wird, kann die Maßeinheit nicht mehr ohne weiteres geändert werden.

 > Hinweis 2: Eine abweichende Preiseinheit kann unter der Registerkarte **Preis** losgelöst von der Maßeinheit definiert werden.

- Das Feld **Artikelart** bestimmt, um welche Art von Artikel es sich handelt.

|	Option | Effekt |
|:	------------ | ------------- |
|	Artikel | Materieller Artikel, z.B. Stückgut, Verpackung usw. (Standard)|
|	Dienstleistung | Immaterieller Artikel, z.B. Serviceleistung|
|	Erfolgskonto | Steuert Kontierung|
|	Ressource | Artikel, der zeitlich nur einmal belegt werden kann, z.B. Maschine|

- Das Feld **Lagerhaltig** bestimmt, ob der Artikel (insofern die Artikelart auf der Option "Artikel" steht) im Bestand geführt wird.
- Das Feld **Eingekauft** bestimmt, ob der Artikel im Einkauf zur Verfügung steht.
- Das Feld **Verkauft** bestimmt, ob der Artikel im Verkauf zur Verfügung steht.
