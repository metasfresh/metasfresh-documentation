---
title: find ad_table_id for a table name
layout: default
tag: Tips
lang: en
---

## Problem

For writing SQLs you need to know the ID of a table in order to resolve ad_table_id columns but you dont know the ID


## function get_table_id

```

get_table_id('<name of table')

```

##example

```
select   get_table_id('C_Invoice_Candidate')
```

result is `540270`