---
title: IT FRESH-827
required data:
layout: default
---

### #539 Add missing FK constraints
> Testcase to check if FK constraint is added when you create a new column

**FK Constraint**

1. Login as sysadmin and pick a table (e.g. M_InOut) 

2. add a column that doesn't already exist there (e.g. C_Currency_ID)
	* the column needs to be of type table, table direct or search (to reference a table. In my case, C_Currency)

3. press on issyncdatabase button

4. go to the place where migrationscripts are saved, open your migrationscript
	* => you have 1 insert into AD_Column, 1 inssert into AD_Column_Trl, 
	* => 2 alter table, 1 for adding the column, 1 for adding the constraint
	
5. now if you want to remove the column you have to:
	* drop the constraint
	* delete the column (you can do it from application)
	* drop the column
