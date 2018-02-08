---
title: Find out if an invoice candidate is invoicable
component: de.metas.invoicecandidate
tags:
  - Support
  - de.metas.invoicecandidate
lang: en
layout: default
sequence: 5
---

## Check the candidate

Check your invoice candidate according to the expecations described in the sql. They all should match.

```
  SELECT
    ic.c_invoice_candidate_id,
    ic.qtyordered              	-- >0
    icr.c_invoice_candidate_id	-- is NULL (=not enqueued in recompute)
    ic.processed,    			-- is N (= not invoiced)
    ic.qtytoinvoice,			-- > 0
    ic.qtytoinvoice_override,	-- NULL or > 0
    ic.netamttoinvoice,			-- > 0
    istoclear, 					-- is N
    iserror, 					-- is  Y
    DateToInvoice, 				-- is not NULL    
    invoicescheduleamtstatus 	-- contains "OK"

  FROM c_invoice_candidate ic
    JOIN ad_org o ON ic.ad_org_id = o.ad_org_id
    LEFT JOIN c_invoice_candidate_recompute icr ON icr.c_invoice_candidate_id = ic.c_invoice_candidate_id
    LEFT JOIN c_invoice_line_alloc ila ON ila.C_invoice_candidate_id = ic.C_invoice_candidate_id
    LEFT JOIN c_invoiceline il ON ila.c_invoiceline_id = il.c_invoiceline_id
    LEFT JOIN c_invoice i ON il.c_invoice_id = i.c_invoice_id

  WHERE true   
    and ic.processed = 'N'        
```

## Check 

### Process Revision

Check the process revision for the invoicing process you started for details. You can see the selection query there.

### Check T_Lock

With the ad_pinstance_id from process revision you can check the t_lock table if the invoice candidate was already enqueued

### Check Async Work Package

Check if an async work package was created and if that is on error or still in progress.


## Possible Solutions 

mark invoice candidate to be recomputed:

```
insert into c_invoice_candidate_recompute
select c_invoice_candidate_id,NULL,'3'
...
```

 
