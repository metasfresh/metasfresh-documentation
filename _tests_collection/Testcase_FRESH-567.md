---
title: IT FRESH-567
required data:
   bpartner:  bpartner G000X (customer), G000Y (vendor), G000Z (vendor)
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Tracking
---
## #262 sales and purchase tracking

> Testcase to check the excel reports for tracking products which were purchased and sold.

1. Make sure P0001 is used in CP and VP, for both G000X and G000Y, and there were no inouts on 1st day of test for those for P0001

1. Run the excel reports for tracking, purchase and sales side:
	* set periods for start & end
	* set org which will be used for the orders & inouts
	* set P0001
	* => both reports should be empty
	* => report names are: Einkaufsstatistik for purchase and Verkaufsstatistik for sales
	* => the filters you set are displayed in the report as well, with Filterkriterien: ...
	
1. Create sales order 00I, for G000X, P0001, qty: 5

1. Create purchase order 001, for G000Y, P0001, qty: 5

1. Create the inout for 001 in Wareneingang POS:
	* make sure that the destination warehouse = warehouse of sales order I!
	* note the HU(s) value which is used
	
1. Open Kommissionier Terminal, search for G000X and your order of P0001, OK

1. In 2nd window of Kommissionier Terminal, select the HU of your purchase inout in the HU Editor, OK

1. Run both reports again:
	* => both reports are empty, since you don't have 2 completed inouts for purchase and sales side! (will also be empty still if you check after creating the sales inout without completing it!)

1. Open Lieferdispo for your sales order 00I, and create the inout with the qty from Kommissionier Terminal (checkbox kommissionierte Menge)

1. Run the excel report for sales tracking (note: not all columns are included!):

	|     Datum     | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge | Lieferdatum | Lieferant | Bestell-Nr. |
	| :----------: | :-------------: | :------: | :---------: | :-------: | :-: | :-----------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        001         |

	
1. Run the excel report for the purchase tracking too (note: not all columns are included!):

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: | :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 1st day of test |        001         |  G000Y   |    P0001    |           |  5  | 1st day of test |       G000X       |       00I       |  5  |

	
1. Create 2 more sales orders, 0II and III, for G000X and P0001, both with qty: 5, set attribute: CH for Herkunft

1. Create another purchase order, 002, for G000Y and P0001, with qty: 10, leave attribute empty

1. Create 2 inouts in Wareneingang POS, with qty: 5 each

1. In Kommissionier Terminal, select an HU with qty: 5 for each sales order, then create the inouts from Lieferdispo 

1. Run the excel report for sales tracking again:

	|     Datum     | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge | Lieferdatum | Lieferant | Bestell-Nr. |
	| :----------: | :-------------: | :------: | :---------: | :-------: | :-: | :-----------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001 	  |           |  5  | 1st day of test  | G000Y  |        001         |
	| 1st day of test |       0II       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        002         |
	| 1st day of test |       III       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        002         |


	=> the attribute is taken from the inout, NOT from the order!
	
1. Run the excel report for the purchase tracking again too:

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: | :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 1st day of test |        001         |  G000Y   |    P0001    |           |  5  | 1st day of test |       G000X       |       00I       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       0II       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       III       |  5  |


	=> the attribute is taken from the inout, NOT from the order!
	
1. Create 2 more sales orders, 0IV and 00V, for G000X and P0001, both with qty: 2

1. Create another purchase order, 003, for G000Y and P0001, with qty: 4

1. Create 1 inout in Wareneingang POS, with the full qty

1. In Kommissionier Terminal, select the HU with qty: 4 and split off an HU with qty: 2 

1. Select 1 HU with qty: 2 for each sales order, then create the inouts from Lieferdispo

1. Run the excel report for sales tracking again:

	|     Datum     | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge | Lieferdatum | Lieferant | Bestell-Nr. |
	| :----------: | :-------------: | :------: | :---------: | :-------: | :-: | :-----------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        001         |
	| 1st day of test |       0II       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        002         |
	| 1st day of test |       III       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        002         |
	| 1st day of test |       0IV       |  G000X   |    P0001    |           |  2  | 1st day of test  | G000Y  |        003         |
	| 1st day of test |       00V       |  G000X   |    P0001    |           |  2  | 1st day of test  | G000Y  |        003         |
	

1. Run the excel report for the purchase tracking again too:

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: | :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 1st day of test |        001         |  G000Y   |    P0001    |           |  5  | 1st day of test |       G000X       |       00I       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       0II       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       III       |  5  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       0IV       |  2  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       00V       |  2  |

1. Create another sales order, 0VI for G000X and P0001, with qty: 5

1. Create 2 more purchase orders, 004 and 005, for G000Y and P0001, with qty: 2 and qty:3

1. Create the inouts in Wareneingang POS, with the full qty for each

1. In Kommissionier Terminal, select both the HUs from your both inouts in Wareneingang, and create the inout from Lieferdispo

