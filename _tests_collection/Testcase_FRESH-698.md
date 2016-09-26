---
title: IT FRESH-698
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
   pricelists: customer pricelist CP, vendor pricelist VP 
   AD_Orgs: Org I, Org II   
layout: default
tags:
  - Jasper
---
## #410 sscc label org fix

> Testcase to check if the SSCC label always shows the correct org.

1. Create a purchase order for G000X, for P0001, in Org I

1. Create receipt for P0001 in Wareneingang POS, using an LU, and print the SSCC label for that LU:
	* => org at top of the label: Org I
	
1. Note the the HU value of your LU

1. Create a sales order for G000X, for P0001, in Org I

1. Move your LU to the warehouse from sales order in Kommissionier Terminal, using a Distribution Order

1. You can also print the SSCC label in Bereitstellung POS:
	* => org at top of the label: Org I
	
1. In Kommissionier Terminal, select your LU for your sales order, and print the SSCC label in editor again:
	* => org at top of the label: Org I
	
1. Open Handling Unit, search for your LU, and check tab Handling Unit Assignment:
	* => org: Org I
	* => assignments for all the movements, inouts etc. the LU was used in before
	
1. Zoom into the assignments:
	* => org: Org I for all
	
1. In db, set org for HU: Org II, and delete all assignments

1. Open Handling Unit POS, the warehouse used in Kommissionier Terminal, and print the SSCC label for your HU again:
	* => org at top of the label: Org II
	
