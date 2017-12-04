---
layout: default
title: Get your local DB up and running
tags: developers_getting_started
sequence: 40
summary: how to import the latest metasfresh DB seed into your PostgreSQL database
lang: en
ref: developers_getting_started_db
---

## Option one:<br/>Import the dump into your local PostgreSQL instalation

### Notes

* The database dump from the latest metasfresh release is available [here](http://www.metasfresh.com/wp-content/releases/db_seeds/metasfresh_latest.pgdump).
* This guide assumes that you already have installed a PostgreSQL server.

### Import the initial dump from command line

To get the database dump into your local database via command line, do as follows, as user `postgres`:

* Create a "Login Role" named `metasfresh`

{% include developers/getting_started_db_create_role_cmdline.md %}

For convenience and since this is just your local development DB, you might want to also specify `--superuser`

* Create a new, empty database that is also named `metasfresh` and owned by the newly created role:

{% include developers/getting_started_db_create_db_cmdline.md %}

* Load the database dump into the new database:

{% include developers/getting_started_db_load_dump_cmdline.md %}

Note that metasfresh contains more than 1000 tables. Importing the dump might take a while.

### ...or import the initial dump using pgAdmin

To get the database dump into your local database via pgAdmin, do as follows:

* Create a "Login Role" named `metasfresh`:

![printpreview]({{ site.github.url }}/images/developers/getting_started_db_pgAdmin_add_role.png)

For development purposes, you can create the role with the role privileges `LOGIN`, `SUPERUSER`, `INHERIT`, `CREATEDB` and `NOCREATEROLE`

* Create a new, empty database that is also named `metasfresh` and owned by the newly created role. You can open the dialog by right-clicking on the database connection:

![printpreview]({{ site.github.url }}/images/developers/getting_started_db_pgAdmin_add_database.png)

Make sure that the new database is owned by the metasfresh role.

* Load the database dump into the new database by rightclicking on it and selecting "Restore...", then follow the dialog.

## Option two:<br/>Run the DB in docker

If you have a docker host running locally, you can pull and run the latest metasfresh database in it.

To obtain a docker host, you can for example use our vagrant file.

See https://github.com/metasfresh/metasfresh-dev/tree/master/vagrant to get started.

In order to run the PostgreSQL server inside your local virtual machine and access it,
you can edit the vagrant file and add a "forwarded port mapping".
To do this, find the respective section in the vagrant file and add something like

```
config.vm.network "forwarded_port", id: "metasfresh-db", guest: 5432 , host: 5432 , host_ip: "127.0.0.1"
```

Once your started your local virtual machine this way and `ssh`ed into it,
you can run
```bash
sudo docker run -p 5432:5432 -t metasfresh/metasfresh-db
```

To get our latest metasfresh-db and start it up.

## Update the database from the `master` branch

This section describes how to update your local (developer) DB with the latest migration scripts that were just build from the master branch

You can get those migration script by downloading them as a `tar.gz` file from this URL

[https://repo.metasfresh.com/service/local/artifact/maven/redirect?g=de.metas.dist&a=metasfresh-dist-dist&v=LATEST&r=mvn-master&p=tar.gz&c=sql-only](https://repo.metasfresh.com/service/local/artifact/maven/redirect?g=de.metas.dist&a=metasfresh-dist-dist&v=LATEST&r=mvn-master&p=tar.gz&c=sql-only)

Note: under linux, you might want to run
```bash
wget --trust-server-names "https://repo.metasfresh.com/service/local/artifact/maven/redirect?g=de.metas.dist&a=de.metas.endcustomer.mf15.dist&v=LATEST&r=mvn-master&p=tar.gz&c=sql-only"
```

That tar.gz contains
* the SQL migration scripts we acumulated over the years
* the jar file `de.metas.migration.cli.jar` which applies those scripts that were not yet applied against your metasfresh database
* a script named `sql_remote.sh` which is just a thin wrapper around the actual tool which is in the jar

What you still need to provide is the following:
* java, so the jar file can be executed
* a settings file which might look like this.

```bash
METASFRESH_DB_SERVER=localhost
METASFRESH_DB_PORT=5432
METASFRESH_DB_NAME=metasfresh
METASFRESH_DB_USER=metasfresh
METASFRESH_DB_PASSWORD=
```
The values written here in this documentation are the defaults which the tool assumes if the respective value is missing.

By default, the tool will assume the settings file to be `~/local_settings.properties` (i.e. usually `/home/metasfresh/local_settings.properties`).
If you need to specify a different settings file, please run `sql_remote.sh -h` and check out the help message (`-d` and `-s` options).

Note: it might generally be a good idea to first run `sql_remote.sh -h` and take a look at the help message.

When the tool runs, it scans a directory for SQL files and applies those files that were not yet recorded in the `AD_MigrationScript` table of the metasfresh database.

## Prepare the DB to contribute SQL migration scripts

When you want to contribute SQL migration scripts, you need to obtain an account on our central ID server `idserver.metas.de`
Then, with those credentials, you can update your developer database as follows

```sql
UPDATE AD_SysConfig SET Value='metas' WHERE AD_SysConfig_ID=50005;  --"PROJECT_ID_PROJECT"
UPDATE AD_SysConfig SET Value='<your-login>' WHERE AD_SysConfig_ID=50006;  --"PROJECT_ID_USER"
UPDATE AD_SysConfig SET Value='<your-password>' WHERE AD_SysConfig_ID=50007; --"PROJECT_ID_PASSWORD"
UPDATE AD_SysConfig SET Value='http://idserver.metas.de/cgi-bin/metas_central_id/get_ID' WHERE AD_SysConfig_ID=50004; --"PROJECT_ID_WEBSITE"
UPDATE AD_SysConfig SET Value='Y' WHERE AD_SysConfig_ID=50010; --"PROJECT_ID_USE_CENTRALIZED_ID"
UPDATE AD_SysConfig SET Value='N' WHERE AD_SysConfig_ID=50009; --"DICTIONARY_ID_USE_CENTRALIZED_ID"
UPDATE AD_SysConfig SET Value='Y' WHERE AD_SysConfig_ID=50015; --"SYSTEM_INSERT_CHANGELOG"
UPDATE AD_SysConfig SET Value='' WHERE AD_SysConfig_ID=50008; --"PROJECT_ID_COMMENTS"
```

Then, when you insertfor example a new record into `AD_Column`, the system will obtain a unique `AD_Column_ID` from `idserver.metas.de` to make sure that the ID does not collide with another ID from another local DB.

## Further reading and doing:

* [this forum thread](https://forum.metasfresh.org/t/how-to-update-database-in-local-dev-env/428) is about the same issue
* The github issue [metasfresh/metasfresh#690](https://github.com/metasfresh/metasfresh/issues/690) is about applying the scripts directly out of your local Eclipse. [This comment](https://github.com/metasfresh/metasfresh/issues/690#issuecomment-269940848) from issue 690 outlines what aparently needs to be done to achieve this.
