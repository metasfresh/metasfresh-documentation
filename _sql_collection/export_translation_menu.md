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
  m2trl.name as node_name_en,
  m2.webui_namenew as node_new,
  m3trl.name as subnode_name_en,
  m3.webui_namenew as subnode_new,
  m.ad_menu_id as folder_ad_menu_id,
  m2.ad_menu_id as node_ad_menu_id,
  m3.ad_menu_id as subnode_ad_menu_id

FROM ad_treenodemm mm
  JOIN ad_menu M ON mm.node_id = M.ad_menu_id AND mm.parent_id = 1000007
  LEFT JOIN ad_menu_trl mtrl ON mtrl.ad_menu_id = m.ad_menu_id AND mtrl.ad_language = 'en_US'
  LEFT JOIN ad_treenodemm mm2 ON mm2.parent_id = mm.node_id
  LEFT JOIN ad_treenodemm mm3 ON mm3.parent_id = mm2.node_id
  JOIN ad_menu m2 ON mm2.node_id = m2.ad_menu_id
  LEFT JOIN ad_menu m3 ON mm3.node_id = m3.ad_menu_id
  LEFT JOIN ad_menu_trl m2trl ON m2trl.ad_menu_id = m2.ad_menu_id AND m2trl.ad_language = 'en_US'
  LEFT JOIN ad_menu_trl m3trl ON m3trl.ad_menu_id = m3.ad_menu_id AND m3trl.ad_language = 'en_US'
WHERE TRUE
ORDER BY m.name
	  
```
