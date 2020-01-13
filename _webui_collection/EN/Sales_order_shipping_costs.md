---
title: How do I enter a sales order with fixed shipping costs?
layout: default
tags:
  - Workflow
  - Sales
  - Shipping
  - Shipping and Freight Costs
lang: en
sequence: 10
ref: sales_order_shipping_costs
---

## Requirements
- [Set up shipping and freight costs for sales](Shipping_freight_costs_setup).

## Steps
1. Follow these [instructions for entering a sales order](SalesOrder_recording) up to **step 4 of the order line input**.
1. Open the [advanced edit menu](ViewModes) from the [actions menu](StartAction).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the field **Delivery Via** and pick *Shipper*, if not already set automatically.
1. In the field **Shipper**, pick *Eigentransport* (=own transport), if not already set automatically.
 >**Note:** The settings for the fields **Delivery Via** and **Shipper** are automatically copied from the respective business partner entry [if they have been preconfigured in there](Setup_bpartner_shipping_costs).

1. Scroll down further to the field **Freight Cost Rule** and pick *Fix price*.
 >**Note:** This fixed price only applies to this order. It is charged as a lump sum for the shipping costs and overrides any pricing conditions defined for the selected price list.

1. In the field **Freight Amount**, enter a price.
1. Click "Done" to apply the changes and close the advanced edit menu.
1. Follow the remaining steps for [creating a sales order](SalesOrder_recording) to complete the order.

| **Note:** |
| :--- |
| The [flat shipping rate](Add_product_shipping_costs) is added automatically as an additional sales order line. |
