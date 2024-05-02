---
title: How do I create a service product?
layout: default
tags:
  - Master Data
  - Product
lang: en
sequence: 60
ref: add_service_product
---

## Overview
In metasfresh, a service product is used to record immaterial (intangible) services that are not managed in physical stock, such as work effort (labor costs), repair service charges, expenses, etc., and can be offered for sale as part of <a href="Manufacturing_order_record_work#service-expenses" title="Record work effort for repair orders">manufacturing/repair orders</a>. In such a case, it is similar to the [grouping product](Add_grouping_product) in that it serves to combine all expenses from the respective repair order into a [compensation group](Create_manual_compensation_groups) when creating the quotation or sales order, so that [order line group discounts](Order_line_group_discount) can then be granted on it if required.

In addition, the service product can also be used with the [component generator](...), where it serves as a service component to generate individual [attributes](...), such as individual serial numbers or factory default passwords.

In terms of creating a service product, it basically follows the same steps as any other standard [product](NewProduct) too.

## Steps
Follow these [instructions for adding a product](NewProduct), taking into account the following application-specific configuration:
1. Give the service product a meaningful **Name**, e.g., "Repair Service Charge" or "Serial Number".
1. Pick a suitable [**Product Category**](NewProductCategory), e.g., *Service Product* or *Item Component*.
1. Pick the **Product Type** *Service*.
    >**Note:** The checkbox **Stocked** is automatically hidden, as this type of product is an intangible item that is not kept in stock.

1. In the field **UoM**, pick a suitable unit of measure, e.g., *Each* or working time units such as *Hours*, *Days*, etc.
1. Deactivate the checkboxes **Is commissioned** and **Purchased**.

### For Paid Services (Repair Orders)
- [Add the product to a price list](ProductPrice).

### For Service Components (Component Generator)
- Deactivate the checkbox **Sold** as well.

## Next Steps (optional)
- <a href="Manufacturing_order_record_work#service-expenses" title="Record work effort for repair orders">Use the service product to record work performed on repair orders</a>.
- [Use the service product as a service component for the component generator](...).
