---
title: How do I set up automatic BOM creation upon sales order generation?
layout: default
tags:
  - Master Data
  - Bill of Materials
lang: en
sequence: 20
ref: create_bom_upon_so_generation_setup
---

## Overview
When creating [quotations](Create_SalesQuotation) in metasfresh, you can take individual [products](NewProduct) that combined with each other make a new sales product, and turn them into quotation groups (generally also referred to as *compensation groups*). If your customer accepts the offer, you can simply convert the quotation into a sales order and get the shipment of the new product under way.

During the conversion, metasfresh will automatically create a bill of materials consisting of the combined manufacturing parts, immediately making the newly assembled sales product available for future orders without any extra work.

## Steps

### 1) Review manufacturing parts and product categories
1. Make sure the products intended for grouping (manufacturing parts) are [associated to the exact same **Product Category**](NewProduct).
1. Make sure the product category of the manufacturing parts is [subordinated to another](ParentProductCategory).
 >**Note:** The **parent product category** is required for categorizing the assembled sales product.

1. Make sure the parent product category has an individual [document sequence](Define_new_doc_sequence).
 >**Note:** This sequence is required for the document numbers of the bill of materials and the associated sales product.

### 2) Add a grouping product
1. [Add a grouping product](Add_grouping_product) that serves to identify products as quotation groups.
1. Make sure the grouping product belongs to the same **product category** as the manufacturing parts (see 1.1 above).

### 3) Add a compensation group schema
1. [Add a **compensation group schema**](Create_compensation_group_schema) along with an [aggregation product](Aggregation_product_for_compensation_groups) in order to combine multiple order lines into a compensation group later on in the quotation.
 >**Note:** The compensation group's name will be used for naming the bill of materials and the associated sales product.

1. [Link the **compensation group schema** to the **product category**](Compensation_group_schema_product_category) of the manufacturing parts (see 1.1 above).

### 4) Check for availability of a product planning schema
1. Open "Product Planning Schema" from the [menu](Menu).
1. Open the entry provided there by default.
1. Make sure the field **M_ProductPlanningSchema_Selector** is set on *Angebotsprodukt Plandaten Schema Selektor* (*Quotation product planning schema selector*).
1. Don't make any other changes!

## Next Steps
- [Automatically create a bill of materials consisting of the compensation group from a quotation by converting it into a sales order](Create_BOM_upon_SO_generation).

## Example
![](assets/Create_BOM_upon_SO_generation_setup.gif)
