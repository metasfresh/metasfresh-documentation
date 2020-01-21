---
title: How do I create manual compensation groups?
layout: default
tags:
  - Workflow
  - Sales
  - Compensation Groups
lang: en
sequence: 10
ref: create_manual_compensation_groups
---

## Overview
A manually created compensation group comprises multiple order lines, making [joint discounting or surcharging](Order_line_group_discount) possible.

When [creating bills of materials from a quotation](Create_BOM_upon_SO_generation), manual compensation groups help to create quotation groups that serve as the basis for the creation of the bill of materials and the sales product later on.

In order to create manual compensation groups, please proceed as follows:

## Steps
1. Follow these [instructions for entering a sales order](SalesOrder_recording) up to **step 4 of the order line input**.
1. [Select](RecordSelection) the order lines you want to combine into a compensation group.
1. [Start the action](StartAction#actions-menu) "Group Lines". An overlay window opens up.
1. Select a **Product**, e.g., *Discount*.
 >**Note:** You can select any other grouping product from the list in the product field, provided that it is ***not stocked*** and linked to the very ***same price list*** as in the sales order.<br>
 [Follow these instructions](Add_grouping_product) to configure such a *grouping product*.

1. Pick a **Group** or enter a **Group name** of your choice.
1. Click "Start" to close the overlay window and create the compensation group. A new order line with the **Compensation Type** *Discount* will be added to the list.
 >**Note:** Repeat steps 2 to 6 to add further compensation groups.

### Delete compensation group
If you want to undo a compensation group, simply delete the respective discount line.

## Next Steps
- [Give a discount or surcharge on the manually created compensation group](Order_line_group_discount).
- [Use manual compensation groups for creating bills of materials after converting a quotation into a sales order](Create_BOM_upon_SO_generation).

## Example
![](assets/Order line group discount.gif)
