---
title: C_Invoice / C_Invoice_Candidate
layout: default
tag: 
   - datamodel
   - documents
lang: en
---

## Select for Invoice to Invoice Candidate

```
SELECT
  i.documentno,
  i.dateinvoiced,
  ic.c_invoice_candidate_id,
  ic.qtytoinvoice,
  ic.qtyinvoiced
FROM c_invoice i
  LEFT JOIN c_invoiceline il ON i.c_invoice_id = il.c_invoice_id
  LEFT JOIN c_invoice_line_alloc ila ON ila.c_invoiceline_id = il.c_invoiceline_id
  LEFT JOIN c_invoice_candidate ic ON ila.C_invoice_candidate_id = ic.C_invoice_candidate_id
```

## Select for Invoice Candidate to Invoice 

```
 SELECT
  ic.c_invoice_candidate_id,
  ic.qtytoinvoice,
  ic.qtyinvoiced,
  i.documentno,
  i.dateinvoiced

FROM c_invoice_candidate ic
  LEFT JOIN c_invoice_line_alloc ila ON ila.C_invoice_candidate_id = ic.C_invoice_candidate_id
  LEFT JOIN c_invoiceline il ON ila.c_invoiceline_id = il.c_invoiceline_id
  LEFT JOIN c_invoice i ON i.c_invoice_id = il.c_invoice_id
WHERE ic.processed = 'Y'



```
