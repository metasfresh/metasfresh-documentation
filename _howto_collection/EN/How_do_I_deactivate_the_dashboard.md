---
title: How do I deactivate the Elasticsearch based KPI dashboard ?
layout: default
tags:
  - System Administration
  - Installation
  - Elasticsearch
  - Setup
lang: en
---

## Deactivate the dashboard itself

```sql
UPDATE WEBUI_Dashboard SET IsActive='N' where WEBUI_Dashboard_ID=540000;
```


## Deactivate the system's attempts to update the search index

Make sure that on startup the system does not register model validators that aim at updating the search index

```sql
UPDATE AD_SysConfig SET Value='N' WHERE Name='de.metas.elasticsearch.Enabled';
```

(then restart the stack)

If there are already existing workpackages and you want to make sure that
the system does not attempt to process them:

```sql
UPDATE C_Queue_WorkPackage SET Processed='Y'
WHERE C_Queue_WorkPackage_ID IN (
    select C_queue_WorkPackage_ID from "de.metas.async".c_queue_overview_v v
    where v.Processed='N'
      and (
          v.ClassName ilike '%AsyncAddToIndexProcessor'
          or v.ClassName ilike '%AsyncRemoveFromIndexProcessor')
);
```
