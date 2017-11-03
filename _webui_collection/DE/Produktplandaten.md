---
title: Wie konfiguriere ich meine Produktplandaten?
layout: default
tags:
  - Workflow
  - Materialdisposition
lang: de
sequence: 10
ref: productplanning
---

## Übersicht
Mit den Produktplandaten kannst Du einstellen, was passieren soll, wenn ein Produkt verkauft wird.
Ein Produkt kann ein einzelnes Fertigprodukt sein oder aus mehreren Komponenten bestehen. Unter Umständen hast Du dieses Produkt oder seine Komponenten nicht (mehr) auf Lager, also musst Du es **einkaufen** oder **produzieren**.
 >**Hinweis:** Im Fenster *Handling Unit Editor* erhältst Du eine Übersicht der Produkte auf Lager.

Wird ein Auftrag erfasst, überprüft die *Materialdisposition* anhand der Produktplandaten automatisch, welche Produkte auf Lager sind, eingekauft oder produziert werden müssen.


## Vorbereitung
[Lege ein Produkt an](NeuesProdukt), für das Du die Plandaten konfigurieren möchtest.


## Schritte

### Plandaten konfigurieren
1. [Gehe ins Menü](Menu) und öffne den Link "Produkt Plandaten".
1. Wähle das Produkt in der [Listenansicht](Ansichten) aus.
1. Gehe zur Registerkarte "Daten Planung" unten auf der Seite.
1. [Lege einen neuen Datensatz an](Neuer_Datensatz_Tab_Webui). Es öffnet sich ein neues Fenster.

---

#### Für den Einkauf
1. Soll die Planung von der Materialdisposition berücksichtigt werden, setze ein Häkchen bei **Plan erzeugen**.
1. Setze das Feld **Eingekauft** auf *Ja*.
1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Plandaten zur Liste hinzuzufügen.

---

#### Für die Produktion
1. Wähle eine **Stücklistenkonfiguration** aus.
1. Wähle einen **Arbeitsablauf** aus.
1. Wähle eine **Produktionsressource** aus.
1. Soll der Produktionsauftrag von der Materialdisposition berücksichtigt werden, setze ein Häkchen bei **Plan erzeugen**.
1. Soll der Produktionsauftrag automatisch fertiggestellt werden, setze ein Häkchen bei **IsDocComplete**.
1. Setze das Feld **Wird produziert** auf *Ja*.
 >**Hinweis:** In diesem Fall legt die Materialdisposition automatisch einen Produktionsauftrag an, sobald ein Auftrag erstellt wurde.

1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Plandaten zur Liste hinzuzufügen.
