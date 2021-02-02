---
title: How do I create automatic compensation groups?
layout: default
tags:
  - Sales
  - Compensation Groups
lang: en
sequence: 20
ref: create_automatic_compensation_groups
---

## Overview
An automatically created compensation group comprises multiple order lines based on shared [product categories](NewProductCategory).

This way, during [group discounting](Order_line_group_discount) order lines can be quickly combined into a group and then jointly discounted or surcharged.

In order to create automatic compensation groups, please proceed as follows:

## Requirements
- [Set up automatic compensation grouping](Automatic_compensation_groups_setup) for the product categories in question.

## Steps
1. Follow these [instructions for entering a sales order](SalesOrder_recording) up to **step 4 of the order line input**.
1. [Select](RecordSelection) the order lines you want to combine into a compensation group.
1. [Start the action](StartAction#actions-menu) "Multigroup lines". The compensation groups are created automatically and displayed as additional discount lines with the **Compensation Type** *Discount*.

### Delete compensation group
If you want to undo a compensation group, simply delete the respective discount line.

## Next Steps
- [Give a discount or surcharge on the automatically created compensation group](Order_line_group_discount).

## Example
![](assets/AutomaticGroupDiscounts.gif)
