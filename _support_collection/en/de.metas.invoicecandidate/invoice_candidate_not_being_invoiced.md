---
title: Find out if an invoice candidate is invoiceable
component: de.metas.invoicecandidate
tags:  
  - de.metas.invoicecandidate
lang: en
layout: default
sequence: 5
---

## Check the candidate

Check your invoice candidate according to the expectations described in the SQL. They should all match.

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
With the `ad_pinstance_id` from process revision you can check the `t_lock` table if the invoice candidate was already enqueued.

### Check Async Work Package
Check if an async work package was created and if that is on error or still in progress.


## Possible Solutions
Mark invoice candidate to be recomputed:

```
insert into c_invoice_candidate_recompute
select c_invoice_candidate_id,NULL,'3'
...
```

# Error Messages

## When starting Invoicing from Invoice Candidates

### Has Changes

Cause: Something which is basic to the invoice candidate has changed. Most common is a price change after the candidate was created.

Troubleshoot: Using https://github.com/metasfresh/metasfresh-documentation/issues/223

Sample:

```SQL
select p_msg,* from de_metas_invoicecandidate.c_invoice_candidate_diagnose_haschanges_error_v.
```

```
 1000002: @LineNetAmt@: 0.00->700.00
1000003: @LineNetAmt@: 0.00->2800.00
1000005: @LineNetAmt@: 0.00->-175.00
1000006: @LineNetAmt@: 0.00->-232.75
Update invalid result: Updated 7 invoice candidates, 0 errors
```

Solution: Delete affected invoice candidates via the WebUI. They will be recreated automatically.

Alternative: Delete via SQL but then you need to run the process to recreate the ICs.


## On Async WorkPackages 

### The two augents need to have an equal productId

**Symptom:**
Invoice is not created

**Analyse:**
Error in async workpackage:

> Error: The two augents need to have an equal productId; firstAugent=StockQtyAndUOMQty(productId=ProductId(repoId=2006242), stockQty=5 Stk, uomQty=5 Stk); secondAugent=StockQtyAndUOMQty(productId=ProductId(repoId=2006262), stockQty=5 Stk, uomQty=5 Stk) (AdempiereException)

**Explanation:**
The product was changed in the order after the order was completed but the old product is still in the invoice candidate.

**workaround:**
Delete the invoice candidate. It will be automatically regenerated.
