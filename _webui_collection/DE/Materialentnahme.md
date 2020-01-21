---
title: Wie mache ich eine Materialentnahme?
layout: default
tags:
  - Workflow-Setup
lang: de
ref: inventory_takeout
---

## Einrichtung
1. [Lege ein Lager "Materialentnahme" mit Lagerort "Materialentnahme" an](Neues_Lager_anlegen).
1. Setze die ad_sysconfig mit dem Namen `de.metas.handlingunits.client.terminal.inventory.model.InventoryHUEditorModel#DirectMove_Warehouse_ID` auf die Datensatz ID des Lagers.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Handling Unit Editor".
1. [Selektiere](AuswahlBelege) eine Handling Unit.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Materialentnahme".

## Erläuterung
Nun wird die Handling Unit ohne ihre Verpackung (LU und TU) in das Lager verschoben.
