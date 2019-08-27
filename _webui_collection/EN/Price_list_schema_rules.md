---
title: How do I create a price list schema?
layout: default
tags:
  - Pricing
  - Prices
  - Price List Schemas (Copy Price Lists)
lang: en
sequence: 20
ref: price_list_schema_rules
---

## Overview
If you want to [copy a price list](Copy_prices_from_price-list-version) you will need a valid price list schema where you can also specify the products to be copied, to which product category and/or business partner the schema shall apply, and whether the standard prices shall be increased by a surcharge amount during copying.

## Steps

### Create a price list schema
1. Open "Price List Schema" from the [menu](Menu).
1. [Create a new price list schema](New_Record_Window).
1. Give the price list schema a **Name**, e.g., "Copy Price Lists".
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the price list schema is effective *immediately*. If it lies in the *future*, the schema will only apply *from that date*.

1. Select the **Discount Type** *Price List*.

### Add rules to the price list schema
1. Go to the record tab "Schema Line" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
 >**Note:** The specification and combination of the following fields are entirely **optional**.

1. In the field **Product**, enter a part of the [product](NewProduct) name or number and click on the matching result in the [drop-down list](Keyboard_shortcuts_reference).
1. Pick a **Product Category**.
1. In the field **Business Partner**, enter a part of the [business partner](New_Business_Partner) name or number and click on the matching result in the [drop-down list](Keyboard_shortcuts_reference).
1. Pick a **Tax Category**.
1. Enter a **Standard Price Surcharge Amount** or leave it at *0.00*.
1. Pick a **Target Tax Category**.
 >**Note:** This will be the tax category of the new product prices.

1. Click "Done" to close the overlay window and add the rule to the list.
<br><br>

| Note for "[Copy price lists](Copy_prices_from_price-list-version)": |
| :--- |
| In order to copy a price list, the price list schema used must include **at least one schema line**. However, it is not strictly necessary to define specific rules, such as a product, business partner or surcharge amount.<br> If, however, this is the case and you are using this price list schema to copy a price list, the defined rules will be applied to all affected products automatically. |

## Example
![](assets/Price_list_schema_rules.gif)
