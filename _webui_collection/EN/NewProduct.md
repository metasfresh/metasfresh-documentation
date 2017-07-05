---
title: How do I create a new product?
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
1. [Create a new product](New_Record_Window).
1. Fill in the field **Name**.
 > Note: This name will appear on documents such as Sales Order confirmations etc.

1. Next choose a **Product Category**.
 > Note: The **Product Category** can be used to control discounts, account assignments and attribute sets of products.

1. In the field **Search Key** enter a product number.

 > Note 1: This number will appear on documents such as Sales Order confirmations etc.

 > Note 2: This number can also be assigned automatically.

### Next Steps
- [Record a Purchase or Retail Price](ProductPrice)
- Configure the product for manufacturing

## Example

![](assets/NewProduct.gif)

## Further Relevant Fields

- The field **UOM** (unit of measurement) determines in which unit the product is managed in stock.

 > Note 1: Once the first receipt is issued with the product, the UOM cannot be easily changed.

 > Note 2: You can define a different price unit in the tab **Price** isolated from the UOM.

- The field **Product Type** determines the type of product.

|	Option | Effect |
|:	------------ | ------------- |
|	Item | Material product, e.g. general cargo, packing unit etc. (standard)|
|	Service | Immaterial product|
|	Expense type | Controls the account assignment|
|	Resource | Product that can temporally only be accounted for once, e.g. machine|

- The field **Stocked** determines whether the product is in stock (provided the product type is set on "Item").
- The field **Purchased** determines whether the product is available in purchase.
- The field **Sold** determines whether the product is available in sales.
