---
title: AD_Migrationscript helper functions
layout: default
tag: 
  - datamodel
  - application dictionary
lang: en
---


# Insert a manual entry into AD_Migrationscript table 

```SQL
select migrationscript_ignore('<foldername>/<filename.sql>');
```

This inserts the given script into the AD_MigrationScript table, so it will be ignored on future rollouts.

Example:

```SQL
select migrationscript_ignore('configuration/changingpartnerwindow.sql');
```

# Create additional entries with different project name

```SQL
select migrationscript_ignoreNewProjectName('oldProjectName', 'newProjectName');
```

For all AD_MigrationScript records with the given oldProjectName, 
this function inserts additional AD_MigrationScript records that are similar, but have newProjectName in their name and projectname columns.

Example:

```SQL
select migrationscript_ignoreNewProjectName('projectnameWithTypo', 'fixedName')
```