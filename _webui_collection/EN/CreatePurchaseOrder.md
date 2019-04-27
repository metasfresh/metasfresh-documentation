---
title: How do I create a purchase order?
layout: default
tags:
  - Workflow
  - Purchase
lang: en
sequence: 20
ref: createpurchaseorder
---

## Steps
1. Open "Purchase Order" from the [menu](Menu).
1. [Create a new purchase order](New_Record_Window).
1. In the field **Delivery from**, enter a part of the business partner name or number and click on one of the results.
 >**Note 1:** Hit `SPACE` to see all available [vendors](New_business_partner_vendors).<br><br>
 >**Note 2:** Select one of the shown options with the mouse or ![](../DE/assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).<br><br>
 >**Note 3:** If the desired partner does not appear in the list, you can add them through [quick create](Quick_create_new_business_partner).

1. Select a **Price System**, if the vendor is not yet [linked to a price system](Assign_prices_to_partner).
1. The field **Date** specifies the date when the order *was placed*.
1. The field **Date Promised** specifies the date when the service is to be *performed*, i.e. the shipment is to be expected.
1. [metasfresh saves the progress automatically](Saveindicator).

### Add Order Lines
1. Go to the record tab "PO Line" at the bottom of the page and click ![](assets/Batch_Entry_Button.png) to open the fast order line input.
 >**Note:** Use shortcut `Alt` + `Q` / `⌥ alt` + `Q`.

1. In the field **Product**, enter a part of the product name or number and click on one of the results.
 >**Note 1:** Hit `SPACE` to see all available [products](NewProduct).<br><br>
 >**Note 2:** Select one of the shown options with the mouse or ![](../DE/assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).

1. Enter a **Quantity**.
 >**Note:** Use the mouse or `Tab ↹` key to go to the field

1. Hit `↵ Enter` to add the line to the order.
 >**Note:** Repeat steps 2 to 4 until you have registered all order items.

### Complete the Order
1. [Complete the order](DocumentProcessingComplete).
1. [Open the PDF preview](PrintPreview).

## Next Steps
- [Create a goods receipt](CreateGoodsReceipt) for the purchase order.

## Example
![](assets/NewPO_walkthrough.gif)
