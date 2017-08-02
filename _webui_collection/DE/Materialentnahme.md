---
title: Wie mache ich eine Materialentnahme?
layout: default
tags:
  - Workflow Setup
lang: de
ref: inventory_takeout
---

## Einrichtung

1. lege ein Lager "Materialentnahme" mit Lagerort "Materialentnahme" an
1. Setze die ad_sysconfig mit dem Namen `de.metas.handlingunits.client.terminal.inventory.model.InventoryHUEditorModel#DirectMove_Warehouse_ID` auf die Datensatz ID des Lagers

## Schritte

1. gehe ins Fenster Handling Unit
1. Wähle eine Handling Unit
1. Starte den Prozess "Materialentnahme"

## Erklärung

Nun wird die Handling Unit ohne ihre Verpackung (LU und TU ) in das Lager verschoben.
