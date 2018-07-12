---
title: IT FRESH-701
required data: 
layout: default
---

### #412 Get rid of AD_Tab.OrderByClause
> Testcase to check if OrderByClause is usable

**Window Tab**

1. Login as sysadmin and open window: Window administration

2. pick for e.g. Product window

3. go to register subtab for Product and write something to sql order by, save
	* => you cannot save
	* => message: "OrderByClause shall be empty. See https://github.com/metasfresh/metasfresh/issues/412"

4. go to next register: pricelist version and notice that it has a sql order by set (leave it like this)

5. login with admin, go to Price window, select a pricelist

6. go to pricelist version subtab
	* => the pricelists versions are ordered by valid from (like it said in register tab)