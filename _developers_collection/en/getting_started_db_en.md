---
layout: default
title: Get your local DB up and running
tags: developers_getting_started
sequence: 40 
summary: how to import the latest metasfresh DB seed into your PostgreSQL database
---

# Import the initial dump

The database dump from the latest metasfresh release is available [here](http://www.metasfresh.com/wp-content/releases/db_seeds/metasfresh_latest.pgdump)

To get it into your local database, do as follows:

* Create a "Login Role" named `metasfresh`
```
CREATE ROLE metasfresh LOGIN
  ENCRYPTED PASSWORD 'metasfresh'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
```
* Create a new, empty database that is also named `metasfresh` and owned by the newly created role:
```
createdb metasfresh -O metasfresh
```
* Load the database dump into the new database:
```
pg_restore -Fc -j 2 -d metasfresh latest.pgdump
```

Note that metasfresh contains more than 1000 tables. Importing the dump might take a while.