1. Run the excel report for sales tracking again:

	|     Datum     | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge | Lieferdatum | Lieferant | Bestell-Nr. |
	| :----------: | :-------------: | :------: | :---------: | :-------: | :-: | :-----------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        001         |
	| 1st day of test |       0II       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        002         |
	| 1st day of test |       III       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        002         |
	| 1st day of test |       0IV       |  G000X   |    P0001    |           |  2  | 1st day of test  | G000Y  |        003         |
	| 1st day of test |       00V       |  G000X   |    P0001    |           |  2  | 1st day of test  | G000Y  |        003         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        004         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |  5  | 1st day of test  | G000Y  |        005         |
	
	
1. Run the excel report for the purchase tracking again too:

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: | :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 1st day of test |        001         |  G000Y   |    P0001    |           |  5  | 1st day of test |       G000X       |       00I       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       0II       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       III       |  5  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       0IV       |  2  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       00V       |  2  |
	| 1st day of test |        004         |  G000Y   |    P0001    |           |  2  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        005         |  G000Y   |    P0001    |           |  3  | 1st day of test |       G000X       |       0VI       |  5  |

	
1. Create another sales order, VII for G000X and P0001, with qty: 10

1. Create another purchase order, 006, for G000Y and P0001, with qty: 10

1. Create the inout in Wareneingang POS, with the full qty 

1. In Kommissionier Terminal, select the HU from Wareneingang and split off some qty on a new HU, then split off qty from the new HU (you can also do more splitting than that)

1. Select some of the HUs so you have qty: 8, and create the inout from Lieferdispo

1. Run the excel report for sales tracking again:

	|       Datum       | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferant | Bestell-Nr. |
	| :--------------: | :-------------: | :------: | :---------: | :-------: | :-: | :--------------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        001         |
	| 1st day of test |       0II       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        002         |
	| 1st day of test |       III       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        002         |
	| 1st day of test |       0IV       |  G000X   |    P0001    |           |  2  | 1st day of test | G000Y  |        003         |
	| 1st day of test |       00V       |  G000X   |    P0001    |           |  2  | 1st day of test | G000Y  |        003         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        004         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        005         |
	| 1st day of test |       VII       |  G000X   |    P0001    |           |  10 | 1st day of test | G000Y  |        006         |

	
1. Run the excel report for the purchase tracking again too:

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: | :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 1st day of test |        001         |  G000Y   |    P0001    |           |  5  | 1st day of test |       G000X       |       00I       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       0II       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       III       |  5  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       0IV       |  2  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       00V       |  2  |
	| 1st day of test |        004         |  G000Y   |    P0001    |           |  2  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        005         |  G000Y   |    P0001    |           |  3  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        006         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       VII       |  8  |

	
1. Select the remaining Menge: 2 in Kommissionier Terminal the NEXT DAY, and create the inout for that in Lieferdispo

1. Run the excel report for sales tracking again:

	|       Datum       | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferant | Bestell-Nr. |
	| :--------------: | :-------------: | :------: | :---------: | :-------: | :-: | :--------------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        001         |
	| 1st day of test |       0II       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        002         |
	| 1st day of test |       III       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        002         |
	| 1st day of test |       0IV       |  G000X   |    P0001    |           |  2  | 1st day of test | G000Y  |        003         |
	| 1st day of test |       00V       |  G000X   |    P0001    |           |  2  | 1st day of test | G000Y  |        003         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        004         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |  5  | 1st day of test | G000Y  |        005         |
	| 1st day of test |       VII       |  G000X   |    P0001    |           |  10 | 1st day of test | G000Y  |        006         |

	
	=> Lieferdatum in the sales tracking = the delivery date of the material receipt of the purchase order, NOT of the inout of the sales order! therefore there is no additional line!

	
1. Run the excel report for the purchase tracking again too:

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: | :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 1st day of test |        001         |  G000Y   |    P0001    |           |  5  | 1st day of test |       G000X       |       00I       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       0II       |  5  |
	| 1st day of test |        002         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       III       |  5  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       0IV       |  2  |
	| 1st day of test |        003         |  G000Y   |    P0001    |           |  4  | 1st day of test |       G000X       |       00V       |  2  |
	| 1st day of test |        004         |  G000Y   |    P0001    |           |  2  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        005         |  G000Y   |    P0001    |           |  3  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        006         |  G000Y   |    P0001    |           | 10  | 1st day of test |       G000X       |       VII       |  8  |
	| 1st day of test |        006         |  G000Y   |    P0001    |           | 10  | 2nd day of test |       G000X       |       VII       |  2  |

	
	=> Lieferdatum in the purchase tracking = the delivery date of inout of the sales order, NOT of the material receipt of the purchase order ! therefore there is an additional line here!
	
	
1. Create one more sales order VIII for G000X and P0002, with qty: 10, product UOM: Kg, price UOM: Stk

1. Create a purchase order 007 for G000Z and P0002, with qty: 10,  product & price UOM: Kg

1. In Wareneingang POS, make inout with 2 HUs, qty: 5 for each

