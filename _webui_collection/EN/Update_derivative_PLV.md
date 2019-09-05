---
title: How do I update customer price lists derived from base price list versions?
layout: default
tags:
  - Pricing
  - Prices
  - Price List Schemas (Copy Product Prices)
lang: en
sequence: 20
ref: price_list_schema_rules
---

## Overview
In metasfresh you can assign a general base price list version to customer-specific [price list versions](Add_price-list-version) whose base prices, in combination with the respective [price list schema](Price_list_schema_rules), serve as the basis for deriving the new customer-specific [product prices](Add_price) when [copying prices and products](Copy_prices_from_price-list-version).

These [derivative price list versions (i.e. derived from a base price list version)](Copy_prices_from_price-list-version), which may be part of different customer-specific [price lists](Add_price-list), can also be updated all at once, taking into account their individual price list schemas, as long as they are linked to the same general base price list version.

## Requirements
1. [Create a general price list](Add_price-list) that can be used as basis (*base price list*) for the calculation of the product prices of all derivable price lists.
1. [Create customer-specific price lists](Add_price-list) and link their valid versions to a single **version of the base price list** as well as to a [**price list schema**](Price_list_schema_rules).
1. The derivative price list versions must be part of a [sales price list](Add_price-list) which is [linked to a customer](Assign_prices_to_partner).
1. For this customer, updating price list versions from base price list versions must be enabled.
 >**Note:** To enable this, tick the checkbox **PLV from Base** in the customer line of the record tab "Customer" of the customer entry under "[Business Partner](Menu)" in the menu.<br> ![](assets/PLV_from_BasePLV.png)

## Steps

### Update base price list version
1. Open "Price List" from the [menu](Menu).
1. Open the entry of the general price list that is used as the base price list for customer-specific price lists.
1. [Add a new (current) price list version](Add_price-list-version) and configure it with the same **Base Price List Version** as the customer-specific price lists whose product prices shall be updated.
 >**Note:** This price list version does not have to contain any product prices. Only its **Valid from** date is relevant for naming the updated customer-specific price lists and setting their **Valid from** date.

### Update derivative price list versions
1. Go to the record tab "Price List Version" at the bottom of the page and [select](RecordSelection) the line of the new price list version.
1. [Start the action](StartAction) "Apply to derivative price lists". An overlay window opens up.
1. Click "Start" to close the overlay window and update all customer-specific price lists that are linked to the general base price list, taking into account the respective price list schema.
