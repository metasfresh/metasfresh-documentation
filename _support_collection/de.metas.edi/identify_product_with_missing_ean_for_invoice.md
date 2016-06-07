---
title: Identify InvoiceLines whose product has a missing UPC/EAN
component: de.metas.edi
tags: EDI, support, sql
lang: EN
layout: default
---

Typical error message in the invoice's EDI-Status:

```
RuntimeCamelException: de.metas.edi.esb.jaxb.EDICctopInvoic500VType@1a3fad95 must have a UPC
```

This error message is not really helpfull..to find out which of the invoices' products lack an EAN (or customer product number!), you can do

```sql
SELECT i.POReference, i.Documentno, v.*
FROM edi_cctop_invoic_500_v v
    JOIN C_Invoice i ON i.C_Invoice_ID=v.C_Invoice_ID
WHERE true
    AND i.POReference IN ('your','POReference','values')
    AND (v.UPC IS NULL OR v.VendorProductNo IS NULL)
```
