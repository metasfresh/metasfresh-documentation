---
layout: default
title: Solve SQL Error on Server Update by manually adding migration script
tags:
  - Support
lang: en
---

## Error
```
Exception in thread "main" de.metas.migration.exception.ScriptExecutionException: Error: Script execution failed
...
psql:/opt/metasfresh/dist/sql/datamigration/0080_partner_group.sql:1: ERROR:  duplicate key value violates unique constraint "c_bp_group_pkey"
       DETAIL:  Key (c_bp_group_id)=(540005) already exists.
...
```

## Option 1 - Script was already manually applied

In case you applied the script already manually and added it to the release afterwards, you need to manually add the script to the ad_migrationscript table.
Here is an example how to do it:

[SQL for inserting ad_migrationscript](sql/ad_migrationscript)
