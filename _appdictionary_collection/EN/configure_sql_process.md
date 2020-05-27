---
title: Provide the result of an SQL as process to the user
layout: default
tags:  
  - Process
lang: en
sequence:
ref: configure_sql_process
---

## Overview
This guide shows you how to provide the resultset of an SQL to the user as Excel export by running a process.

## Origin
Was developed by this issue: https://github.com/metasfresh/metasfresh/issues/4633.

## In General
* Classname (will be automatically set and made read-only): `de.metas.impexp.excel.process.ExportToExcelProcess`

> In version 5.91 is a bug which prevents the class from being set automatically.<br> **Workaround:** `update ad_process set classname='de.metas.impexp.excel.process.ExportToExcelProcess'
where ad_process_id= <your ad_process id>`

* Your select, e.g.,
```sql
select
@C_Order_ID/-1@ as C_Order_ID
, @AD_User_ID/-1@ as AD_User_ID
, @C_BP_Group_ID/-1@ as C_BP_Group_ID
, bp.*
from C_BPartner bp
```

The context variables used in SQL will be resolved in following order:
* process parameter e.g. `where c_order_id = @C_Order_ID/-1@`
* current selected record's field. e.g. `where <column> in (@$WEBUI_ViewSelectedIds/0@)`
* global context e.g. `@#AD_User_ID@`



## Sample

![image](https://user-images.githubusercontent.com/1244701/46567456-d181d380-c93b-11e8-82b4-abe2b11f57f5.png)

![image](https://user-images.githubusercontent.com/1244701/46567460-dfcfef80-c93b-11e8-889a-918242ac23bc.png)

![image](https://user-images.githubusercontent.com/1244701/46567510-be233800-c93c-11e8-9fde-441fcf688332.png)

![image](https://user-images.githubusercontent.com/1244701/46567520-d7c47f80-c93c-11e8-9b7c-2e38c435d963.png)

![image](https://user-images.githubusercontent.com/1244701/46567529-e743c880-c93c-11e8-9ebf-28483ddea93c.png)

![image](https://user-images.githubusercontent.com/1244701/46567534-04789700-c93d-11e8-8386-29a0a214a25d.png)

![image](https://user-images.githubusercontent.com/1244701/46567536-1ce8b180-c93d-11e8-88c8-ea8ed998a7aa.png)
