---
title: How do I create a sales order for shipping?
layout: default
tags:
  - Workflow
  - Sales
  - Shipping
lang: en
sequence: 10
ref: sales_order_with_shipper
---

## Requirements
- [Set up the desired shipper as default shipper for the customer](Setup_bpartner_default_shipper).

## Steps
1. Follow these [instructions for entering a sales order](SalesOrder_recording) up to **step 4 of the order line input**.
1. Open the [advanced edit menu](ViewModes#adv-edit) from the [actions menu](StartAction#actions-menu).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the field **Delivery Via** and pick *Shipper*, if not already set automatically.
1. Pick the desired **Shipper**, e.g., *DPD*, if not already set automatically.
 >**Note:** The settings for the fields **Delivery Via** and **Shipper** are automatically copied from the respective business partner entry [if they have been preconfigured in there](Setup_bpartner_default_shipper).

1. Click "Done" to apply the changes and close the advanced edit menu.
1. Follow the remaining steps for [creating a sales order](SalesOrder_recording) to complete the order.

## Next Steps
- [Pick the sales order for shipping](Order_picking_terminal_v2).
