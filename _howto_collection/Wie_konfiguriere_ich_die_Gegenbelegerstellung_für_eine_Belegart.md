---
title: Wie kann ich bestehende Produktzuordnungen für die Gegenbelegerstellung einsehen ?
layout: default
tags:
  - Gegenbelege
lang: de
---

![Gegenbelege](../images/de_Gegenbelege.png)

1. Öffne [Fenster "Gegenbeleg"](Wie_finde_und_öffne_ich_ein_Fenster)
1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an)
1. trage in Feld **Name** den Zweck dieser Gegenbelegkonfiguration ein. Z.B. "Auftrag zu Bestellung"
1. setze in Feld **Sektion** die Organisation für die Du die Konfiguration machst. Wenn Du also wie in dem Bild angezeigt möchtest, dass wenn in Org A ein Auftrag fertiggestellt wird, automatisch in Org B eine Bestellung erzeugt wird, dann trage hier Org A ein.
1. Im Feld **Belegart** steht die Belegart (z.B. Auftrag) für die ein Gegenbeleg erstellt werden soll. 
1. Das Feld **Counter Document Type** legt fest welche Gegebenbelegart (z.B. Bestellung) erzeugt werden soll
1. Über das Feld **Belegverarbeitung** steuerst Du wie der Gegenbeleg automatisch verarbeitet werden soll. 
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an)
1. Abschließend starte den Prozess "Belegart validieren" um Konfigurationsfehler auszuschließen


## Weitere Seiten zum Thema Gegebenbelege

{% include tag_linklist.html lang=page.lang pages=site.howto_collection tag="Gegenbelege" suppress_secondary_pages=""%}