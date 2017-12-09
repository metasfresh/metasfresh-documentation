---
title: How do I give Group Discounts (Order Line Group Discounts)?
layout: default
tags:
  - Pricing
  - Discounts
lang: en
sequence: 30
ref: order_line_group_discount
---

## Overview
[Order Line Group Discounts](Discount_types_in_metasfresh) can be applied to both single as well as multiple Order Lines (*Compensation Groups*). They also allow for Successive Discounting where the previous discount is always being taken into account in the calculation. Moreover, you can give several discounts on various *Compensations Groups* in one Order.

## Steps
1. Follow these [instructions for creating a Sales Order](SalesOrder_recording) up to **Step 4 of the Order Line Input**.
1. [Select the order lines](RecordSelection) you want to join into a group.
1. [Start the action](StartAction) "Create group". A new window opens up.
1. Select a **Product**, e.g. [*Discount*](Product_for_group_discount).
 >**Note:** You can select any product from the list in the product field.

1. Select a **Group**.<br>
***Alternatively*** you can also enter a **Group name** of your choice.
1. Click "Start" to close the window and create the group. A new order line with the **Compensation Type** *Discount* will be added to the list.
1. Move the horizontal scrollbar of the order line table to the right until you find the column **Compensation percentage**.
1. Double-click the field **Compensation percentage** of the Discount Line and enter a percentage there.
1. Hit `ENTER` to apply.
1. Follow the remaining steps for [creating a Sales Order](SalesOrder_recording) to complete the Order.

## Successive Discounting
If you want to give further discounts on a group discount that always consider the previously calculated discount total, simply proceed as follows:

1. Select an order line from the regarding group.
1. [Start the action](StartAction) "Create group" again. A new window opens up.
1. Select the **Product** *Discount* as well as the regarding **Group**.
 >**Note:** If you created a group of your own, enter this **Group name** again.

1. Click "Start" to close the window and create the group. Another Discount Line will be added to the list.
1. Double-click the field **Compensation percentage** of this Discount Line and enter a percentage there.
1. Hit `ENTER` to apply.

## Delete Compensation Group
If you want to delete a Compensation Group and revoke the discount, simply delete the respective Discount Line.

### Example
![](assets/Order line group discount.gif)
