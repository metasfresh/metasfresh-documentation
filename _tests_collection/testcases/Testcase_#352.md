---
title: IT gh#352
required data:
   bpartner: bpartner G000X (customer, vendor)
   products: P0001, P0002
   HUs: TU A, TU B
layout: webui
tags:
  - UI
---
## #352 Lines not "refreshed" after docaction reactivation

> Testcase to check if document reactivation refreshes lines in order


1. create a sales order, add bpartner G000X and product P0001 which has TU A
	* => order is drafted

2. complete the order
	* => order is completed 
	* => new line was added for TU A
	
3. reverse the order
	* => order is now in progress
	* => line with TU was removed
		
4. add another product P0002

5. complete the order 
	* => order is completed 
	* => new line was added for TU A
	* => new line was added for TU B
	
6. repeat steps 1-5 for purchase order
	* => works the same