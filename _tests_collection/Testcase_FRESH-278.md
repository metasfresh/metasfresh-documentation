---
title: IT FRESH-278
required data:
   bpartner: bpartners G000X & G000Y (customer & vendor)
   pricelist: vendor pricelist in EUR, vendor & customer pricelist in CHF
---

# IT FRESH-278
### Umsatzreport Geschäftspartner copy and modify
> Testcase to check if new report Umsatzreport Geschäftspartner Woche
> is working correctly.

	
1. Create sales orders I & II for G000X & G000Y:
		
	|	order	|	bpartner	|	product		|	product category	|	qty		|	price	|
	| --------- | ------------- |:-------------:|:---------------------:|:---------:|:---------:|
	|	I		|	G000X		|	P0001		|	category A			|	50		|	1.00	|
	|			|				|	P0004		|	category C			|	100		|	1.50	|		
	|			|				|	P0005		|	category C			|	80		|	2.00	|
	|	II		|	G000Y		|	P0002		|	category A			|	20		|	0.50	|
	|			|				|	P0003		|	category B			|	10		|	3.50	|		
	|			|				|	P0005		|	category C			|	10		|	0.75	|
	

1. Create the inouts for both, but don't complete them yet 

1. Run Umsatzreport Geschäftspartner Woche with filters:
	* Jahr von: current year
	* Woche von: current week (number)
	* Jahr bis: current year
	* Woche bis: current week (number)
	* Währung: CHF
	* check Sales Transaction
	
		* => no data for the inoutlines you created
		
1. Complete your inouts, run the report again with the same filters:

	*Report Header (for both bpartners)* 
	
	|	Währung	|	Art		|	 Zeitperiode (example)	|	Vergleichsperiode	|	Artikelkategorie	|	Artikel	|	Merkmal	|
	| --------- |:---------:|:-------------------------:|:---------------------:|:---------------------:|:---------:|:---------:|
	|	CHF		|	Verkauf	|	20 2016 - 20 2016		|	-					|	alle				|	alle	|	alle	|

	
	*Umsatzreport Geschäftspartner Woche G000X* 
	
	|	Artikel		|	Zeitperiode CHF		|	Vergleichsperiode CHF	|	Differenz CHF	|	%	|
	| ------------- |:---------------------:|:-------------------------:|:-----------------:|:-----:|
	|	category A	|						|							|					|		|
	|	P0001		|	50					|	0						|	50				|		|			
	|	category C	|						|							|					|		|
	|	P0004		|	150					|	0						|	150				|		|
	|	P0005		|	160					|	0						|	160				|		|
	
	
	*Umsatzreport Geschäftspartner Woche G000Y* 
	
	|	Artikel		|	Zeitperiode CHF		|	Vergleichsperiode CHF	|	Differenz CHF	|	%	|
	| ------------- |:---------------------:|:-------------------------:|:-----------------:|:-----:|
	|	category A	|						|							|					|		|
	|	P0002		|	10					|	0						|	10				|		|			
	|	category B	|						|							|					|		|
	|	P0003		|	35					|	0						|	35				|		|
	|	category C	|						|							|					|		|
	|	P0005		|	8					|	0						|	8				|		|
	
	
1. Make sure you have a sales inout for the previous week, G000X, P0004, qty: 75, price: 1.50 and P0005, qty: 15, price: 2.00 (create it if necessary)

1. Run Umsatzreport Geschäftspartner Woche with filters:
	* Jahr von: current year
	* Woche von: current week (number)
	* Jahr bis: current year
	* Woche bis: current week (number)
	* Vergleich Jahr von: previous year
	* Woche von: previous week (number)
	* Jahr bis: previous year
	* Woche bis: previous week (number)
	* Währung: CHF
	* check Sales Transaction
	* Geschäftspartner: G000X
	* Produkt-Kategorie: category C
	
	
	*Report Header*
	
	|	Währung	|	Art		|	 Zeitperiode (example)	|	Vergleichsperiode	|	Artikelkategorie	|	Artikel		|	Merkmal	|
	| --------- |:---------:|:-------------------------:|:---------------------:|:---------------------:|:-------------:|:---------:|
	|	CHF		|	Verkauf	|	20 2016 - 20 2016		|	19 2016 - 19 2016	|	alle				|	category C	|	alle	|
	
	
	*Umsatzreport Geschäftspartner Woche G000X* 
	
	|	Artikel		|	Zeitperiode CHF		|	Vergleichsperiode CHF	|	Differenz CHF	|	%		|
	| -------------	|:---------------------:|:-------------------------:|:-----------------:|:---------:|
	|	category C	|						|							|					|			|
	|	P0004		|	150					|	113						|	 38				|	 33,19	|		
	|	P0005		|	160					|	 30						|	130				|	433,33	|	
	
	
