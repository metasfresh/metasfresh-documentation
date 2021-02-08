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
1. [Create a new BOM entry](New_Record_Window).
1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) for which you want to create a BOM and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>, e.g., "Guitar".
1. Make sure the **Search Key** of the BOM is ***identical*** to the search key of the product.
1. In the field **BOM Use**, pick *Manufacturing*.
 >**Note:** For commercial BOMs for finished products whose components are not manufactured but shall be listed individually in the order, pick *Phantom*.

1. ***Optional:*** In the field **No.**, enter a custom document number.
1. ***Optional:*** Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the BOM will be effective *immediately*. If it lies in the *future*, it will only apply *from that date*.

### Add BOM components
1. Go to the record tab "Components of the BOM & Formula" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) you want to add as a component to the BOM and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>, e.g., "Body" or "Strings".
1. Pick a **Component Type**, e.g., *Component*.
 >**Note:** The *Co-Product* is a by-product from the production of the actual finished product and can be added to stock as a finished product itself.

1. In the field **Qty**, enter a quantity. To record the quantity in percent, tick the checkbox **Is %** and enter the amount in the field **% Qty**.
 >**Note:** A BOM contains the specifications for a single finished product. When the BOM is used, the quantity specified here will be multiplied by the quantity ordered in each case.

1. Pick an **Issue Method** how to deduct the consumed materials, e.g., *Issue only for what was received* or *Backflush*.
 >**Note 1:** For automatic issuing, i.e. deducting only the quantity of materials actually consumed, pick "Issue only for what was received".<br><br>
 >**Note 2:** To deduct the quantity of material per BOM component individually, pick "Backflush".

1. Click "Done" to close the overlay window and add the component to the list.
 >**Note:** You can add any number of components to a BOM.

| **Note:** |
| :--- |
| You can also view the individual BOM components in detail under "[Components of the BOM & Formula](Menu)" in the menu. |

### Verify BOM
To obtain a valid BOM that can be used in manufacturing it has to be verified first.

1. [Start the action](StartAction#actions-menu) "Verify BOM". An overlay window opens up.
1. Pick a [**Product Category**](NewProductCategory).
1. Click "Start" to confirm and close the overlay window.
1. To check the verification status of the BOM product, [jump into the field](Jumpto) **Product** of the entry and confirm that the checkbox **Verified** is ticked off: ![Verified='Y'](assets/BOM_product_verified.png).

    | **Note:** |
    | :--- |
    | After any change made to the BOM it must be verified again! |

## Example
<kbd><img src="assets/Create_BOM.gif" alt="GIF: Create BOM"></kbd>
