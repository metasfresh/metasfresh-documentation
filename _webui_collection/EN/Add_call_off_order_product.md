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
In metasfresh, products that are used for call-off orders must be linked to at least two different price lists. One is used specifically for managing the prices of the call-off order products based on the respective framework contract and the other is a vendor price list containing the default purchase prices.

## Steps
1. Follow these [instructions for adding a new product](NewProduct), taking into account the following settings:
    - When [adding a product price](ProductPrice), make sure to:
        - add a purchase price using a **vendor price list**.
        - add a purchase price for call-off orders using a **call-off order price list**.

## Next Steps
1. [Create a framework contract for call-off orders](Generate_framework_contract).
1. [Create a call-off order](Create_call_off_order_purchase).
