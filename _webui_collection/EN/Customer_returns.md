---
title: How do I manage the receipt of customer returns?
layout: default
tags:
  - Workflow
  - Sales
  - CRM
lang: en
sequence: 40
ref: customer_returns
---

## Requirements
1. You will need a "[Quality Issue Warehouse](Add_quality_issue_warehouse)" to which the returned goods can be forwarded.
1. [Create a sales order](SalesOrder_recording) and [complete it](DocumentProcessingComplete).
1. [Pick the handling units for the shipment](Order_picking_terminal).
1. [Create a shipment with picked quantities](Ship_salesorder_picked_qty).

## Steps

### Create a Returned Goods Receipt
1. Open the entry of a sales order for which you have [created a shipment with picked quantities](Order_picking_terminal) that have been returned.
1. [Jump to](JumptoviaSidebar) "Shipment (Customer)".
 >**Note:** Press `Alt` + `6` / `⌥ alt` + `6` to open the sidebar with the list of referenced documents.

1. From the [list view](ViewModes), [select](RecordSelection) the shipment note in question.
1. [Start the quick action](StartAction) "Select HU for Return". The "HU Editor" opens up.
 >**Note:** You will also find this action in the actions menu in both the list view and the detailed view of an entry.

1. [Select](RecordSelection) the returned HU.
1. [Start the quick action](StartAction) "Return from customer". The HU will now be moved to the quality issue warehouse.
1. Click "Done" to close the "HU Editor".
1. You will receive a [notification](Notification_types) ![](assets/NotificationBell_WebUI.png) in the upper right corner once the return shipment is generated.
1. Click on the notification to open the confirmation of receipt of returned goods.
>**Note:** Alternatively, open the entry of the sales order for which you have received customer returns, [jump to](JumptoviaSidebar) "Customer Return" and open the corresponding returned goods entry.

1. [Open the PDF print preview](PrintPreview).

## Example
![](assets/Customer_returns.gif)
