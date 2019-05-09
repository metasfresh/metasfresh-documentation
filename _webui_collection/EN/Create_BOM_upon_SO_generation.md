---
title: How do I automatically create a bill of materials upon sales order generation from a quotation?
layout: default
tags:
  - Master Data
  - Bill of Materials
lang: en
sequence: 30
ref: create_bom_upon_so_generation
---

## Overview
If you combine multiple products intended for the manufacturing of a new sales product into a compensation group in a quotation and then convert it into a sales order, metasfresh will automatically transform the grouped products into a verified bill of materials and immediately make the newly assembled sales product available for future orders without any extra work.

## Requirements
- [Set up the automatic BOM creation upon sales order generation](Create_BOM_upon_SO_generation_setup).

## Steps

### Create a quotation
1. [Create a quotation](Create_SalesQuotation) including the desired products, taking into account the following procedure:
1. During order line input, first of all add the [grouping product](Add_grouping_product) (Quantity = 1).
 >**Note:** It is essential that the grouping product is added first so that metasfresh knows that the succeeding products are a quotation group.

1. After that, add the individual products (manufacturing parts) one by one in the desired quantity.
1. [Select the order lines](RecordSelection) you want to combine into a quotation group.
1. [Start the action](StartAction) "Multigroup lines". All selected order lines are automatically combined into a quotation group with the help of an [aggregation product](Aggregation_product_for_compensation_groups) which is added in a separate line.
 >**Note:** The aggregation product does not appear on subsequent documents.

1. [Complete the quotation](DocumentProcessingComplete).

### Convert the quotation into a sales order
1. [Start the action](StartAction) "Auftrag aus Angebot (construction)" (*Create Sales Order from this Quotation (construction)*). An overlay window opens up.
1. Pick the **Document type** *Sales Order*.
1. Click "Start" to close the overlay window and create the sales order.

### Review the new sales product and BOM
1. Go to the record tab "Order Line" at the bottom of the page of the completed sales order and [zoom into](Zoom_into_table_field) the field in the column **Product** of the order line. The new product's window opens in a new tab.
1. Use the product entry's [related documents to jump](JumptoviaSidebar) into "Bill of Materials & Formula" (under PRODUCT MANAGEMENT in the sidebar) and then open the associated bill of materials which has already been [found by the filter](Filtering_function).

## Example
![](assets/Create_BOM_upon_SO_generation.gif)
