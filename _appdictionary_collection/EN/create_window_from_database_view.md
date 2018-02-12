---
title: Create Window based on view
layout: default
tags:  
  - Window
lang: en
---

## Overview

Normally you would base a window on a table so you can alter the data displayed in it.
In this guide you see how the window feature is used to retrieve data that you then filter, view and export.

## View

1. create a database view showing the data you want to see
1. add required default columns

  ```
  1000000 as ad_client_id, --id of your client. usually 1000000
  1000000 as ad_org_id, --id of your organisation. usually 1000000
  now() as created, --or a fixed timestamp
  100 as createdby, --or any other ad_user_id
  now() as updated, --or a fixed timestamp
  100 as updatedby, --or any other ad_user_id
  'Y' as isactive,
  ```
1. add unique id to each row

  `SELECT row_number() OVER () AS <viewname>+"_id" --or any other id`

  for example: `SELECT row_number() OVER () AS rv_invoicingforecast_id`

  > Hint: Don't use postgres sequences. They can spill over and might not work.

## Application Dictionary Configuration

1. Logon the Java Client with role System Administrator
1. Create a new Application Dictionary table ("AD Table") in the Window "Table and Columns"
  1. tick "view" to indicate its not a real table
  1. name the AD Table exactly as your view
  1. run the process "Create columns from database" to create the AD columns
  1. the AD column holding your unique id needs to be named `<viewname>_ID`
  > Hint: If you dont follow the convention your view will not work

  1. also tick "key column" on that AD column holding your unique id
  1. tick the AD  columns as search columns that you want to use for filtering the data later
1. Create a AD Window
  1. link it to the AD Table you created
  1. run the process "create fields from columns"
  1. run the process "create default UI elements"
1. create a menu node for your window
1. add the window to your menu tree

## Usage

1. run the process "update role access" to grant your automatic roles access to the new window
1. log on with admin and test it
1. open the window
1. filter + select records and then use the process "download selected" to export them in xls format
