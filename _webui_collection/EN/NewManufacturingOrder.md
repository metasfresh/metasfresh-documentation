---
title: How do I create a manufacturing order?
layout: default
tags:
  - Workflow
  - Manufacturing
lang: en
sequence: 10
ref: newmanufacturingorder
---

## Steps
1. Open "Manufacturing Order" from the [menu](Menu).
1. [Create a new manufacturing order](New_Record_Window).
1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) to be produced and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field **BOM & Formula**, enter a part of the name or number of the [bill of materials](Create_BOM) to be used for production and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field **Resource**, pick the designated manufacturing facility.
1. In the field **Workflow**, set the required manufacturing steps.
1. Enter the **Quantity** of the product to be manufactured.
1. Pick the **UOM** of the product to be manufactured.
1. Pick the **Target Document Type** *Produktionsauftrag* (Manufacturing Order).
1. In the field **Date Promised**, set the date and time of product completion.
1. Pick a **Warehouse** where the product will be received after manufacturing.
1. [Complete the manufacturing order](DocumentProcessingComplete).
 >**Note:** Now the [action](StartAction#actions-menu) "Issue/Receipt" becomes available in the menu and the manufacturing order receives the *Planning* status.

| **Note:** |
| :--- |
| Once all mandatory fields are filled in, the components from the specified BOM are imported to the manufacturing order and listed under the record tab "Components of the Manufacturing Order" at the bottom of the page, where they can then be edited and additional components added individually as well. |

## Example
<kbd><img src="assets/NewManufacturingOrder.gif" alt="GIF: How to create a manufacturing order"></kbd>
