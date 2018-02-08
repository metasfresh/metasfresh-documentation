---
title: C_Queue_Element 
layout: default
tag: 
  - datamodel
  - systemdata
lang: en
---

## SELECT Examples

Shows you the status of a work package of queue elements filtered on table and record id

```
SELECT
qw.created,
qw.c_queue_workpackage_id,
qw.processed,
iserror,
errormsg
FROM c_queue_element qe
JOIN c_queue_workpackage qw ON qe.c_queue_workpackage_id = qw.c_queue_workpackage_id
JOIN ad_table t ON t.ad_table_id = qe.ad_table_id
AND qe.record_id IN (<id>)
AND t.tablename = 'C_Invoice_Candidate'
ORDER BY qw.c_queue_workpackage_id
```

