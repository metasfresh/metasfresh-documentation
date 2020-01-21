---
title: How do I create a commission settlement?
layout: default
tags:
  - Workflow
  - Sales
  - Sales Partners
lang: en
sequence: 40
ref: create_commission_settlement
---

## Requirements
1. [Enter a sales order using a sales partner entitled to commission](Salesorder_recording_sales_partner).
1. [Create a shipment](Ship_SalesOrder) for the sales order with sales partner.

## Steps

### Open commission deed
1. Open "Commission deed" from the [menu](Menu).
1. [Use the filter](Filtering_function) to find the commission deed you want to settle and open it.

***Alternatively:***

1. Open the entry of a [sales order with sales partner](Salesorder_recording_sales_partner) [which has been shipped](Ship_SalesOrder).
1. Use the sales order's [related documents to jump](JumptoviaSidebar) into the window "[Commission instance](Menu)" (under SALES in the sidebar) and then open the entry there which has already been [found by the filter](Filtering_function).
1. Use the commission instance's [related documents to jump](JumptoviaSidebar) into the window "[Commission deed](Menu)" (under SALES in the sidebar) and then open the entry there which has already been [found by the filter](Filtering_function).

### Settle commission payment
1. Use the commission deed's [related documents to jump](JumptoviaSidebar) into the window "[Billing Candidates](Menu)" (under BILLING and then "Invoice Disposition" in the sidebar).
1. [Select](RecordSelection) the commission line you want to settle.
1. [Start the action](StartAction#actions-menu) "Generate invoices". An overlay window opens up.
1. Click "Start" to confirm and close the overlay window.
1. You will receive a [notification](Notification_types) ![](assets/NotificationBell_WebUI.png) in the upper right corner once the settlement has been generated.
1. Click on the notification to open the settlement document.
1. [Open the PDF print preview](PrintPreview).

## Next Steps (optional)
- [Create an invoice](Invoice_SalesOrder) for the sales order with sales partner.
