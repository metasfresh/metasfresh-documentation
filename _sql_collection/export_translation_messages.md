---
title: Export Message Translations (AD_Message)
layout: default
tag: 
  - translation
  
lang: en
---

## SELECT Examples for en_US

### Shows messages used for translating labels of actions in webui

```

select m.ad_message_id,ad_language,m.value,m.msgtext,mtrl.msgtext from ad_message m
join ad_message_trl mtrl on mtrl.ad_message_id = m.ad_message_id and ad_language = 'en_US'
where value ILIKE '%webui%' ;
	  
```

## Address labels

```
select m.msgtext, m.value, mtrl.msgtext, m.ad_message_id from ad_message m
join ad_message_trl mtrl on mtrl.ad_message_id = m.ad_message_id AND ad_language =  'en_US'
where m.msgtext in ('PLZ','Ort');
```

## Notifications

```
SELECT
  m.ad_message_id,
  m.value,
  mtrl.msgtext,
  '' AS msgtext_trl
FROM ad_message m
  JOIN ad_message_trl mtrl ON mtrl.ad_message_id = m.ad_message_id AND ad_language = 'en_US'
WHERE m.ad_message_id IN (543623, 543624)
```
