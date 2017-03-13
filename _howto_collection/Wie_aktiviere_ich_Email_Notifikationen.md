---
title: Wie aktiviere ich Email Notifikationen ?
layout: default
tags:
  - Systemadministration
lang: de
---

## Übersicht

Wenn Du bei neuen Vorgängen Deine Benutzer automatisch per Mail informieren möchtest, kannst Du diesen Systemschalter verwenden um die Funktion zu aktivieren.



## via SQL

```
update ad_sysconfig
set value = 'Y'
where name =  'org.compiere.model.MRequest.EnableNotifications';
```
