---
title: Workflow - Sales Order to Invoice with Delivery Order
layout: default
tags:
  - Workflow
  - Sales
lang: en
sequence: 20
ref: workflow_salesorder_to_invoice_with_delivery
---

<kbd><img src="assets/Workflow_Sales_Order_to_Invoice (Picking Terminal v2).png" alt="Fig.: Workflow - Sales order to invoice with delivery order (Picking Terminal v2)"></kbd>

## Steps
1. [Create a sales order intended for shipping](Sales_order_with_shipper) and [complete it](DocumentProcessingComplete).
1. [Create a transport order in the *Drafted* status](Create_transport_order) to use for handling the picked sales order.
1. Prior to picking, make sure that the ordered products are in stock in sufficient quantity for sale.
1. To replenish stocks, you can either:<br>
  **a)** [create a goods receipt](CreateGoodsReceipt) or<br>
  **b)** [add new handling units via physical inventory](Physical_inventory_create_HUs).
1. [Pick the sales order for shipping](Order_picking_delivery_terminalv2).
