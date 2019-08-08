---
title: How do I add a temporary promotional price for a product?
layout: default
tags:
  - Master Data
  - Product
lang: en
sequence: 60
ref: product_promotional_price
---

## Overview
In metasfresh, you can trade a specific product for a limited period of time at a specific promotional price, which will then apply to either single business partners (customers as well as vendors) or to entire business partner groups. Consequently, all previously defined price conditions will be overridden during the promotion period and remain ineffective until the end of the promotion.

You can also quickly record special price actions in general for different products under "[Campaign Price](Price_campaign_add_promotional_price)" in the menu.

## Steps
1. Open the entry of an existing [product](Menu) or [add a new one](NewProduct).
1. Go to the record tab "Campaign Price" at the bottom of the page and click ![](assets/Add_New_Button.png). An overlay window opens up.
1. **a)** Select the [**Business Partner**](New_Business_Partner) to whom the special offer shall apply. To do so, enter a part of the business partner name or number into the field and click on one of the results from the [drop-down list](Keyboard_shortcuts_reference).<br><br>
**b)** Select the [**Business Partner Group**](New_Business_Partner_Group) to which the special offer shall apply. To do so, enter a part of the name of the business partner group into the field and click on one of the results from the [drop-down list](Keyboard_shortcuts_reference).
 >**Note:** Depending on the partner's business relation ([customer](New_business_partner_customer) or [vendor](New_business_partner_vendor)), the promotional price will be used either in [sales orders](SalesOrder_recording) or [purchase orders](CreatePurchaseOrder).

1. Select the **Country** in which the special offer shall apply. To do so, enter a part of the country name into the field and click on one of the results from the [drop-down list](Keyboard_shortcuts_reference).
 >**Note:** The **Currency** will be automatically updated according to the selected country but can be changed manually afterwards.

1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the promotional price will be effective *immediately*. If it lies in the *future*, the price will apply *from that date*. metasfresh suggests the currently valid price based on the date promised of sales orders or purchase orders.

1. Set a **Valid through** date.
1. Enter a **Standard Price** that shall be used as the promotional price for the selected product during the promotion period.
1. Select a **Tax Category**.
1. Click "Done" to close the overlay window and add the promotional price to the list.
 >**Note:** Repeat steps 2 to 9 to add further promotional prices for other business partners and/or time periods to the list.
