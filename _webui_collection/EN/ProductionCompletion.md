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
Prior to production, ensure that all the required products to be consumed are on stock. For information on how to create a Goods Receipt, check [here](CreateGoodsReceipt).

## Steps
1. [Create a new Manufacturing Order](NewManufacturingOrder).
1. Select the Manufacturing Order from the [list view](ViewModes) under "[Manufacturing Order](Menu)".
1. [Start the action](StartAction) "Issue/Receipt". The production window "PP Order Issue/Receipt" opens up.
 > Note: If you have selected the Manufacturing Order from the list view, you can also go to the actions button at the top right to start the action ![](assets/Actionbutton_IssueReceipt.png).

### 1. Produce a product without consuming material
This is the easiest way to produce in metasfresh. The produced quantity is simply added to the account without booking the required products from the bill of material (BOM).

1. In the production window, click on the product you want to produce, e.g. "Carrots chopped".
 ![](assets/ProductionCompletion_ProductionWindow.png)

1. Select "Receive HUs" via the actions button.
 ![](assets/ProductionCompletion_Receive_1.png)<br>
 >Note: If the product was assigned Packing Instructions, this will appear on the actions button instead of "Receive HUs".
   ![](assets/ProductionCompletion_Receive_2.png)

1. A new window opens up.
 ![](assets/ProductionCompletion_ReceiveWindow.png)

1. In the field **Quantity CU** enter the completed quantity of the product.

1. In the field **Quantity TU** enter the quantity of the packing units.
  >Note: The Quantity TU must be **at least 1**.

1. In the field **Quantity LU** enter the quantity of loading equipment.
 > Note: If you do not require any Quantity LU simply click the ![](assets/DeleteButton_X.png) on the Packing Instructions. This will erase the field.

1. Click "Start" to save the assignment.

1. When the assignment was successful you will find the assigned products underneath the product to be produced:
 ![](assets/ProductionCompletion_Assignment.png)

1. Select "Status: Planning complete" via the actions button to make the material posting. This makes the lines read-only:
 ![](assets/ProductionCompletion_PlanningComplete.png)

1. Click "Done" to close the window.

## Example 1
![](assets/ProductionCompletion_walkthrough.gif)

### 2. Produce a product and record the consumption of materials
The products required for the production are booked from the BOM. Adding the produced quantity works as described above.

1. In the production window, click on the component (**CO**) you want to book from the BOM, e.g. "Carrots unwashed".
 ![](assets/ProductionCompletion_MaterialConsumption.png)

1. Select "Issue HUs" via the actions button.<br>
 ![](assets/ProductionCompletion_Issue.png)

1. An overview of the matching handling units (HU) from stock opens up.
 ![](assets/ProductionCompletion_StockOverview.png)

1. Select the HU to be consumed for production.

1. Select "Issue selected HUs" via the actions button.

1. When the booking was successful, you will find the booked products below the component.
![](assets/ProductionCompletion_Booked.png)
 > Note: If you want to reverse the booking, simply select the added HU, go to the actions button and click ![](assets/Actionbutton_Reverse.png).

1. Click "Done" to close the window.

## Example 2
![](assets/ProductionCompletion_Consumption.gif)
