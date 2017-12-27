---
title: Export Menu Folder and Node Translations (AD_Menu)
layout: default
tag: 
  - translation
  
lang: en
---

## SELECT Examples for en_US

Exports folder names and the nodes in them.

```
SELECT DISTINCT
  m.name as folder_name_de,
  mtrl.name as folder_name_en,
  m2.name as node_name_de,
  m2trl.name as node_name_en,
  m.ad_menu_id as folder_ad_menu_id,
  m2.ad_menu_id as node_ad_menu_id
FROM ad_treenodemm mm
  JOIN ad_menu M ON mm.node_id = M.ad_menu_id AND mm.parent_id = 1000007
  LEFT JOIN ad_menu_trl mtrl ON mtrl.ad_menu_id = m.ad_menu_id AND mtrl.ad_language = 'en_US'
  LEFT JOIN ad_treenodemm mm2 ON mm2.parent_id = mm.node_id
  JOIN ad_menu m2 ON mm2.node_id = m2.ad_menu_id
  LEFT JOIN ad_menu_trl m2trl ON m2trl.ad_menu_id = m2.ad_menu_id AND m2trl.ad_language = 'en_US'
  LEFT JOIN ad_window w ON w.ad_window_id = m2.ad_window_id
WHERE TRUE
--m2.ad_window_id IS NOT NULL
ORDER BY m.name
	  
```
