---
title: How do I add a product for call-off orders?
layout: default
tags:
  - Contract Management
  - Framework Contracts
  - Setup
lang: en
sequence: 10
ref: add_call_off_order_product
---

## Overview
In metasfresh, products that are used for [call-off orders](Create_call_off_order_purchase) must be linked to at least two different [price lists](Add_price-list). One is used specifically for managing the prices of the call-off order products based on the respective [framework contract](Generate_framework_contract) and the other is a [vendor price list](Assign_prices_to_partner) containing the default purchase prices.

## Steps
Follow these [instructions for adding a new product](NewProduct), taking into account the following settings:
- When [adding prices](ProductPrice) for the call-off order product, make sure to:
    1. add a purchase price using a **vendor price list**.
    1. add a purchase price for call-off orders using a **call-off order price list**.

## Next Steps
1. [Create a framework contract for call-off orders](Generate_framework_contract).
1. [Create a call-off order](Create_call_off_order_purchase).
