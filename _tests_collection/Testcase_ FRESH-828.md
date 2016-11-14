---
title: IT FRESH-828
required data:
   -
layout: default
---

### #540 Table and Columns - IsLazyLoading flag is not displayed
> Testcase to check if IsLazyLoading flag is displayed

**Display Logic**

1. Login as SysAdmin

2. open table and Column and pick a table (e.g. C_Order)

3. pick a column which is not ColumnSQL
	* => IsLazyLoading checkbox is not there

4. write something in ColumnSQL
	* => IsLazyLoading checkbox appears

5. save
	* => IsLazyLoading checkbox is still there

6. remove what you wrote in ColumnSQL
	* => IsLazyLoading checkbox disappears

7. save
	* => IsLazyLoading checkbox is still hidden