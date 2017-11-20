---
title: Window Konfiguration
layout: default
tag: datamodel
lang: en
---

## SELECT Examples

### Window including tabs, fields and Web UI Config
```
SELECT
  w.name as window_name,
  t.name as tab_name,
  f.name as field_name,
  uis.name as ui_section_name,
  uic.seqno as ui_column,
  uig.name as ui_group_name,
  uie.name,
  uie.isdisplayed,
  uie.isdisplayedgrid,
  uie.isactive

FROM ad_window w
  JOIN ad_tab t ON t.ad_window_id = w.ad_window_id
  JOIN ad_field f ON f.ad_tab_id = t.ad_tab_id
  JOIN ad_ui_section uis ON uis.ad_tab_id = t.ad_tab_id
  JOIN ad_ui_column uic ON uic.ad_ui_section_id = uis.ad_ui_section_id
  JOIN ad_ui_elementgroup uig ON uig.ad_ui_column_id = uic.ad_ui_column_id
  JOIN ad_ui_element uie ON uie.ad_ui_elementgroup_id = uig.ad_ui_elementgroup_id

WHERE w.name = 'Geschäftspartner'
ORDER BY w.name
LIMIT 100



```

