---
layout: default
title: Solve SQL Error on Server Update by inserting into AD_MigrationScript
tags:
  - Support
lang: en
---

## Error
```
Exception in thread "main" de.metas.migration.exception.ScriptExecutionException: Error: Script execution failed
...
 psql:/opt/metasfresh/dist/sql/10-de.metas.adempiere/5480915_sys_gh3233_RoleAccess_indexes.sql:9: ERROR:  could not create unique index "ad_window_access_uq"
        DETAIL:  Key (ad_role_id, ad_window_id)=(540026, 540165) is duplicated.
```

## Important Note
If your version is below 5.78, please take a look [here](/support_collection/en/migrationscript_helper_functions) to learn how to get the described helper DB-functions.

## Option 1 - Script was already manually applied

In case you already manually applied the script and added it to the release afterwards, you need to manually add the script to the ad_migrationscript table.
Here is an example of how to do it:

## Example when you are using docker

#### analyze

Problem: WebUI is not reachable

- Check if all containers are up.

   `docker ps | grep instance`

- You notice that instance_app_1 keeps getting restarted.

- Check docker logs.

  `docker logs instance_app_1`

- You see an exception as the one described above => then the case is verified.

- Stop docker compose.

  `docker-compose stop`

- Start db instance.

  `docker start instance_db_1`

- exec psql

  `docker exec -it -u postgres instance_db_1 psql -d metasfresh`

- Add script to db via

  `select migrationscript_ignore('10-de.metas.adempiere/5480915_sys_gh3233_RoleAccess_indexes.sql');`

- Restart.

  `docker compose up -d`

## Option 2 - One or more scripts were applied and then moved to a different folder

In this case, you have a record in `AD_MigrationScript` but the record's SQL file has the wrong folder (also called "project name" in the context of `AD_MigrationScript`).

To fix this, you can follow the example from option 1, but instead of using `migrationscript_ignore`,
invoke
`select migrationscript_ignoreNewProjectName('10-de.metas.adempire_with_typo', '10-de.metas.adempiere');`
