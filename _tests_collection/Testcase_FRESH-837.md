---
title: IT FRESH-837
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #552 division by 0 in costprice report

> Testcase to check if the bug regarding division by 0 in costprice report is fixed.

1. Run the costprice report, leave it open for comparison:
	* make sure there are no lines & qties yet for your products and TUs

1. Make sure TU A and TU B have a price set in the PLV used in costprice report:
	* TU A: 5.00
	* TU B: 2.00

1. Create a purchase order for G000X:
	* P0001, 10 TU A x 1kg (set price: 1.00)
	* P0002, 5 TU B x 2 Stk (set price: 1.00)
	
1. Create receipts in Wareneingang POS:
	* P0001, 5 TU A
	* P0002, 2 TU B
	
1. Run the costprice report:
	* P0001, qty: 5kg, average price: 1.00, sum: 5.00
	* TU A, qty: 5, average price: 5.00, sum: 25.00
	* P0002, qty: 4Stk, average price: 1.00, sum: 4.00
	* TU B, qty: 2, average price: 2.00, sum: 4.00
	
1. Create a report for empties:
	* TU A: qty: 5
	* TU B: qty: 1
	
1. Run the costprice report for TU A:
	* 2 lines, qty: 5, qty: -5, average price: 5.00 for both, sum: 0.00
	
1. Create another purchase order for G000X:
	* P0001, 5 TU A x 1kg (set price: 0.50)
	* P0002, 2 TU B x 2 Stk (set price: 2.00)
	
1. Create receipts in Wareneingang POS:
	* P0001, 5 TU A
	* P0002, 2 TU B
	
1. Run the costprice report once more:
	* P0001, qty: 10kg, average price: 0.75, sum: 7.50 
	* TU A, qty: 5, average price: 5.00, sum: 25.00
	* P0002, qty: 8Stk, average price: 1.50, sum: 12.00
	* TU B, qty: 3, average price: 2.00, sum: 6.00
	

**Note:** the original bug happened when the qties of 1 HU type was +x qty in one warehouse and -x qty in another, so you need to test with the same qty from Wareneinang (+, in warehouse for Wareneingang)
 and the same qty from empties report (-, in warehouse for empties)!
	
	