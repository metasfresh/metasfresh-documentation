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

[How to add migration script to ad_migrationscript table without executing it](/sql_collection/ad_migrationscript)


## Example when you are using docker

#### analyze

Problem: webui is not reachable

- check if all containers are up
`docker ps | grep instance`
- you notice that instance_app_1 keeps getting restarted
- check docker logs 
`docker logs instance_app_1`
- you see an exception like described above => then the case is verified
- stop docker compose
`docker-compose stop`
- start db instance
`docker start instance_db_1`
- exec psql
`docker exec -it -u postgres instance_db_1 psql -d metasfresh`
- [create add_migrationscript function](/sql_collection/ad_migrationscript)
- add script to db via
`select add_migrationscript('10-de.metas.adempiere/5480915_sys_gh3233_RoleAccess_indexes.sql');`
- restart 
`docker compose up -d`
