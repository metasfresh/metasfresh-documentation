---
title: AD_Table and AD_Column
layout: default
tag: 
  - Data Model
  - Application Dictionary
lang: en
---

## SELECT Examples

### Table and Column Abstraction in metasfresh

```
SELECT
  t.tablename,
  t.name,
  c.columnname  
FROM ad_table t
  JOIN ad_column c ON c.ad_table_id = t.ad_table_id
WHERE t.tablename ILIKE 'm_shipmentschedule'

```

