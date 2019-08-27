---
title: How do I set up automatic compensation grouping for product categories?
layout: default
tags:
  - Workflow
  - Sales
  - Compensation Groups
  - Setup
lang: en
sequence: 10
ref: automatic_compensation_groups_setup
---

## Overview
[Compensation groups](Discount_types_in_metasfresh) consist of multiple order lines that have been combined into groups to enable joint discounting or surcharging ([order line group discounts](Order_line_group_discount)). They are also useful for [creating bills of materials from a quotation](Create_BOM_upon_SO_generation) where they help to join manufacturing parts into quotation groups that then serve as the basis for the creation of the bill of materials and the sales product.

Compensation groups can be created both [manually](Create_manual_compensation_groups) and [automatically](Create_automatic_compensation_groups) as well, if preconfigured accordingly.

In order to set up automatic compensation grouping, please proceed as follows:

## Steps
1. [Create a grouping product](Add_grouping_product) for compensation grouping.
 >**Note:** The grouping product must ***not be stocked*** and it must be linked to the very ***same price list*** as in the sales order where it shall be used.

1. Add a [compensation group schema](Create_compensation_group_schema) including the grouping product.
1. [Link the compensation group schema to a product category](Compensation_group_schema_product_category) ***or*** set a [parent product category](ParentProductCategory) which is linked to a compensation group schema.
 >**Note:** Products from the same product category are combined into a compensation group with the same schema during [automatic compensation grouping](Create_automatic_compensation_groups).
