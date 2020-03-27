---
title: AD_Changelog
layout: default
tag: 
  - Data Model
  - Application Dictionary
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

## INSERT Examples

```SQL

INSERT INTO public.ad_changelog (ad_changelog_id, ad_session_id, ad_table_id, ad_column_id, ad_client_id, ad_org_id,
                                 isactive, created, createdby, updated, updatedby, record_id, oldvalue, newvalue, undo,
                                 redo, iscustomization, trxname, description, eventchangelog, ad_pinstance_id)
select nextval('ad_changelog_seq'),
       1000000,
       get_table_id('c_bp_bankaccount'),
       (select ad_column_id from ad_column where ad_table_id = get_table_id('c_bp_bankaccount') and columnname ilike 'accountno'),
       1000000,
       1000000,
       'Y',
       now(),
       2200950,
       now(),
       2200950,
       c_bp_bankaccount_id,
       accountno,
       new_accountno,
       null,
       null,
       'N',
       'gh553',
       'Info why it was changed',
       'U',
       null
from  (select * from fix.<your table>) data
;
```
