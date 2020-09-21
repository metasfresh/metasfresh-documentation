---
title: Sales Order Candidates (Shops) to Invoice (incl. FACTS)
layout: default
tags:
  - Workflow
  - Sales
  - Sales Processes
lang: en
sequence: 10
ref: workflow_so_candidates_shop_to_invoice_picking_terminalv2
---

<kbd><img src="assets/Workflow_SO_Candidates_Shop_to_Invoice_FACTS (Picking Terminal v2).png" alt="Abb.: Workflow - Sales Order Candidates (from Shops) to Invoice and FACTS (Picking Terminal v2)"></kbd>

## Steps
1. Transfer the sales order data from the online shop to metasfresh's [Sales Order Disposition](Menu) via the external interface connection.
1. [Enter the incoming payments](Single_incoming_payment).
1. Convert the sales order candidates into sales orders and [complete them](DocumentProcessingComplete).
1. [Pick the sales orders for shipping](Order_picking_terminal_v2).
1. When picking is processed, the delivery order, the shipment along with the delivery note, and the invoice are created and completed automatically at the same time.
