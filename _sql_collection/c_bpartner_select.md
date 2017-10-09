---
title: SELECT Business Partner
layout: default
tags: c_bpartner
lang: en
---

## Examples

### Business Partner with address and contact
```
select
	o.name as Org,
	bp.name,
	bp.iscompany,
	bp.iscustomer,
	bp.isvendor,
	bp.value,
	l.address1,
	l.postal,
	l.city,
	u.firstname,
	u.lastname,
	''
	from c_bpartner bp
	left join c_bpartner_location bpl on bp.c_bpartner_id = bpl.c_bpartner_id -- address properties
	left join c_location l on l.c_location_id = bpl.c_location_id -- address
	left join ad_user u on u.c_bpartner_id = bp.c_bpartner_id -- contacts
	left join ad_org o on bp.ad_org_id = o.ad_org_id
```
