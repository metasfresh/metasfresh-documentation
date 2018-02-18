---
title: How do I create a Purchase Order for selected products from a Sales Order?
layout: default
tags:
  - Workflow
  - Purchase
lang: en
sequence: 60
ref: create_individual_po_from_so
---

## Overview
If you want to carry over selected products in a self-determined quantity from a sales order to a purchase order, you can simply generate this purchase order directly from the (drafted or completed) sales order. To do so, take the following steps:

## Requirements
**The following requirements must be fulfilled:**

1. The [products](NewProduct) to be ordered must be [linked](Link_product_to_business_partner) to a [business partner (vendor)](New_business_partner_vendor).
1. This business partner must be set as the products' [**Default Vendor**](Set_default_vendor).
1. This vendor must be linked to the exact same [price list(s)](ProductPrice) as the products to be ordered.

## Steps
1. [Create a sales order](SalesOrder_recording).
1. [Select](RecordSelection) one or more products you want to order from the order lines.
1. [Start the action](StartAction) "Create purchase orders". A new window opens up.
 >**Note:** This action will only become available when at least one order line is selected.

1. Enter the desired **QtyToPurchase** of the products in the respective fields.
1. Click "Done" to create the purchase order and close the window.

### Case 1: Drafted Sales Order
If you have only created a draft of the sales order, the purchase order will first be forwarded to the PO candidates and won't be generated until the sales order is [completed](DocumentProcessingComplete). To view the planned purchase orders [jump to](JumptoviaSidebar) "Bestelldisposition Neu" (PO candidates).

### Case 2: Completed Sales Order
If you [complete](DocumentProcessingComplete) the sales order or you create the purchase order from a completed sales order, the purchase order will be generated right away:

1. You will receive a notification ![](assets/NotificationBell_WebUI.png) in the upper right corner once the purchase order is created.
1. Follow the link in the notification to open the purchase order.
 >**Note 1:** You can also jump **directly** to the purchase order from the sales order via the [related documents](JumptoviaSidebar).<br><br>
 >**Note 2:** The purchase order is already completed.

## Example
![](assets/Create individual PO from SO.gif)
