---
title: How do I apply a single payment to multiple invoices?
layout: default
tags:
  - Accounting
  - Receivables and Payables
  - Incoming Payments (Accounts Receivable)
lang: en
sequence: 20
ref: incoming_payments_manual_allocation
---

## Overview
If a customer makes one single payment to settle multiple invoices, you have to *manually allocate* the received amount to the respective invoices.

## Requirements
- Make sure to have several unpaid [invoices](Invoice_SalesOrder).

## Steps
1. Open "Payment" from the [menu](Menu).
1. [Add a new payment entry](New_Record_Window).
1. Select the **Business Partner**.
1. Select the **Document Type** *Incoming Payment*.
1. Select the **Currency** corresponding to the invoice.
1. Go to the record tab "Allocate" at the bottom of the page and click ![](assets/Add_New_Button.png). An overlay window opens up.
1. Enter the **Invoice** for which you have received the payment.
 >**Note 1:** Hit `SPACE` to see all unpaid invoices of the business partner.<br><br>
 >**Note 2:** The **Amount** is taken over automatically from the invoice.

1. Click "Done" to close the overlay window and add the invoice to the list.
 >**Note:** Repeat steps 6 to 8 for all invoices that were settled with the payment received.

1. [Complete the document](DocumentProcessingComplete).
1. To review the invoice status, go to the record tab "Allocations" and [zoom into](Zoom_into_table_field) the field in the column **Invoice** of the respective allocation line.

## Example
![](assets/Incoming_payments_manual_allocation.gif)
