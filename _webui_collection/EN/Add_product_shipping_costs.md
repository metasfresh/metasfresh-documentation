---
title: How do I set up flat shipping rates?
layout: default
tags:
  - Sales
  - Shipping
  - Shipping and Freight Costs
  - Setup
lang: en
sequence: 20
ref: add_product_shipping_costs
---

## Overview
In metasfresh, flat rates for shipping costs are handled in the form of a product that is added to a sales order as an additional order line which can be invoiced afterwards. The standard metasfresh already includes a product entry for a flat shipping rate. Such a product is required for technical reasons in order to invoice the shipping costs of respective sales orders and list the charged amounts on the supporting documents. If configured accordingly, this product can also be added automatically to the order upon its completion.

In order to properly use the "Flat Shipping Rate" product, it must be configured as follows:

## Steps

### Add product "Flat Shipping Rate"
1. Open "Product" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the product "Versandkostenpauschale" (*Flat Shipping Rate*) or [add a new product](NewProduct) using the following specifications.
1. Make sure the following settings are made:
  - [**Product Category**](NewProductCategory) is *Gebinde* (=container).
  - **Product Type** is *Freight Cost*.
  - **Purchased** is *deactivated*.
  - **Sold** is *activated*.
  - The record tab "Price" contains the very *same price list* that is used in the sales order. A price *may* be assigned here, but it is not required.

### Configure Shipper
In the standard metasfresh, the default flat shipping rate is already configured with the shipper *Eigentransport* (=own transport). Shippers for manually created flat shipping rates can be recorded as follows:

1. Open "Versandkostenpauschale" (*Flat Shipping Rate*) from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the settings entry a **Name**.
1. In the field **Product**, pick the flat shipping rate of your choice.
1. Go to the record tab "Lieferweg" (*Shipper*) at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Pick the **Shipper** *Eigentransport* (= own transport).
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the shipper setting will be effective *immediately*. If it lies in the *future*, it will apply *from that date*. metasfresh uses the currently valid shipper setting based on the date promised of the sales order.

1. Click "Done" to close the overlay window and add the shipper to the list.

## Next Steps
- [Create a sales order with shipping costs](Sales_order_shipping_costs).
