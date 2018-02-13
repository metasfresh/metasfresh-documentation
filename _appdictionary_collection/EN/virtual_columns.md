---
title: Virtual Columns
layout: default
tags:  
  - Window
lang: en
---

## Overview

Virtual Columns are columns that retrieve data via sql and are not persistet to the database.

They are executed together with the select of the datasource.

For example:

This is a very, very simplified symbolic query run for invoice window to show you were the SQL of a virtual column is actually executed:

```
select
   documentno,
   dateinvoiced
...
from c_invoice
```

Now we are adding a virtual column to that window and its embedded like this:

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

1. If you do selects add () around it. e.g. `(select value from other table where...)`
1. never have "/" in column name even though its virtual
