---
title: IT gh#928
required data:
   bpartner: G000X (customer and vendor)
layout: default
tags:
  - UI
---
## #928 have a way to control which contact is used on addresses in order 

> Testcase to check the contact user in orders

1. Go to bpartner G000X and open the users subtab

2. make sure you have multiple users, none sales or purchase users

3. create a new purchase order and add bpartner G000X
	* => user_id and bill_user_id are empty
	* => on dropdown you can change to any existing user
	
4. create a new sales order and add bpartner G000X
	* => user_id and bill_user_id are empty (not visible in sales order window)
	
5. go back to bpartner G000X, users subtab, and make some users sales and some purchase

6. repeat steps 3 and 4
	* => works the same, nothing set on user_id and bill_user_id
	
7. go back to bpartner G000X, users subtab, and make a user purchase default and one sales default
	
8. repeat steps 3 and 4
	* => user_id and bill_user_id are set with the default purchase / sales user

9. go back to bpartner G000X, users subtab, and try to make multiple users sales and purchase default
	* => you can't. Each time, remains the last one you set

10. for the orders created at step 9 (user_id and bill_user set), create invoice and inout 
	* => invoices and inouts have user_id set with the one in orders
	
11. create 2 new orders, sales and purchase and set random user_id and bill_user. Create invoices and inouts
	*  => invoices and inouts have user_id set with the one in orders