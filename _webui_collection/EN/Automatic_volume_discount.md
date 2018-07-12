---
title: How do I set up automatic volume discounts (tiered discounts)?
layout: default
tags:
  - Pricing
  - Discounts
lang: en
sequence: 40
ref: automatic_volume_discount
---

## Steps
1. Open "Discount Schema" from the [menu](Menu).
1. [Create a new discount scheme](New_Record_Window).
1. Give the discount scheme a **Name**.
1. Select the **Discount Type** *Breaks*.
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the discount scheme is effective *immediately*. If it lies in the *future*, the scheme will only apply *from that date*.

1. Go to the record tab "Discount Break" at the bottom of the page and click ![](assets/Add_New_Button.png). A new window opens up.
1. Select a **Product** or a **Product Category**.
1. In the field **Break Value** enter the amount at which a discount is to be applied.
1. In the field **Break Discount %** enter a percentage.
1. Click "Done" to close the window and add the discount conditions to the list.
 >**Note:** Repeat steps 6 to 10 to add further discount conditions, such as for tiered discounts or discounts for additional products/product categories.

## Assign Discount Scheme to a Business Partner
For a discount scheme to be applied automatically, it first has to be assigned to a business partner for whom the discount scheme shall be used.

1. Use the [menu](Menu) to navigate to the regarding [business partner](New_Business_Partner).
1. Go to the record tab "Customer" at the bottom of the page and move the horizontal scrollbar to the right until you reach the column **Discount Schema**.
1. Double-click the field **Discount Schema** of the customer line and select the desired discount scheme from the drop-down list.
1. [metasfresh saves the progress automatically](Saveindicator).

### Example
![](assets/Automatic Volume Discount.gif)
