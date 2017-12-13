---
title: How do I configure a product ("Discount") for the Group Discount Process?
layout: default
tags:
  - Pricing
  - Discounts
lang: en
sequence: 50
ref: product_for_group_discount
---

## Overview
For [Group Discounting](Order_line_group_discount) you need to select a product in order to create a discount line in which the selected order lines are combined. This product must be configured as follows:
- It must not be **Stocked**.
- It must be linked to the very **same Price List** as the Sales Order where you want to give the discount.

## Steps
1. Open "Product" from the [menu](Menu).
1. [Create a new Product](New_Record_Window).
1. Enter a **Name**  of your choice, e.g. "Discount".
1. Select the **Product Category** *Diverse*.
1. Uncheck the box **Stocked**.
1. Add a [Price List](ProductPrice) to the product.
 >**Note:** This Price List must be identical to the one used in the regarding Sales Order.

1. [metasfresh saves the progress automatically](Saveindicator).

### Example
![](assets/Product for group discount.gif)
