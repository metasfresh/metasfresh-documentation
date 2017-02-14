---
title: IT gh#870
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Invoice
  - UI
---
## #870 Invoice Candidate price-qty overwrite lost when ReverseCorrect

> Testcase to check if the price-qty overwrite in Invoice Candidate is kept after ReverseCorrect of the invoice.

1. Create a sales order for G000X:
	* P0001, 2 TU A, 2.00
	* P0002, 3 TU B, 3.00
	* P0001, 1 TU B, 2.50
	
1. Create the inout for the order

1. Open the invoice candidates, and change the prices with price override field:
	* P0001, 2 TU A, 2.00: set 1.00
	* P0002, 3 TU B, 3.00: set 4.00
	* P0001, 1 TU B, 2.50: set 0.00
	
1. Save and wait for refresh, then invoice the ICs:
	* => prices used for invoicing are the ones set in override field
	* => ICs are marked as completely invoiced
	
1. ReverseCorrect the invoice (Storno):
	* => invoice is reverded, and marked as paid
	
1. Go back to invoice candidates:
	* => ICs are not invoiced anymore, can be invoiced again
	* => the prices you set in the override fields are still displayed as before
	
1. Invoice again:
	* => prices used for invoicing are still the ones set in override field
	
1. Create another sales order for G000X, same products and qties, and create the inout

1. Open the invoice candidates, and change the qties with qty override field:
	* P0001, 2 TU A, 20kg: set 10kg
	* P0002, 3 TU B, 3 Stk: set 4 Stk
	* P0001, 1 TU B, 10kg: set 0.00	
	
1. Save and wait for refresh, then invoice the ICs:
	* => qties used for invoicing are the ones set in override field
	* => ICs are marked as completely invoiced
	
1. ReverseCorrect the invoice (Storno):
	* => invoice is reverded, and marked as paid
	
1. Go back to invoice candidates:
	* => ICs are not invoiced anymore, can be invoiced again
	* => the qties you set in the override fields are still displayed as before
	
1. Invoice again:
	* => qties used for invoicing are the ones set in override field
	
1. Repeat the test for purchase side, with G000X as vendor:
	* => should work the same
	
1. Also make sure that you can still change the qty to invoice and price to invoice after the reverse, so reverse 2 invoices a 2nd time and change price to inovice override, and qty to invoice override, and invoice once more
	*=> the latest changes you set are taken for the invoice
