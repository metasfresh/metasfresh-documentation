---
title: Wie konfiguriere ich ein "Rabattprodukt" für den Gruppenrabattierungsprozess?
layout: default
tags:
  - Preisgestaltung
  - Preiskonditionen
  - Rabatte
lang: de
sequence: 60
ref: product_for_group_discount
---

## Übersicht
Bei der [Gruppenrabattierung](Auftragszeilengruppenrabatt) musst Du ein Sonderprodukt auswählen, damit eine Rabattzeile erstellt werden kann, in der die ausgewählten Auftragszeilen zusammengefasst werden. Dieses Sonderprodukt muss folgendermaßen konfiguriert sein:
-	Es darf **nicht lagerhaltig** sein.
-	Es muss mit **derselben Preisliste** verknüpft sein wie der Auftrag, in dem der Rabatt gewährt werden soll.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkte".
1. [Lege ein neues Produkt an](Neuer_Datensatz_Fenster_Webui).
1. Trage in das Feld **Artikelname** einen beliebigen Namen ein, z.B. "Rabatt".
1. Wähle eine geeignete **Produktkategorie** aus, z.B. *Diverse*.
1. Entferne das Häkchen bei dem Kästchen **Lagerhaltig**.
1. [Füge dem Produkt eine Preisliste hinzu](ProduktPreis).
 >**Hinweis:** Diese Preisliste muss dieselbe sein wie die in dem betreffenden Auftrag.

1. [metasfresh speichert automatisch](Speicheranzeige).

## Beispiel
![](assets/Produkt für Gruppenrabatt.gif)
