---
title: Common Postgres Snippets for metasfresh
layout: default
tag:
  - Tips

lang: en
---

## Export from Table

`copy c_bpartner to '/tmp/ex2.csv' with delimiter E'\t' CSV HEADER;`


## Export from View

`copy (select * from public.rv_your_export_view) to '/tmp/ex2.csv' with delimiter E'\t' CSV HEADER;`


## Replace Line Breaks from Data

```
update c_bpartner
set name = replace(name,E'\n','')
where strpos(name,E'\n') > 0
```
