---
title: AD_Migrationscript
layout: default
tag: 
  - datamodel
  - application dictionary
lang: en
---
## Overview

Tables contains all migration scripts that have been applied to the db so on an update only new scripts are applied.



## Insert a manual entry into  AD_Migrationscript table 

```
  INSERT INTO public.ad_migrationscript (ad_client_id, ad_migrationscript_id, ad_org_id, created, createdby, description, developername, isactive, name, projectname, reference, releaseno, scriptroll, status, url, updated, updatedby, isapply, filename, script)
  VALUES
    (0, nextval('ad_migrationscript_seq') , 0, now(), 100, 'Applied manually',
        NULL, 'Y', 'datamigration->0080_partner_group.sql',
        'datamigration', NULL, '1', NULL, 'CO', NULL, now(), 100, 'N',
     '0080_partner_group.sql', NULL);
	  
	```

