---
title: How do I add a price list?
layout: default
tags:
  - Pricing
  - Prices
  - Price Definition
lang: en
sequence: 30
ref: add_price-list
---

## Overview
<kbd><img src="assets/price system hierarchy - price lists.png" alt="Fig.: Pricing System Hierarchy - Focus: Price Lists"></kbd>

Price lists are country and currency-specific and can be [assigned to a particular partner (customer/vendor)](Assign_prices_to_partner) or [partner group](Assign_prices_to_partner_group).

## Steps
1. Open "Price List" from the [menu](Menu).
1. [Create a new price list](New_Record_Window).
1. Give the price list a **Name**.
1. Select the **Country** subject to the price list.
 >**Note:** The country of the price list **must be identical** with the partner's country from the shipping and billing address.

1. Select a **Currency**.
1. The field **Price Precision** specifies the number of decimal places for price calculations.
1. Select the [**Pricing System**](Add_price-system) to which the price list shall be linked.
1. ***Optional:*** Set a **Base Price List**. To do so, enter part of the name of the desired price list and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note:** The base price list will be used as fallback if a product cannot be found on the active price list. It also serves to [update derivative customer price lists](Update_derivative_PLV).

1. The checkbox **Sales Price List** specifies whether this price list is to be used for *Sales* or *Purchasing*. If the box is ticked, the price list becomes selectable in [sales orders](SalesOrder_recording), for instance. If you clear this checkbox, the price list automatically becomes a ***Purchasing Price List*** and available in [purchase orders](CreatePurchaseOrder), for instance.
1. The checkbox **Tax incl.** specifies whether the prices are *gross* or *net* prices (i.e. including or excluding value-added tax). metasfresh calculates the prices accordingly.
1. ***Optional:*** Select a **Default Tax Category** that will be set automatically when selecting the price list.
1. ***Optional:*** Set the desired [**Organization**](Org_add_new_organization). To do so, enter part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Add a price list version](Add_price-list-version).

## Example
<kbd><img src="assets/Add_Price List.gif" alt="GIF: Add new price list"></kbd>
