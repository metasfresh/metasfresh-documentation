---
title: Wie ermittle ich die Produkte für die Produktion (Materialdisposition)?
layout: default
tags:
  - Workflow
  - Produktion
lang: de
sequence: 100
ref: materialschedule_manufacturing
---

## Übersicht
Die Materialdisposition ermittelt anhand der *Produktplandaten*, welche Produkte in welchen Mengen produziert werden müssen.

## Vorbereitung

[Lege ein Produkt an](NeuesProdukt), für das Du die Plandaten konfigurieren möchtest.


## Schritte

### Plandaten konfigurieren
1. [Gehe ins Menü](Menu) und öffne den Link "Produkt Plandaten".
1. Wähle das Produkt in der [Listenansicht](Ansichten) aus.
1. Gehe zur Registerkarte "Daten Planung" unten auf der Seite.
1. [Lege einen neuen Datensatz an](Neuer_Datensatz_Tab_Webui). Es öffnet sich ein neues Fenster.
1. Wähle eine **Stücklistenkonfiguration** aus.
1. Wähle einen **Arbeitsablauf** aus.
1. Wähle eine **Produktionsressource** aus.
1. Soll der Produktionsauftrag von der Materialdisposition berücksichtigt werden, setze ein Häkchen bei **Plan erzeugen**.
1. Soll der Produktionsauftrag automatisch fertiggestellt werden, setze ein Häkchen bei **IsDocComplete**.
1. Setze das Feld **Wird produziert** auf *Ja*.
 >Hinweis: In diesem Fall legt die Materialdisposition automatisch einen Produktionsauftrag an, sobald ein Auftrag erstellt wurde.

1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Plandaten zur Liste hinzuzufügen.


### Nächste Schritte
1. Überprüfe in der Materialdisposition, welche Produkte in welchen Mengen in die Produktion gegeben werden müssen.
1. [Produziere](ProduktionFertigstellung) das Produkt.
