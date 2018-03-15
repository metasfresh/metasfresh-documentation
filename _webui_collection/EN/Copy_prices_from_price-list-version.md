---
title: How do I copy prices and products from one price list version to another?
layout: default
tags:
  - Pricing
  - Prices
lang: en
sequence: 80
ref: copy_prices_from_price-list-version
---

## Overview
When you create a new price list version, it will be empty at first, i.e. there are no prices or products in it. You can now manually [add them to the price list](Add_products_to_price-list) one by one.

However, instead you can also take an existing price list version along with its prices and products and copy it into your new version in case you only want to modify it in a few parts, for example. To do so, take the following steps:

## Steps
1. Open an existing [price list](Menu).
1. [Add a new price list version](Add_price-list-version).
1. Go to the tab "Price List Version" at the bottom of the page.
1. Double-click the field **Basic Price List Version** of the newly created price list version and from the drop-down list select the basic version from where the prices and products shall be taken over.
1. Double-click the field **Discount Schema** of the newly created price list version and select *Copy Price Lists* from the drop-down list.
 >**Note:** You can also [add rules to the price list scheme](Price_list_scheme_rules) that are to be applied during the copy process, such as surcharge amounts or similar.

1. [Start the action](StartAction) "Create Price List".
 >**Note:** Make sure that the line of the newly created price list version is selected before you start the action.

1. [metasfresh saves the progress automatically](Saveindicator). The prices and products were copied.
1. Use the [context menu](Jumpto_via_context_menu) ![](assets/Product Prices Contextmenu.png) of the newly created price list version from before to switch into the window "Product Prices" where you will now see a list of all the products that were taken over from the basic price list version.

## Example
![](assets/Copy_prices_from_price-list-version.gif)
