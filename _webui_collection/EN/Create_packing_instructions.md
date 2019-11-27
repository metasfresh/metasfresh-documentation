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
By means of packing instructions, you can specify the type of [packing material](Set_up_packing_material) to be used for packaging ([TU](Handling_Unit_System)) or loading units ([LU](Handling_Unit_System)). You can also determine whether and how many packaged goods may be packed into or on it, respectively.

## Steps

### Add new packing instructions
1. Open "Packing Instruction" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the packing instruction a **Name**.
1. [metasfresh saves the progress automatically](Saveindicator).

### Define a packing instructions version
1. Open "Packing Instruction Version" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Select the desired **Packing Instruction**.
1. Give the version a **Name**.
1. Select a **Handling Unit Type**, e.g., *Transport Unit*.
1. Tick the checkbox **Currently valid version**.
1. [metasfresh saves the progress automatically](Saveindicator).

### Determine a packing material
1. Go to the record tab "Position" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Select the **Position Type** *Packing material* (Ger.: Packmittel). A new field [**Packing Material**](Set_up_packing_material) appears.
1. Select the desired **Packing Material**.
1. Click "Done" to close the overlay window and add the packing material to the list.

### Allow packaged goods
1. Go to the record tab "Position" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Select the **Position Type** *Packaged good* (Ger.: Packgut).
1. Click "Done" to close the overlay window and add the position type to the list.

## Next Steps
- [Allocate a product to a transport unit](CU-TU_Allocation) and determine its packing quantities.

## Example
![](assets/Create_packing_instructions.gif)