1. In Kommissionier Terminal, select 1 HU from Wareneingang with qty: 5, set attribute: CH for Herkunft in the HU Editor and create the inout from Lieferdispo

1. Run the excel report for sales tracking again:

	|       Datum       | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Einheit	|	Menge |  Lieferdatum   | Lieferant | Bestell-Nr. |
	| :--------------: | :-------------: | :------: | :---------: | :-------: | :-------: | :-: | :--------------: | :----: | :----------------: |
	| 1st day of test |       00I       |  G000X   |    P0001    |           |  	|	5  | 1st day of test | G000Y  |        001         |
	| 1st day of test |       0II       |  G000X   |    P0001    |           |    	|	5  | 1st day of test | G000Y  |        002         |
	| 1st day of test |       III       |  G000X   |    P0001    |           |    	|	5  | 1st day of test | G000Y  |        002         |
	| 1st day of test |       0IV       |  G000X   |    P0001    |           |    	|	2  | 1st day of test | G000Y  |        003         |
	| 1st day of test |       00V       |  G000X   |    P0001    |           |    	|	2  | 1st day of test | G000Y  |        003         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |    	|	5  | 1st day of test | G000Y  |        004         |
	| 1st day of test |       0VI       |  G000X   |    P0001    |           |    	|	5  | 1st day of test | G000Y  |        005         |
	| 1st day of test |       VII       |  G000X   |    P0001    |           |    	|	10 | 1st day of test | G000Y  |        006         |
	| 2nd day of test |      VIII       |  G000X   |    P0002    |  CH       | Stk 	|	10 | 2nd day of test | G000Z  |        007         |
	
	
	=> the attribute is taken from the inout, NOT from the order! the price UOM is taken, not product UOM!
	
1. Run the excel report for the purchase tracking again too:

	|       Datum      | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal |	Einheit	| Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :---------: | :--------------: | :---------: | :-----: | :------:	| :---: | :------------: | :-------: | :----------: | :---: |
	| 1st day of test |        001   |  G000Y   |    P0001    |           |    	|	5  | 1st day of test |       G000X       |       00I       |  5  |
	| 1st day of test |        002   |  G000Y   |    P0001    |           |   	|	10 | 1st day of test |       G000X       |       0II       |  5  |
	| 1st day of test |        002   |  G000Y   |    P0001    |           |   	|	10 | 1st day of test |       G000X       |       III       |  5  |
	| 1st day of test |        003   |  G000Y   |    P0001    |           |    	|	4  | 1st day of test |       G000X       |       0IV       |  2  |
	| 1st day of test |        003   |  G000Y   |    P0001    |           |    	|	4  | 1st day of test |       G000X       |       00V       |  2  |
	| 1st day of test |        004   |  G000Y   |    P0001    |           |    	|	2  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        005   |  G000Y   |    P0001    |           |    	|	3  | 1st day of test |       G000X       |       0VI       |  5  |
	| 1st day of test |        006   |  G000Y   |    P0001    |           |   	|	10 | 1st day of test |       G000X       |       VII       |  8  |
	| 1st day of test |        006   |  G000Y   |    P0001    |           |   	|	10 | 2nd day of test |       G000X       |       VII       |  2  |
	| 2nd day of test |        007   |  G000Z   |    P0002    |           |  Kg |	10 | 2nd day of test |       G000X       |      VIII       |  5  |

	
	=> the attribute is taken from the sales inout, NOT from the material receipt!
	
1. In Kommissionier Terminal, select the other 1 HU from Wareneingang with Menge: 5, set attribute: CH for Herkunft in the HU Editor and create the inout from Lieferdispo (must be the same qty, attribute etc., so the inout is practically doubled!)

1. Run the excel report for sales tracking again, but filter also for G000X and attribute: CH!:

	|       Datum       | Auftrags-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal | Einheit	| Menge |  Lieferdatum   | Lieferant | Bestell-Nr. |
	| :--------------: | :-------------: | :------: | :---------: | :-------: |  :-------: |  :-: | :--------------: | :----: | :----------------: |
	| 2nd day of test |      VIII       |  G000X   |    P0001    |   CH      |   Stk 	|	10  | 2nd day of test | G000Z  |        007         |

	
	=> no added line for the 2nd inout and no sum, since the full qty & data of the sales order was already tracked with the 1st inout!

1. Run the excel report for the purchase tracking again too, but filter for G000Z instead of P0001!:

	|       Datum       | Bestell-Nr. | Geschäftspartner | Produkt-Nr. | Merkmal |  Einheit	| Menge |  Lieferdatum   | Lieferort | Auftrags-Nr. | Menge |
	| :--------------: | :----------------: | :------: | :---------: | :-------: |   :-------: |  :-: | :--------------: | :---------------: | :-------------: | :-: |
	| 2nd day of test |        007         |  G000Z   |    P0001    |           |    Kg 	|	10  | 2nd day of test |       G000X       |      VIII       | 10  |
	
	
	=> no added line for the 2nd inout, BUT increased Menge for the qty used in 2nd inout!
