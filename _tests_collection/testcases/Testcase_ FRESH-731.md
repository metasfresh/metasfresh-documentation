---
title: IT FRESH-731
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
layout: default
---

### #33 Implement document filters from AD_UserQuery
> Testcase to check if filters work well

**Menu Search**

1. Login and start to search in the main window
	* => search and autocomplete works fine
	* => if you start wirting something, in the dorpdown it shows everything related from menu
	
**Documents search**

1. open invoice candidates window and use normal search
	* => dropdown search works fine
	* => Y/N search works fine
	* => autocomplete in product and bpartner works fine	
	* => text and table search works fine
	* => only entries for your filter appear

2. open other documents (like Order) and use normal search	
	* => works fine
	
3. open a non dynamic window (eg PaymentAllocationForm), search for bpartner
		* => autocomplete and filtering works fine. Only entries from that bpartner appear
	
**Documents advanced search** 

1. open invoice candidates window and use advanced search
	* => comparison and logical operators search works fine
	* => Y/N search works fine
	* => autocomplete in product and bpartner works fine	
	* => text search works fine
	* => only entries for your filter appear

2. open other documents (like Order) and use advanced search	
	* => works fine
	
3. use dropdown and select an existing filter
	* => works fine

**New search**
 
1. open invoice candidates window and set some filters (eg product and bpartner)

2. right above, write a name for that filter, then press save

3. use the dropdown to move from one filter to another

4. go back to your filter
	* => filter is the same as you set, nothing changed and it works
	
5. change something in your filter (eg the product), save

6. move to other filter then back
	* => filter is the same as you updated, nothing changed and it works 