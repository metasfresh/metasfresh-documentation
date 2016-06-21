---
title: IT FRESH-392
required data:
   bpartner: bpartner G000X (customer or vendor)
layout: default
---

### Business Partner Group Migration to AD_Org 0
> Testcase to check if bpartner groups are created ok and can be used for any role

**Business Partner Group**

1. Search in database 
```sh
SELECT AD_Org_ID, * FROM C_BP_Group WHERE AD_Org_ID != 0
```

* => no resutls. Data was migrated fine, all groups have org 0

1. Log in  with Admin and your usual org

2. open business partner window and select or create a new bpartner

3. select the dropdown of business partner group
	* => you can see and choose from all groups

4. logout

5. if you don't have any other role and org, you can login with admin and create new ones: go to role window and create a new one. On org acces zoom in on org_id and create a new one, then set it in role access

6. login with this new role and org

7. open the business partner window and create a new bpartner

8. select the dropdown of business partner group
	* => you can see and choose from all groups
