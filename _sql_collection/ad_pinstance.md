---
title: AD_Pinstance (Process Log)
layout: default
tag: 
  - Data Model
  - System Data
lang: en
---

## SELECT Examples

This SQL shows when a process was started by which user

```SQL

select adptrl.name,adp.ad_process_id,adp.name,adpi.created, app.* from ad_pinstance adpi
left join ad_pinstance_para app on adpi.ad_pinstance_id = app.ad_pinstance_id
left join ad_pinstance_log apl on adpi.ad_pinstance_id = apl.ad_pinstance_id
left join ad_process adp on adp.ad_process_id=adpi.ad_process_id
left join ad_process_trl adptrl on adp.ad_process_id = adptrl.ad_process_id and adpi.ad_language='en_US'
left join ad_user u on adpi.ad_user_id = u.ad_user_id
where true
and adpi.created >= '2019-08-14 12:00' -- date filter
and adp.name = 'Auswahl bestellen' -- process name
order by adpi.created desc

```
