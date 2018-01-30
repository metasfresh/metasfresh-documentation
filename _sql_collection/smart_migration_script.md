---
title: Create smart migration scripts
layout: default
tag: 
  - Tips
  
lang: en
---

## Overview

In order to make a migration script smart in terms of respecting data which is already in the database, you can use this construct to do that:
Add an if condition around your change and check if it can be executed without problems.

```
DO $$
BEGIN
	IF NOT EXISTS( <select statement> ) THEN
		<migration statement like update, insert, create>...
	END IF;
END;
$$;	

```


### example

In this example you can see how the sql makes sure the year 2018 is not existing to prevent the migration script from hitting the unique constraint on fiscalyear (there can be only one year "2018" per calendar)

https://github.com/metasfresh/metasfresh/blob/9cf986b4c7a138dfca96a42e2d560b923ea33f9c/de.metas.adempiere.adempiere/migration/src/main/sql/postgresql/system/10-de.metas.adempiere/5481470_cli_gh3272_add_year_2018_and_periods.sql