1. Open Rechnungsdispo for sales order I, and change the price for P0004 to 0.85, run report again with the same filters like the last time

	*Report Header*
	
	|	Währung	|	Art		|	 Zeitperiode (example)	|	Vergleichsperiode	|	Artikelkategorie	|	Artikel		|	Merkmal	|
	| --------- |:---------:|:-------------------------:|:---------------------:|:---------------------:|:-------------:|:---------:|
	|	CHF		|	Verkauf	|	20 2016 - 20 2016		|	19 2016 - 19 2016	|	alle				|	category C	|	alle	|
	
	
	*Umsatzreport Geschäftspartner Woche G000X* 
	
	|	Artikel		|	Zeitperiode CHF		|	Vergleichsperiode CHF	|	Differenz CHF	|	%		|
	| -------------	|:---------------------:|:-------------------------:|:-----------------:|:---------:|
	|	category C	|						|							|					|			|
	|	P0004		|	 85					|	113						|	 -28			|	-24,44	|		
	|	P0005		|	160					|	 30						|	 130			|	433,33	|	
	
	
1. Make sure you have a purchase inout for the current week, G000X, P0008, qty: 25, price: 1.25 EUR, ASI: Bio and P0009, qty: 10, price: 2.10 EUR, both category D (create it if necessary)

1. Run Umsatzreport Geschäftspartner Woche with filters:
	* Jahr von: current year
	* Woche von: current week (number)
	* Jahr bis: current year
	* Woche bis: current week (number)
	* Währung: EUR
	* don't check Sales Transaction
	* Geschäftspartner: G000X
	* Artikelkategorie: D
	* Merkmal: Bio
	
	
	*Report Header*
	
	|	Währung	|	Art		|	 Zeitperiode (example)	|	Vergleichsperiode	|	Artikelkategorie	|	Artikel		|	Merkmal	|
	| --------- |:---------:|:-------------------------:|:---------------------:|:---------------------:|:-------------:|:---------:|
	|	EUR		|	Einkauf	|	20 2016 - 20 2016		|	-					|	D					|	alle		|	Bio		|
	
	
	*Umsatzreport Geschäftspartner Woche G000X* 
	
	|	Artikel		|	Zeitperiode CHF		|	Vergleichsperiode CHF	|	Differenz CHF	|	%	|
	| -------------	|:---------------------:|:-------------------------:|:-----------------:|:-----:|
	|	category D	|						|							|					|		|
	|	P0008		|	31					|	 0						|	 31				|	 	|		
	
	
1. Reactivate the inout for P0009, and run report again with the filters:
	* Jahr von: current year
	* Woche von: current week (number)
	* Jahr bis: current year
	* Woche bis: current week (number)
	* Währung: EUR
	* don't check Sales Transaction
	* Geschäftspartner: G000X
	* Artikelkategorie: D
	
	
	*Report Header*
	
	|	Währung	|	Art		|	 Zeitperiode (example)	|	Vergleichsperiode	|	Artikelkategorie	|	Artikel		|	Merkmal	|
	| --------- |:---------:|:-------------------------:|:---------------------:|:---------------------:|:-------------:|:---------:|
	|	EUR		|	Einkauf	|	20 2016 - 20 2016		|	-					|	D					|	alle		|	alle	|
	
	
	*Umsatzreport Geschäftspartner Woche G000X* 
	
	|	Artikel		|	Zeitperiode CHF		|	Vergleichsperiode CHF	|	Differenz CHF	|	%	|
	| -------------	|:---------------------:|:-------------------------:|:-----------------:|:-----:|
	|	category D	|						|							|					|		|
	|	P0008		|	31					|	 0						|	 31				|	 	|	
	

1. Run report again with the filters:
	* Jahr von: current year
	* Woche von: current week (number)
	* Jahr bis: current year
	* Woche bis: current week (number)
	* Währung: EUR
	* don't check Sales Transaction
	* Geschäftspartner: G000X
	* Produkt: P0009
	
		* => report is empty