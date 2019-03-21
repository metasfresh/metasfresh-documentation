---
title: I_BPartner
layout: default
tag: 
   - datamigration
lang: en
---


## Insert records directly into the import table

```

INSERT INTO i_bpartner (i_bpartner_id, ad_client_id, ad_org_id, created, updated, createdby, updatedby, value, name,companyname, name2, bpcontactgreeting, firstname, lastname, address4, address2, address3, countrycode, postal, city
,isbillto,isshipto,isbilltodefault,isshiptodefault,isdefaultcontact,isbilltocontact_default,isshiptocontact_default)

  SELECT
  nextval('i_bpartner_seq'), 
  1000000,
  1000000,
  now(),
  now(),
  100,
  100,
  newpartnerid::VARCHAR(10)    AS value,
  neu_firmenname::VARCHAR(60)  AS name,
  neu_firmenname::VARCHAR(60)  AS companyname,
  neu_firmenname2::VARCHAR(60) AS name2,
  anrede::VARCHAR(10)          AS greeting,
  vorname::VARCHAR(60)         AS firstname,
  name::VARCHAR(60)            AS lastname,
  strasse::VARCHAR(60)         AS address4,
  strasse_zusatz::VARCHAR(60)  AS address2,
  postfach::VARCHAR(60)        AS address3,
  neu_land        as countrycode,
  trim(plz)::VARCHAR(10)             as postal,
  trim(ort)::VARCHAR(10)             as city,
    'Y','Y','Y','Y','Y','Y','Y'

FROM migration_data.<yourtable>
WHERE true


```

>**Note:** iscompany was dropped from import table because its set automatically if companyname is not null
