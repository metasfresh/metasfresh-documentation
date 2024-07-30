---
title: How do I run a special price promotion?
layout: default
tags:
  - Pricing
  - Prices
  - Price Campaign
lang: en
sequence: 10
ref: price_campaign_add_promotional_price
---

## Overview
In metasfresh, you can launch special price actions for a limited period of time in which a specific product is sold at a specific promotional price. This price will then apply either to single customers ([provided they are eligible for price promotions](Price_campaign_allow_promotional_price)) or to entire business partner groups. Consequently, all previously defined pricing conditions will be overridden during the promotion period and remain ineffective until the end of the promotion.

## Requirements
- [Clear customers for promotional prices so they can participate in special price actions](Price_campaign_allow_promotional_price).

## Steps
1. Open "Campaign Price" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Select the [**Product**](NewProduct) for which you want to make a special offer. To do so, enter part of the product name or number into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. **a)** In the field **Business Partner**, pick the [customer](New_business_partner_customer) who shall receive the special offer. To do so, enter part of the customer name or number into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.<br><br>
**b)** Select the **Business Partner Group** to which the special offer shall apply. To do so, enter part of the name of the [business partner group](New_Business_Partner_Group) into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Select the **Country** in which the special offer shall apply. To do so, enter part of the country name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note:** The **Currency** will be automatically updated according to the selected country but can be changed manually afterwards.

1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the promotional price will be effective *immediately*. If it lies in the *future*, the price will apply *from that date*. metasfresh suggests the currently valid price based on the date promised of the sales order.

1. Set a **Valid through** date.
1. Enter a **Standard Price** that shall be used as the promotional price for the selected product during the promotion period.
1. Select a **Tax Category**.
1. [metasfresh saves the progress automatically](Saveindicator).
 >**Note:** The promotional price can also be viewed [in the respective product's entry](Product_promotional_price).

<br>

| **Important note:** |
| :--- |
| In order for the promotional price to be proposed for the relevant customers during its validity period, [these customers must be authorized to participate in the price promotion](Price_campaign_allow_promotional_price). |

## Example
![](../DE/assets/Preiskampagne_Aktionspreis_anlegen.gif)
