---
title: How do I create an estimate for repair services performed?
layout: default
tags:
  - Customer Service
  - Repairs
lang: en
sequence: 40
ref: quotation_estimate_repair_services
---

## Requirements
1. [Receive returns in need of repair via service acceptance and create a transaction](Service_repair_customer_return).
2. [Start a repair project and create a repair order](Service_repair_project_start).
3. [Record your work effort for the repair order](Manufacturing_order_record_work).

## Steps

1. [Go to Menu](Menu) and open the "Service/Repair Project" window.
2. [Use the filter function](Filtering_function) to help you find the repair project you want and open the entry.
3. [Start the action](StartAction#actions-menu) "Create quote". A new browser tab opens with the quote.
>**Note:** An estimate is an [order](SalesOrder_recording) with the document type "estimate".

1. If the repair order contains a <a href="Manufacturing_order_record_work#service-expenses" title="Record service expenses for repair orders">Service costs</a> was recorded, the respective order lines were accordingly converted into [Compensation groups](Create_manual_compensation_groups) in summary.
1. If the repair order contains a <a href="Manufacturing_order_record_work#service-expenses" title="Record service expenses for repair orders">Summary</a> of the service expense was recognized, this is shown below the [service product](Add_service_product) printed on the document as information for the customer.

### Print or hide order lines
Order lines for accessories are not printed on the document by default. To change this, proceed as follows:
1. Open the "[Advanced edit](Open_AdvancedEditTab)" of the order line that should be printed or hidden on the document.
2. Scroll down to the **Hide when printing** checkbox and check or uncheck it.
3. Click on "Confirm" to apply the changes and close the "Advanced edit".
>**Note:** Please note that the sum of the printed order lines may differ from the total amount displayed on the receipt if the hidden lines have a value other than 0.

### Complete offer and create an order
1. [Finish the estimate](DocumentProcessingComplete).
2. [Start the action](StartAction#actions-menu) "Order from quote" to make an order from the cost estimate. An overlay window opens.
3. Set the **Document type** field to *Standard order*.
4. ***Optional:*** Set a checkmark at **Complete order** if the order should be completed automatically after creation.
5. Click "Start" to confirm and close the overlay window. The job opens in the same tab.
>**Note:** You can find the newly created order under the menu item "[Orders](menu)".

### Complete order (optional)
1. [Complete the document](DocumentProcessingComplete).
2. [Open the PDF Preview](PrintPreview).
