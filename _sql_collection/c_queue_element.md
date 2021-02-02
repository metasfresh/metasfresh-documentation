---
title: C_Queue_Element 
layout: default
tag: 
  - Data Model
  - System Data
lang: en
---

## SELECT Examples

### Simple

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

### Performance of Invoicing per Day

```
select tag,avg(durationperline)::integer,
  (sum(durationperline*count_qe)/sum(count_qe))::integer as weighted

from (

  SELECT
    qw.created :: date as tag,
    qe.c_queue_workpackage_id,
    qw.lastdurationmillis,
    count(c_queue_element_id) count_qe,
    (qw.lastdurationmillis / count(c_queue_element_id) ) :: integer as durationperline

  FROM c_queue_element qe
    JOIN c_queue_workpackage qw ON qe.c_queue_workpackage_id = qw.c_queue_workpackage_id

    where true
          and qw.processed = 'Y'
          and qw.iserror = 'N'
          and qe.ad_table_id=540270 --only invoice candidates

  group by
    qw.created :: date,
    qe.c_queue_workpackage_id,
    qw.lastdurationmillis

  ORDER BY qw.created :: date desc  

) data
group by tag
order by tag desc

```
