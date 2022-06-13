---
title: Virtual Columns
layout: default
tags:  
  - Window
lang: en
sequence:
ref: virtual_columns
---

<!--
See also original issue comment: https://github.com/metasfresh/me03/issues/12088#issuecomment-1148348184 (for corner cases)
-->

## Overview
Virtual columns are columns that retrieve data via SQL and are not persistent in the database.

They are executed together with the `select` statement of the data source.

### Example
This is a very, very simplified symbolic query run for the invoice window to show you where the SQL of a virtual column is actually executed:
```sql
select
    documentno,
    dateinvoiced
...
from c_invoice
```

Now we are going to add a virtual column to that window. It is embedded like this:
```sql
select
    documentno,
    dateinvoiced,
...
    <some virtual column SQL>,
...
from c_invoice
```

So, in order to make your SQL code work in the virtual column it needs to be runnable as a column in a `select` statement.

## When creating or changing SQL columns they are validated on save
Each time the `AD_Column.ColumnSQL` is changed, the code is validated on save.

The validation goes as follows:

1. Selecting the `ColumnSQL` code, we try to replace the context table name with the `master` alias (same as we do in production code).
1. The following query is executed:
```sql
select
( your AD_Column.ColumnSQL code using "master" alias )
from TableName master
limit 1
```
1. If that code succeeds ➔ OK, if not ➔ ERROR.

## Dos and Don't
1. When using `select` statements, add parentheses `()` around them, e.g., *`(select value from other table where...)`*.
1. Never use slashes `/` in column names even though they are virtual.


## How to avoid some corner-case issues

### Definition of a "corner case":
A corner case occurs when `ColumnSQL` has a subquery which joins the same table again.

| Hint for developers: |
| :--- |
| Consider using `@JoinTableNameOrAliasIncludingDot@` instead of the actual table name, at least for the corner cases. |

### How to use `@JoinTableNameOrAliasIncludingDot@`?

#### Example
Assume that in the "Account" window (aka "Element value", `window/540761`) you want to show the account number of a parent account.
You might be tempted to write:
```sql
( SELECT p.Value FROM c_elementvalue p where p.c_elementvalue_id=C_ElementValue.parent_id)
```

which in this case would only work because you paid attention to the following details:
- In `...FROM c_elementvalue` you wrote the table name with lowercase letters which will be **ignored** by our parser when it tries to replace the table name with the `master` alias.
- In `...p.c_elementvalue_id=C_ElementValue.parent_id` you wrote the parent link table, with `C_ElementValue` respecting the letter case. Consequently it will be replaced with `master` by the parser when the bigger SQL is built.

To avoid this, you could write:
```sql
( SELECT p.Value FROM c_elementvalue p where p.c_elementvalue_id=@JoinTableNameOrAliasIncludingDot@parent_id)
```

#### Please note:
- There is no dot (`.`) between `@JoinTableNameOrAliasIncludingDot@` and `parent_id`.
- We still have to use lowercase letters in `FROM c_elementvalue` to make sure the table name is not replaced with `master`.
