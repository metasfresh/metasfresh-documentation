---
title: How do I give discounts on manually created compensation groups (order line group discounts)?
layout: default
tags:
  - Pricing
  - Pricing Conditions
  - Discounts
  - Compensation Groups
lang: en
sequence: 10
ref: order_line_group_discount
---

## Overview
[Order line group discounts](Discount_types_in_metasfresh) can be applied to both single as well as multiple order lines (*compensation groups*). They also allow for successive discounting where the previous discount is always included in the calculation. Moreover, you can give several discounts on various *compensation groups* in one order.

## Steps
1. Follow these [instructions for creating a sales order](SalesOrder_recording) up to **step 4 of the order line input**.
1. [Select the order lines](RecordSelection) you want to combine into a group.
1. [Start the action](StartAction) "Group Lines". A new window opens up.
1. Select a **Product**, e.g. *Discount*.
 >**Note:** You can select any other product from the list in the product field, provided that it is ***not stocked*** and linked to the very ***same price list*** as in the sales order. <br> [Follow these instructions](Product_for_group_discount) to configure such a "discount product".

1. Select a **Group**.<br>
***Alternatively*** you can also enter a **Group name** of your choice.
1. Click "Start" to close the window and create the group. A new order line with the **Compensation Type** *Discount* will be added to the list.
1. Move the horizontal scrollbar of the order line table to the right until you reach the column **Compensation percentage**.
1. Double-click the field **Compensation percentage** of the discount line and enter a percentage there.
1. Hit `↵ Enter` to apply.
1. Follow the remaining steps for [creating a sales order](SalesOrder_recording) to complete the order.

## Successive Discounting
If you want to give further discounts on a group discount that always consider the previously calculated discount total, simply proceed as follows:

1. Select an order line from the compensation group in question.
1. [Start the action](StartAction) "Add group compensation line". A new window opens up.
1. Select a **Product**, e.g. *Discount*.
 >**Note:** You can select any other product from the list in the product field, provided that it is ***not stocked*** and linked to the very ***same price list*** as in the sales order. <br> [Follow these instructions](Product_for_group_discount) to configure such a "discount product".

1. Click "Start" to close the window and add another group discount line to the list.
1. Double-click the field **Compensation percentage** of this discount line and enter a percentage there.
1. Hit `↵ Enter` to apply.

## Delete Compensation Group
If you want to delete a compensation group and revoke the discount, simply delete the respective discount line.

## Example
![](assets/Order line group discount.gif)
