---
title: C_Queue_Workpackage 
layout: default
tag: 
  - datamodel
lang: en
---

## SELECT Examples

Counts the number of unprocessed packages per queue processor

```
select  qp.name,count(*) 
from c_queue_workpackage  qw
join c_queue_block qb on qb.c_queue_block_id = qw.c_queue_block_id 
join c_queue_processor qp on qp.c_queue_processor_id = qb.c_queue_packageprocessor_id 
where qw.processed = 'N' 
group by qp.name


## UPDATE Examples

set unprocessed workpackes of queue processor "M_Storage_Add" to processed

```
update c_queue_workpackage 
set processed='Y', iserror ='Y' from (
select qp.name,c_queue_workpackage_id
from c_queue_workpackage  qw
join c_queue_block qb on qb.c_queue_block_id = qw.c_queue_block_id 
join c_queue_processor qp on qp.c_queue_processor_id = qb.c_queue_packageprocessor_id 
where qw.processed = 'N' and qp.name = 'M_Storage_Add'
) data
where c_queue_workpackage.c_queue_workpackage_id = data.c_queue_workpackage_id 


```

