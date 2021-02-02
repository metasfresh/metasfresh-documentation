---
title: How do I produce a product?
layout: default
tags:
  - Workflow
  - Manufacturing
lang: en
sequence: 20
ref: productioncompletion
---

## Overview
metasfresh offers two possibilities to record the consumption of materials for production:
1. Produce a product without consuming material.
1. Produce a product and record the consumption of materials.

## Requirements
- Prior to production, make sure that the required products are in stock in sufficient quantity for consumption.<br>
To replenish the stock, you can [create a goods receipt](CreateGoodsReceipt).

## Steps
1. Open the entry of a [completed manufacturing order](NewManufacturingOrder).
1. [Start the action](StartAction#actions-menu) "Issue/Receipt". An overlay window, the production window "PP Order Issue/Receipt", opens up.
 >**Note:** If you have selected the manufacturing order while in [list view](ViewModes#list-view), you can also go to the [quick actions](StartAction#quick-actions) button at the top right to start the action ![](assets/Actionbutton_IssueReceipt.png).

### a) Produce a product without consuming material
This is the easiest way to produce in metasfresh. The produced quantity is simply added into stock without deducting the required components that are on the bill of materials (BOM).

1. In the production window, [select](RecordSelection) the product (**MP**) you want to produce, e.g., "Carrots chopped".
 <kbd><img src="assets/ProductionCompletion_ProductionWindow.png" alt="Fig.: Production window"></kbd>

1. [Start the quick action](StartAction#quick-actions) "Receive HUs".<br>
 ![](assets/ProductionCompletion_Receive_1.png)<br>
 >**Note:** If the product has packing instructions, these will appear on the quick actions button instead of "Receive HUs".
   <kbd><img src="assets/ProductionCompletion_Receive_2.png" alt="Fig.: Receive HUs"></kbd>

1. Another overlay window opens up.
 <kbd><img src="assets/ProductionCompletion_ReceiveWindow.png" alt="Fig.: Receive HUs (Overlay)"></kbd>

1. ***Optional:*** Select **TU Packing Instructions**.
1. ***Optional:*** Select **LU Packing Instructions**.
1. In the field **CU Quantity**, enter the received quantity of the product.
1. In the field **TU Quantity**, enter the number of transport units.
 >**Note 1:** The field **TU Quantity** appears only if **TU Packing Instructions** are available.<br><br>
 >**Note 2:** The TU Quantity must be ***at least 1***.

1. In the field **LU Quantity**, enter the number of loading units.
 >**Note 1:** The field **LU Quantity** appears only if **LU Packing Instructions** are available.<br><br>
 >**Note 2:** The field **LU Packing Instructions** appears only if **TU Packing Instructions** are available.<br><br>
 >**Note 3:** The LU Quantity must be ***at least 1***.

1. Click "Start" to record the received HUs and close the overlay window.
1. When the allocation was successful, the received HUs will be listed below the product to be produced:
 <kbd><img src="assets/ProductionCompletion_Assignment.png" alt="Fig.: Received HUs after allocation"></kbd>
 >**Note:** If you want to reverse the allocation, simply select the added HU, go to the quick actions button and click "Remove HU".

1. [Start the quick action](StartAction#quick-actions) "Process" to make the material posting. This makes the lines read-only:
 <kbd><img src="assets/ProductionCompletion_PlanningComplete.png" alt="Fig.: Material posting"></kbd>

1. Click "Done" to close the production window.

## Example 1
<kbd><img src="assets/ProductionCompletion_walkthrough.gif" alt="GIF: Production-Completion (Walkthrough 1)"></kbd>

---

### b) Produce a product and record the consumption of materials
The BOM components required for the production are deducted from stock. Adding the produced quantity works as described above.

1. In the production window, [select](RecordSelection) the BOM component (**CO**) you want to deduct from stock, e.g., "Carrots unwashed".
 <kbd><img src="assets/ProductionCompletion_MaterialConsumption.png" alt="Fig.: Material consumption"></kbd>

1. [Start the quick action](StartAction#quick-actions) "Open HU Selection Window".<br>
 ![](assets/Open_HU-Selection-Window.png)

1. An overview of the matching handling units (HU) from stock opens up on the right-hand side.
 <kbd><img src="assets/ProductionCompletion_StockOverview.png" alt="Fig.: Stock overview"></kbd>

1. [Select](RecordSelection) the HU to be consumed for production.
1. Select "Issue complete HUs" via the actions button.
1. When the allocation was successful, you will find the issued HU below the component.
 <kbd><img src="assets/ProductionCompletion_Booked.png" alt="Fig.: Deduction"></kbd>
 >**Note:** If you want to reverse the deduction, simply select the added HU and start the quick action "Remove HU".

1. [Start the quick action](StartAction#quick-actions) "Process" to deduct the HUs. This makes the lines read-only:
 <kbd><img src="assets/HU_booking_readonly.png" alt="Fig.: HU deduction (read-only)"></kbd>

1. Click "Done" to close the production window.

## Example 2
<kbd><img src="assets/ProductionCompletion_Consumption.gif" alt="GIF: Production-Completion with consumption (Walkthrough 2)"></kbd>
