---
title: How do I generate a Sales Order-related Purchase Order?
layout: default
tags:
  - Workflow
  - Purchase
lang: en
sequence: 50
ref: generate_po_from_so
---

## Overview
If you specifically want to carry over all products in the ordered quantity from a particular Sales Order to a Purchase Order, you can simply generate this order-related Purchase Order directly from the completed Sales Order. To do so, take the following steps:

## Requirements
**The following requirements must be fulfilled:**

1. The [products](NewProduct) to be ordered must be [linked](Link_product_to_business_partner) to a [Business Partner (Vendor)](New_business_partner_vendor).
1. This Business Partner must be set as the products' [**Default Vendor**](Set_default_vendor).
1. This Vendor must be linked to the exact same [Price List(s)](ProductPrice) as the products to be ordered.

## Steps
1. [Create a Sales Order](SalesOrder_recording) and [complete it](DocumentProcessingComplete).
1. [Start the action](StartAction) "Generate PO from Sales Order". A new window opens up.
1. Select the desired **Vendor**.
1. Click "Start" to generate the Purchase Order and close the window.
 >**Note 1:** You will find a draft of the order-related Purchase Order with the Sales Order No. as **Reference** under "[Purchase Order](Menu)" in the menu.<br><br>
 >**Note 2:** You can jump **directly** to the Purchase Order from the Sales Order via the [related documents](JumptoviaSidebar).

## Example
![](assets/Generate PO from SO.gif)
