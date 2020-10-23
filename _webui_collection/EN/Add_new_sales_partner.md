---
title: How do I add a new sales partner?
layout: default
tags:
  - Sales
  - Sales Partners
lang: en
sequence: 10
ref: add_new_sales_partner
---

## Overview
A sales partner is a dealer or intermediary entitled to commission who sells products on behalf of a third party or for his own account. In metasfresh, commission claims are settled via incoming invoice (purchase invoice), which is why sales partners are recorded as "vendors" in the system.

Sales partners can be assigned to customers as well as to each other by hierarchical subordination. In the latter case, the distribution of commission points can be defined in the [hierarchy commission settings](Commission_conditons_details).

## Steps
1. Follow these [instructions for adding a vendor](New_business_partner_vendor).
1. Tick the checkbox **Sales partner** (on the lower left-hand side) to mark the vendor as a sales partner.
1. On the right-hand side, enter the **Sales partner code**, if available.
 >**Note:** This code can be specified during sales order entry for commission assignment.

### <a name="sp-hierarchy">Subordinate sales partners (optional)</a>
1. In the field **Sales partner** (on the right-hand side), enter a part of the ***superordinate*** sales partner's name or number and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
1. [Specify the commission amount using commission points](Commission_points_price).
1. [Specify the conditions for granting commission](Commission_conditons_details).
1. [Specify the contractual terms for commission contracts](Define_contractual_terms_commission).
1. [Create a commission contract for the sales partner](Create_commission_contract).
1. [Assign the sales partner to one or more customers](Assign_sales_partner_to_customers).
1. [Enter a sales order including the sales partner](Salesorder_recording_sales_partner).
