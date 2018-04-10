---
title: Reopen a processed document
layout: default
tag: Tips
lang: en
---

## Problem

Sometimes you want to open a document that you completed in a test environment.


this shows you how to do it:

### Flatrate Condition

#### Open
```

update c_flatrate_conditions
set docstatus = 'DR' , processed = 'N'
where c_flatrate_conditions_id in (?);
```

#### set to processed

**Important to know**: Setting it to processed does not process it via the system but just mark the record as processed. That makes sense in some special cases when you know what you are doing.


```

update c_flatrate_conditions
set docstatus = 'CO' , processed = 'Y'
where c_flatrate_conditions_id in (?);
```


### Production Order 

```
update pp_order
set planningstatus = 'R'
where documentno = 'XYZ'
;
```
