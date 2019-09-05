---
title: How do I create a shipment with picked quantities?
layout: default
tags:
  - Workflow
  - Sales
lang: en
sequence: 60
ref: ship_salesorder_picked_qty
---

## Requirements
- [Pick handling units for a shipment](Picking_terminal).

## Steps
1. Open the entry of a [sales order with picked HUs](Picking_terminal).
1. [Jump to](JumptoviaSidebar) "Shipment Disposition".
 >**Note:** Press `Alt` + `6` / `⌥ alt` + `6` to open the sidebar with the list of referenced documents.

1. [Select](RecordSelection) the order lines you want to ship.
1. [Start the quick action](StartAction) "Generate Shipments". An overlay window opens up.
 >**Note:** You will also find this action in the actions menu in both the list view and the detailed view of an entry.

1. In the field **QuantityType**, select *Picked Qty*.
1. Click "Start" to confirm and close the overlay window.
1. You will receive a [notification](Notification_types) ![](assets/NotificationBell_WebUI.png) in the upper right corner once the shipment is generated.
1. Click on the notification to open the delivery note.
1. [Open the PDF print preview](PrintPreview).

## Example
![](assets/Ship_salesorder_picked_qty.gif)
