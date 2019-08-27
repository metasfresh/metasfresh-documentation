---
title: How do I convert UOMs?
layout: default
tags:
  - Master Data
  - Product
  - Units of Measurement (UOMs)
lang: en
sequence: 10
ref: convert_uoms
---

## Overview
If a product's stock-keeping UOM does not match its sales UOM, you have to define a UOM conversion.

#### For instance:
You keep strawberries with the stock-keeping UOM "kilograms" in your inventory but you sell them in clamshells of 250g, so with the sales UOM "each".

Ergo:<br>
Out of 1 kilogram you obtain 4 clamshells of strawberries of 250g each.<br>
1 clamshell contains 0.25 kg of strawberries.

## Steps
1. Open the entry of an existing [product](Menu) or [add a new one](NewProduct).
1. Go to the record tab "UOM Conversion" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. The field **UOM** specifies the source UOM and must be identical to the product's stock-keeping UOM, e.g., here "kilograms".
1. The field **UOM to** specifies the target UOM to convert into, e.g., here "each".
1. The field **Multiply Rate** specifies the value by which to multiply the amount in the source UOM to obtain the corresponding amount in the target UOM.<br>
***Example:*** `1 kg × 4 = 4 each`.
1. The field **Divide Rate** specifies the value by which to divide the amount in the source UOM to obtain the corresponding amount in the target UOM.<br>
***Example:*** `1 kg ÷ 0.25 = 4 each`.
 >**Note:** Upon entering one of the values, the other will be calculated automatically.

1. Click "Done" to close the overlay window and add the conversion to the list.
 >**Note:** Repeat steps 2 to 7 to add further conversions.

## Example
![](assets/Convert_UOMs.gif)
