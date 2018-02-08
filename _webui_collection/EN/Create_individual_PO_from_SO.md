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
If you want to carry over selected products in a self-determined quantity from a Sales Order to a Purchase Order, you can simply generate this Purchase Order directly from the completed Sales Order. To do so, take the following steps:

## Requirements
**The following requirements must be fulfilled:**

1. The [products](NewProduct) to be ordered must be [linked](Link_product_to_business_partner) to a [Business Partner (Vendor)](New_business_partner_vendor).
1. This Business Partner must be set as the products' [**Default Vendor**](Set_default_vendor).
1. This Vendor must be linked to the exact same [Price List(s)](ProductPrice) as the products to be ordered.

## Steps
1. [Create a Sales Order](SalesOrder_recording) and [complete it](DocumentProcessingComplete).
1. [Select](RecordSelection) one or more products you want to order.
1. [Start the action](StartAction) "Create purchase orders". A new window opens up.
 >**Note:** This action will only become available when at least one line is selected.

1. Enter the desired **QtyToPurchase** of the products in the respective fields.
1. Click "Done" to create the Purchase Order and close the window.
1. You will receive a notification ![](assets/NotificationBell_WebUI.png) in the upper right corner once the Purchase Order is created.
1. Follow the link in the notification to open the Purchase Order.
 >**Note:** The Purchase Order is already completed.

## Example
![](assets/Create individual PO from SO.gif)
