---
title: AD_Menu
layout: default
tag: 
  - Data Model
  - Application Dictionary
lang: en
---

## SELECT Examples

### Shows you the names of nodes in Menu 
```

select m.name,m2.name from ad_treenodemm mm
join ad_menu m on mm.node_id = m.ad_menu_id and mm.parent_id = 1000007
LEFT JOIN ad_treenodemm mm2 on mm2.parent_id = mm.node_id
join ad_menu m2 on mm2.node_id = m2.ad_menu_id
order by m.name,m2.name
```

