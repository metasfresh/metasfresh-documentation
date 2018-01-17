---
title: Import CSV directly via Postgres
layout: default
tag:
  - datamigration
  - Tips

lang: en
---

## Preparation

You need to have already created your table (*yourtable*) in postgres  

## Steps

1. save from Sheet Software to tab delimited text file including headers
1. encode in **UTF without BOM**
1. copy file on postgres server to `/tmp`
1. log on to postgres using

 `psql -d metasfresh`
1. start import

 `copy  migration_data.yourtable from '/tmp/yourfile.txt' with delimiter E'\t' CSV HEADER;`
