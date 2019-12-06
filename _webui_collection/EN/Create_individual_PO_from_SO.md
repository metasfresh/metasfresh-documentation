---
title: How do I create a purchase order for selected products from a sales order?
layout: default
tags:
  - Workflow
  - Purchase
lang: en
sequence: 60
ref: create_individual_po_from_so
---

## Overview
If you want to carry over selected products in a self-determined quantity from a sales order to a purchase order, you can simply generate this purchase order directly from the (drafted or completed) sales order. To do so, please proceed as follows:

## Requirements
**The following requirements must be fulfilled:**

1. The [products](NewProduct) to be purchased must be [linked](Link_product_to_business_partner) to a [business partner (vendor)](New_business_partner_vendor).
1. This business partner must be set as the products' [**current vendor**](Set_current_vendor).
1. This vendor must be linked to the exact same [price list(s)](ProductPrice) as the products to be purchased, and [to a discount schema](Link_discount_schema_to_BP).

## Steps
1. [Create a sales order](SalesOrder_recording).
1. [Select](RecordSelection) the order lines with the products you want to purchase.
1. [Start the action](StartAction) "Create purchase orders". An overlay window opens up.
 >**Note:** This action will only become available when at least one order line is selected.

1. Click !['+'](../DE/assets/expand_list_plus.png) on the left of the purchase order line to expand it.
 >**Note:** Press `+`.

1. In the field **Qty**, enter the desired quantity of the products and hit `↵ Enter` to apply.
1. Click "Done" to close the overlay window and create the purchase order.

### Case 1: Drafted Sales Order
If you have only created a draft of the sales order, the purchase order will first be forwarded to the PO candidates and won't be generated until the sales order is [completed](DocumentProcessingComplete). To view the planned purchase orders, open "Purchase Disposition" from the [menu](Menu).

### Case 2: Completed Sales Order
If you [complete](DocumentProcessingComplete) the sales order or you create the purchase order from a completed sales order, the purchase order will be generated right away:

1. You will receive a [notification](Notification_types) ![](assets/NotificationBell_WebUI.png) in the upper right corner once the purchase order is created.
1. Click on the notification to open the purchase order.
 >**Note 1:** You can also jump ***directly*** to the purchase order via the sales order's [related documents](JumptoviaSidebar).<br><br>
 >**Note 2:** The purchase order is already completed.

## Example
![](assets/Create individual PO from SO.gif)
