---
title: How do I create new packing instructions?
layout: default
tags:
  - Master Data
  - Product
  - Packing Instructions
lang: en
sequence: 40
ref: create_packing_instructions
---

## Overview
By means of packing instructions, you can define the type of [packing material](Set_up_packing_material) to be used for packaging ([TU](Handling_Unit_System)) or loading units ([LU](Handling_Unit_System)). You can also determine whether and how many packaged goods may be packed into or onto them, respectively.

By linking packing instructions hierarchically, you can also assign different HU types ([TU/LU](Handling_Unit_System)) to each other, combining them into logistical units or unit loads (e.g., a cardboard box on a Euro-pallet).

## Steps

### Add new packing instructions
1. Open "Packing Instruction" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the packing instruction a **Name**.
1. [metasfresh saves the progress automatically](Saveindicator).

### Define a packing instructions version
1. Open "Packing Instruction Version" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Pick the desired **Packing Instruction**.
1. Give the version a **Name**.
1. Pick a **Handling Unit Type**, e.g., *Transport Unit*.
1. Tick the checkbox **Currently valid version**.
1. [metasfresh saves the progress automatically](Saveindicator).

### Optional: Define packaged goods
In metasfresh, "packaged goods" is synonymous with "[sales unit (CU)](Handling_Unit_System)" and defines whether and how many goods may be packaged according to the packing instructions.

1. Go to the record tab "Item" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Select the **Item Type** *Packaged good* (Ger.: Packgut).
1. Click "Done" to close the overlay window and add the item to the list.
1. In the newly added packaged goods line, double-click the field in the column **Quantity** and enter the maximum permitted quantity of goods to be packed. To confirm, press `↵ Enter` or click on a blank area.

### Optional: Determine a packing material
Packing material is used to link the packing instructions to a physical product in stock intended for packing [sales units (CU)](Handling_Unit_System). Packing materials are primarily used for returnable containers/packaging that are to be shown separately on sales/purchase orders.

1. Go to the record tab "Item" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Select the **Item Type** *Packing material* (Ger.: Packmittel). A new field "[**Packing Material**](Set_up_packing_material)" appears.
1. Pick the desired **Packing Material**.
1. Click "Done" to close the overlay window and add the packing material to the list.

### Optional: Multi-level packing instructions (sub-packing instructions)
Subordinate packing instructions are used to combine different HU types into logistical units/unit loads, e.g., if the packing instructions require cardboard boxes ([packaging/TU](Handling_Unit_System)) to be loaded onto a Euro-pallet ([load carrier/LU](Handling_Unit_System)).

<!-- https://help.sap.com/docs/SAP_S4HANA_CLOUD/32da8359c8ee4e8b8e8c5e15cacba5aa/691db9537cceb44ce10000000a174cb4.html?locale=en-US#features -->

1. Go to the record tab "Item" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Select the **Item Type** *Sub-Packing Instructions* (Ger.: Unterpackvorschrift). New fields appear.
1. Pick the desired **Sub-Packing Instructions**, e.g., cardboard box.
1. Enter a **Quantity** of how many individual packing units of the sub-packing instructions are allowed in/on the higher-level packing instructions.
1. Click "Done" to close the overlay window and add the sub-packing instructions to the list.

## Next Steps
- [Assign the packing instructions to a product](CU-TU_Allocation) and specify the quantity of the packaged goods.

## Example
![](assets/Create_packing_instructions.gif)
