---
title: AD_Eventlog (Event Bus)
layout: default
tag: 
  - Data Model
  - System Data
lang: en
---

## SELECT Examples

This SQL shows unprocessed events by topic

```SQL

select eventtopicname, eventtime,processed,msgtext,entry.iserror from ad_eventlog event
left join ad_eventlog_entry entry ON event.ad_eventlog_id = entry.ad_eventlog_id
where true
--and eventtopicname='de.metas.acct.handler.DocumentPostRequest'
and event.created::date=now()::date
and processed= 'N'
order by event.eventtime desc

```
