---
layout: default
title: Get your local DB up and running
tags: developers_getting_started
sequence: 40 
summary: how to import the latest metasfresh DB seed into your PostgreSQL database
lang: en
ref: developers_getting_started_db
---

# Import the initial dump

The database dump from the latest metasfresh release is available [here](http://www.metasfresh.com/wp-content/releases/db_seeds/metasfresh_latest.pgdump)

To get it into your local database, do as follows:

* Create a "Login Role" named `metasfresh`

{% include developers/getting_started_db_create_role_cmdline.md %}

* Create a new, empty database that is also named `metasfresh` and owned by the newly created role:

{% include developers/getting_started_db_create_db_cmdline.md %}

* Load the database dump into the new database:

{% include developers/getting_started_db_load_dump_cmdline.md %}

Note that metasfresh contains more than 1000 tables. Importing the dump might take a while.