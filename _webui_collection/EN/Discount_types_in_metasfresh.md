---
title: Discount types in metasfresh
layout: default
tags:
  - Pricing
  - Discounts
lang: en
sequence: 10
ref: discount_types_in_metasfresh
---

## Overview
The Discount Schemes in metasfresh are very adjustable and highly versatile. You can apply them to individual products or entire product categories, configure them as Tiered Discounts and Group Discounts, and assign them individually to Business Partners.

Furthermore, you can cleverly combine the different discount types with each other, as well as apply them manually or even set up automatic Discount Schemes.

You can use discounts at the point of the order line input of a [Sales Order](SalesOrder_recording) or a [Purchase Order](CreatePurchaseOrder).<br>
The following discount types are available:

## Order Line Discounts
The [Order Line Discount](Order_line_discount) is assigned to each Order Line individually and does not display as a separate Discount Line. It merely reduces the product price and can therefore only be identified in the reduced total on the invoice.

### Example
![](assets/Order Line Discount.png)

---

## Order Line Group Discounts
With the [Order Line Group Discount](Order_line_group_discount) you can join any number of Order Lines into a group designated for the discount. This Group Discount will then be displayed as a separate Discount Line and will also appear as such on the invoice. You can create any number of groups in one Order. However, each Discount Line can only be associated with one single group.

### Example
![](assets/Order Line Group Discount.png)

---

## Automatic Discount Scheme (Tiered Discount)
By means of the [Automatic Discount Scheme](Automatic_discount_scheme) you can preset specific Discount Conditions, such as **Tiered Discounts (Volume Discounts)** for individual products or entire product categories, and assign them to a Business Partner or group.

Upon fulfillment of these conditions in an Order request by this Business Partner, the discounts will be applied automatically.
