---
title: org.compiere.model.MRequest.EnableNotifications
layout: default
tags:
  - System
lang: de
---

## Übersicht

Steuert ob Notifikationen erstellt werden bei der Zuordnung von Vorgängen zu Benutzern.
Die Notifikationen können per Email oder Statusmeldung erfolgen.

### Systemschalter per SQL setzen

Aktivierung durch:

```
update ad_sysconfig
set value = 'Y'
where name =  'org.compiere.model.MRequest.EnableNotifications';
```
