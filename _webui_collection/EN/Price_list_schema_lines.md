---
title: How do I add rules to a price list schema?
layout: default
tags:
  - Pricing
  - Prices
  - Price List Schemas (Copy Product Prices)
lang: en
sequence: 40
ref: price_list_schema_lines
---

## Overview
A price list schema in metasfresh can be used to [copy existing product prices from one price list version to another](Copy_prices_from_price-list-version) or to [update various customer-specific price lists with new prices in one go](Update_derivative_PLV). In the price list schema, you can use rules to define which products are affected, for which product category and/or which business partner the schema shall apply, and whether the standard prices shall be increased by a surcharge amount.

## Requirements
- [Create a price list schema](Add_price_list_schema).

## Steps

### Add schema lines
1. Open "Price List Schema Line" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. In the field **Discount Schema**, enter a part of the name of the [price list schema](Add_price_list_schema) to which the schema line shall be assigned and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In case of multiple lines for the same schema you can specify their order via the field **SeqNo**.
 >**Note:** The lowest number comes first.

### Define rules

| **Note:** |
| :--- |
| The following specifications are all ***optional*** and can be combined with each other as required. |

1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) of your choice and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick a [**Product Category**](NewProductCategory).
1. In the field **Business Partner**, enter a part of the name or number of the [business partner](New_Business_Partner) of your choice and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick a **Tax Category**.
1. Enter a **Std. Price Surcharge Amt.** or leave it at *0.00*.
1. The field **Standard Price Rounding** specifies the number of decimal places for price calculations.
1. Pick a **Target Tax Category**.
 >**Note:** This will become the tax category of the new product prices.

1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Copy prices and products from one price list version to another](Copy_prices_from_price-list-version).
- [Update customer price lists derived from a base price list](Update_derivative_PLV).

| Note for "[Copy Product Prices](Copy_prices_from_price-list-version)": |
| :--- |
| To be able to copy product prices, the price list schema set in the selected price list version must include **at least one schema line**. Yet it is not strictly necessary to define any specific rules, such as a product, business partner or surcharge amount.<br> In case, however, there are rules defined and you are using this price list schema to copy product prices, the rules will be applied automatically to all affected products. |
