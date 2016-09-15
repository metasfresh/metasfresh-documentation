---
title: IT FRESH-555
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A
layout: default
---

### #249 Referenzliste in AttributeValue
> Testcase to check if ADR Attributes still work without reference list

**Pricelist**

1. Create a new sales order, add bpartner G000X and a pricelist

2. zoom in to the pricelist and pick a product P0001

3. set that is attribute price

4. in next subtab add price 3, TU A as a HU and new line in attributes with ADR Val1. Make it standard

5. go back to your order and add a new line with product P0001, TU A from quickinput
	* new line is added, ASI has ADR Val1 and price is 3
	* you can complete the order without any problems 
	
6. Do the same steps 1-5 for Purchase Order
	* works the same
	
**Simple sales order to invoice**

1. Create a sales order with 3 lines of the same product P0002, 2 lines with same ADR attribute and 1 with a different one

2. print preview the order
	* you have 3 lines for each product and the attributes say "adr"
	
3. check created shipment schedules
	* all have the right value of your adr, the ones you have in order
	
4. Make shipment from gear
	* each product gets to its own shipment line because there is one shipment line/ order line
	* each adr is correct, like you set in order
	
5. print preview the inout
	* you have 3 lines for each product and the attributes say "adr"

6. go to bpartner and set print format to the one with ADR specific (inactivate or remove it after step 7)

7. print preview the inout again 
	* you have 3 lines for each product and the attributes say "adr"+ the value of the adr
	
8. open invoice candidates and make invoice from gear
	* invoice created with 3 lines for each product and the attributes values are the same as in order
	
9. print preview 
	* you have 3 lines for each product and the attributes say "adr"
	
**Simple purchase order to invoice**

1. Create a purchase order with 3 lines of the same product P0002, 2 lines with same ADR attribute and 1 with a different one

2. print preview the order
	* you have 3 lines for each product and the attributes say "adr"
	
3. go to receipt pos and select your lines to make inout one by one
	* each HU has the right value of your adr, the ones you have in order
	
4. Go to created inouts
	* each product has the correct adr, the one you set in order
	
5. print preview the inout
	* you have 1 line for all products (because they sum up) and the attributes say "adr"

6. open invoice candidates and make invoice from gear
	* invoice created with 3 lines for each product and the attributes values are the same as in order
	
7. print preview 
	* you have 1 line for the product and the attributes say "adr"

**InOut with summed up lines**

1. Create a sales order with 1 line for a product on 3 TUs (no attributes)

2. Create a purchase order for the same product (at least the qty from sales order)

3. go to wareneingang pos and move it to the warehouse of the sales order and create a receipt

4. Go to Kommissionier Terminal, select your warehouse and product

5. select the picking slot, your product and press on hu editor button

6. split the TU from your purchase order on 3 different LUs

7. Set Marke ADR for 2 of the LUs with the same value (ADR 1)

8. Set another Marke ADR for the third LU (ADR 2)

9. Go to verdichtung pos and select your warehouse and bpartner

10. select your HUs and set a transport, make inout

11. go to created inout
	* There is one shipment line for ADR 1 with the qty summed up from both ADR 1 HUs
    * There is a second shipment line for the qty with ADR 2

12.	print preview 	
	* there are 2 lines with "adr" (for customer specific you also have the values of the ADR)
	
**ADR matching**

1. Have Partner1 with ADR1 set as ADR Region (In Customer) - for this you have to go to bpartner window, select Partner1 and go to subtab Customer. There check adr region and then pick value ADR1

2. Have Partner2 with ADR1 set as ADR_Vendor Region (in Vendor) - for this you have to go to bpartner window, select Partner2 and go to subtab Vendor. There check adr region and then pick value ADR1

3. Create a sales order for Partner1, with a line for Product1, in Warehouse1

4. add a product and set the ASI to ADR1

5. Go to the sales order's deliveryRule and set it to "Available" (not Forced!)

6. Complete the order, and check the shipment schedule
	* The shipment schedule has no QtyToDeliver (color red)

7. Create a purchase order for Partner2, for the same product (put a lower qty than the one from the sales order)

8. Change the ASI to ADR2 (ADR2 shall not contain ADR1 in it)

9. go to Wareneingang pos and create a material receipt based on the purchase order, put it in Warehouse1

10. Check the shipment schedule
	* The shipment still has no QtyToDeliver (color red)

11. create another purchase order, same as in step 7, but this time set ASI to ADR3 (which is a combination between ADR1 and other value)

12. go to Wareneingang pos and create a material receipt based on the purchase order, put it in Warehouse1
	* The shipment schedule now has QtyToDeliver set (color orange because you put less qty in the purchase order)

13. create another purchase order, same as in step 7, but this time set ASI to ADR1 

14. go to Wareneingang pos and create a material receipt based on the purchase order, put it in Warehouse1
	* The shipment schedule now has QtyToDeliver set (color red, or orange if you have less qty than in the sales order)

15. go to komissionier terminal and pick all HUs

16. go to shipment schedule and make inout with the available HUs

17. go to created inout
	* inout created with 2 lines, one with ADR1 and one with ADR3

18. Create another sales order, add a product and this time leave ASI empty

19. Create a purchase order and put ASI ADR2

20. go to Wareneingang pos and create a material receipt based on the purchase order, put it in Warehouse1

21. Check the shipment schedule
	* The shipment still has no QtyToDeliver (color red)

22. go to komissionier terminal and pick all HUs

23. go to shipment schedule and make inout with the available HUs

24. go to created inout
    * inout created with 1 line, with ADR2
