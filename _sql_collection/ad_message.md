---
title: AD_Message
layout: default
tag: 
  - datamodel
  - application dictionary
lang: en
---

## SELECT Examples

### Shows messages used for translating labels of actions in webui
```

select m.ad_message_id,ad_language,m.value,m.msgtext,mtrl.msgtext from ad_message m
join ad_message_trl mtrl on mtrl.ad_message_id = m.ad_message_id and ad_language = 'en_US'
where value ILIKE '%webui%' 
	  
```

