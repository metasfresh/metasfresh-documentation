---
title: How do I give discounts/surcharges on compensation groups (order line group discounts)?
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
[Order line group discounts](Discount_types_in_metasfresh) can be applied to one order line at a time and to *compensation groups* as well. Compensation groups consist of multiple order lines that have been combined into groups for joint discounting or surcharging in a single as well as successive manner where the previous discount or surcharge is always included in the calculation. Moreover, you can give several discounts/surcharges on various compensation groups in one order.

Compensation groups can be created both [manually](Create_manual_compensation_groups) and [automatically](Create_automatic_compensation_groups) as well.

## Steps

### Create compensation groups
- [Create **manual** compensation groups](Create_manual_compensation_groups).
- [Create **automatic** compensation groups](Create_automatic_compensation_groups).

### Give group discounts or surcharges
1. Move the horizontal scrollbar of the order line table to the right until you reach the column **Compensation percentage**.
1. Double-click the field **Compensation percentage** of the discount line and enter a percentage there.
1. Hit `↵ Enter` to apply.
1. Follow the remaining steps for [creating a sales order](SalesOrder_recording) to complete the order.

## Successive discounting
If you want to give further discounts on a group discount that always consider the previously calculated discount total, simply proceed as follows:

1. [Select](RecordSelection) an order line from the compensation group in question.
1. [Start the action](StartAction) "Add group compensation line". An overlay window opens up.
1. Select a **Product**, e.g., *Discount*.
 >**Note:** You can select any other product from the list in the product field, provided that it is ***not stocked*** and linked to the very ***same price list*** as in the sales order.<br>
 [Follow these instructions](Aggregation_product_for_compensation_groups) to configure such a *discount product*.

1. Click "Start" to close the overlay window and add another group discount line to the list.
1. Double-click the field **Compensation percentage** of this discount line and enter a percentage there.
1. Hit `↵ Enter` to apply.

## Delete compensation group
If you want to undo a compensation group and revoke the discount, simply delete the respective discount line.

## Example
![](assets/Order line group discount.gif)
