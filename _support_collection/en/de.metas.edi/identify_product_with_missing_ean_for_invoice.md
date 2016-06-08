---
title: Identify InvoiceLines whose product has a missing UPC/EAN
component: de.metas.edi
tags: EDI, support, sql
lang: en
layout: default
---

Typical error message in the invoice's EDI-Status:

{% include support/de.metas.edi/identify_product_with_missing_ean_for_invoice_errormsg.md %}

This error message is not really helpfull..to find out which of the invoices' products lack an EAN (or customer product number!), you can do

{% include support/de.metas.edi/identify_product_with_missing_ean_for_invoice_sql.md %}

