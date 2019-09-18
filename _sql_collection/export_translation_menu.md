---
title: Export Menu Folder and Node Translations (AD_Menu)
layout: default
tag: 
  - Translation
  
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


## Windows and Reports of Subnodes

```
SELECT DISTINCT
  m.name as folder_name_de,
  mtrl.name as folder_name_en,
  m2trl.name as node_name_en,
  m3trl.name as subnode_name_en,
  m3.ad_menu_id as subnode_ad_menu_id,
  m3.action,
  case when m3.action = 'W' then wtrl3.name
  when m3.action = 'R' then Rtrl3.name
  end as window_or_report,
  case when m3.action = 'W' then ttrl3.name
    when m3.action = 'R' then rptrl3.name
  end as tab_or_reportparameter,
  w3.ad_window_id,
  t3.ad_tab_id,
  r3.ad_process_id,
  rp3.ad_process_para_id

FROM ad_treenodemm mm
  JOIN ad_menu M ON mm.node_id = M.ad_menu_id AND mm.parent_id = 1000007
  LEFT JOIN ad_menu_trl mtrl ON mtrl.ad_menu_id = m.ad_menu_id AND mtrl.ad_language = 'en_US'
  LEFT JOIN ad_treenodemm mm2 ON mm2.parent_id = mm.node_id
  JOIN ad_treenodemm mm3 ON mm3.parent_id = mm2.node_id
  JOIN ad_menu m2 ON mm2.node_id = m2.ad_menu_id
  LEFT JOIN ad_menu m3 ON mm3.node_id = m3.ad_menu_id
  LEFT JOIN ad_menu_trl m2trl ON m2trl.ad_menu_id = m2.ad_menu_id AND m2trl.ad_language = 'en_US'
  LEFT JOIN ad_menu_trl m3trl ON m3trl.ad_menu_id = m3.ad_menu_id AND m3trl.ad_language = 'en_US'
  LEFT JOIN ad_window w3 on m3.action = 'W' and w3.ad_window_id = m3.ad_window_id
  LEFT JOIN ad_window_trl wtrl3 on wtrl3.ad_window_id = w3.ad_window_id and wtrl3.ad_language='en_US'
  LEFT JOIN ad_process r3 on m3.action = 'R' and R3.ad_process_id = m3.ad_process_id
  LEFT JOIN ad_process_trl rtrl3 on r3.ad_process_id = rtrl3.ad_process_id and rtrl3.ad_language='en_US'
  LEFT JOIN ad_process_para rp3 on rp3.ad_process_id = r3.ad_process_id
  LEFT JOIN ad_process_para_trl rptrl3 on rptrl3.ad_process_para_id = rp3.ad_process_para_id and rptrl3.ad_language='en_US'
  LEFT JOIN ad_tab t3 on w3.ad_window_id = t3.ad_window_id and t3.isactive = 'Y'
  LEFT JOIN ad_tab_trl ttrl3 on ttrl3.ad_tab_id = t3.ad_tab_id and ttrl3.ad_language='en_US'

WHERE TRUE
ORDER BY m.name,m3trl.name
```
