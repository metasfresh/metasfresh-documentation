---
title: How do I generate a sales order-related purchase order?
layout: default
tags:
  - Purchase
lang: en
sequence: 50
ref: generate_so-related_po
---

## Overview
If you specifically want to carry over all products in the ordered quantity from a particular sales order to a purchase order, you can simply generate this order-related purchase order directly from the completed sales order. To do so, please proceed as follows:

## Requirements
**The following requirements must be fulfilled:**

1. The [products](NewProduct) to be ordered must be [linked](Link_product_to_business_partner) to a [business partner (vendor)](New_business_partner_vendor).
1. This business partner must be set as the products' [**current vendor**](Set_current_vendor).
1. This vendor must be linked to the exact same [price list(s)](ProductPrice) as the products to be purchased, and [to a discount schema](Link_discount_schema_to_BP).

## Steps
1. [Create a sales order](SalesOrder_recording) and [complete it](DocumentProcessingComplete).
1. [Start the action](StartAction#actions-menu) "Generate PO from Sales Order". An overlay window opens up.
1. ***Optional:*** Pick an alternative **Vendor**.
 >**Note 1:** Unless an alternative vendor is specified, the current vendor will be used by default.<br><br>
 >**Note 2:** Alternative vendors must be linked [to a discount schema](Link_discount_schema_to_BP) just as the current vendor.

1. Click "Start" to generate the purchase order and close the overlay window.
1. Use the sales order's [related documents to jump](JumptoviaSidebar) into the window "[Purchase Order](Menu)" (under PURCHASE in the sidebar). There you will find the order-related purchase order in the *Drafted* status with the sales order number as **Order Reference**.

## Example
<kbd><img src="assets/Generate PO from SO.gif" alt="GIF: Generate PO from SO"></kbd>
