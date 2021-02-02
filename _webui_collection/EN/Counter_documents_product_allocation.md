---
title: How do I allocate two products to each other for counter documents?
layout: default
tags:
  - Counter Documents
lang: en
sequence: 20
ref: counter_documents_product_allocation
---

## Requirements
1. [Set up a new organization](Org_add_new_organization).
1. [Add products for this organization](NewProduct) which can then be linked to the products of another organization.

## Steps
1. Open "Product" from the [menu](Menu).
1. Open the entry of an existing product or [add a new one](NewProduct) for allocation with another.
1. [Start the action](StartAction#actions-menu) "M_Product_Create_Mappings_Process" (*Allocate product for counter documents*). An overlay window opens up.
1. In the field **AD_Org_Target_ID**, pick the target organization whose product selection shall be offered for counter document allocation.
 >**Note:** Only those organizations are displayed for which no allocations have been made for the selected product.

1. In the field **M_Product_Target_ID**, pick the target product to which the selected product shall be linked.
 >**Note:** Only unlinked products are displayed.

1. Click "Start" to allocate the products to each other for counter documents and close the overlay window.

| **Note:** |
| :--- |
| All existing allocations with products from other organizations are listed under the record tab "Allocated Product" at the bottom of a product entry. |

## More pages about counter documents

{% include tag_linklist.html lang=page.lang pages=site.webui_collection tag="Counter Documents" suppress_secondary_pages=""%}
