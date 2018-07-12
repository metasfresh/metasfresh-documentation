---
title: C_Doc_Outbound_Log (Outbound Documents, Invoice, Printing Queue)
layout: default
tag: 
   - datamodel
   - documents
lang: en
---

## SELECT Example of invoice including doc outbound and printing queue

```
SELECT DISTINCT
  i.documentno as "Invoice_No",
  pq.C_Printing_Queue_id as "Printing Queue ID",
  pq.processed as "printed",
  c_doc_outbound_log_id as "Doc Outbound ID"
FROM c_doc_outbound_log dol
  LEFT JOIN c_invoice i ON dol.ad_table_id = 318 AND dol.record_id = i.c_invoice_id
  LEFT JOIN AD_Archive ar ON ar.AD_Table_ID = 318 AND ar.record_id = i.c_invoice_id
  LEFT JOIN C_Printing_Queue pq ON ar.AD_Archive_ID = pq.AD_Archive_ID
  JOIN ad_org o ON i.ad_org_id = o.ad_org_id
WHERE TRUE
      AND dol.created >= '2018-01-05'


  ;
```
