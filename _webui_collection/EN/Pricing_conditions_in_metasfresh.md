---
title: Pricing conditions in metasfresh
layout: default
tags:
  - Pricing
  - Pricing Conditions
lang: en
sequence: 10
ref: pricing_conditions_in_metasfresh
---

## Overview
In order to process products in sales and purchase orders in metasfresh, the following conditions must be fulfilled:

- The products *must be* on a valid [price list](Add_products_to_price-list).
- The business partner *must be* [linked to the exact same price list](Assign_prices_to_partner) that includes the products.
- The business partner *must be* linked to a ***scheme*** where the ***pricing conditions*** have been defined for all products in general and/or for each one individually.

In this scheme you can determine the following pricing conditions individually or in combination with each other:

- [Discounts and surcharges](Discount_types_in_metasfresh)
- [Product and partner-specific prices](Product_and_partner-specific_prices)

<br>

| **Important Note:** |
| :- |
| If you do not want to determine any specific conditions for products but rather just want to create a valid and functioning pricing conditions scheme that you can use for your sales, all you need to do is add a single pricing condition to the scheme where you set the **Break Value** to **0** and otherwise leave everything else at default (*see instructions [here](Create_discount_scheme)*). <br> In this way, you can sell all products on the price list at the price defined therein and in any quantity desired. |
