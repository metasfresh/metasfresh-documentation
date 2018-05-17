---
title: How do I manage product and partner-specific prices?
layout: default
tags:
  - Pricing
  - Pricing Conditions
  - Enhanced Pricing
lang: en
sequence: 10
ref: product_and_partner-specific_prices
---

## Overview
In metasfresh you can use one price list for several business partners. But what if you want to determine individual prices for specific partners? You do not want to create a new price list for each and every one of them, and end up with duplicated data and additional organizational overhead.

In this case, you can simply set up pricing conditions via the discount scheme and link them to the regarding business partner. <br> For this purpose, you can choose between two options:

- **Fixed Price:** You can determine a new standard price as a fixed price.
- **Surcharge on Standard Price:** You can add a surcharge to an existing standard price in a price system.

## Steps
1. Follow these [instructions for creating a discount scheme](Create_discount_scheme) up to **step 9**.
1. Check the box **IsPriceOverride**. A new field **PriceBase** appears.

### a) Determine a fixed price
1. In the field **PriceBase** select *Fixed*.
1. Enter a **Standard Price** that will be taken as fixed price for the product(s) when fulfilling the pricing conditions.

### b) Determine a surcharge on a standard price
1. In the field **PriceBase** select *Pricing System*. A new field **Base_PricingSystem_ID** appears.
1. In the field **Base_PricingSystem_ID** enter the desired base price system and select it from the suggestions.
 >**Note 1:** Hit `SPACE` to see all price systems.<br><br>
 >**Note 2:** Select one of the shown options with the mouse or ![](../DE/assets/Workflow_Auftrag_Bis_Rechnung_WebUI-73797.png).

1. Enter a **Aufschlag auf Standardpreis** that will be added to the defined standard price in the base price system when fulfilling the pricing conditions.

### Next Steps
1. Click "Done" to close the window and add the pricing conditions to the list.
1. [Link the discount scheme to a business partner](Link_discount_scheme_to_BP).

## Example
![](assets/Product_and_partner-specific_prices.gif)
