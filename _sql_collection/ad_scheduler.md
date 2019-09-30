---
title: AD_SCHEDULER 
layout: default
tag: 
  - Data Model
  - Application Dictionary
lang: en
---

## SELECT Examples

### Shows you active schedulers including the log results of the last times they ran
```

SELECT
  name,
  sched.cronpattern,
  datenextrun,
  datelastrun,
  status,
  sched.isactive,
  schedl.summary

FROM ad_scheduler sched
JOIN ad_schedulerlog schedl on sched.ad_scheduler_id =schedl.ad_scheduler_id
WHERE true
 AND sched.isactive='Y'
order by sched.name, schedl.created
```

