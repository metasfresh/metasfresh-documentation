---
title: How do I set up the automatic compensation grouping for product categories?
layout: default
tags:
  - Pricing
  - Pricing Conditions
  - Discounts
  - Compensation Groups
lang: en
sequence: 30
ref: automatic_compensation_groups_setup
---

## Overview
[Compensation groups](Discount_types_in_metasfresh) are order lines combined into groups that can receive joint discounts or surcharges. These compensation groups can be created manually, as described with the [order line group discounts](Order_line_group_discount), or automatically, if preconfigured accordingly.

The configuration of the automatic compensation groups is described below:

## Steps
1. [Create a discount product](Product_for_group_discount) for the compensation grouping and [add it to a price list](ProductPrice).
 >**Note:** The discount product must not be stocked and the price list must be identical to the one used in the regarding sales order.

1. Create a [compensation group schema](Create_compensation_group_schema) with the discount product.
1. [Link the compensation group schema to a product category](Compensation_group_schema_product_category) ***or*** set a [parent product category](ParentProductCategory) which is linked to a compensation group schema.
 >**Note:** Products from the same product category are combined into a compensation group with the same schema during the [automatic group discounting process](Automatic_group_discounts).
