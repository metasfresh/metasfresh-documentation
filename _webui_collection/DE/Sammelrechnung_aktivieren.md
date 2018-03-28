---
title: Sammelrechnung für Kunden aktivieren
layout: default
tags:
  - Workflow-Manipulation
  - Fakturierung
lang: de
ref: enable_collectivebill
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Geschäftspartner".
1. Wähle den Geschäftspartner in der [Listenansicht](Ansichten) aus.
1. Gehe zur Registerkarte "Kunde" unten auf der Seite.
1. Öffne das ["Advanced Edit"-Menü](AdvancedEditTab_Öffnen).
1. Stelle im Feld **Aggregationsregel für Ausgangsrechnung** die gewünschte Aggregation ein.
 >**Hinweis:** Im Normalfall "invoicing-agg-std" wählen.

1. Klicke auf "Bestätigen", um das Fenster zu schließen.

## Erläuterung der Regeln
| Regel | Bezeichnung | Erläuterung |
|---|---|---|
| invoicing-agg-std | Standardregel | Zusammenfassung erfolgt ohne Einschränkungen
| leer | | Pro Auftrag wird immer eine Rechnung erstellt

## Beispiel
![](assets/Sammelrechnung_aktivieren.gif)
