---
title: Export Field Translations (AD_Field)
layout: default
tag: 
  - Translation
  
lang: en
---

## SELECT Examples for en_US

```
select DISTINCT * from (
  SELECT
    wtrl.name AS window_name_en,
    w.name AS window_name_de,
    ttrl.name AS tab_name_en,
    t.name AS tab_name_de,
    ftrl.name as field_name_en,
    f.name    AS field_name_de,
    c.columnname as db_column,
	  f.ad_field_id,
    e.ad_element_id,
    etrl.name as  element_en,
    e.name as  element_de

  FROM ad_window w
    LEFT JOIN ad_window_trl wtrl ON wtrl.ad_window_id = w.ad_window_id AND wtrl.ad_language = 'en_US'
    JOIN ad_tab t ON t.ad_window_id = w.ad_window_id
    LEFT JOIN ad_tab_trl ttrl ON ttrl.ad_tab_id = t.ad_tab_id AND ttrl.ad_language = 'en_US'
    JOIN ad_field f ON f.ad_tab_id = t.ad_tab_id
    LEFT JOIN ad_field_trl ftrl ON ftrl.ad_field_id = f.ad_field_id AND ftrl.ad_language = 'en_US'
    JOIN ad_column c ON c.ad_column_id = f.ad_column_id
    JOIN ad_element e ON e.ad_element_id = c.ad_element_id
    JOIN ad_element etrl ON etrl.ad_element_id = e.ad_element_id AND ftrl.ad_language = 'en_US'
    JOIN ad_ui_element uie ON uie.ad_field_id = f.ad_field_id

  WHERE TRUE
      -- and w.name = 'Geschäftspartner'
        AND f.isactive = 'Y'
        AND (uie.isdisplayedgrid = 'Y' OR uie.isdisplayed = 'Y' OR isadvancedfield = 'Y')
        AND w.isactive = 'Y'
        AND t.isactive = 'Y'
        AND exists
        (SELECT m2.ad_window_id
         FROM ad_treenodemm mm
           JOIN ad_menu M ON mm.node_id = M.ad_menu_id AND mm.parent_id = 1000007
           LEFT JOIN ad_treenodemm mm2 ON mm2.parent_id = mm.node_id
           JOIN ad_menu m2 ON mm2.node_id = m2.ad_menu_id
         WHERE m2.ad_window_id IS NOT NULL
               AND w.ad_window_id = m2.ad_window_id
        )

)
as foo
order by window_name_en, tab_name_en, field_name_en
```

