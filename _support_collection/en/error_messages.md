---
layout: default
title: Various Error Messages
tags:
  - Error Messages
lang: en
---

## Multiple entries with same key

### Symptom

```
Multiple entries with same key: 110-new=MenuNode{id=110-new, caption=Neuer Geschäftspartner, type=NewRecord, elementId=540366, mainTableName=C_BPartner, children-count=0} and 110-new=MenuNode{id=110-new, caption=Neuer Geschäftspartner, type=NewRecord, elementId=540366, mainTableName=C_BPartner, children-count=0}
```

### Analyze

```SQL
select node_id,m.name, m.webui_namenew from ad_treebar tb
join ad_menu m on m.ad_menu_id=tb.node_id
where tb.createdby=<userid>
```

user did have two favorites records pointing to the same menu ID (110).


### Resolution

Delete duplicate Records from AD_Treebar 
