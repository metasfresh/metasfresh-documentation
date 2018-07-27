---
title: How do I add a new product?
layout: default
tags:
  - Master Data
  - Product
lang: en
sequence: 10
ref: newproduct
---

## Steps
1. Open "Product" from the [menu](Menu).
1. [Add a new product](New_Record_Window).
1. Give the product a **Name**.
 >**Note:** This name will appear on documents such as sales order confirmations etc.

1. Choose a **Product Category**.
 >**Note:** The product category can be used to control discounts, account assignments and attribute sets of products.

1. Choose a **UOM** for the product.
 >**Note:** This UOM is used for inventory management and ***must not be confused*** with the sales UOM defined when adding a price!

1. In the field **Search Key** enter a product number.
 >**Note 1:** This number will appear on documents such as sales order confirmations etc.<br><br>
 >**Note 2:** This number can also be assigned automatically.

## Next Steps
- [Record a purchase or sales price](ProductPrice).
- Configure the product for manufacturing.

## Example
![](assets/NewProduct.gif)

## Further Relevant Fields
- The field **UOM** (unit of measurement) determines in which unit the product is managed in stock (stock UOM).
 >**Note 1:** Once the first receipt is issued with this product, the stock UOM cannot be easily changed.<br><br>
 >**Note 2:** You can define a different sales UOM in the record tab **Price** isolated from the stock UOM. In this case, you also have to define a [UOM conversion](Convert_UOMs).

- The field **Product Type** determines the type of product.

|	Option | Effect |
|:	------------ | ------------- |
|	Item | Material product, e.g. general cargo, packing unit, etc. (standard)|
|	Service | Immaterial product|
|	Expense type | Controls the account assignment|
|	Resource | Product that can temporally only be accounted for once, e.g. machine|

- The field **Stocked** determines whether the product is in stock (provided the product type is set on "Item").
- The field **Purchased** determines whether the product is available in purchase.
- The field **Sold** determines whether the product is available in sales.
