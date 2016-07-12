---
layout: default
title: Get your local DB up and running
tags: developers_getting_started
sequence: 40 
summary: how to import the latest metasfresh DB seed into your PostgreSQL database
lang: en
ref: developers_getting_started_db
---

## Notes

* The database dump from the latest metasfresh release is available [here](http://www.metasfresh.com/wp-content/releases/db_seeds/metasfresh_latest.pgdump)
* This guide assumes that you already have installed a postgres server.

## Import the initial dump from command line

To get the database dump into your local database via command line, do as follows, as user `postgres`:

* Create a "Login Role" named `metasfresh`

{% include developers/getting_started_db_create_role_cmdline.md %}

* Create a new, empty database that is also named `metasfresh` and owned by the newly created role:

{% include developers/getting_started_db_create_db_cmdline.md %}

* Load the database dump into the new database:

{% include developers/getting_started_db_load_dump_cmdline.md %}

Note that metasfresh contains more than 1000 tables. Importing the dump might take a while.

## Import the initial dump using pgAdmin

To get the database dump into your local database via pgAdmin, do as follows:

* Create a "Login Role" named `metasfresh`:

![printpreview]({{ site.github.url }}/images/developers/getting_started_db_pgAdmin_add_role.png)

For development purposes, you can create the role with the role privileges `LOGIN`, `SUPERUSER`, `INHERIT`, `CREATEDB` and `NOCREATEROLE`

* Create a new, empty database that is also named `metasfresh` and owned by the newly created role. You can open the dialog by right-clicking on the database connection:

![printpreview]({{ site.github.url }}/images/developers/getting_started_db_pgAdmin_add_database.png)

Make sure that the new database is owned by the metasfresh role.

* Load the database dump into the new database by rightclicking on it and selecting "Restore...", then follow the dialog.
