---
title: How do I copy prices and products from one price list version to another?
layout: default
tags:
  - Pricing
  - Prices
  - Price List Schemas (Copy Product Prices)
lang: en
sequence: 10
ref: copy_prices_from_price-list-version
---

## Overview
When you create a new price list version, it will be empty at first, i.e. it will not contain any prices or products. You can now [manually add them to the price list](Add_products_to_price-list) or instead use a [price list schema](Add_price_list_schema) to copy them from an existing price list version (*base price list version*) to your new one, for example, if you want to add the same products but adjust their prices. To do so, please proceed as follows:

## Requirements
- [Create a price list schema](Add_price_list_schema), e.g., with the name "Copy Product Prices".
 >**Note:** You can also add rules to the price list schema that are to be applied during the copy process, such as surcharges or similar.

## Steps
1. Open the entry of an existing [price list](Menu) or [create a new one](Add_price-list).
1. [Add a new price list version](Add_price-list-version).
1. Go to the record tab "Price List Version" at the bottom of the page.
1. Double-click the field **Base Price List Version** of the newly created price list version and from the drop-down list select the base version from where the prices and products shall be taken over.
1. Double-click the field **Price List Schema** of the newly created price list version and select a price list schema from the drop-down list, e.g., *Copy Product Prices*.
1. [Start the action](StartAction) "Create product prices".
 >**Note:** Make sure that the line of the newly created price list version is [selected](RecordSelection) before you start the action.

1. [metasfresh saves the progress automatically](Saveindicator). The prices and products have been copied.
 >**Note:** If there are rules defined in the price list schema used, they will be applied to all affected product prices automatically.

1. Use the [context menu](Jumpto_via_context_menu) ![](assets/Product Prices Contextmenu.png) of the newly created price list version to switch into the window "Product Prices" where you will now see a list of all the products that were taken over from the base price list version.

## Example
![](assets/Copy_prices_from_price-list-version.gif)
