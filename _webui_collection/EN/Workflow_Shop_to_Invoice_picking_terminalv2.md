---
title: Workflow - Shops to Invoice
layout: default
tags:
  - Workflow
  - Sales
lang: en
sequence: 30
ref: workflow_shop_to_invoice_picking_terminalv2
---

<kbd><img src="assets/Workflow_Shop_to_Invoice (Picking Terminal v2).png" alt="Fig.: Workflow - Shops to Invoice (Picking Terminal v2)"></kbd>

## Steps
1. Transfer the sales order data from the online shop to metasfresh's [Sales Order Disposition](Menu) via the external interface connection.
1. [Enter the incoming payments](Single_incoming_payment).
1. Convert the sales order candidates into sales orders and [complete them](DocumentProcessingComplete).
1. [Pick the sales orders for shipping](Order_picking_delivery_terminalv2).
1. When picking is processed, the delivery order, the shipment along with the delivery note, and the invoice are created and completed automatically at the same time.
