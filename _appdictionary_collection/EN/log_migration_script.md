---
title: Activate logging migration script for changes
layout: default
tags:  
  - General
lang: en
---

## Overview

This guide shows you how to activate migration script logging.

**Important:** you need to have an id server configured for this to be working! If no ID server is configured in System Config then you will not see the checkbox.

## Steps

1. login to the java backend with Role "System Administrator"
1. go to settings
1. make sure "Log migration script" is ticked
1. make sure "Cache Windows" is NOT ticked ![](assets/log_migration_script-fe6ee.png)
1. open window "System Config"
1. search for the name DICTIONARY_ID_COMMENTS
1. put in the field "value" the label you want to log together with your changes later in the migration script. e.g. "Github Issue 123"
1. Change something like for example the name of a window
1. go back to the settings
1. hover over the "logged migration scripts" checkbox to see the path where the scripts are stored. should be something like `<your metasfresh client folder>/migration_scripts`
1. go to the path and open the script folder
1. you see your change in the form of a sql statement together with your custom label e.g. "Github issue 123"

```
-- 2018-01-19T16:51:23.062
-- Github Issue 123
UPDATE AD_Window SET Name='Auftrag test',Updated=TO_TIMESTAMP('2018-01-19 16:51:23','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Window_ID=143
;
```
