---
title: Export Window and Tab Translations (AD_Window, AD_Tab)
layout: default
tag: 
  - Translation
  
lang: en
---

## SELECT Examples for en_US

Exports all windows used in the menu and their active tabs

```
SELECT DISTINCT
  w.name as window_name_de,
  wtrl.name as window_name_en,
  w.ad_window_id ,
  t.name as tab_name_de,
  ttrl.name as tab_name_en,
  t.ad_tab_id

FROM ad_treenodemm mm
  JOIN ad_menu M ON mm.node_id = M.ad_menu_id AND mm.parent_id = 1000007
  LEFT JOIN ad_treenodemm mm2 ON mm2.parent_id = mm.node_id
  JOIN ad_menu m2 ON mm2.node_id = m2.ad_menu_id
  JOIN ad_window w ON w.ad_window_id = m2.ad_window_id
  JOIN ad_window_trl wtrl on wtrl.ad_window_id = w.ad_window_id and wtrl.ad_language='en_US'
  JOIN ad_tab t on w.ad_window_id = t.ad_window_id and t.isactive = 'Y'
  JOIN ad_tab_trl ttrl on ttrl.ad_tab_id = t.ad_tab_id and ttrl.ad_language='en_US'

WHERE TRUE
order by w.name, ttrl.name;
	  
```
