---
title: IT FRESH-273
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P00001 with tax 2.5%, P00002 with tax 3.8%
   HUs: TU A with Gebinde tax 0%, TU B with tax 3.8%
   sales pricelist: including P00001 (2.00 EUR), P00002 (5.00 EUR), TU A (1.00 EUR), TU B (1.00 EUR)
---

# IT FRESH-273
### Rekap Total for sales order and invoice jaspers wrong
> Testcase to check if Rekapitulation Total and taxes
> are displayed correctly in order and invoice jaspers.

**Order Jaspers**

1. Create a sales order (Auftrag) A for G000X:
	* add product P0001, qty: 10, on 1 TU A
	* add product P0002, qty: 10, on 1 TU B
	
1. Complete the order


1. Go to subtab Steuer (Order Tax)

	|	Steuer (Order Tax)			|	Results OrderTax line 1	|	Results OrderTax line 2		|	Results OrderTax line 3		|
	| -----------------------------	|:-------------------------:|:-----------------------------:|:-----------------------------:|
	|	Tax							|	2.5%					|	3.8%						|	0%							|
	|	Tax Amount					|	0.50					|	1.94						|	0.00						|			
	|	Tax Base Amount				|	20.00					|	51.00						|	1.00						|
	|	Packaging Tax				|	not checked				|	not checked					|	checked						|
	
	
1. Print preview the order

	|	Rekapitulation				|	Betrag (Amount)			|	
	| -----------------------------	|:-------------------------:|
	|	Total ohne MWST (w/o tax)	|	71.00					|	
	|	MWST Tax Amt 3.8%			|	1.94					|		
	|	MWST Tax Amt 2.5%			|	0.50					|	
	|	Total Gebinde MWST-frei		|	1.00					|	
	|	Rechnungstotal inkl. MWST	|	74.44					|


1. Create another sales order (Auftrag) B for G000X:
	* add product P0001, qty: 10, on 1 TU B

	
1. Complete the order and go to subtab Steuer (Order Tax)

	|	Steuer (Order Tax)			|	Results OrderTax line 1	|	Results OrderTax line 2		|	
	| -----------------------------	|:-------------------------:|:-----------------------------:|
	|	Tax							|	2.5%					|	3.8%						|	
	|	Tax Amount					|	0.50					|	0.04						|			
	|	Tax Base Amount				|	20.00					|	1.00						|	
	|	Packaging Tax				|	not checked				|	checked						|	


1. Print preview the order

	|	Rekapitulation				|	Betrag (Amount)			|	
	| -----------------------------	|:-------------------------:|
	|	Total ohne MWST (w/o tax)	|	20.00					|	
	|	MWST Tax Amt 2.5%			|	0.50					|	
	|	Total Gebinde 3.8%			|	0.04					|	
	|	Rechnungstotal inkl. MWST	|	20.54					|



**Invoice Jaspers**

1. Create and complete the inout (Lieferschein) for your order A with Lieferdispo, Auswahl liefern 

1. Create the invoice for your order A with Rechnungsdispo, Auswahl fakturieren

1. Create invoice from invoice candidates, check the invoice lines (LU is left out)

	|								|	Results invoice line 1	|	Results invoice line 2		|	Results invoice line 3		|	Results invoice line 4		|
	| -----------------------------	|:-------------------------:|:-----------------------------:|:-----------------------------:|:-----------------------------:|
	|	Product						|	P0001					|	P0002						|	TU A						|	TU B						|
	|	Tax							|	2.5%					|	3.8%						|	0.00						|	3.8%						|		
	|	Line Amount					|	20.00					|	50.00						|	1.00						| 	1.00						|
	|	Packaging Material			|	not checked				|	not checked					|	checked						|	checked						|
	

1. Go to subtab Steuer (Invoice Tax)

	|	Steuer (Order Tax)			|	Results OrderTax line 1	|	Results OrderTax line 2		|	Results OrderTax line 3		|
	| -----------------------------	|:-------------------------:|:-----------------------------:|:-----------------------------:|
	|	Tax							|	2.5%					|	3.8%						|	0%							|
	|	Tax Amount					|	0.50					|	1.94						|	0.00						|			
	|	Tax Base Amount				|	20.00					|	51.00						|	1.00						|
	|	Packaging Tax				|	not checked				|	not checked					|	checked						|


1. Print preview the invoice

	|	Rekapitulation				|	Betrag (Amount)			|	
	| -----------------------------	|:-------------------------:|
	|	Total ohne MWST, MWST 3.8%	|	51.00					|
	|	Total ohne MWST, MWST 2.5%	|	20.00					|		
	|	MWST Tax Amt 3.8%			|	1.94					|		
	|	MWST Tax Amt 2.5%			|	0.50					|	
	|	Total Gebinde MWST-frei		|	1.00					|	
	|	Rechnungstotal inkl. MWST	|	74.44					|


1. Create and complete the inout (Lieferschein) for your order B with Lieferdispo, Auswahl liefern 

1. Create the invoice for your order B with Rechnungsdispo, Auswahl fakturieren

1. Create invoice from invoice candidates, check the invoice lines (LU is left out)

	|								|	Results invoice line 1	|	Results invoice line 2		|
	| -----------------------------	|:-------------------------:|:-----------------------------:|
	|	Product						|	P0001					|	TU B						|	
	|	Tax							|	2.5%					|	3.8%						|			
	|	Line Amount					|	20.00					|	1.00						|	
	|	Packaging Material			|	not checked				|	checked						|	
	

1. Go to subtab Steuer (Invoice Tax)

	|	Steuer (Order Tax)			|	Results OrderTax line 1	|	Results OrderTax line 2		|	
	| -----------------------------	|:-------------------------:|:-----------------------------:|
	|	Tax							|	2.5%					|	3.8%						|	
	|	Tax Amount					|	0.50					|	0.04						|		
	|	Tax Base Amount				|	20.00					|	1.00						|	
	|	Packaging Tax				|	not checked				|	checked						|	


1. Print preview the invoice

	|	Rekapitulation				|	Betrag (Amount)			|	
	| -----------------------------	|:-------------------------:|
	|	Total ohne MWST, MWST 2.5%	|	20.00					|				
	|	MWST Tax Amt 2.5%			|	0.50					|	
	|	Total Gebinde 3.8%			|	0.04					|	
	|	Rechnungstotal inkl. MWST	|	20.54					|


1. You can check the inoutlines and the invoice candidates for both of your orders in database: isPackagingMaterial = Y for data of TU A and TU B, but NOT for data of P0001 and P0002

1. You can repeat the test for purchase side, credit memo, manual invoice and inout, inout and invoice for empties etc.
	* => if an HU has the same tax set as a product, then Packaging Tax will be NOT checked
	* => if an HU has a tax set which is not the usual one for Gebinde, but is not set for a product in the same order or invoice, then Packaging Tax will be checked 
	* => note that if you create a manual invoice, Packaging Material is not checked by default, so for Gebinde you have to check it manually

