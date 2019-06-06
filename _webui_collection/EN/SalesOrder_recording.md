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
1. In the field **Business Partner**, enter a part of the [customer](New_business_partner_customer) name or number and click on the matching result in the [drop-down list](Keyboard_shortcuts_reference).
 >**Note:** If the required partner does not appear in the list, you can add them through [quick create](Quick_create_new_business_partner).

1. Select a [**Price System**](Add_price-system), if the customer is not yet [linked to a price system](Assign_prices_to_partner).
1. The field **Date** determines the date when the order *was placed*.
1. The field **Date Promised** determines the date when the service is to be *performed*, i.e. the shipment is to be carried out.
1. [metasfresh saves the progress automatically](Saveindicator).

### Add Order Lines
1. Go to the record tab "Order Line" at the bottom of the page and click ![](assets/Batch_Entry_Button.png) to open the fast order line input.
 >**Note:** Use shortcut `Alt` + `Q` / `⌥ alt` + `Q`.

1. In the field **Product**, enter a part of the [product](NewProduct) name or number and click on the matching result in the [drop-down list](Keyboard_shortcuts_reference).
 >**Note:** Use the [product proposals list](Product_proposals_sales_purchase_order) to view all products available on the current price list and, if necessary, add a selection of them to the sales order.

1. Enter a **Quantity**.
 >**Note:** Use the mouse or `Tab ↹` key to go to the field.

1. Hit `↵ Enter` to add the line to the order.
 >**Note 1:** Repeat steps 2 to 4 until you have registered all order items.<br><br>
 >**Note 2:** If the **No Price Conditions Indicator** at the end of an order line shows a **<span style="color:red">red</span>** dot, you have to add a [pricing conditions schema](Pricing_conditions_in_metasfresh) and then [link it to the customer](Link_discount_schema_to_BP).

### Complete the Order
1. [Complete the order](DocumentProcessingComplete).
1. [Open the PDF preview](PrintPreview).

## Next Steps
- [Create a shipment](Ship_SalesOrder) for the sales order.

## Example
![](assets/salesorder.gif)
