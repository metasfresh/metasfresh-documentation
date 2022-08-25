---
title: How do I create a call-off order?
layout: default
tags:
  - Purchase
  - Call-Off Orders
lang: en
sequence: 10
ref: create_call_off_order_purchase
---

## Overview
Call-off orders are based on framework contracts that can only be concluded for one particular product.

## Requirements
1. [Create a framework contract](Generate_framework_contract).
1. [Make sure the call-off order product is linked to a **vendor price list**](Add_call_off_order_product).

## Steps
1. Follow these [instructions for entering a purchase order](CreatePurchaseOrder), taking into account the following settings:
    - Pick the **Target Document Type** *Call Order PO*.
    - Pick a **Pricing System** that includes the vendor price list linked to the call-off order product.
    - Go to the record tab "PO Line" at the bottom of the page and add the call-off order product with the desired amount.
    - Move the horizontal scrollbar of the purchase order line table to the right until you reach the column **Flatrate Term** and pick the desired [contract period](Define_contract_period).
        >**Note:** The product price will be automatically recalculated for this call-off order based on the framework contract conditions.

## Result
After completing the purchase order:

- Under "[Call-off order overview](Menu)" in the menu you will be able to review all transactions related to the respective call-off order (e.g., goods received/shipments, invoices) in the record tab "Call-off order details" at the bottom of the page.

| **Special Note:** |
| :--- |
| All transactions related to the processing of goods receipts and purchase invoices (as well as any changes to the respective documents) are recorded in form of an order history in the record tab "Call-off order details" at the bottom of the page. |

## Next Steps
1. [Create a goods receipt](CreateGoodsReceipt) for the call-off order.
1. [Create an invoice](CreatePurchaseInvoice) for the call-off order.
