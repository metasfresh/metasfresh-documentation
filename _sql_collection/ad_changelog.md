---
title: AD_Changelog
layout: default
tag: 
  - datamodel
  - application dictionary
lang: en
---

## SELECT Examples

### Shows a subset of the change log records
```

SELECT
  t.tablename,
  c.columnname,
  cl.updated,
  oldvalue,
  newvalue,
  u.name,
  oldvalue || '=>' || newvalue
FROM ad_changelog cl
  JOIN ad_table t ON cl.ad_table_id = t.ad_table_id
  JOIN ad_column c ON c.ad_column_id = cl.ad_column_id
  JOIN ad_user u ON u.ad_user_id = cl.createdby
WHERE columnname NOT ILIKE '%ID%'
      AND u.name != 'System'
      AND cl.oldvalue != 'NULL'
	  
	```

