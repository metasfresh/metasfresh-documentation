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
<kbd><img src="assets/price system hierarchy - price.png" alt="Fig.: Pricing System Hierarchy - Focus: Price"></kbd>

## Steps
1. Open "Product Prices" from the [menu](Menu).
1. [Create a new price entry](New_Record_Window).
1. Enter the [**Product**](NewProduct) to which the price shall apply and select it from the results in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick a [**Price List Version**](Add_price-list-version).
1. Enter a **Standard Price**.
1. Pick a **UOM** (unit of measure) for which the price shall apply (sales UOM).
 >**Note:** If sales UOM ≠ stock-keeping UOM (see [Product](NewProduct)), you have to define a [UOM conversion](Convert_UOMs).

1. In the field **Tax Category**, pick a value-added tax (VAT) category, e.g., *standard*, *reduced*, *tax-free*, etc.
1. In the field **Invoiceable Quantity per**, pick the weight to be used for invoicing, e.g., *Nominal* weight (default) or *Catch Weight* ([for products with variable weight](Sales_order_catch_weight)).
1. ***Optional:*** Set the desired [**Organization**](Org_add_new_organization). To do so, enter part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. [metasfresh saves the progress automatically](Saveindicator).

## Further Information

| Field Name | Note |
| :--- | :--- |
| List Price | Specifies the list price that will appear on the supporting documents. |
| Standard Price | Specifies the effectively valid purchase or sales price (depending on the respective price list). |
| Limit Price | Manual price changes made by the user, e.g., in the order line, must not fall below this amount! |
| UOM | Specifies the unit of measure *for which the price applies* (sales UOM) and ***must not be confused*** with the product's UOM used for inventory management (stock-keeping UOM)! |
| Invoicable Quantity per | Specifies the weight to be used for invoicing.<br> &#8226;&nbsp;*Nominal*: Standard (average) weight obtained by [UOM conversion](Convert_UOMs) between stock-keeping UOM and sales UOM.<br> &#8226;&nbsp;*Catch Weight*: Actual (exact) weight of a product obtained by weighing the goods. ([Catch Weight Management](Sales_order_catch_weight))|

## Next Steps
- [Assign the prices to a partner](Assign_prices_to_partner).

## Example
<kbd><img src="assets/Add_Price.gif" alt="GIF: Add new price"></kbd>
