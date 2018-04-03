---
title: C_BPartner (Business Partner)
layout: default
tag: 
   - datamodel
   - masterdata
lang: en
---

## SELECT Examples

### Business Partner with address and contact
```
select
	o.name as orgname,
	bp.name,
	bp.iscompany,
	bp.iscustomer,
	bp.isvendor,
	bp.value,
  	bpg.name,
	l.address1,
	l.postal,
	l.city,
	r.name as region,
	c.name,
	u.firstname,
	u.lastname,
	''
	from c_bpartner bp
	left join c_bpartner_location bpl on bp.c_bpartner_id = bpl.c_bpartner_id -- address properties
	left join c_location l on l.c_location_id = bpl.c_location_id -- address
	left join c_country c on c.c_country_id = l.c_country_id  -- country
	left join ad_user u on u.c_bpartner_id = bp.c_bpartner_id -- contacts
	left join ad_org o on bp.ad_org_id = o.ad_org_id
  	left join c_region r on r.c_region_id = l.c_region_id
  	left join c_bp_group bpg on bpg.c_bp_group_id = bp.c_bp_group_id
```


## UPDATE Examples

### Set Price System

```
update c_bpartner
set m_pricingsystem_id =
(
select m_pricingsystem_id from m_pricingsystem  where name = 'Testpreisliste Kunden')
where m_pricingsystem_id is null and iscustomer = 'Y'
```

### Set Payment Term

```
update c_bpartner
set c_paymentterm_id =
(
select c_paymentterm_id from c_paymentterm  where name = '10 Tage netto')
where c_paymentterm_id is null and iscustomer = 'Y'
```

### Set Bp Location property

```
update c_bpartner_location
set isbillto = 'Y', isshipto = 'Y'
,isbilltodefault = 'Y', isshiptodefault = 'Y'
```
