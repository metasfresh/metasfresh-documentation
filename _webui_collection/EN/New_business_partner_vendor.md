---
title: How do I add a new vendor?
layout: default
tags:
  - Master Data
  - Business Partner
  - Business Relations
lang: en
sequence: 20
ref: new_business_partner_vendor
---

## Overview
In metasfresh, you can determine whether a business partner is a [customer](New_business_partner_customer), vendor or both. Additionally, you can set default commercial terms and conditions that will then be automatically applied to all future business documents.

## Requirements
- [Add a new business partner](New_Business_Partner).

## Steps

### Business Partner as Vendor
1. Open the entry of a [business partner](Menu) in the [detailed view](ViewModes#detailed-view).
1. Go to the record tab "Vendor" at the bottom of the page.
1. Open the [advanced edit menu](Open_AdvancedEditTab) of the vendor line.
1. Tick the checkbox **Vendor**.
1. Select a [**Purchase Pricing System**](Add_price-system).
1. Select a [**PO Discount Schema**](Pricing_conditions_in_metasfresh).
1. ***Optional:*** Add further terms and conditions, such as **Payment Rule**, **Shipment** ('*Pickup*' or '*Shipper*'), **Payment Term**, etc.
1. Click "Done" to apply the changes and close the advanced edit menu.

## Example
<kbd><img src="assets/New_Business_Partner_vendor.gif" alt="GIF: How to add a new vendor"></kbd>
