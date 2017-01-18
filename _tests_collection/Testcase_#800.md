---
title: IT #800
required data:
   bpartner: bpartner G000X, G000Y, G000Z (vendor)
   products: P0001, P0002, P0003, P0004
layout: default
tags:
  - UI
---
## #800 Sorting of Productnames, Businesspartnernames shall made possible in PMM_PurchaseCandidate

> Testcase to check the sorting in PMM_PurchaseCandidate.


1. Make sure you have flatrate contracts for procurement, for all bpartner and all products (e.g. G000X: all products, G000Y: P0002 & P0004, G000Z: P0001, P0003, P0004), with different prices

1. Make sure you have PMM_PurchaseCandidate for all procurement contracts, for all bpartners (preferably for different dates, and already from the past)

1. Open PMM_PurchaseCandidate window, without any settings (you might get an info that there is too many data to display all (usually 5.000):
	* => PMM_PurchaseCandidate opens with sorting: product name (P0001 first, then P0002, P0003, P0004 last) and bpartner name (G000X first, then G000Y, G000Z)
	* => if there are several PMM_PurchaseCandidates for the same product and bpartner, they are sorted by promised date, descending
	* => the price is the one from procurement contract, for the resp. month (not used for sorting):
		
		
		| Promised Date | BPartner | Product | Price |
		| ------------- | -------- | ------- | ----- |
		| 10.01.17      | G000X    | P0001   | 1.00  |
		| 09.01.17      | G000Z    | P0001   | 1.50  |
		| 05.01.17      | G000X    | P0002   | 1.25  |
		| 05.01.17      | G000Y    | P0002   | 1.22  |
		| 10.01.17      | G000X    | P0003   | 1.20  |
		| 12.12.16      | G000X    | P0003   | 1.15  |
		| 12.12.16      | G000X    | P0003   | 1.15  |
		| 01.01.17      | G000Z    | P0003   | 1.11  |
		| 15.12.16      | G000Z    | P0003   | 1.05  |
		| 08.01.17      | G000X    | P0004   | 2.02  |
		| 01.12.16      | G000Y    | P0004   | 2.00  |
		| 11.11.16      | G000Y    | P0004   | 1.98  |
		| 10.01.17      | G000Z    | P0004   | 2.10  |
		

1. Search for product, P0001:
	* => sorted by bparter:
	

		| Promised Date | BPartner | Product | Price |
		| ------------- | -------- | ------- | ----- |
		| 10.01.17      | G000X    | P0001   | 1.00  |
		| 09.01.17      | G000Z    | P0001   | 1.50  |
		

1. Search for bpartner, G000X:
	* => sorted by product
	:
	* => if there are several PMM_PurchaseCandidates for the same product and bpartner, they are sorted by promised date, descending
	* => the price is the one from procurement contract, for the resp. month (not used for sorting):
	
	
		| Promised Date | BPartner | Product | Price |
		| ------------- | -------- | ------- | ----- |
		| 10.01.17      | G000X    | P0001   | 1.00  |
		| 05.01.17      | G000X    | P0002   | 1.25  |
		| 10.01.17      | G000X    | P0003   | 1.20  |
		| 12.12.16      | G000X    | P0003   | 1.15  |
		| 12.12.16      | G000X    | P0003   | 1.15  |
		| 08.01.17      | G000X    | P0004   | 2.02  |
		
		
1. Empty the filters, refresh so that all PMM_PurchaseCandidates are displayed, sort by price, promised date, etc.:
	* => sorting by e.g. price or promised date works fine, PMM_PurchaseCandidates are displayed with correct sorting
	
1. Try manual sorting of products and bpartners ascending / descending as well
	* => works fine, PMM_PurchaseCandidates are displayed with correct sorting
		
	