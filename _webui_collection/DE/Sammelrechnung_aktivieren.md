---
title: Sammelrechnung für Kunden aktivieren
layout: default
tags:
  - Workflow-Manipulation
  - Fakturierung
ref: aggregatedinvoiceenable
lang: de
---


## Sammelrechnung für Kunden aktivieren
1. [Öffne das Fenster](Menu) Geschäftspartner
1. Partner auswählen
1. In das Register **Kunde** wechseln
1. Advanced Edit für das Register Kunden öffnen
1. In Feld **Aggregationsregel für Ausgangsrechnung** die gewünschte Aggregation einstellen.
 > Hinweis: Im Normalfall "invoicing-agg-std" nehmen.

## Erläuterung der Regeln


|Regel|Bezeichnung|Erklärung|
|---|---|---|
|invoicing-agg-std|Standardregel|Zusammenfassung erfolgt ohne Einschränkung
|LEER||Pro Auftrag wird immer eine Rechnung erstellt
