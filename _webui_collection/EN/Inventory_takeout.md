---
title: How do I perform an inventory takeout?
layout: default
tags:
- Materials Management
lang: en
ref: inventory_takeout
---

## Setup
1. [Create a warehouse](<Add_new_warehouse>) "Inventory Takeout" with the locator "Inventory Takeout".
1. Set the `ad_sysconfig` named `de.metas.handlingunits.client.terminal.inventory.model.InventoryHUEditorModel#DirectMove_Warehouse_ID` to the record ID of the warehouse.

## Steps
1. [Open the menu](Menu) and open the "Handling Unit Editor" window.
1. [Select](RecordSelection) a handling unit.
1. [Start the action](StartAction#general-actions-actions-menu) "Materialentnahme" (Inventory Takeout).

## Explanation
Now the handling unit is moved into the warehouse without its packaging (LU and TU).
