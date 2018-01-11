---
title: C_Dunning (Dunning Candidates, Level, Documents, Print Items)
layout: default
tag: 
   - datamodel
   - documents
lang: en
---

## SELECT Example of dunning docs per partner including print items

```
  SELECT
    bp.value as partnernumber,
    dl.name as dunninglevel,
    pq.processed as printed,
    pq.created
	
  FROM
    c_bpartner bp
    LEFT JOIN c_dunning_candidate dc ON bp.c_bpartner_id = dc.c_bpartner_id
    LEFT JOIN c_dunningdoc_line_source dls ON dls.c_dunning_candidate_id = dc.c_dunning_candidate_id
    LEFT JOIN c_dunningdoc_line ddl ON ddl.c_dunningdoc_line_id = dls.c_dunningdoc_line_id
    LEFT JOIN c_dunningdoc dd ON dd.c_dunningdoc_id = ddl.c_dunningdoc_id
    LEFT JOIN c_dunninglevel dl ON dl.c_dunninglevel_id = dd.c_dunninglevel_id
    LEFT JOIN AD_Archive ar ON dd.c_dunningdoc_id = ar.Record_ID AND ar.AD_Table_ID = 540401
    LEFT JOIN C_Printing_Queue pq ON ar.AD_Archive_ID = pq.AD_Archive_ID

  WHERE TRUE
        
        AND dl.name = 'Zahlungserinnerung'
        AND pq.processed = 'N'
)
  ;
```
