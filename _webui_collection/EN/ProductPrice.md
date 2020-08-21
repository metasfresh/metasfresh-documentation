---
title: How do I assign a price to a product?
layout: default
tags:
  - Master Data
  - Product
lang: en
sequence: 20
ref: productprice
---

## Steps
1. Open the entry of an existing [product](Menu) or [add a new one](NewProduct).
1. Go to the record tab "Price" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Pick a [**Price List Version**](Add_price-list-version), e.g., "Customer Price List" ([for sales](Assign_prices_to_partner#sales-price-list)) or "Vendor Price List" ([for purchasing](Assign_prices_to_partner#purchase-price-list)).
1. Enter a **Standard Price**.
1. Pick a **UOM** (unit of measurement) for which the price shall apply (sales UOM).
 >**Note:** If sales UOM ≠ stock-keeping UOM (see [Product](NewProduct)), you have to define a [UOM conversion](Convert_UOMs).

1. In the field **Tax Category**, pick a value-added tax (VAT) category, such as *normal*, *reduced*, *tax-free*, etc.
1. In the field **Invoiceable Quantity per**, pick the weight to be used for invoicing, e.g., *Nominal* weight (default) or *Catch Weight* ([for products with variable weight](Sales_order_catch_weight)).
1. Click "Done" to close the overlay window and add the price to the list.

## Further Information

| Field Name | Note |
| :--- | :--- |
| List Price | Specifies the list price that will appear on the supporting documents. |
| Standard Price | Specifies the effectively valid purchase or sales price (depending on the respective price list). |
| Limit Price | Manual price changes made by the user, e.g., in the order line, must not fall below this amount! |
| UOM | Specifies the unit of measurement *for which the price applies* (sales UOM) and ***must not be confused*** with the product's UOM used for inventory management (stock-keeping UOM)! |
| Invoicable Quantity per | Specifies the weight to be used for invoicing.<br> &#8226;&nbsp;*Nominal*: Standard (average) weight obtained by [UOM conversion](Convert_UOMs) between stock-keeping UOM and sales UOM.<br> &#8226;&nbsp;*Catch Weight*: Actual (exact) weight of a product obtained by weighing the goods. ([Catch Weight Management](Sales_order_catch_weight))|

## Example
<kbd><img src="assets/NewProductPrice.gif" alt="GIF: Assign a product price"></kbd>
