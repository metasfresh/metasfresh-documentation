---
title: How do I configure a "discount product" for the group discount process?
layout: default
tags:
  - Pricing
  - Discounts
lang: en
sequence: 50
ref: product_for_group_discount
---

## Overview
For [group discounting](Order_line_group_discount) you need to select a special product in order to create a discount line in which the selected order lines are combined. This special product must be configured as follows:
- It must **not be stocked**.
- It must be linked to the very **same price list** as in the sales order where you want to give the discount.

## Steps
1. Open "Product" from the [menu](Menu).
1. [Add a new product](New_Record_Window).
1. Enter a **Name**  of your choice, e.g. "Discount".
1. Select a suitable **Product Category**, e.g. *Diverse*.
1. Uncheck the box **Stocked**.
1. [Add a price list](ProductPrice) to the product.
 >**Note:** This price list must be identical to the one used in the regarding sales order.

1. [metasfresh saves the progress automatically](Saveindicator).

### Example
![](assets/Product for group discount.gif)
