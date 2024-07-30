---
title: How do I add a new warehouse?
layout: default
tags:
  - Master Data
  - Warehouse Management
lang: en
sequence: 10
ref: add_new_warehouse
---

## Steps

### Create a Warehouse
1. Open "Warehouse" from the [menu](Menu).
1. [Add a new warehouse](New_Record_Window).
1. Give the warehouse a **Name**, e.g., "[Empty Container Depot](Add_empty_container_depot)".
1. Depending on the version build, one of the following steps may apply:
    - **a)** In the field **Partner Location**, enter part of the [location](Add_address_tab) name and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
    - **b)** ***Optional (Managing partner warehouses):*** In the field **Business Partner** (i.e. *Supplier for provision*), remove your default organization. Then in the first input area of the line, enter part of the name or number of the [business partner](New_Business_Partner) providing the services/materials and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>. Now <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">in the same way</a>, pick a **Partner Location** in the next eponymous part of the line and, if required, a **User/Contact**.
1. Pick a **Manufacturing Plant**, if available.
 >**Note:** Manufacturing plants are required for [product planning](Product_planning) and [automatic order checkups](Automatic_order_checkup).

1. ***Optional:*** Pick a [**Warehouse Type**](Add_new_warehouse_type).

### <a name="locator">Add a Storage Location</a>
1. Go to the record tab "Locator" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. In each of the fields **Aisle**, **Rack**, **Level** and **Tray** enter the value *0*.
1. Click "Done" to close the overlay window and add the storage place to the list.

### <a name="lagerzuordnung">Warehouse Assignment</a>
Here you can select the ***Document Base Types*** for which the warehouse shall be used, e.g., *Sales Order*, *Purchase Order*, *Inventory*, *Material Receipt*, etc.

1. Go to the record tab "Lagerzuordnung" (*Warehouse Assignment*) at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Select a **Document Base Type**, e.g., *Sales Order*.
1. Click "Done" to close the overlay window and add the document base type to the list.
 >**Note:** You can assign any number of document base types to a warehouse. As an example, please take a look at the warehouse entry "Main Warehouse", which is already configured appropriately.

## Example
<kbd><img src="assets/Add_Empty_Container_Depot.gif" alt="GIF: How to add a new warehouse"></kbd>
