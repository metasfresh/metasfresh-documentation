---
title: How do I enable collective bills for customers?
layout: default
tags:
  - Accounting
  - Billing
lang: en
sequence: 10
ref: enable_collectivebill
---

## Steps
1. Open the entry of an existing [business partner](Menu) or [add a new one](New_Business_Partner).
1. Go to the record tab "Customer" at the bottom of the page.
1. Open the [advanced edit menu](Open_AdvancedEditTab) of the customer line.
1. Set the field **Aggregationrule Customer Invoices** to the desired aggregation rule.
 >**Note:** For the standard case select "invoicing-agg-std".

1. Click "Done" to close the advanced edit menu.

## Explanation of the Rules

| Rule | Description | Explanation |
|---|---|---|
| invoicing-agg-std | Standard Rule | Aggregation is done without restrictions |
| none | | An invoice is always created for each order |

## Example
![](assets/Enable_CollectiveBill.gif)
