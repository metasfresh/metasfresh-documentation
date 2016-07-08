---
title: Wie konfiguriere ich ein Produkt für die Nutzung im Gebinde ?
layout: default
tags:
  - Stammdaten
lang: de
---
## Vorbereitung
- [Wie lege ich ein neues Produkt an?](Wie_lege_ich_ein_neues_Produkt_an)


## Schritte

So konfigurierst Du ein [Produkt](Wie_lege_ich_ein_neues_Produkt_an) für die Nutzung im Gebinde: 
	
1. [Fenster "Produkt" öffnen](Wie_finde_und_öffne_ich_ein_Fenster)
1. Bestehendes Produkt auswählen
1. In Register `CU-TU Zuordnung` wechseln
1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an)
1. Passende **Packvorschrift** auswählen
1. **gültig ab**: Datum ab wann die Packvorschrift aktiviert sein soll. 

   Das Datum kann in der Vergangenheit liegen wenn die Einstellung sofort aktiv sein soll oder in der Zukunft wenn sie erst ab einem bestimmten Zeitpunkt gilt.

1. **Geschäftspartner**: Optional kannst Du diese Packvorschrift nur für genau einen Partner aktivieren.

### Feste Menge

Wenn von dem Produkt immer die gleiche, feste Menge in der TU liegt:

1. **Menge**: wie oft passt das Produkt (CU) in die Packung (TU)

   Beispiel: 10 Stück Convenience Salat in eine Mehrwegkiste. Menge = 10
   
   Beispiel: 20 Flaschen in eine Getränkekiste. Menge = 20
   
   Konsequenz: Im Auftrag wird die Schnellerfassung nur die Menge der Gebinde abfragen und dann die Menge des Produkts daraus berechnen.

### unbestimmte Menge

Wenn von dem Produkt eine unbekannte, weil wechselnde Menge in der TU liegt:

1. **unbestimmte Kapazität**: setze den Haken aktiv wenn Du die Menge des Produkts in der TU nicht fest definieren möchtest.

   Beispiel: In einen Metallgitterbox passen zwischen 1 und 100 Bauteilen.

   Konsequenz: Im Auftrag wird die Schnellerfassung erst die Menge der Gebinde abfragen und dann die Menge ohne Gebinde.

### Abschluss
   
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)

   **Hinweis:** Es können zu einem Produkt mehrere CU-TU Zuordnungen mit jeweils einer anderen Packvorschrift definiert werden!
   
   Beispiel: Convenience Salat wird nicht nur mit 10 Stück in einer Mehrweggebinde mit Pfand, sondern auch mit 20 Stück in einem Einweggebinde ohne Pfand verkauft.