---
title: How do I assign a price to commission points?
layout: default
tags:
  - Workflow
  - Contract Management
  - Commission Contracts
  - Setup
lang: en
sequence: 30
ref: commission_points_price
---

## Overview
Commission points are included in metasfresh by default. They are used for calculating commissions and are obtained by deducting a commission percentage from the ordered basis points number (line amount in the sales order). The percentage rate can be defined in the [hierarchy commission settings](Commission_conditons_details). You can also assign an individual price to the commission points which, in the course of invoicing, will determine the final commission amount due.

In order to assign a price to commission points, please proceed as follows:

## Steps
1. Open "Product" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the product "Provisionspunkt" (*Commission Point*) by the **Search Key** "COMMISSION_POINT".
1. Open the product entry.
1. Go to the record tab "Price" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Pick *the same* [**Price List Version**](Add_price-list-version) that is also linked with the [sales partner](Add_new_sales_partner) who shall receive the commission points, e.g., "Vendor Price List (purchase price list)".
1. Enter a **Standard Price**.
1. In the field **Tax Category**, pick a value-added tax (VAT) category, such as *normal*, *reduced*, *tax-free*, etc.
1. Click "Done" to close the overlay window and add the price to the list.

## Next Steps
1. [Define the conditions for granting commission.](Commission_conditons_details).
1. [Enter a sales order using a sales partner entitled to commission](Salesorder_recording_sales_partner).
