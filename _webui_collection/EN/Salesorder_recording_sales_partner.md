---
title: How do I enter a sales order using a sales partner?
layout: default
tags:
  - Workflow
  - Sales
  - Sales Partners
lang: en
sequence: 30
ref: salesorder_recording_sales_partner
---

## Requirements
1. [Record a sales partner](Add_new_sales_partner) and [create a commission contract for them](Create_commission_contract).
1. [Assign the sales partner to one or more customers](Assign_sales_partner_to_customers).
1. [Assign a price to the commission points](Commission_points_price).

## Steps
Follow these [instructions for entering a sales order](SalesOrder_recording) taking into account the following settings:
- Enter the **Sales partner code**.
- In the field **Sales partner**, enter a part of the name or number of the sales partner entitled to the commission and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note:** If one of the two fields is filled in correctly, the other one will be completed automatically.

### View commission process
After completing the sales order, an entry is created under "[Commission instance](Menu)" in the menu where you can also jump to ***directly*** via the sales order's [related documents](JumptoviaSidebar) (under SALES in the sidebar). Here you will get an overview of the commission transaction, including settlement status and the number of basis points. You can also quickly go to the **commission deed** from here via the sidebar.

### Commission deed (and settlement)
You can jump ***directly*** to the [commission deed](Menu) via the commission instance's [related documents](JumptoviaSidebar) (under SALES in the sidebar) where you will get an overview of the determined points. Under the record tab "Fact" at the bottom of the page you will also find all details about the settlement status of the commission. From here, you can also quickly go to the **billing candidates** via the sidebar where you can create the [incoming invoice (purchase invoice) for the commission](CreatePurchaseInvoice).

| **Note:** |
| :--- |
| Depending on the invoice rule (time of invoicing) specified in the [contractual terms for commission contracts](Define_contractual_terms_commission), the commission settlement can either take place *immediately* or *after delivery*. |

## Next Steps
1. [Create a shipment](Ship_SalesOrder) for the sales order with sales partner.
1. [Create the commission settlement](CreatePurchaseInvoice) from the "[Billing Candidates](Menu)"
1. [Create an invoice](Invoice_SalesOrder) for the sales order with sales partner.
