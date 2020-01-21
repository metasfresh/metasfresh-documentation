---
title: How do I process sales orders with weight-dependent products? (Catch Weight Management)
layout: default
tags:
  - Workflow
  - Sales
  - Catch Weight Management
lang: en
sequence: 10
ref: sales_order_catch_weight
---

## Overview
Catch Weight Management makes it possible to manage products that naturally vary in weight in two ways. One way is using an average standard weight obtained by [UOM conversion](Convert_UOMs) for inventory, sales, receiving material, transferring goods, picking and shipping. The other one is weighing the products and invoicing them based on their actual (catch) weight.

This is why metasfresh offers the possibility to record the different catch weights of products in the shipment schedule before they are shipped, thus ensuring that only the quantity actually received by the customer is invoiced.

## Requirements
1. Configure the product in question as a "catch weight product" by either [assigning a price to it](ProductPrice) or [adding a new product price](Add_price), always setting the **Invoiceable Quantity per** *Catch Weight*.

   <kbd><img src="assets/Catch_weight_product_price.png" alt="Fig.: Invoiceable Quantity per 'Catch Weight'"></kbd>

1. Define a [UOM conversion](Convert_UOMs) where the checkbox **Target is catch UOM** is activated.

   <kbd><img src="assets/Catch_UOM_conversion.png" alt="Fig.: Target is catch UOM ='Y'"></kbd>

## Steps

### Enter the sales order
1. [Create a sales order](SalesOrder_recording) with the catch weight product and [complete it](DocumentProcessingComplete).

### Enter the catch weight
1. [Jump to](JumptoviaSidebar) "Shipment Disposition".
1. Open the shipment candidate entry with the catch weight product.
1. In the field **Abw. Catch Weight Menge** (*Different Catch Weight Quantity*) at the bottom right, enter the actual weight of the ordered product.
1. Click your browser's back button to return to the [list view](ViewModes#list-view) of the shipment disposition.
 >**Note:** Repeat steps 2 to 4 to enter the catch weight of further products.

### Create the delivery note and invoice
1. [Create the delivery note for the delivered catch weight product](Ship_SalesOrder).
 >**Note:** The [PDF preview](PrintPreview) of the delivery note will show the product's nominal weight.

1. [Create the invoice for the delivered catch weight product](Invoice_SalesOrder).
 >**Note:** The [PDF preview](PrintPreview) of the invoice will show the product's catch weight and the invoice amount will be calculated accordingly.

## Example
<kbd><img src="assets/Sales_order_catch_weight.gif" alt="GIF: Sales Order (Catch Weight)"></kbd>
