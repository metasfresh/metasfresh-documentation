---
title: IT FRESH-350
required data:
   inouts: purchase inouts 
   labels: HUs in HU Editor   
   layout: default
---

# IT FRESH-350
### check if purchase inout label and print preview can run faster
> Testcase to check if the print preview performance
> for purchase inouts and purchase inout labels has
> improved.


1. Make sure you have the correct Setup for printing in Preferences:
	
	* Check always print preview
	
1. Open a purchase inout in Wareneingang, print preview 

	* => print preview of inout opens in ~10s or less
	
1. Open e.g. Wareneingang POS, and select an orderline in a warehouse where an inout was already made

1. Press Drucken Produktanlieferung

	* => print preview of inout opens in ~10s or less
	
1. Repeat the test to make sure you have covered:

	* print preview including >1 inouts from 1 order
	* print preview including >1 inouts from >1 orders
	* print preview including 1 inout from 1 order
	
		* => print preview opens in ~10s or less
		
1. In Wareneingang POS, open the HU Editor, select an HU, and print Wareneingangsetikett

	* => print preview of inout opens in >10s 
	

