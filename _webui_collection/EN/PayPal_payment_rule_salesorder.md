---
title: How do I use PayPal as payment rule for sales orders?
layout: default
tags:
  - Workflow
  - Sales
  - PayPal Plus
lang: en
sequence: 10
ref: paypal_payment_rule_salesorder
---

## Requirements
1. [Set up PayPal for metasfresh](PayPal_Plus_setup).
1. [Link a business partner entry to a contact who has an email address](Add_user_to_BPartner).

## Steps

### Record a sales order
1. [Enter a sales order](SalesOrder_recording) taking into account the following settings:
  - In the field **Invoice Partner**, pick a contact who shall be notified about the payment request. This contact must have an email address and be marked as [*default bill-to contact*](Add_user_to_BPartner).
  - Pick the **Payment Rule** *PayPal*.
1. After [completing the sales order](DocumentProcessingComplete) the document status is changed to "*Waiting for payment*" for the time being and an email is sent to the business partner contact containing the details on payment approval.
1. New entries are created in the following [menu windows](Menu):
  - *Payment Reservation:* Information about the sales order, business partner contact and processing status.
  - *PayPal Order:* Information about the payment reservation, URL for payment approval and processing status.
  - *PayPal Log:* Log entries for each action connected to PayPal transactions.

### After payment approval by the customer

#### Update payment status
1. Open "PayPal Order" from the [menu](Menu).
1. From the [list view](ViewModes#list-view), [select](RecordSelection) the PayPal payment entry whose status you want to update.
1. [Start the action](StartAction#actions-menu) "Update from PayPal server".
 >**Note:** You can also start this action directly from the respective payment entry.

1. The payment entry's **Status** is changed to *Approved* as is the status of the respective order entry under "Payment Reservation", provided the payment has been approved by the customer.

#### Authorize PayPal order
1. Open "Payment Reservation" from the [menu](Menu).
1. From the [list view](ViewModes#list-view), [select](RecordSelection) the PayPal order entry you want to authorize.
1. [Start the action](StartAction#actions-menu) "Authorize PayPal Order".
 >**Note:** You can also start this action directly from the respective PayPal order entry.

1. The entry's **Status** is changed to *Completed* as is the document status of the respective sales order.
1. In the payment entry under "[PayPal Order](Menu)" the **PayPal Authorization ID** has also been updated.

## Next Steps
1. [Create a shipment](Ship_SalesOrder) for the sales order.
1. [Create an invoice](Invoice_SalesOrder) for the sales order.
