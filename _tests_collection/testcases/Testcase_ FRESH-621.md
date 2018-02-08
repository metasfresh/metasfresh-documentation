---
title: IT FRESH-621
required data:
   bpartner: bpartner G000X (customer)
layout: default
---

### #337 ERROR: duplicate key value violates unique constraint "c_bpartner_stats_c_bpartner_id_unique" triggered from some callouts
> Testcase to check sales orders with and without business partner location

**Business Partner Location**

1. Go to business partner window and take an already existing bpartner G000X or create one

1. go to subtab Address and make it inactive (all if are more addresses)

1. Create new sales order and add G000X
	* => an error message pops up saying that you need an address

1. go back to business partner - address subtab

1. activate the address but make sure isShipTo is on N

1. Create new sales order and add G000X
	* => G000X is added
	* => no error
	* => bpartner location is not set, and you can't select any
	
1. go back to business partner - address subtab

1. put isShipTo is on Y, isShipToDefault on N

1. Create new sales order and add G000X
	* => G000X is added
	* => no error
	* => bpartner location is set correctly
	* => works the same is isShipToDefault is on Y
