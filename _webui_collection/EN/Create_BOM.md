---
title: How do I create a bill of materials (BOM)?
layout: default
tags:
  - Master Data
  - Bill of Materials
lang: en
sequence: 10
ref: create_bom
---

## Steps

### Create a BOM
1. Open "Bill of Materials" from the [menu](Menu).
1. [Create a new BOM](New_Record_Window).
1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) for which you want to create a BOM and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>, e.g., "Guitar".
1. Make sure the **Search Key** of the BOM is ***identical*** to the search key of the product.
1. In the field **No.**, enter a document number.

### Add BOM components
1. Go to the record tab "Components of the BOM & Formula" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) you want to add as a component to the BOM and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>, e.g., "Body" or "Strings".
1. In the field **Qty**, enter a quantity.
1. Click "Done" to close the overlay window and add the component to the list.
 >**Note:** You can add any number of components to a BOM.

| **Note:** |
| :--- |
| You can also view the individual BOM components in detail under "[Components of the BOM & Formula](Menu)" in the menu. |

### Verify BOM
To obtain a valid BOM it has to be verified first.

1. [Start the action](StartAction#actions-menu) "Verify BOM". An overlay window opens up.
1. Pick a [**Product Category**](NewProductCategory).
1. Click "Start" to confirm and close the overlay window.
1. To check the verification status of the BOM product, [jump into the field](Jumpto) **Product** of the entry and confirm that the checkbox **Verified** is ticked off: ![Verified='Y'](assets/BOM_product_verified.png).

## Example
<kbd><img src="assets/Create_BOM.gif" alt="GIF: Create BOM"></kbd>
