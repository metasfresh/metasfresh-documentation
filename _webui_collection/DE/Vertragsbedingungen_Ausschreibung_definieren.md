---
title: Wie bestimme ich die Vertragsbedingungen für Ausschreibungen?
layout: default
tags:
  - Workflow
  - Einkauf
  - Ausschreibungen
  - Einrichtung
lang: de
sequence: 20
ref: rfq_conditons_details
---

## Überblick
[Ausschreibungen](Ausschreibung_erstellen) sollen, nachdem sie abgelaufen sind, nicht automatisch erneuert werden. Da automatische Vertragsverlängerungen über die Vertragslaufzeit gesteuert werden, muss zuerst ein entsprechender Eintrag erstellt werden, in dem die automatische Vertragsverlängerung deaktiviert ist. Anschließend kann diese Vertragslaufzeit dann mit den jeweiligen Vertragsbedingungen verknüpft werden, um so im zutreffenden Fall eine automatische Vertragsverlängerungen zu verhindern.

## Schritte

### Vertragslaufzeit ohne autom. Vertragsverlängerung
Folge dieser [Anleitung zur Bestimmung der zeitlichen Rahmenbedingungen eines Vertrages](Vertragslaufzeit_definieren) unter Berücksichtigung der folgenden Einstellungen:
1. Vergib einen sinnvollen Namen, z.B. *Keine autom. Verlängerung*.
1. Setze das Feld **Vertrag autom. verlängern** auf *leer*.

### Vertragsbedingungen bestimmen
Folge dieser [Anleitung zur Bestimmung von Vertragsbedingungen](Vertragsbedingungen_definieren) unter Berücksichtigung der folgenden Einstellungen:
1. Vergib einen sinnvollen Namen, z.B. *Ausschreibung (RfQ)*.
1. Wähle als **Vertragsart** *Liefervereinbarung* aus.
1. Wähle im Feld **Vertragsverlängerung/-übergang** *Keine autom. Verlängerung* (siehe oben) aus.

## Nächste Schritte
1. [Lege ein Ausschreibungsthema an](Ausschreibungsthema_anlegen).
1. [Erstelle eine Ausschreibung](Ausschreibung_erstellen).
