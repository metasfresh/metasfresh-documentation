---
title: How do I set up packing material?
layout: default
tags:
  - Master Data
  - Product
  - Packing Instructions
lang: en
sequence: 30
ref: set_up_packing_material
---

## Overview
Packaging materials are used to package products ([CU](Handling_Unit_System)) and may vary in material and form depending on the nature of the product.

In metasfresh, packaging materials themselves are managed as products that can be automatically added as additional items to sales or purchase orders when completing them. This procedure is primarily used when returnable containers/packaging are involved (similar to the bottle deposit shown on a receipt).

## Requirements
- Before packing material can be used as such in metasfresh, it must first be [added to your products](NewProduct).

## Steps
1. Open "Packing Material" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the packing material a **Name**.
1. In the field **Product**, select the desired packing material, e.g., *Euro Container*.
1. ***Optional:*** In the field **Unit Measurements**, select the unit for the measurements of the packing material and enter the respective dimensions into the fields **Length**, **Width** and **Height**.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Create packing instructions](Create_packing_instructions) that make use of the packing material.

## Example
![](assets/Set_up_packing_material.gif)
