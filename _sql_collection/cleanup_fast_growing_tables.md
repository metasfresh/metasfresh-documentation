---
title: Cleanup fast growing tables on big systems
layout: default
tag: 
  - Maintenance
  - Danger Zone  
lang: en
---

## Warning!

Only use this SQLs if you exactly know what you are doing.

## Find out which tables grew big

https://wiki.postgresql.org/wiki/Disk_Usage

```SQL
SELECT nspname || '.' || relname AS "relation",
    pg_size_pretty(pg_relation_size(C.oid)) AS "size"
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname NOT IN ('pg_catalog', 'information_schema')
  ORDER BY pg_relation_size(C.oid) DESC
  LIMIT 20;

```



## Cleanup data from time to time

After a few years of running metasfresh on heavy load systems with dozens of users you might want to reduce the size of some table constellations.
Data in those tables is not needed to run metasfresh once its processed but if you delete while its need you crash the system.
Some data might also be very interesting for troubleshooting.

### all printing data except results like PDF 

Only apply if no pending print jobs are existing and you dont need past data.

```SQL
truncate c_print_package,c_print_job_instructions,c_print_job_line,c_print_packageinfo,c_printpackagedata,c_print_job_detail;
```

### async framework workpackage data

Only apply if no pending async jobs are existing and you dont need past data.

```SQL
truncate c_queue_workpackage, c_queue_block, c_queue_element,c_queue_workpackage_log,c_queue_workpackage_param;
```

### Temp Tables which are mostly empty anyway

```SQL
truncate t_lock,t_webui_viewselection,t_webui_viewselectionline
```

### Material Dispo Eventlog

```SQL
truncate ad_eventlog,ad_eventlog_entry;
```

### Free Disk Space from AD Changelog 

Remove Data from AD_Changelog of a certain table and free disk space:

`delete from ad_changelog where ad_table_id = 540425;`
`vacuum full ad_changelog;`


### Misc Tables

```SQL
truncate ad_issue,ad_processablepo,c_advcommissionfactcand, c_advcommissionfact, c_incidentlinefact,c_advcomfact_salesrepfact
```

optional constraints that can be dropped:

```SQL
alter table msv3_bestellung_transaction
drop constraint adissue_msv3bestellungtransaction
;
alter table msv3_verfuegbarkeit_transaction
    drop constraint adissue_msv3verfuegbarkeittransaction;

-- needed for ad_issue
alter table c_purchasecandidate_alloc 
drop constraint adissue_cpurchasecandidatealloc;
```


