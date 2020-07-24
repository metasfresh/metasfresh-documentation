---
title: How do I export accounting data? (DATEV Export)
layout: default
tags:
  - Accounting
  - Accounting Data Export (DATEV)
lang: en
sequence: 10
ref: datev_accounting_export_minimum_requirements
---

<!--
See also: https://forum.metasfresh.org/t/from-new-system-to-accounting-tax-consultant/1663 (From new system to accounting / tax consultant)
-->

## Overview
With metasfresh you can export postings and master data (general ledger/personal accounts) via the DATEV accounting interface with ease. By deploying both services in a company you avoid handling data twice thanks to the automated posting of documents and the convenient export of all accounting data as well as master data on [customers](New_business_partner_customer) (debtors) and [vendors](New_business_partner_vendor) (creditors) to DATEV. This way, the exchange between your and the tax advisor's office is almost paperless and requires a minimum of manual effort, even with a high daily circulation of outgoing and incoming invoices.

Below are described the minimum requirements and necessary steps to get from a freshly set up metasfresh system with original database via processing a sales or purchase order to exporting accounting data.

## Requirements
1. [Set up a new organization](Org_add_new_organization) or use the default "metasfresh AG".
1. [Record a bank account (IBAN)](InitialSetupWizard).
1. Tax categories are provided by default and only need to be created manually if required.
1. Payment terms are provided by default and only need to be created manually if required.
1. [Add a pricing system](Add_price-system) including a [price list](Add_price-list) (as required for sales and/or purchasing) and a [price list version](Add_price-list-version) (also see "[Define prices](Define_prices)").
1. Add a new [customer](New_business_partner_customer) and/or [vendor](New_business_partner_vendor) along with bank accounts (IBAN).
1. Product categories are provided by default and only need to be [created manually](NewProductCategory) if required.
1. [Add a new product](NewProduct) with a [purchase and/or sales price](ProductPrice) (as required).

## Steps

### Enter a Sales Order and/or Purchase Order
- [Follow these instructions](Workflow_SalesOrder_to_Invoice) to create a sales order along with a shipment and an invoice.
- [Follow these instructions](Workflow_PurchaseOrder_to_Invoice) to create a purchase order along with a goods receipt and an invoice.

After each invoice is issued, accounting transactions are posted and can be viewed under "[Accounting Transactions](Menu)" in the menu. You can also jump ***directly*** to the respective postings via the completed invoice's [related documents](JumptoviaSidebar) (under FINANCE in the sidebar).

### Export Postings
1. Open "Accounting Export" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Use the fields **Date Accounted from** and **Date Accounted to** to set the period in which the postings to be exported occurred.
1. ***Optional:*** Tick the checkbox **Exclude already exported** unless you want postings from previous accounting exports for the same period to be added to this entry and exported again.
1. [Start the action](StartAction#actions-menu) "Create export lines". All relevant accounting lines are added to the record tab "Lines" of the export entry.
1. [Start the action](StartAction#actions-menu) "Export file". An overlay window opens up.
1. Pick the **DATEV Export Format** *default*.
1. Click "Start" to generate the export file and close the overlay window. The "Save As" dialog box opens up.
1. Use the suggested file name or change it ad lib and save the file in a directory of your choice.
1. Browse to this directory and open the file in a spreadsheet software, e.g., *Microsoft Excel*.
