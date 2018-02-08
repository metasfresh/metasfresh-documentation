---
title: How do I add a window tab and have a view as data source ?
layout: default
tags:  
  - Window
lang: en
---

## Overview

This guide shows you how to configure a tab in a window that uses a view (not table) as data source
In general this is how its done:

1. create view in postgres
1. create ad_table from that in metasfresh using the backend

Please notice that if you want to use a table as record source and not a view it is the other way around.


## Steps

### create the view on postgres

make sure you have the columns:
* ad_client_id,
* ad_org_id,
* created,
* createdby,
* updated
* updatedby

example:
``` 
 CREATE OR REPLACE VIEW yourview AS 
 SELECT 
	r.c_bpartner_id,
    r.datetrx,
    r.documentno,
    r.summary AS description,
    rt.name AS typ,
    r.ad_client_id,
    r.ad_org_id,
    r.created,
    r.createdby,
    r.updated,
    r.updatedby,
    '417'::text AS ad_table_id,
    r.r_request_id AS record_id,
    (((417 * 1000000))::numeric + r.r_request_id) AS x_bpartner_history_id
   FROM (r_request r
     LEFT JOIN r_requesttype rt ON ((rt.r_requesttype_id = r.r_requesttype_id)))
```

### create ad_table in metasfresh

important:
1. you need a unique key column which has the checkbox is "key column"
1. you need to link the tab and the window using a key column

... to be continued

