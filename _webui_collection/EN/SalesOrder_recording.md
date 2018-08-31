---
title: How do I create a sales order?
layout: default
tags:
  - Workflow
  - Sales
lang: en
sequence: 20
ref: salesorder_recording
---

## Steps
1. Open "Sales Order" from the [menu](Menu).
1. [Create a new sales order](New_Record_Window).
1. In the field **Business Partner** enter a part of the customer name or number and click on one of the results.
 >**Note 1:** Hit `SPACE` to see all available [customers](New_business_partner_customer).<br><br>
 >**Note 2:** Select one of the shown options with the mouse or ![](../DE/assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).<br><br>
 >**Note 3:** If the desired partner does not appear in the list, you can add them through [quick create](Quick_create_new_business_partner).

1. Select a **Price System**, if the customer is not yet [linked to a price system](Assign_prices_to_partner).
1. The field **Date** determines the date when the order *was placed*.
1. The field **Date Promised** determines the date when the service is to be *performed*, i.e. the shipment is to be carried out.
1. [metasfresh saves the progress automatically](Saveindicator).

### Add new lines
1. Go to the record tab "Order Line" at the bottom of the page and click ![](assets/Batch_Entry_Button.png) to open the fast order line input.
 >**Note:** Use shortcut `Alt` + `Q` / `⌥ alt` + `Q`

1. In the field **Product** enter a part of the product name or number and click on one of the results.
 >**Note 1:** Hit `SPACE` to see all available [products](NewProduct).<br><br>
 >**Note 2:** Select one of the shown options with the mouse or ![](../DE/assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).

1. Enter a **Quantity**.
 >**Note:** Use the mouse or `Tab ↹` key to go to the field

1. Hit `↵ Enter` to add the line to the order.
 >**Note 1:** Repeat steps 2 to 4 until you have registered all order items.<br><br>
 >**Note 2:** If the **No Price Conditions Indicator** at the end of an order line shows a <span style="color:red">red</span> dot, you have to add a [pricing conditions schema](Pricing_conditions_in_metasfresh) and then [link it to the customer](Link_discount_schema_to_BP).

### Next Steps
1. [Complete the order](DocumentProcessingComplete).
1. [Open the PDF preview](PrintPreview).

## Example
![](assets/salesorder.gif)
