---
title: How do I conclude a framework contract?
layout: default
tags:
  - Contract Management
  - Framework Contracts
lang: en
sequence: 10
ref: generate_framework_contract
---

## Overview
Framework contracts are used in metasfresh to define the framework conditions for call-off orders.
One business partner may have multiple framework contracts in place, but each framework contract can only be concluded for one particular product.

## Requirements
1. [Add a pricing system](Add_price-system) including a [price list](Add_price-list) (as required for sales and/or purchasing) and a [price list version](Add_price-list-version) (also see "[Define prices](Define_prices)") to be used specifically for managing the prices of the call-off order products (see next step) based on the repsective framework contract.
1. [Add a product to be used in the framework contract and call-off order](Add_call_off_order_product).
    >**Note:** Make sure this call-off order product is linked to both the **call-off order price list** from step 1 above (needed for the framework contract) and a **vendor price list** (needed for the call-off orders).

1. [Specify the contractual terms of the framework contract](Define_contractual_terms_framework_contract).

## Steps
1. Follow these [instructions for entering a purchase order](CreatePurchaseOrder), taking into account the following settings:
    - Pick the **Target Document Type** *Frame Order PO*.
    - Pick a **Pricing System** used for call-off order products.
    - Go to the record tab "PO Line" at the bottom of the page and add the call-off order product with the desired amount.
    - Move the horizontal scrollbar of the purchase order line table to the right until you reach the column **Contract Terms** and pick the desired framework contract terms.

## Result
After completing the purchase order:

1. The framework contract will be generated automatically based on the document type *Frame Order PO* and can be found under "[Call-off order overview](Menu)" in the menu.
1. Under "[Call-off order overview](Menu)" in the menu you will be able to review all transactions related to the respective call-off order (e.g., goods received/shipments, invoices) in the record tab "Call-off order details" at the bottom of the page.
1. Under "[Contract Period](Menu)" in the menu a new contract period entry is created automatically in connection with the framework contract.

## Next Steps
- [Create a call-off order](Create_call_off_order_purchase).
