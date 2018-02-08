---
title: Export Document Action Translations (Reference List)
layout: default
tag: 
  - translation
  
lang: en
---

## SELECT Examples for en_US

Exports all document actions:

```
SELECT
  rl.ad_ref_list_id,  
  rl.value,
  rl.name as name_de,
  rltrlen.name as name_en,
  '' as name_trl
FROM ad_ref_list rl
  JOIN ad_ref_list_trl rltrlen ON rl.ad_ref_list_id = rltrlen.ad_ref_list_id AND rltrlen.ad_language = 'en_US'
WHERE rl.ad_reference_id = 135
and rl.isactive = 'Y'

	  
```
