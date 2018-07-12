---
title: Wie richte ich die automatische Kompensationsgruppierung für Produktkategorien ein?
layout: default
tags:
  - Preisgestaltung
  - Rabatte
  - Kompensationsgruppen
lang: de
sequence: 30
ref: automatic_compensation_groups_setup
---

## Übersicht
[Kompensationsgruppen](Rabattformen_in_metasfresh) sind Auftragszeilen, die zu Gruppen zusammengefasst werden, auf die ein gemeinsamer Rabatt oder Aufschlag gegeben werden kann. Diese Kompensationsgruppen können manuell erstellt werden, wie bei den [Auftragszeilengruppenrabatten](Auftragszeilengruppenrabatt), oder auch automatisch bei entsprechender Vorkonfiguration.

Im Folgenden wird die Konfiguration der automatischen Kompensationsgruppen beschrieben:

## Schritte
1. [Erstelle ein Rabattprodukt](Produkt_für_Gruppenrabatt) für die Kompensationsgruppierung und [füge es einer Preisliste hinzu](ProduktPreis).
 >**Hinweis:** Diese Preisliste muss dieselbe sein wie die in dem betreffenden Auftrag.

1. Lege ein [Kompensationsgruppenschema](Kompensationsgruppenschema_anlegen) mit dem Rabattprodukt an.
1. [Verknüpfe das Kompensationsgruppenschema mit einer Produktkategorie](Kompensationsgruppenschema_Produktkategorie) ***oder*** stelle eine [übergeordnete Produktkategorie](Uebergeordnete_Produktkategorie) ein, welche mit einem Kompensationsgruppenschema verknüpft ist.
 >**Hinweis:** Produkte aus derselben Produktkategorie werden bei dem [automatischen Gruppenrabattierungsprozess](Automatische_Gruppenrabatte) zu einer Kompensationsgruppe mit demselben Schema vereint.
