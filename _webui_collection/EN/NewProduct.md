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
 >**Note 1:** This name will appear on documents (e.g., sales order confirmations, purchase order confirmations, invoices, etc.).<br><br>
 >**Note 2:** The **Search Key** is filled in automatically according to the [numbering rules which can be configured individually](Define_new_doc_sequence).

1. Pick a [**Product Category**](NewProductCategory).
 >**Note:** The product category is used to control discounts, account assignments and products' attribute sets.

1. Pick a **Product Type**.
1. Pick a **UOM** (unit of measure) for the product.
 >**Note:** This UOM is used for *inventory management* and ***must not be confused*** with the sales UOM defined when [adding a price](ProductPrice)!

1. Set the desired [**Organization**](Org_add_new_organization) at the bottom right. To do so, enter part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.

## Next Steps
- [Record purchase and sales prices for the product](ProductPrice).
- [Add packing instructions to the product](CU-TU_Allocation).
- [Configure the product for manufacturing](Product_planning).

## Further Information
- The field **UOM** (unit of measure) specifies the unit in which the product is managed in stock (stock-keeping UOM).
 >**Note 1:** Once the first receipt is issued with this product, the stock-keeping UOM cannot be easily changed.<br><br>
 >**Note 2:** You can define a different sales UOM under the record tab "Price", detached from the stock-keeping UOM. In this case, you also have to define a [UOM conversion](Convert_UOMs).

- The field **Product Type** specifies the type of product.

  | Option | Meaning |
  | :--- | :--- |
  | Item | Material product, e.g., piece goods, packaging, etc. (default) |
  | Service | Immaterial product |
  | Expense type | Controls the account assignment |
  | Resource | Product that can temporally only be accounted for once, e.g., a machine, an employee, etc. |

- The checkbox **Is commissioned** (i.e. *Commissionable*) specifies whether the product is eligible for [commission contracts](Create_commission_contract).
- The checkbox **Stocked** specifies whether the product is kept in stock (provided the product type is set on "Item").
- The checkbox **Purchased** (i.e. *Procurement item*) specifies whether the product is available in purchasing.
- The checkbox **Sold** (i.e. *Sales item*) specifies whether the product is available in sales.

## Example
<kbd><img src="assets/NewProduct.gif" alt="GIF: Add new product"></kbd>
