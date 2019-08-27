---
title: How do I create a vendor credit note?
layout: default
tags:
  - Accounting
  - Billing
  - Credit Notes and Adjustment Charges
  - Vendors
lang: en
sequence: 10
ref: credit_memo_vendor
---

## Overview
In metasfresh, you can create vendor credit notes (or memos) if a credit balance results in your favor due to discrepancies between the vendor's incoming invoice and the actually received goods. The credit notes are set off instantly against the incoming invoices, as far as they have not been paid.

## Requirements
- [Make sure that the **Document Type** *Credit Memo (Vendor)* is number controlled](Doc_type_assign_sequence_number).

## Steps

### Create a credit note
1. Open "Purchase Invoice" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Pick the **Document Type** *Credit Memo (Vendor)*.
1. In the field **Business Partner**, enter a part of the [vendor](New_business_partner_vendor) name or number and click on the matching result in the [drop-down list](Keyboard_shortcuts_reference).
 >**Note:** If the required partner does not appear in the list, you can add them through [quick create](Quick_create_new_business_partner).

### Add Invoice Lines
1. Go to the record tab "Invoice Line" at the bottom of the page and click !["Batch entry"](assets/Batch_Entry_Button.png) to open the fast invoice line input.
 >**Note:** Use shortcut `Alt` + `Q` / `⌥ alt` + `Q`.

1. In the field **Product**, enter a part of the name or number of the [product](NewProduct) relevant for the credit note and click on the matching result in the [drop-down list](Keyboard_shortcuts_reference).
1. Enter a **Quantity**.
 >**Note:** Use the mouse or `Tab ↹` key to go to the field.

1. Hit `↵ Enter` to add the line to the list.
 >**Note:** Repeat steps 1 to 4 until you have recorded all relevant invoice lines.

### Complete the credit note
1. [Complete the document](DocumentProcessingComplete).
1. [Open the PDF preview](PrintPreview).

## Example
![](assets/Credit_memo_vendor.gif)
