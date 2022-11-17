---
title: How do I apply a single payment against multiple invoices?
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
If a customer makes a single payment to settle multiple invoices, you have to *manually allocate* the received amount to the respective invoices. To do so, please proceed as follows:

## Requirements
- Make sure to have several unpaid [invoices](Invoice_SalesOrder).

## Steps
1. Open "Payment" from the [menu](Menu).
1. [Add a new payment entry](New_Record_Window).
1. In the field **Business Partner**, enter a part of the [business partner](New_Business_Partner) name or number and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick the **Document Type** *Incoming Payment*.
1. Select the **Currency** corresponding to the invoice.
1. Go to the record tab "Allocate" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Enter the **Invoice** for which you have received the payment.
 >**Note 1:** Hit [`SPACE`](Keyboard_shortcuts_reference) to see a selection of available outstanding invoices of the business partner.<br><br>
 >**Note 2:** The **Amount** is taken over automatically from the invoice.

1. Click "Done" to close the overlay window and add the invoice to the list.
 >**Note:** Repeat steps 6 to 8 for all invoices that were settled with the payment received.

1. [Complete the document](DocumentProcessingComplete).
1. To check the status of the individual invoices, go to the record tab "Allocations" and [zoom into](Zoom_into_table_field) the field in the column **Invoice** of the respective allocation line.

| **Note:** |
| :--- |
| You can also view the manual payment allocations in detail under "[Payment Allocations](Menu)" in the menu. |

## Example
<kbd><img src="assets/Incoming_payments_manual_allocation.gif" alt="GIF: Incoming payments manual allocation"></kbd>
