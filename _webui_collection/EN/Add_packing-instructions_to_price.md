---
title: How do I add Packing Items to a Price?
layout: default
tags:
  - Master Data
  - Product
  - Packing Instructions
lang: en
sequence: 20
ref: add_packing-instructions_to_price
---

## Overview
If you want to sell a product in a transport unit, you can configure this under "Product Prices".

## Steps
1. Open an existing [price](Menu) or [add a new one](Add_price).
1. Select a **Packing Item**.
 >**Note:** Packing items will only be suggested if they have been [allocated to the product](CU-TU_Allocation) beforehand.

1. If the price should be calculated based on the sales UOM defined in the price entry, check the box **isAttributeDependent**. Otherwise the product's stock UOM is used.
 >**Note:** If sales UOM ≠ stock UOM, you have to define a [UOM conversion](Convert_UOMs).

1. [metasfresh saves the progress automatically](Saveindicator).

## Example
![](assets/Add_packing-instructions_to_price.gif)
