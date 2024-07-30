---
title: How do I enter a margin agreement between a sales partner and a customer?
layout: default
tags:
  - Contract Management
  - Commission Contracts
lang: en
sequence: 20
ref: commission_margin_agreement
---

<!--
See also: https://github.com/metasfresh/me03/issues/3309#issuecomment-580173464
-->

## Overview
A margin agreement between a [sales partner who is entitled to commission](Add_new_sales_partner) and a [customer](New_business_partner_customer) enables the sales partner to grant a portion of their [commission](Commission_points_price) to the customer in the form of a discount on the net price of a [product](NewProduct).

## Requirements
1. [Record a sales partner with whom a commission contract is to be concluded](Add_new_sales_partner).
1. [Specify the contractual terms of the commission contract](Define_contractual_terms_commission).

## Steps
1. Open "Customer Margin Settings" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. In the field **Sales partner**, enter part of the name or number of the [sales partner](Add_new_sales_partner) based on whose commission the discount shall be calculated and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. In the field **Business Partner**, enter part of the name or number of the [customer](New_business_partner_customer) to receive the discount and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note 1:** If the field remains empty, the margin agreement applies to ***all customers***.<br><br>
 >**Note 2:** If both general agreements and those with specific customers exist, the one with the more specific data will always prevail.

1. In the field **Margin %**, enter the percentage to be deducted from the sales partner's commission and then applied as a discount on the net price of the product.
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the agreement will be effective *immediately*. If it lies in the *future*, it will only apply *from that date*.

1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Enter a sales order using a sales partner entitled to commission](Salesorder_recording_sales_partner).
