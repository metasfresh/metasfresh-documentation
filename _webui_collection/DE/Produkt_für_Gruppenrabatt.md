---
title: Wie konfiguriere ich ein "Rabattprodukt" für den Gruppenrabattierungsprozess?
layout: default
tags:
  - Preisgestaltung
  - Rabatte
lang: de
sequence: 50
ref: product_for_group_discount
---

## Übersicht
Bei der [Gruppenrabattierung](Auftragszeilengruppenrabatt) benötigst Du ein Sonderprodukt, um eine Rabattzeile zu erstellen, in der die ausgewählten Auftragszeilen zusammengefasst sind. Dieses Sonderprodukt muss folgendermaßen konfiguriert sein:
-	Es darf **nicht lagerhaltig** sein.
-	Es muss mit **derselben Preisliste** verknüpft sein wie der Auftrag, in dem der Rabatt gewährt werden soll.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkte".
1. [Lege ein neues Produkt an](Neuer_Datensatz_Fenster_Webui).
1. Trage in das Feld **Artikelname** einen beliebigen Namen ein, z.B. "Rabatt".
1. Wähle eine passende **Produktkategorie** aus, z.B. *Diverse*.
1. Entferne das Häkchen bei dem Kästchen **Lagerhaltig**.
1. [Füge dem Produkt eine Preisliste hinzu](ProduktPreis).
 >**Hinweis:** Diese Preisliste muss dieselbe sein wie die in dem betreffenden Auftrag.

1. [metasfresh speichert automatisch](Speicheranzeige).

### Beispiel
![](assets/Produkt für Gruppenrabatt.gif)
