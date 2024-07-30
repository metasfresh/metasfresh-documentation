---
title: How do I move inventory items to another warehouse?
layout: default
tags:
  - Master Data
  - Warehouse Management
  - Inventory Movement
lang: en
sequence: 20
ref: inventory_movement
---

## Overview
In metasfresh, you can very easily transfer [handling units (HUs)](Handling_Unit_System) from one warehouse to another.

## Steps
1. Open "Handling Unit Editor" from the [menu](Menu).
1. [Select](RecordSelection) the handling units you want to transfer.
1. [Start the quick action](StartAction#quick-actions) "MoveToAnotherWarehouse". An overlay window opens up.
1. In the field **Warehouse**, enter part of the [warehouse](Add_new_warehouse) name and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Click "Start" to close the overlay window and transfer the HUs.
1. [metasfresh saves the progress automatically](Saveindicator).
 >**Note:** [Use the filter](Filtering_function) to quickly find the transferred HUs.

## Example
<kbd><img src="assets/Inventory_movement.gif" alt="GIF: How to move inventory items to another warehouse"></kbd>
