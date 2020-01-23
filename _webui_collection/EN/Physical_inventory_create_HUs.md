---
title: How do I take inventory? (or: How to create Handling Units)
layout: default
tags:
  - Master Data
  - Warehouse Management
  - Inventory
lang: en
sequence: 10
ref: physical_inventory_create_hus
---

## Overview
In metasfresh, you can record inventory levels and also add new [handling units](Handling_Unit_System) to your stock via physical inventory.

## Steps
1. Open "Physical Inventory" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Pick a [**Warehouse**](Add_new_warehouse).
1. Pick an **Activity**.

### Record counted quantities
1. Go to the record tab "Inventory Count Line" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) whose stock quantity you want to record and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field **UOM**, enter a part of the name of the [unit of measure](Menu) used for the product stock quantity recorded and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field **Locator**, enter a part of the [storage location name](Add_new_warehouse#locator) and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field **Quantity count**, enter the actual (physically counted) product stock quantity.
1. Tick the checkbox **Counted**.
1. Click "Done" to close the overlay window and add the quantity count to the list.
 >**Note:** You can add more quantity counts this way.
