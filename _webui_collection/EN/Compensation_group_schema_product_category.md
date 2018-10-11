---
title: How do I link a compensation group schema to a product category?
layout: default
tags:
  - Pricing
  - Pricing Conditions
  - Discounts
  - Compensation Groups
lang: en
sequence: 50
ref: compensation_group_schema_product_category
---

## Overview
In metasfresh, you can sort products with similar features into categories for clearer organization. During the group discounting process, these product categories in connection with the [compensation group schema](Create_compensation_group_schema) make it possible to automatically combine the products of one category to a compensation group.

In order to link the compensation group schema to a product category, take the following steps:

## Steps
1. Open "Product Category" from the [menu](Menu).
1. Open the entry of an existing product category or [create a new one](NewProductCategory).
1. Go to the field **Compensation Group Schema** and select the desired schema, e.g., *Compensation Group I*.
1. [metasfresh saves the progress automatically](Saveindicator).

## Alternate Configuration - Subcategorization
Instead of linking a product category to a compensation group schema, you can also subordinate it to another category which in turn is linked to a compensation group schema. Consequently, during the group discounting process the schema of the *parent category* will be applied to the compensation grouping. This way you can sort individual products into different categories and still give discounts on them as a group.

[Follow these instructions](ParentProductCategory) to set a parent product category.

## Example
![](assets/CompensationGroupSchema_ProductCategory.gif)
