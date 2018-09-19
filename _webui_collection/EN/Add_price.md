---
title: How do I add a price?
layout: default
tags:
  - Pricing
  - Prices
  - Price Definition
lang: en
sequence: 50
ref: add_price
---

## Overview
![](assets/price system hierarchy - price.png)

## Steps
1. Open "Product Prices" from the [menu](Menu).
1. [Create a new price entry](New_Record_Window).
1. Enter the [**Product**](NewProduct) to which the price shall apply and select the corresponding one from the suggestions.
1. In the field **Price List Version** enter a part of the name of the envisaged price list version and click on one of the results.
 >**Note 1:** Hit `SPACE` to see all available [price list versions](Add_price-list-version).<br><br>
 >**Note 2:** Select one of the shown options with the mouse or ![](../DE/assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).

1. The field **List Price** determines the list price that will later appear on the documents.
1. The field **Standard Price** determines the effectively valid purchase or sales price (depending on the respective price list).
1. **Limit Price**: Manual price changes made by the user, e.g., in the order line, must not fall below this amount!
1. The field **UOM** determines the sales UOM and ***must not be confused*** with the product's stock UOM (inventory management)!
 >**Note:** If sales UOM ≠ stock UOM, you have to define a [UOM conversion](Convert_UOMs).

1. In the field **Tax Category** you can select the respective value-added tax (VAT) category, such as *normal*, *reduced*, *tax-free*.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Assign the prices to a partner](Assign_prices_to_partner).

## Example
![](assets/Add_Price.gif)
