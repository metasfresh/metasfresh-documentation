---
title: Create window based on view
layout: default
tags:  
  - Window
lang: en
---

## Overview
Normally you would base a window on a table so you can alter the data displayed in it.
In this guide you see how the window feature is used to retrieve data that you then filter, view and export.

## View
1. Create a database view showing the data you want to see.
1. Add required default columns:

  ```
  1000000 as ad_client_id, --id of your client. usually 1000000
  1000000 as ad_org_id, --id of your organisation. usually 1000000
  now() as created, --or a fixed timestamp
  100 as createdby, --or any other ad_user_id
  now() as updated, --or a fixed timestamp
  100 as updatedby, --or any other ad_user_id
  'Y' as isactive,
  ```

1. Add more columns.
 >**Note:** If you want to add more columns like a partner name, you want to use the name of the partner ID instead and let metasfresh resolve to a value and name later in the window:

  ```
	  c_bpartner_id, --instead of partner_name, etc.
  ```

1. Add unique ID to each row:

  `SELECT row_number() OVER () AS <viewname>+"_id" --or any other id`

  For example: `SELECT row_number() OVER () AS rv_invoicingforecast_id`

  > **Note:** Do not use Postgres sequences! They can spill over and might not work.

## Application Dictionary Configuration
1. Log on to the Java Client with role "System Administrator".
1. Create a new Application Dictionary table ("AD Table") in the window "Table and Columns".
  1. Tick "view" to indicate it is not a real table.
  1. Name the AD Table exactly as your view.
  1. Run the process "Create columns from database" to create the AD columns.
  1. The AD column holding your unique ID needs to be named `<viewname>_ID`.
  > **Note:** If you do not follow the convention your view will not work.

  1. Also tick "key column" on that AD column holding your unique ID.
  1. Tick the AD columns as search columns that you want to use for filtering the data later on.
1. Create an AD Window.
  1. Link it to the AD Table you created.
  1. Run the process "create fields from columns".
  1. Run the process "create default UI elements".
1. Create a menu node for your window.
1. Add the window to your menu tree.

## Usage
1. Run the process "update role access" to grant your automatic roles access to the new window.
1. Log on with admin and test it.
1. Open the window.
1. Filter + select records and then use the process "download selected" to export them in XLS format.
