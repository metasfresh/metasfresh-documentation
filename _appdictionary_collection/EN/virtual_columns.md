---
title: Virtual Columns
layout: default
tags:  
  - Window
lang: en
---

## Overview
Virtual columns are columns that retrieve data via SQL and are not persistet in the database.

They are executed together with the select of the data source.

For example:

This is a very, very simplified symbolic query run for invoice window to show you were the SQL of a virtual column is actually executed:

```
select
   documentno,
   dateinvoiced
...
from c_invoice
```

Now we are adding a virtual column to that window and it is embedded like this:

```
select
   documentno,
   dateinvoiced,
...
   <some virtual column SQL>,
...
from c_invoice
```

So in order to make your SQL code work in the virtual column it needs to be runnable as a column in a select statement.

## Don't Dos
1. If you do selects add () around it, e.g., `(select value from other table where...)`.
1. Never have "/" in column name even though its virtual.
