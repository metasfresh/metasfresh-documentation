---
title: Gegenbelege - Übersicht
layout: default
tags:
  - Gegenbelege  
lang: de
sequence: 10
---
## Übersicht

metasfresh ermöglicht Dir nicht nur die Verwaltung mehreren juristischer Personen in einem System mittels Organisationen, sondern auch die jeweiligen Gegenbelege automatisch zu erzeugen wenn diese Organisationen miteinander Geschäfte abwickeln.

So wird z.B. ein Auftrag an Organisation B durch Org. A automatisch zu einer Bestellung in Org, B des Kunden Org. A. 


![Gegenbelege](../images/de_Gegenbelege.png)


Damit nicht beide Organisation die identischen Produkte und Packmittel führen müssen, kannst Du die jeweiligen passenden Stammdaten miteinander verbinden.

![Gegenbelege Stammdaten](../images/de_Gegenbelege_Stammdaten.png) 


## Weitere Seiten zum Thema Gegebenbelege

{% include tag_linklist.html lang=page.lang pages=site.howto_collection tag="Gegenbelege" suppress_secondary_pages=""%}

## Beispiel Ablauf

1. Benutzer der Org A stellt Auftrag an Org B fertig
2. Automatisch wird in Org B eine Bestellung erzeugt mit Org A als Lieferant und mit den jeweils zugehörigen Produkten und Packvorschriften 
3. Die Bestellung in Org B bleibt erst einmal offen damit Du noch eine Sichtprüfung machen kannst

## Kontrolle

1. Einmal pro Tag versendet metasfresh eine Liste der Gegenbelege die erstellt wurden
1. Sollte einmal ein Gegenbeleg nicht erstellt werden können weil z.B. verknüpfte Stammdaten nicht angelegt wurden, erhält Du eine entsprechende Fehlermeldung per mail
1. Im Fenster Missing Counter Documents findest Du die Belege aufgelistet die nicht erstellt werden konnten 






