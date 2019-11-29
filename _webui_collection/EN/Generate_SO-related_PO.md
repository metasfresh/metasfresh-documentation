---
title: How do I generate a sales order-related purchase order?
layout: default
tags:
  - Workflow
  - Purchase
lang: en
sequence: 50
ref: generate_po_from_so
---

## Overview
If you specifically want to carry over all products in the ordered quantity from a particular sales order to a purchase order, you can simply generate this order-related purchase order directly from the completed sales order. To do so, please proceed as follows:

## Requirements
**The following requirements must be fulfilled:**

1. The [products](NewProduct) to be ordered must be [linked](Link_product_to_business_partner) to a [business partner (vendor)](New_business_partner_vendor).
1. This business partner must be set as the products' [**Default Vendor**](Set_default_vendor).
1. This vendor must be linked to the exact same [price list(s)](ProductPrice) as the products to be ordered.

## Steps
1. [Create a sales order](SalesOrder_recording) and [complete it](DocumentProcessingComplete).
1. [Start the action](StartAction) "Generate PO from Sales Order". An overlay window opens up.
1. Pick the desired **Vendor**.
1. Click "Start" to generate the purchase order and close the overlay window.
 >**Note 1:** You will find a draft of the order-related purchase order with the sales order number as **Reference** under "[Purchase Order](Menu)" in the menu.<br><br>
 >**Note 2:** You can jump ***directly*** to the purchase order via the sales order's [related documents](JumptoviaSidebar).

## Example
![](assets/Generate PO from SO.gif)
