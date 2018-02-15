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
If the product's UOM used for inventory management does not match the price unit of a specific quantity of this product intended for sale, you have to define a UOM conversion.

## Steps
1. Open an [existing product](NewProduct).
1. Go to the tab "UOM Conversion" at the bottom of the page and click ![](assets/Add_New_Button.png). A new window opens up.
1. The field **UOM** determines the source UOM and must be identical with the product's UOM, e.g. "kilograms".
1. The field **UOM to** determines the target UOM to convert into, e.g. "each".
1. The field **Multiply Rate** determines the value by which to multiply the source UOM, e.g. `1 kg × 5 = 5 each`.
1. The field **Divide Rate** determines the value by which to divide the source UOM, e.g. `1 kg ÷ 0.2 = 5 each`.
 >**Note:** Upon entering one of the values, the other will be calculated automatically.

1. Click "Done" to close the window and add the conversion to the list.
1. Repeat steps 2 to 7 to add further conversions.

## Example
![](assets/Convert_UOMs.gif)
