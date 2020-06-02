---
title: How do I pick a sales order for shipping? (Picking Terminal v2)
layout: default
tags:
  - Workflow
  - Sales
  - Order Picking
lang: en
sequence: 30
ref: order_picking_terminal_v2
---

## Overview
In metasfresh, you can pick *handling units* ([HUs](Handling_Unit_System)) for shipping and use different [shippers](Shipper_configuration), e.g., shipping services like DPD and DHL. The picked quantities are deducted from stock afterwards.<br>
You can review your stock levels at any time in the "[Handling Unit Editor](Menu)".

<kbd><img src="assets/Workflow_Sales_Order_to_Invoice (Picking Terminal v2).png" alt="Abb.: Workflow - Auftrag bis Rechnung (Kommissionier-Terminal v2)"></kbd>

## Requirements
1. [Create a sales order intended for shipping](Sales_order_with_shipper) and [complete it](DocumentProcessingComplete).
1. [Create a transport order in the *Drafted* status](Create_transport_order) to use it to handle the picked sales order.
1. Prior to picking, make sure that the ordered products are in stock in sufficient quantity for sale.
1. To replenish stocks, you can either:<br>
  **a)** [create a goods receipt](CreateGoodsReceipt).<br>
  **b)** [add new handling units via physical inventory](Physical_inventory_create_HUs).

## Steps
1. Open "Picking Terminal (v2)" from the [menu](Menu).
1. From the [list view](ViewModes#list-view), [select](RecordSelection) the sales order you want to pick.

### Print pick list
The order picker can use the pick list to check the actual stock, note down any deviating quantities and enter them in the next step ("picking"). In order to print the pick list, please proceed as follows:

1. [Start the quick action](StartAction#quick-actions) "Print Pick List".
1. The PDF print preview of the pick list opens up in a new browser tab.
1. Return to the "Picking Terminal (v2)" window.

### Pick products
1. [Start the quick action](StartAction#quick-actions) "Pick". An overlay window opens up with the pick list.
1. ***Optional:*** Double-click the field **Qty Override** of the product line and enter the deviating quantity.
1. [Select](RecordSelection) the lines of the products to be picked and [start the quick action](StartAction#quick-actions) "Pick". The **Pick Status** changes from *To be picked* to *Picked*.

### Pack up picked products
1. [Select](RecordSelection) the lines of the products to be packed and [start the quick action](StartAction#quick-actions) "Pack to". An overlay window opens up.
1. In the field **Packing Instructions**, enter a part of the name of the [packing instructions](Create_packing_instructions) to be used and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Click "Start" to confirm and close the overlay window. The **Pick Status** changes to *Packed*.

### Process order picking
1. [Select](RecordSelection) the lines of the packed products and [start the quick action](StartAction#quick-actions) "Process". An overlay window opens up.
1. The **Shipper** is taken from the sales order and is preset here, but can still be changed manually.
1. The **Transportation Order** is preset here according to the date of provisioning of the sales order, but can still be changed manually.
1. Click "Start" to close the overlay window and process the order picking. The product lines are made read-only.
1. Click "Done" to close the pick list and return to the picking terminal. The line of the picked sales order is removed from the terminal.

### Review documents
When picking is processed, the delivery order, the shipment along with the delivery note, and the invoice are created and completed automatically at the same time.

1. You will receive a [notification](Notification_types) ![](assets/NotificationBell_WebUI.png) in the upper right corner about the successful creation of shipment and invoice.
1. Click on the notifications to open the respective documents.
1. You can jump ***directly*** to either the shipment or the delivery order via the transport order's [related documents](JumptoviaSidebar).
  - From the shipment, you can jump to the invoice document and back to the sales order. You can also print out the delivery note there.
  - In the delivery order you will find all data associated with the sales order as well as the number of the **Air Waybill** and the shipment's **Tracking URL**. In addition, you can print out the shipping label provided in the list of attachments ![](assets/Attachment_clip.png) in the [sidebar](JumptoviaSidebar) ![](assets/Sidebar_Icon_WebUI.png).
