---
title: How do I create a goods receipt for my purchase order?
layout: default
tags:
  - Purchase
lang: en
sequence: 30
ref: creategoodsreceipt
---

## Steps
1. Open the entry of a completed [purchase order](CreatePurchaseOrder).
1. [Jump to](JumptoviaSidebar) "Material Receipt Candidates".

### Receive goods
1. [Select](RecordSelection) the order lines you want to list as received goods.
1. [Start the quick action](StartAction#quick-actions) "Receive CUs". An overlay window, the "HU Editor", opens up.
    >**Note:** If the product has packing instructions, these will appear on the quick actions button.

    ![](assets/CreateGoodsReceipt-99aab.png).

### Receive goods with serial numbers (optional)
1. [Select](RecordSelection) the line of the HU to be received in the form of individual products with serial numbers.
1. [Start the quick action](StartAction#quick-actions) "Add CUs with Serial Numbers". An overlay window opens up.
1. In the field **SerialNo**, enter the serial number of the received HU. Multiple serial numbers can be recorded using line breaks (`⇧ Shift` + `↵ Enter`).
1. Click "Start" to close the overlay window and generate the serial HUs.

### Create goods receipt
1. [Select](RecordSelection) the received HUs.
1. Confirm received goods with the button ![](assets/CreateGoodsReceipt-3191c.png).
1. Click "Done" to close the "HU Editor".
1. You will receive a [notification](Notification_types) ![](assets/NotificationBell_WebUI.png) in the upper right corner about the successful creation of the goods receipt.

## Next Steps
- [Create an invoice](CreatePurchaseInvoice) for the purchase order.

## Example
<kbd><img src="assets/CreateGoodsReceipt_walkthrough.gif" alt="GIF: How to create a goods receipt for a purchase order"></kbd>
