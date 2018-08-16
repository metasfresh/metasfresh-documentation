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

## Preparation
- Prior to production, ensure that all the required products to be consumed are on stock.<br>
For information on how to create a goods receipt, [click here](CreateGoodsReceipt).

## Steps
1. Open a [completed manufacturing order](NewManufacturingOrder).
1. [Start the action](StartAction) "Issue/Receipt". The production window "PP Order Issue/Receipt" opens up.
 >**Note:** If you have selected the manufacturing order while in [list view](ViewModes), you can also go to the [quick actions](StartAction) button at the top right to start the action ![](assets/Actionbutton_IssueReceipt.png).

### a) Produce a product without consuming material
This is the easiest way to produce in metasfresh. The produced quantity is simply added to the account without deducting the required products from the bill of materials (BOM).

1. In the production window, [select](RecordSelection) the product (**MP**) you want to produce, e.g. "Carrots chopped".
 ![](assets/ProductionCompletion_ProductionWindow.png)

1. [Start the quick action](StartAction) "Receive HUs".<br>
 ![](assets/ProductionCompletion_Receive_1.png)<br>
 >**Note:** If the product has packing instructions, these will appear on the quick actions button instead of "Receive HUs".
   ![](assets/ProductionCompletion_Receive_2.png)

1. A new window opens up.
 ![](assets/ProductionCompletion_ReceiveWindow.png)

1. ***Optional:*** Select **TU Packing Instructions**.
1. ***Optional:*** Select **LU Packing Instructions**.
1. In the field **CU Quantity** enter the received quantity of the product.
1. In the field **TU Quantity** enter the number of transport units.
 >**Note 1:** The field **TU Quantity** appears only if **TU Packing Instructions** are available.<br><br>
 >**Note 2:** The TU Quantity must be ***at least 1***.

1. In the field **LU Quantity** enter the number of loading units.
 >**Note 1:** The field **LU Quantity** appears only if **LU Packing Instructions** are available.<br><br>
 >**Note 2:** The field **LU Packing Instructions** appears only if **TU Packing Instructions** are available.<br><br>
 >**Note 3:** The LU Quantity must be ***at least 1***.

1. Click "Start" to record the received HUs and close the window.
1. When the allocation was successful, the received HUs will be listed below the product to be produced:
 ![](assets/ProductionCompletion_Assignment.png)
 >**Note:** If you want to reverse the allocation, simply select the added HU, go to the quick actions button and click "Remove HU".

1. [Start the quick action](StartAction) "Process" to make the material posting. This makes the lines read-only:
 ![](assets/ProductionCompletion_PlanningComplete.png)

1. Click "Done" to close the window.

## Example 1
![](assets/ProductionCompletion_walkthrough.gif)

---

### b) Produce a product and record the consumption of materials
The products required for the production are deducted from the BOM. Adding the produced quantity works as described above.

1. In the production window, [select](RecordSelection) the component (**CO**) you want to deduct from the BOM, e.g. "Carrots unwashed".
 ![](assets/ProductionCompletion_MaterialConsumption.png)

1. [Start the quick action](StartAction) "Open HU Selection Window".<br>
 ![](assets/Open_HU-Selection-Window.png)

1. An overview of the matching handling units (HU) from stock opens up.
 ![](assets/ProductionCompletion_StockOverview.png)

1. [Select](RecordSelection) the HU to be consumed for production.
1. Select "Issue complete HUs" via the actions button.
1. When the allocation was successful, you will find the issued HU below the component.
![](assets/ProductionCompletion_Booked.png)
 >**Note:** If you want to reverse the deduction, simply select the added HU, go to the quick actions button and click "Remove HU".

1. [Start the quick action](StartAction) "Process" to deduct the HUs. This makes the lines read-only:
 ![](assets/HU_booking_readonly.png)

1. Click "Done" to close the window.

## Example 2
![](assets/ProductionCompletion_Consumption.gif)
