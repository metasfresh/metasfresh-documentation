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

## Preparation
Prior to production, ensure that all the required products to be consumed are on stock. For information on how to create a Goods Receipt, check [here](CreateGoodsReceipt).


## Steps

1. [Create a new Manufacturing Order](NewManufacturingOrder).
1. Select the Manufacturing Order from the [list view](ViewModes) under "[Manufacturing Order](Menu)".
1. [Start the action](StartAction) "Issue/Receipt". The production window "PP Order Issue/Receipt" opens up.


### Produce a product without consuming material
This is the easiest way to produce in metasfresh. The produced quantity is simply added to the account without deducting the required products from the bill of material (BOM).


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

## Example
![](assets/ProductionCompletion_walkthrough.gif)
