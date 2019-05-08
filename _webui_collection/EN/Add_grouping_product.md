---
title: How do I add a grouping product?
layout: default
tags:
  - Master Data
  - Product
lang: en
sequence: 60
ref: add_grouping_product
---

## Overview
A grouping product is a technical auxiliary product which can be applied during the process of [creating bills of materials from a quotation](Create_BOM_upon_SO_generation). It is used to identify the succeeding order lines as quotation groups so that they can then be combined to give a new sales product with a bill of materials through [automatic compensation grouping](Create_automatic_compensation_groups).

A grouping product is basically added like any other normal [product](NewProduct) too, taking into account the following application-specific configuration:

## Steps
1. Open "Product" from the [menu](Menu).
1. [Add a new product](New_Record_Window).
1. Enter a meaningful **Name**, e.g., "Grouping product".
1. Pick the very same **Product Category** as used for the grouping products (see [step 1.1 in these instructions](Create_BOM_upon_SO_generation_setup)).
1. [Add the product to a price list](ProductPrice).
 >**Note:** The grouping product must be linked to the very ***same price list*** as in the sales order where it shall be used.

1. Open the [advanced edit menu](ViewModes) from the [actions menu](StartAction).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the checkbox **Ist Angebotsgruppe** (*Is quotation group*) and tick it.
1. Click "Done" to apply the changes and close the advanced edit menu.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps (optional)
- [Use the grouping product to create bills of materials upon sales order creation from a quotation](Create_BOM_upon_SO_generation).

## Example
![](assets/Add_grouping_product.gif)
