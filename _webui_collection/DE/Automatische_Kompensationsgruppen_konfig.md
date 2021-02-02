---
title: Wie richte ich die automatische Kompensationsgruppierung für Produktkategorien ein?
layout: default
tags:
  - Verkauf
  - Kompensationsgruppen
  - Einrichtung
lang: de
sequence: 10
ref: automatic_compensation_groups_setup
---

## Überblick
[Kompensationsgruppen](Rabattformen_in_metasfresh) bestehen aus mehreren Auftragszeilen, die zu Gruppen zusammengefasst wurden, auf die gemeinsame Rabatte oder Aufschläge gegeben werden können ([Auftragszeilengruppenrabatte](Auftragszeilengruppenrabatt)). Sie sind ebenfalls bei der [Erstellung von Stücklisten aufgrund eines Angebots](Stueckliste_bei_Auftragsgenerierung) nützlich, wo sie dabei helfen, Produktionsbestandteile zu einer Angebotsgruppe zu vereinen, auf deren Grundlage später die Stückliste und das Verkaufsprodukt erstellt werden.

Kompensationsgruppen können sowohl [manuell](Kompensationsgruppen_manuell_erstellen) erstellt werden als auch [automatisch](Kompensationsgruppen_automatisch_erstellen) bei entsprechender Vorkonfiguration.

Um die automatische Erstellung von Kompensationsgruppen zu konfigurieren, gehe wie folgt vor:

## Schritte
1. [Erstelle ein Gruppierungsprodukt](Gruppierungsprodukt_anlegen) für die Kompensationsgruppierung.
 >**Hinweis:** Das Gruppierungsprodukt darf ***nicht lagerhaltig*** sein und muss mit ***derselben Preisliste*** verknüpft sein wie der Auftrag, in dem es zum Einsatz kommen soll.

1. Lege ein [Kompensationsgruppenschema](Kompensationsgruppenschema_anlegen) mit dem Gruppierungsprodukt an.
1. [Verknüpfe das Kompensationsgruppenschema mit einer Produktkategorie](Kompensationsgruppenschema_Produktkategorie) ***oder*** stelle eine [übergeordnete Produktkategorie](Uebergeordnete_Produktkategorie) ein, welche mit einem Kompensationsgruppenschema verknüpft ist.
 >**Hinweis:** Produkte aus derselben Produktkategorie werden bei der [automatischen Kompensationsgruppierung](Kompensationsgruppen_automatisch_erstellen) zu einer Kompensationsgruppe mit demselben Schema vereint.
