---
title: I_Request
layout: default
tag: 
   - datamigration
lang: en
---

## Overview

Select Request Records from a migration table into the import table I_Flatrate_Term.
You can also use the Text File Loader of the Java Client but this way is better if you deal with massive data (100K+ records).

## Example


```

INSERT INTO public.i_request (ad_client_id, ad_org_id, created, createdby, datetrx, i_errormsg, i_isimported, i_request_id, isactive, processed, r_status_id, result, status, summary, updated, updatedby,
                              value, c_bpartner_id, requesttype, r_requesttype_id, r_request_id, datenextaction, documentno)
  SELECT
    1000000,
    1000000,
    now(),
    100,
    erfassungsdatum :: TIMESTAMP,
    NULL,
    'N',
    nextval('i_request_seq'),
    'Y',
    'N',
    1000000,
    NULL,
    NULL,
    details,
    now(),
    100,
    'G0001',
    NULL,
    vorgangsartneu,
    NULL,
    NULL,
    nachfassdatum :: TIMESTAMP,
    NULL
  FROM migration_data.<yourtablename> 
  
```
