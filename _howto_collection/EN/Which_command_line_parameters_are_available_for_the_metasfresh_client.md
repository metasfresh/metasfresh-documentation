---
title: Which command line parameters are available for the metasfresh client?
layout: default

<!---- tags:
  - Systemadministration----!>

lang: en
---

## RUN_metasfresh.exe

At present the EXE file doesn't support any parameters. If you would like to use parameters use the [Startup script](How_to_use_the_startup_script) for Windows or Linux.


## RUN_metasfresh.bat/.sh

Whenever the client is started using the [startup_script](How_to_use_the_startup_script) you can use the script to pass the following parameters:


## Parameters

**Language of the Application -Dorg.adempiere.client.lang**

Activates a fixes language for the application and disables the field "languages" during login.

You can find out possible values as follows: [SQL Abfrage](List_Languages)

Example for German language

```
 -Dorg.adempiere.client.lang=\"de_DE\"
```

**Version checking -Dde.metas.clientcheck.Enabled**

When this value is set to "false" the client doesn't check if it fits the corresponding server version.

```
 -Dde.metas.clientcheck.Enabled=false
```
