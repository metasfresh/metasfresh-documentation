---
title: IT FRESH-691

required data:
* client: System Client, ClientX
* roles: System Role (main), RoleS1, RoleS2 etc of Client System, RoleX of ClientX


layout: default

---

### When creating a new organization, don't create org access for System role
> Testcase to check if a newly created org has no access for the System role

**New organization has no access to the System Role**

1. New organization has no access to the System Role
	* Login with ClientX
	* Create a new Organization (OrgX), save it
	* Restart the application (as required by an information message that you get after saving the new Organization)
	* Go to window Role
	* Select the System Role entry (it is read-only)
	* Go to the tab Org Access
	    * => OK: The newly created org is not in the list
	
2. New organization has access to the roles of it's own client
 	* Login with ClientX
	* Make sure the OrgX still exists. Otherwise, follow steps from Testcase 1 to create it
	* Go to window Role
	* Create an advanced search with 3 conditions:
	    * Client = ClientX
	    * Active = 'Y' 
	    * Manual = 'N'
	* For each of the found roles, go to the Org Access tab
	    * => OK: OrgX is in all the lists