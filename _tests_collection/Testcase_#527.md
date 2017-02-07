---
title: IT #527
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - MRP Product Info
---
## #527 MRP Product Info not correct after VO RC CL

> Testcase to check if MRP Product Info is updated correctly after using docactions VO, RC & CL.


1. Create a sales order for G000X, complete it:
	* P0001, 2 TU A (10kg)
	* P0002, 1 TU B (5Stk)
	
1. Check MRP Product Info for the 2 products:
	
	| Product | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | -------------------- | ----------------- |
	| P0001   | -10                  | 10                |
	| P0002   | -5                   | 5                 |
	

1. Reverse the sales order (RC, Storno), and check the MRP Product Info after refresh:
	* => no lines for the products anymore
	
1. Create another sales order, with the same products and qties, check MEP Product Info:
 
	| Product | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | -------------------- | ----------------- |
	| P0001   | -10                  | 10                |
	| P0002   | -5                   | 5                 |
	
	
1. Void the sales order (VO, Löschen), and check the MRP Product Info after refresh:
	* => no lines for the products anymore
	
1. Create another sales order, with the same products and qties, check MEP Product Info:
 
	| Product | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | -------------------- | ----------------- |
	| P0001   | -10                  | 10                |
	| P0002   | -5                   | 5                 |

	
1. Close the sales order (CL, Schliessen), and check the MRP Product Info after refresh:
	* => all qties in MRP Product Info are now 0.00
	
1. Create another sales order, with the same products and qties, check MEP Product Info:
 
	| Product | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | -------------------- | ----------------- |
	| P0001   | -10                  | 10                |
	| P0002   | -5                   | 5                 |
	

1. Create an inout with Lieferdispo, Auswahl liefern, don't complete it yet, and check the MRP Product Info after refresh:
	* => no change
	
1. In the inouts, set qty for P0001 to 5 and for P0002 to 2, then complete it and check the MRP Product Info after refresh:
	
	| Product | Zählbestand | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | -5          | -10                  | 5                 |
	| P0002   | -2          | -5                   | 3                 |
	
	
1. Reverse the inout (RC, Storno), and check the MRP Product Info after refresh:

	| Product | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | -------------------- | ----------------- |
	| P0001   | -10                  | 10                |
	| P0002   | -5                   | 5                 |
	
	
1. Create another partial inout, same qties, and check the MRP Product Info after refresh:
	
	| Product | Zählbestand | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | -5          | -10                  | 5                 |
	| P0002   | -2          | -5                   | 3                 |
	
	
1. Void the inout (VO, Löschen), and check the MRP Product Info after refresh:

	| Product | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | -------------------- | ----------------- |
	| P0001   | -10                  | 10                |
	| P0002   | -5                   | 5                 |
	
	
1. Create another partial inout, same qties, and check the MRP Product Info after refresh:
	
	| Product | Zählbestand | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | -5          | -10                  | 5                 |
	| P0002   | -2          | -5                   | 3                 |
	
	
1. Close the inout (CL, Schliessen), and check the MRP Product Info after refresh:

	| Product | Zählbestand | Zusagbar Zählbestand | Reservierte Menge |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | -5          | -10                  | 5                 |
	| P0002   | -2          | -5                   | 3                 |
	
	
1. Create a purchase order for G000X, complete it:
	* P0001, 2 TU A (10kg)
	* P0002, 1 TU B (5Stk)
	
1. Check MRP Product Info for the 2 products:
	
	| Product | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | -------------------- | ----------------- |
	| P0001   | 10                   | 10                |
	| P0002   | 5                    | 5                 |
	
	
1. Reverse the order (RC, Storno), and check the MRP Product Info after refresh:
	* => no lines for the products anymore
	
1. Create another purchase order, with the same products and qties, check MEP Product Info:

	| Product | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | -------------------- | ----------------- |
	| P0001   | 10                   | 10                |
	| P0002   | 5                    | 5                 |
	
	
1. Void the order (VO, Löschen), and check the MRP Product Info after refresh:
	* => no lines for the products anymore
	
1. Create another purchase order, with the same products and qties, check MEP Product Info:

	| Product | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | -------------------- | ----------------- |
	| P0001   | 10                   | 10                |
	| P0002   | 5                    | 5                 |
	

1. Close the order (CL, Schliessen), and check the MRP Product Info after refresh:
	* => all qties in MRP Product Info are now 0.00
	
1. Create another purchase order, with the same products and qties, check MEP Product Info:

	| Product | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | -------------------- | ----------------- |
	| P0001   | 10                   | 10                |
	| P0002   | 5                    | 5                 |
	

1. In Wareneingang POS, create receipts:
	* P0001: 8kg
	* P0002: 4Stk
	
1. Check the MRP Product Info after refresh:

	| Product | Zählbestand | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | 8           | 10                   | 2                 |
	| P0002   | 4           | 5                    | 1                 |
	
	
1. Reverse the receipt (RC, Storno), and check the MRP Product Info after refresh (try BOTH in Wareneingang window and with Korrektur in Wareneingang POS, result must be the same!):

	| Product | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | -------------------- | ----------------- |
	| P0001   | 10                   | 10                |
	| P0002   | 5                    | 5                 |
	

1. Create receipts like before, in Wareneingang POS, and check the MRP Product Info after refresh:

	| Product | Zählbestand | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | 8           | 10                   | 2                 |
	| P0002   | 4           | 5                    | 1                 |
	
	
1. Void the receipt (VO, Löschen), and check the MRP Product Info after refresh:
	
	| Product | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | -------------------- | ----------------- |
	| P0001   | 10                   | 10                |
	| P0002   | 5                    | 5                 |
	

1. Create receipts like before, in Wareneingang POS, and check the MRP Product Info after refresh:

	| Product | Zählbestand | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | 8           | 10                   | 2                 |
	| P0002   | 4           | 5                    | 1                 |
	
	
1. Close the receipt (CL, Schliessen), and check the MRP Product Info after refresh:
	
	| Product | Zählbestand | Zusagbar Zählbestand | Bestellte Menge   |
	| ------- | ----------- | -------------------- | ----------------- |
	| P0001   | 8           | 10                   | 2                 |
	| P0002   | 4           | 5                    | 1                 |
