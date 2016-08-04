---
title: IT FRESH-560
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   AD_Orgs: Org I, Org II  
layout: default
tags:
  - UI
  - invoicing
---
## #255 Invoice candidates action bar is not considering org-assignment

> Testcase to check if the action bar in invoice candidates also considers the org-assignment.

1. Log in as Admin

1. Create 2 purchase orders, one for Org I, and one for Org II, with:
	* G000X as vendor
	* P0001 and P0002
	* same date_ordered and delivery_date
	
1. Open Rechnungsdispo, and filter for invoice candidates with:
	* komplett abgerechnet eff. = 'N'
	* date_ordered / delivery_date = date of test

1. For all invoice candidates, set invoice rule: immediate OR, alternatively, create the resp. inouts 
	
1. Check invoice candidates:
	* => the invoice candidates for both purchase orders, for Org I & II, are displayed
	* => side bar: both orders are displayed
	* => bar at the bottom: the overall net sum is displayed
	
1. Log out and in again, but this time with a different role, that has assignment for Org I only

1. Open Rechnungsdispo again, and filter for invoice candidates with:
	* komplett abgerechnet eff. = 'N'
	* date_ordered / delivery_date = date of test
	
1. Check invoice candidates:
	* => only invoice candidates for the purchase order with Org I are displayed
	* => side bar: only filters for order with Org I (e.g. order no., bpartner)
	* => bar at the bottom: net sum from purchase order with Org I is displayed
	
1. Repeat with a different role, that has assignment for Org II only	
	* => only invoice candidates for the purchase order with Org II are displayed
	* => side bar: only filters for order with Org II (e.g. order no., bpartner)
	* => bar at the bottom: net sum from purchase order with Org II is displayed
	
1. Repeat everything for sales order side
	* => works the same for sales side
