---
title: IT FRESH-251
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A x 5kg, TU B x 1kg
---

# IT FRESH-251
### Inout created from Picking-Parm shall only have picked Qty LU-TU too
> Testcase to check if the inout only shows Qty LU-TU
> as it was picked before in Kommissionierung.


**Picking in Kommissionierung without Verdichtung**

1. Make sure P0001 and P0002 both have TU A x 5kg and TU B x 2kg selectable as Packvorschrift 

1. Create and complete a sales order I (Auftrag) for G000X:
	* P0001, 10 TU A x 5kg (overall qty 50)
	* P0002, 5 TU A x 5kg (overall qty 25)
	
1. In Kommissionier Terminal, select both orderlines for picking, OK 

1. Select a picking slot, then select P0001

1. Select TU A x 5kg to set in the picking slot 

1. Use button Hinzuf to put qty 5 (= 5 CUs!) into the picking slot

1. Select P0002, and use Hinzuf to put qty 2 (=2CUs!) into the same picking slot

1. Click Schliessen and OK

1. Open Lieferdispo for your Auftrag, and create the inout with Auswahl liefern, check Erstellen mit kommissionierter Menge statt Liefermenge

1. Open the created inout (status: Draft)

	|	Product in inoutline		|	Menge (Qty)			|	Menge TU (Qty TU)	|	Packvorschrift-Produkt Zuordnung	|	
	| -----------------------------	|:---------------------:|:---------------------:|:-------------------------------------:|
	|	P0001						|	5					|	1					|	TU A x 5kg							|
	|	P0002						|	2					|	0					|	TU A x 5kg							|		
	|	TU A						|	1					|	*empty*				|	*empty*								|
	|	*LU*						|	**no line for LU!**	|						|										|		
	
	
		* => note that Menge TU for P0002 is 0, because the qty CU of this product is included in the TU used for both products, which is the 1 in Menge TU of P0001!

		
1. Complete the inout
	* => no line for LU is added

	
	
1. Create and complete another sales order II (Auftrag) for G000X:
	* P0001, 2 TU A x 5kg (overall qty 10)
	* P0002, 1 TU B x 1kg (overall qty 1)	
	
1. Go back to Kommissionier Terminal, select both orderlines for picking, OK 

1. Select a picking slot, then select P0001

1. Select TU A x 5kg to set in the picking slot 

1. Use button Verteil to put qty 1 (= 1 TU / 5 CU) into the picking slot

1. Select TU B x 1kg to set in the picking slot now

1. Use button Hinzuf to put qty 2 (= 2 CUs!) into the picking slot

1. Select P0002, and use Hinzuf to put qty 1 (=1 CU!) into the same picking slot

1. Click Schliessen and OK, and create the inout with Lieferdispo, Auswahl liefern, check Erstellen mit kommissionierter Menge statt Liefermenge and Lieferung(en) Fertigstellen

1. Open the created inout (status: Completed)

	|	Product in inoutline		|	Menge (Qty)			|	Menge TU (Qty TU)	|	Packvorschrift-Produkt Zuordnung	|
	| -----------------------------	|:---------------------:|:---------------------:|:-------------------------------------:|
	|	P0001						|	7					|	2					|	TU A x 5kg							|
	|	P0002						|	1					|	0					|	TU B x 1kg							|		
	|	TU A						|	1					|	*empty*				|	*empty*								|
	|	TU B						|	1					|	*empty*				|	*empty*								|
	|	*LU*						|	**no line for LU!**	|						|										|		

	
		* => note that the Packvorschrift-Produkt Zuordnung is taken from sales order, so therefore P0001 only has TU A x 5kg displayed there; in the jasper inout both TU A x 5kg AND TU B x 1kg will be displayed for P0001! 
		* => note that Menge TU for P0002 is 0, because the qty CU of this product is included in the TU used for both products, which is included in Menge TU of P0001!


		
		
**Picking in Kommissionierung with Verdichtung**
	
1. Create and complete another sales order III (Auftrag) for G000X:
	* P0001, 1 TU A x 5kg (overall qty 5)
	* P0002, 2 TU B x 1kg (overall qty 2)	
	
1. Go back to Kommissionier Terminal, select both orderlines for picking, OK 

1. Select a picking slot, then select P0001

1. Select TU A x 5kg to set in the picking slot 

1. Use button Verteil to put qty 1 (= 1 TU / 5 CU) into the picking slot

1. Select P0002

1. Select TU B x 1kg to set in the picking slot now

1. Use button Verteil to put qty 2 (= 2 TU / 2 CU) into the picking slot

1. Click OK

1. Open Verdichtung POS, the warehouse from your sales order and G000X, OK
	* => you have 3 TUs in HU Editor: 1 TU A x 5kg with P0001, and 2 TUs B x 1kg with P0002

1. Select both, click LU zuteilen and put them on an LU

1. Select the LU, select a Speditionsauftrag, OK

1. Click Lieferschein erstellen

1. Open the inout

	|	Product in inoutline		|	Menge (Qty)			|	Menge TU (Qty TU)	|	Packvorschrift-Produkt Zuordnung	|
	| -----------------------------	|:---------------------:|:---------------------:|:-------------------------------------:|
	|	P0001						|	5					|	1					|	TU A x 5kg							|
	|	P0002						|	2					|	2					|	TU B x 1kg							|		
	|	TU A						|	1					|	*empty*				|	*empty*								|
	|	TU B						|	2					|	*empty*				|	*empty*								|
	|	**LU**						|	**1**				|	*empty*				|	*empty*								|		

		

		
**Regression**

1. Go back to Lieferdispo for your sales order I
	* => Geliefert for P0001: 5, Geliefert for P0001: 2
	* => Liefermenge for P0001: 45, Liefermenge for P0002: 23
	
1. Create the inout with Auswahl liefern, do NOT check Erstellen mit kommissionierter Menge statt Liefermenge this time!

1. Open the created inout (status: Draft/Completed, depending on whether you checked Lieferung(en) Fertigstellen)

	|	Product in inoutline		|	Menge (Qty)			|	Menge TU (Qty TU)	|	Packvorschrift-Produkt Zuordnung	|	
	| -----------------------------	|:---------------------:|:---------------------:|:-------------------------------------:|
	|	P0001						|	45					|	9					|	TU A x 5kg							|
	|	P0002						|	23					|	5					|	TU A x 5kg							|		
	|	TU A						|	14					|	*empty*				|	*empty*								|
	|	LU							|	1					|	*empty*				|	*empty*								|	
		
