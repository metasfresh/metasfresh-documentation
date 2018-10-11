---
title: How do I create a compensation group schema?
layout: default
tags:
  - Pricing
  - Pricing Conditions
  - Discounts
  - Compensation Groups
lang: en
sequence: 40
ref: create_compensation_group_schema
---

## Overview
A compensation group schema allows you to determine which products will be automatically combined into a compensation group in a sales order.

## Steps
1. Open "Compensation Group Schema" from the [menu](Menu).
1. [Create a new compensation group schema](New_Record_Window).
1. Give the schema a **Name**, e.g., "Compensation Group I".
1. Go to the record tab "Products" at the bottom of the page and click ![](assets/Add_New_Button.png). An overlay window opens up.
1. Select a **Product**, e.g., *Group discount*.
 >**Note:** You can select any other product from the list in the product field, provided that it is ***not stocked*** and linked to the very ***same price list*** as in the sales order. <br> [Follow these instructions](Product_for_group_discount) to configure such a "discount product".

1. ***Optional:*** Enter a **Discount %** right here which will then be applied automatically when creating the compensation group. However, you can also leave it at 0 and manually enter the discount amount later in the sales order.
1. Click "Done" to close the overlay window and add the discount product to the list.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Link the compensation group schema to a product category](Compensation_group_schema_product_category).

## Example
![](assets/Create_compensation_group_schema.gif)
