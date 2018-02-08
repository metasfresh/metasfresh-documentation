---
title: Cleanup fast growing tables on big systems
layout: default
tag: 
  - maintenance
  - danger zone  
lang: en
---

## Warning

Only use this SQLs if you exactly know what you are doing.


## Cleanup data from time to time

After a few years of running metasfresh on heavy load systems with dozens of users you might want to reduce the size of some table constellations.
Data in those tables is not needed to run metasfresh once its processed but if you delete while its need you crash the system.
Some data might also be very interesting for troubleshooting.

### all printing data except results like PDF 

Only apply if no pending print jobs are existing and you dont need past data.

```
truncate c_print_package,c_print_job_instructions,c_print_job_line,c_print_packageinfo,c_printpackagedata,c_print_job_detail;
```

### async framework workpackage data

Only apply if no pending async jobs are existing and you dont need past data.

```
truncate c_queue_workpackage, c_queue_block, c_queue_element,c_queue_workpackage_log,c_queue_workpackage_param;
```

### Temp Tables which are mostly empty anyway

```
truncate t_lock,t_webui_viewselection,t_webui_viewselectionline
```

### Misc Tables
```
truncate ad_issue,ad_processablepo,c_advcommissionfactcand, c_advcommissionfact, c_incidentlinefact,c_advcomfact_salesrepfact

```

