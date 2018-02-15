---
title: How do I add a Price?
layout: default
tags:
  - Pricing
  - Prices
lang: en
sequence: 50
ref: add_price
---

## Overview
![](assets/price system hierarchy - price.png)

## Steps
1. Open "Product Prices" from the [menu](Menu).
1. [Create a new Price](New_Record_Window).
1. Enter the **[Product](NewProduct)** to which the price shall apply and select the corresponding one from the suggestions.
1. Enter the name of the designated **[Price List Version](Add_price-list-version)**.
 >**Note:** Hit `SPACE` to see all available price list versions.

1. The field **List Price** determines the list price that will later appear on the documents.
1. The field **Standard Price** determines the effectively valid purchase or sales price (depending on the respective price list).
1. **Limit Price**: Manual price changes made by the user, e.g. in the order line, must not fall below this amount!
1. The field **UOM** determines the price unit and ***must not be confused*** with the product's UOM used for inventory management! The price unit defines the price per quantity of items.
 >**Note:** If price unit ≠ product UOM, you have to define a [UOM conversion](Convert_UOMs).

1. In the field **Tax Category** you can select the respective value-added tax (VAT) category, such as *normal*, *reduced*, *tax-free*.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Assign the Prices to a Partner](Assign_prices_to_partner).

## Example
![](assets/Add_Price.gif)
