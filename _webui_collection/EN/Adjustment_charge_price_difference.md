---
title: How do I create a subsequent debit note in response to price differences after invoicing?
layout: default
tags:
  - Accounting
  - Billing
  - Credit Notes and Adjustment Charges
lang: en
sequence: 30
ref: adjustment_charge_price_difference
---

## Overview
In metasfresh, you can create subsequent debit notes with adjustment charges if, after invoicing, a credit balance results in your favor, e.g., due to price differences resulting from different price list versions. The subsequent debit notes are directly linked to the corresponding invoices, which makes the changes seamlessly traceable for the accounting department.

## Steps

### Create a subsequent debit note
1. Open "Sales Invoice" from the [menu](Menu).
1. [Use the filter](Filtering_function) to find the entry of the completed invoice for which you want to create a subsequent debit note and open it.
 >**Note:** Alternatively, use a [sales order](SalesOrder_recording)'s [related documents to jump](JumptoviaSidebar) to the corresponding [invoice](Invoice_SalesOrder).

1. [Start the action](StartAction) "Nachbelastung" (*Adjustment charge*). An overlay window opens up.
1. Pick the **Document Type** *Nachbelastung - Preisdifferenz* (*Adjustment Charge - Price diff*).
1. Click "Start" to create an invoice document for the subsequent debit note and close the overlay window.

### Record the price difference
1. Use the completed invoice's [related documents to jump](JumptoviaSidebar) into the window "Sales Invoice" again (under BILLING and then "Invoice (Customer)" in the sidebar) and then open the associated invoice entry with the **Target Document Type** *Nachbelastung - Preisdifferenz* which has already been [found by the filter](Filtering_function).
1. Go to the record tab "Invoice Line" at the bottom of the page and enter the amount of the price difference into the field in the column **Price** of the relevant line.
1. [Select](RecordSelection) and delete all lines irrelevant for the subsequent debit note.
1. ***Optional:*** Click ![](assets/Batch_Entry_Button.png) to add lines.
 >**Note:** Use shortcut `Alt` + `Q` / `⌥ alt` + `Q`.

### Complete the subsequent debit note
1. [Complete the document](DocumentProcessingComplete).
1. [Open the PDF preview](PrintPreview).

## Example
![](assets/Adjustment_charge_price_difference.gif)
