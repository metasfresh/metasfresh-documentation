---
title: How do I manage Incoming Payments against single invoices?
layout: default
tags:
  - Payments
  - Incoming Payments
lang: en
sequence: 10
ref: incoming_payments_single_invoice
---

## Overview
After a Sales Order was shipped and invoiced, the customer has to pay this invoice. After receiving the payment, you can enter the amount as an *Incoming Payment* into the system, thereby setting the invoice status to *Paid*. To do so, you can use the following steps:

## Preparation
Make sure to have a [shipped](Ship_SalesOrder) [Sales Order](SalesOrder_recording) to which you hold an unpaid [invoice](Invoice_SalesOrder).

## Steps
1. Open "Payment" from the [menu](Menu).
1. [Create a new Payment](New_Record_Window).
1. Select the **Business Partner**.
1. Select the **Document Type** *Incoming Payment*.
1. Enter the **Invoice** for which you have received the payment.
 >**Note 1:** Hit `SPACE` to see all unpaid invoices of the Business Partner.<br><br>
 >**Note 2:** The **Payment amount** and the **Currency** are taken over automatically from the invoice.

1. [Complete the invoice](DocumentProcessingComplete).
1. [Jump into the field](Jumpto) **Invoice** to review the invoice status, ***or alternatively*** you can go to the record tab "Allocations" and [zoom into](Zoom_into_table_field) the field in the column **Invoice** of the respective allocation line.

## Example
![](assets/incoming_payments_single_invoice.gif)
