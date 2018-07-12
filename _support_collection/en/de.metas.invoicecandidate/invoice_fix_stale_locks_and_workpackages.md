---
title: Recover from stale locks and workpackages on invoice candidates
component: de.metas.invoicecandidate
tags:
  - Support
  - de.metas.invoicecandidate
lang: en
layout: default
sequence: 5
---

This situation might happen if e.g.
* the legacy swing client is killed while it
created async work packages for invoicing. In that case, the workpackages have
`IsReadyForProcessing='N'`.
* processing an invoicing-workpackage failed, but for some reason, the lock was not removed.
In that case, the workpackages have
`IsError='Y'`

The following SQL leans on the view de.metas.async".c_queue_overview_v to
retrieve the `C_Invoice_Candidate_ID`s and `C_Queue_WorkPackage_ID`s in question.
The important thing is to perform all three steps, no matter how you obtained the
respective IDs

```sql
-- note: adapt or drop the WHERE-part with "and IssueSummary='HasChanges'" as required
--

-- Flag the ICs of the affected workpackages as invalid ("zu Akt.")
INSERT INTO C_Invoice_Candidate_Recompute
SELECT QE_Record_ID
FROM "de.metas.async".c_queue_overview_v
WHERE IsError='Y'
  AND Processed='N'  
  AND IssueSummary='HasChanges'
  AND qe_table_name='C_Invoice_Candidate'
;

-- Delete all Locks of the ICs are referenced by affected workpackages
DELETE --select *
FROM T_Lock
WHERE
    true
    AND AD_Table_ID=get_table_id('C_Invoice_Candidate')
    AND Record_ID IN (
        select QE_Record_ID from "de.metas.async".c_queue_overview_v
        where IsError='Y'
          AND Processed='N'
          AND IssueSummary='HasChanges')
;

-- Flag the workpackages as processed.
-- Without this, these old workpackages will interfere with the new ones that your
-- user will want to create for the same invoice candidates
UPDATE C_Queue_WorkPackage
SET Processed='Y'
WHERE C_Queue_WorkPackage_ID IN (
    select C_Queue_WorkPackage_ID from "de.metas.async".c_queue_overview_v where IsError='Y' AND Processed='N' and IssueSummary='HasChanges'
);
```
