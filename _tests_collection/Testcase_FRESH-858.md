---
title: IT FRESH-858
required data:
   user: SuperUser, TestUser, TestUser2, TestUser3 
layout: default
tags:
  - Request
  - UI
---
## #577 Button Request shows too many results

> Testcase to check if the request button shows the correct results.

1. Make sure all the roles you will test with have a Supervisor set:
	* for testing, set:
		** TestUser as supervisor for role: Einkauf (=> Vorgesetzter, in Rolle - Verwaltung)
		** TestUser2 as supervisor for role: Admin

1. Log in as SuperUser (Role: Admin), check the request button (Aufgabe) down at the bottom on the right, note the number

1. Click the button:
	* => window Vorgang opens
	* => number of entries = number on the button
	
1. Check the entries:
	* => no entry with type: Email included
	
1. Open Vorgang from menu:
	* => same results as from request button
	* => no entry with type: Email included
	
1. Open Vorgang (all) from menu:
	* => more results (up to maximum number allowed)
	* => entries with type: Email included
	
1. Log out and log in again with TestUser, also Role: Admin 

1. Check the request button (Aufgabe) down at the bottom on the right, note the number:
	* => same number as for SuperUser

1. Click the button:
	* => window Vorgang opens
	* => number of entries = number on the button
	
1. Check the entries:
	* => no entry with type: Email included
	
1. Open Vorgang from menu:
	* => same results as from request button
	* => no entry with type: Email included
	
1. Open Vorgang (all) from menu:
	* => more results (up to maximum number allowed)
	* => entries with type: Email included
	
1. Create new request entries:
	* => all have type: Email
	* => responsible: SuperUser, TestUser2, TestUser3
	
1. Log out and log in again with TestUser2, Role: Einkauf

1. Check the request button (Aufgabe) down at the bottom on the right, note the number:
	* => lower number as for SuperUser
	
1. Click the button:
	* => window Vorgang opens
	* => number of entries = number on the button
	
1. Check the entries:
	* => no entry with type: Email included, also not the one just created with TestUser2 as responsible
	
1. Open Vorgang from menu:
	* => same results as from request button
	* => no entry with type: Email included, also not the one just created with TestUser2 as responsible
	
1. Log out and log in again with TestUser3, Role: Einkauf

1. Repeat tests as before:
	* => number on request button =  number on request button of TestUser2
	* => window Vorgang opens when clicking the button
	* => number of entries = number on the button
	* => no entry with type: Email included, also not the one just created with TestUser3 as responsible
	* => same results as from request button in Vorgang window from menu
	* => no entry with type: Email included, also not the one just created with TestUser3 as responsible
	
1. Log out and log in again with SuperUser

1. Check the request button (Aufgabe) down at the bottom on the right, note the number:
	* => number is not increased
	
1. Click the button:
	* => window Vorgang opens
	* => number of entries = number on the button
	
1. Check the entries:
	* => no entry with type: Email included, also not the one just created with SuperUser as responsible
	
1. Open Vorgang from menu:
	* => same results as from request button
	* => no entry with type: Email included, also not the one just created with SuperUser as responsible
	
1. Open Vorgang (all) from menu:
	* => more results (up to maximum number allowed)
	* => entries with type: Email included, also all entries you created with type: Email
	
1. Create a material receipt with quality discount and a quality note in Wareneingang POS, as SuperUser

1. Log out and in again, with all users:
	* => number on request button is increased for the users with Role: Einkauf, new entry in Vorgang from your material receipt
	* => number on request button is NOT increased for the users with Role: Admin, no new entry in Vorgang from your material receipt
	
1. Create another material receipt with quality discount and a quality note in Wareneingang POS, as TestUser2

1. Log out and in again, with all users:
	* => number on request button is increased for the users with Role: Admin, new entry in Vorgang from your latest material receipt
	* => number on request button is NOT increased for the users with Role: Einkauf, no new entry in Vorgang from your latest material receipt
	
1. Check the 2 requests you just created:
	* => responsible (Sales_Rep) is the supervisor of the user that created the material receipt, as set above: TestUser / TestUser2
	
1. Create a request from sales inout as well, for SuperUser (Role: Einkauf has no access to window sales inout):
	* => request first opens with sales_rep= SuperUser
	* => when saving the request, sales_rep is updated to TestUser2

1. Check the requests that were created and the number on request buttons:
	* => responsible (Sales_Rep) is the supervisor of the user that created the material receipt: TestUser2
	* => number on request button is increased for the users with Role: Einkauf, new entry in Vorgang from your sales inout
	* => number on request button is NOT increased for the users with Role: Admin, no new entry in Vorgang from your sales inout
	
**Note:** If a user hase several roles (e.g. SuperUser has roles: Admin and Einkauf), then for this user all the requests created in this test will show up in the request button!
	Also, if a certain role includes other roles (e.g., if role Admin were including role: Einkauf), then the users with this role would have all requests in the request button, that have
	sales_rep set with a user of that included role as well.