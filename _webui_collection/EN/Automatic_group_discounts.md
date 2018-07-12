---
title: How do I give discounts on automatically created compensation groups?
layout: default
tags:
  - Pricing
  - Discounts
  - Compensation Groups
lang: en
sequence: 20
ref: automatic_group_discounts
---

## Overview
[Compensation groups](Discount_types_in_metasfresh) are order lines combined into groups that can receive joint discounts or surcharges in a single as well as successive manner where the previous discount or surcharge is always included in the calculation. Moreover, you can give several discounts/surcharges on various compensation groups in one order.

## Preparation
- [Set up the automatic compensation grouping](Automatic_compensation_groups_setup) for the regarding product categories.

## Steps
1. Follow these [instructions for creating a sales order](SalesOrder_recording) up to **step 4 of the order line input**.
1. [Select the order lines](RecordSelection) you want to combine into a group.
1. [Start the action](StartAction) "Multigroup lines". The compensation groups are created automatically and displayed as additional discount lines with the **Compensation Type** *Discount*.
1. Move the horizontal scrollbar of the order line table to the right until you reach the column **Compensation percentage**.
1. Double-click the field **Compensation percentage** of the discount line and enter a percentage there.
1. Hit `↵ Enter` to apply.
1. Follow the remaining steps for [creating a sales order](SalesOrder_recording) to complete the order.

## Successive Discounting
If you want to give further discounts on a group discount that always consider the previously calculated discount total, simply proceed as follows:

1. Select an order line from the regarding compensation group.
1. [Start the action](StartAction) "Add group compensation line". A new window opens up.
1. Select a **Product**, e.g. [*Discount*](Product_for_group_discount).
 >**Note:** You can select any product from the list in the product field.

1. Click "Start" to close the window and add another group discount line to the list.
1. Double-click the field **Compensation percentage** of this discount line and enter a percentage there.
1. Hit `↵ Enter` to apply.

## Delete Compensation Group
If you want to delete a compensation group and revoke the discount, simply delete the respective discount line.

### Example
![](assets/AutomaticGroupDiscounts.gif)
