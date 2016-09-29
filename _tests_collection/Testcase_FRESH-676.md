---
title: IT FRESH-676
required data:
   bpartner: bpartner G000X (vendor)
   user: 3 users for G000X   
   product: P0001
layout: default
tags:
  - RfQ
---
## #387 Purchase Order generation in Procurement Candidates not to be grouped by user

> Testcase to check if the purchase order generation in procurement candidates is not grouped by user.

**Note:** RfQ in general is documented in [Testcase_Fresh-402](Testcase_FRESH-402)

1. Make sure the Set Up for your testing is ok according to the testcase above (emails etc.)

1. Create an RfQ Topic (Ausschreibungs-Thema), with each of G000X's users set in tab Subscribers

1. Create the RfQ Ausschreibung, for P0001, complete, publish etc.
	* => 1 Ausschreibung Antwort Position for each of G000X's users is created

1. Create manual entries in each Ausschreibung Antwort Position for each user, same price for each:
	* create 1 for the same date, for each user
	* create 1 with a different date, for each user
	
1. Select the Ausschreibung Antwort Positionen of all users of G000X as winners, close the RfQ, the results, publish them
	* => procurement candidates for each line in each of the Ausschreibung Antwort Positionen is created
	
1. Open the created procurement candidates:
	* => 3 for the same date, all other data the same (price, PI, warehouse etc.)
	* => 3 for a different date, but all other data the same, see above
	
1. In each procurement candidate, set QtyToOrder: 1, save, create the purchase orders by clicking Bestellen
	* => info: 4 purchase orders are created
	
1. Check the purchase orders:
	* => 1 order for 3 TUs, for the procurement candidates that had the same date set, not different orders because of different users
	* => 3 orders for 1 TU each, for the 3 different dates
	
	