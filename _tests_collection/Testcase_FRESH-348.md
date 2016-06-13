---
title: IT FRESH-348
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   flatrate term: flatrate for procurement F
   pricelist: vendor pricelist P with IsTaxIncluded=Y
   prices: 1.00 for P0001 in F, 2.00 for P0002 in P
layout: default
---

# IT FRESH-348
### purchase orders created with wrong IsTaxIncluded value
> Testcase to check if purchase orders created from
> PMM_PurchaseCandidates have correct IsTaxIncluded value
> taken from the pricelist.


1. Make sure that the vendor pricelist P is used for G000X 

1. Create PMM_PurchaseCandidates for G000X from WebUI, for P0001 and P0002, with a PI e.g. G1 x 5kg

1. Open the PMM_PurchaseCandidate, search for bpartner G000X, and date of test

	|	Product		|	Price	|	
	| ------------	|:---------:|
	|	P0001		|	1.00	|	
	|	P0002		|	2.00	|	

	
1. Set a Quantity to Order (TU) 1 for both PMM_PurchaseCandidates, then create a purchase order for each (use filter!)

1. Open the purchase orders, and check tab Order Tax

	|	PO for		|	Tax (Example)	|	Tax Amount	|	Tax base Amount	|	Price includes Tax	|
	| ------------	|:-----------------:|:-------------:|:-----------------:|:---------------------:|
	|	P0001		|	2,5%			|	0.125		|	4.875			|	Y					|
	|	P0002		|	2,5%			|	0.25		|	9.75			|	Y					|	

	* PI G1 x 5kg is not included, but must have Price includes Tax=Y too!
	
	
1. Create the inouts for your orders in Wareneingang POS

1. Open the Invoice Candidates

	* => Price eff. and Price net are the same for each product
		
1. Create the invoices

	* => Total Lines and Grand Total are the same for each invoice
	
1. Check tab Invoice Tax

	|	I for		|	Tax (Example)	|	Tax Amount	|	Tax base Amount	|	Price includes Tax	|
	| ------------	|:-----------------:|:-------------:|:-----------------:|:---------------------:|
	|	P0001		|	2,5%			|	0.125		|	4.875			|	Y					|
	|	P0002		|	2,5%			|	0.25		|	9.75			|	Y					|	
	
	* PI G1 x 5kg is not included, but must have Price includes Tax=Y too!
	

1. Check the Jaspers for both order and invoice

	* => no tax added to the product price, the price of the product includes the tax, numbers are like above
	

**Regression**

1. Repeat testcase above, but with a bpartner that has vendor pricelist with IsTaxIncluded=N

	* => correct tax amt must be added to the product price, purchase order and invoice all have Price includes Tax=N set in the resp. tab
