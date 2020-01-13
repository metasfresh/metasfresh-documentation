---
title: How do I conclude a commission contract?
layout: default
tags:
  - Workflow
  - Contract Management
  - Commission Contracts
lang: en
sequence: 10
ref: create_commission_contract
---

## Overview
In a commission contract, the client undertakes to pay a remuneration ([commission](Commission_points_price)) to a [sales partner](Add_new_sales_partner) for the [sale of certain products](SalesOrder_recording).

## Requirements
1. [Record a sales partner with whom a commission contract is to be concluded](Add_new_sales_partner).
1. [Define the contractual terms of the commission contract](Define_contractual_terms_commission).

## Steps
1. Open the entry of an existing sales partner from your [business partners](Menu).
1. [Start the action](StartAction) "Create Contract for filtered Business Partner". An overlay window opens up.
1. Pick the desired **Contract Terms** for the commission contract.
1. Set a **Start Date**.
1. Click "Start" to close the overlay window and create the contract.
1. [metasfresh saves the progress automatically](Saveindicator).

| **Note:** |
| :--- |
| After creating the commission contract you will find it under "[Contract](Menu)" in the menu. You can also jump ***directly*** to the contract via the sales partner's [related documents](JumptoviaSidebar) (under CONTRACT MANAGEMENT in the sidebar). |


## Error Message

<kbd style="font-size:12pt; font-family:arial; line-height:1.5;"><span style="color:#f67a89"><strong>Error: Der Vertragszeitraum Jan 1,...</strong></span><br>
Server error<br>
Der Vertragszeitraum Jan 1, <script>document.write(new Date().getFullYear())</script> bis Dec 31, <script>document.write(new Date().getFullYear())</script> hat keine Perioden.</kbd><br><br>

This error message points out that there are no calendar periods available for the selected contractual period.

If you receive this error message at **step 5**, please follow these [instructions for creating new calendar periods](Add_new_calendar_periods) for the selected contractual period.

## Next Steps
1. [Assign the sales partner to one or more customers](Assign_sales_partner_to_customers).
1. [Enter a sales order using a sales partner entitled to commission](Salesorder_recording_sales_partner).
