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
In metasfresh service products are used for immaterial services work efforts, repair flat rates, etc. that cannot be stocked. These service products can be sold as part of a <a href="Manufacturing_order_record_work#service-expenses" title="Record work efforts for manufacturing orders">Use the service product to record work efforts for repair orders</a>. In such a case, it behaves similarly to the [grouping product](Add_grouping_product) in that it serves to group all expenses from the respective repair order into a [compensation group]() during quotation or order creation in order to then be able to allocate [order line group discounts](Create_manual_compensation_groups) to it if required.

Additionally, a service product can be used for the [component generator]() where it is used as a service article to generate individual [attributes]() like own serial numbers or factory passwords.

In general all service products are created just like every other [product](NewProduct).

## Steps
Follow this [guide on how to add a new product](NewProduct) with specific configurations for service products:
1. Enter a reasonable name like "Repair Flat Rate" or "Serial Number" in the field **Name**.
2. Choose a suitable [product category](NewProductCategory) such as *Service Product* or *Article Component*.
3. Choose the **Type of Product** as *Service*.
>**Info:** The Checkbox **Stocked** will not be shown automatically, since this type of product is immaterial and therefor cannot be stocked.

1. Choose a suitable **Unit of Measurement** like *Workday* or *Piece*.
2. Deactivate the checkboxes **Is commissioned** and **Purchased**.

### For paid services (repair projects)
- [Add the product to a pricelist](ProductPrice).

### For service articles (component generator)
- Additionally deactivate the checkbox **Sold**.

## Next Steps (optional)
- <a href="Manufacturing_order_record_work#service-expenses" title="Record work efforts for manufacturing orders">Use the service product to record work efforts for repair orders</a>.
- Use the service product as a service-article for the [component generator]().
