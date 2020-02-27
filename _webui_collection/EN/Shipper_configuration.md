---
title: How do I configure a shipper?
layout: default
tags:
  - Workflow
  - Sales
  - Shipping
  - Transport Orders and Shippers
lang: en
sequence: 20
ref: shipper_configuration
---

## Overview
metasfresh currently offers interfaces for shipping with the following service providers (shippers):
- Der Kurier
- <a href="#dhl-configuration" title="jump to DHL configuration">DHL</a>
- <a href="#dpd-configuration" title="jump to DPD configuration">DPD</a>
- GO! Express & Logistics

## Steps
1. Open "Shipper" from the [menu](Menu).
1. Open the entry of an existing shipper in the [detailed view](ViewModes#detailed-view), e.g., "DPD".
1. Enter the **Tracking URL** provided to you by the shipping service.
1. Go to the record tab of the respective shipper (e.g., "DPD Configuration") at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.

### <a name="dhl-configuration">DHL Configuration</a>
1. In the field **DHL API URL**, enter the URL for logging on to the DHL API.
1. Enter the **Application ID** provided by DHL for setup.
1. Enter the **Application Token** provided by DHL for setup.
1. Enter the **Account Number** provided by DHL for setup.
1. Enter the **Username** for account login.
1. In the field **Signature**, enter the password for account login.
1. Click "Done" to close the overlay window and add the configurations to the list.

---

### <a name="dpd-configuration">DPD Configuration</a>
1. In the field **Login Api Url**, enter the URL for <a href="http://diswiki.dpd.nl/wiki/2/login-service" title="dpd Login Service" target="_blank">login and authentication</a> against the DPD API.
1. In the field **Shipment Service Api Url**, enter the URL for accessing the <a href="http://diswiki.dpd.nl/wiki/3/shipment-service" title="dpd Shipment Service" target="_blank">shipping interface</a> used to generate the shipping labels.
1. Enter the **Delis ID** provided by DPD for setup.
1. Enter the **Delis Password** provided by DPD for setup.
1. Pick a **Paper Format** for the shipping labels.
1. Click "Done" to close the overlay window and add the configurations to the list.

| **Important note:** |
| :--- |
| The following DPD services are currently available:<br> •&nbsp;<a href="https://www.dpd.com/de/en/versenden/paketversand/" title="DPD CLASSIC parcel shipping" target="_blank">DPD CLASSIC</a> (in Germany and throughout Europe)<br> •&nbsp;<a href="https://www.dpd.com/de/en/versenden/expressversand/" title="DPD Express shipping" target="_blank">DPD EXPRESS E12</a> (within Germany) |

## Next Steps
- [Set up a shipper of your choice as default shipper for a particular customer](Setup_bpartner_default_shipper).
- [Use the shipper in a transport order](Create_transport_order).
