---
title: AD_UI_Element
layout: default
tag: 
  - Data Model
  - Application Dictionary
lang: en
---

## SELECT Examples

### Shows you the field name of an UI element in a particular window

```

SELECT
  uie.AD_UI_Element_ID,
  f.name
FROM ad_ui_element uie
  JOIN ad_field f ON uie.ad_field_id = f.ad_field_id
  JOIN ad_tab t ON f.ad_tab_id = t.ad_tab_id
  JOIN ad_window w ON t.ad_window_id = w.ad_window_id
WHERE TRUE
      AND uie.AD_UI_Element_ID = 544809
      AND w.name = 'Auftrag'
```

