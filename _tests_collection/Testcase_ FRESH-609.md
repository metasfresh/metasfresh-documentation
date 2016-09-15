---
title: IT FRESH-609
required data:
   bpartner: G0001 (vendor)
   products: P0001, P0002 
   warehouse: wh1
layout: default
---

### #319 material tracking - deduplicate numbers in article statistics report
> Testcase to check article statistics report on quality inspection

**Article Statistics Report**

1. pick a bpartner (G0001) which has flatrate term, with flatrate conditions for product P0001

2. if you can't find one, you can create it from Business Partner window, on gear

3. go to Material Tracking window and create a new one

4. set BPartner G0001, ID e.g. 1234, a parcel, product P0001, lagerkonf. version Karotten Abrechnung mit Lager

5. go to purchase order and create a new one for bpartner G0001

6. add product P0001, set on ASI the Material Tracking you did at step 3 and the parcel

7. complete order, go to Receipt POS

8. select the line for your order and set warehouse to wh1

9. make inout

10. go to Manufacturing order and create a new one 
	* type quality inspection
	* date today
	* product P0002 (which has P0001 as a component)
	* warehouse wh1
	* material tracking: the one you created on step 3
	
11. complete the order and go to manufacturing pos

12. select your line and allocate P0001

13. receive P0002 and close the line

14. Run Article Statistics Report for:
	* current period
	* sales transaction: N
	* bpartner G0001
		* => you get a jasper file with all invoiced products for this bpartner for the last 1 year, with sums per periods

15. keep this file open

16. go to invoice candidates, filter for material tracking from step 3 and create a new invoice from gear (make sure the invoice is posted)
	* => you get an invoice of type downpayment

17. run Article Statistics Report again and compare with the one from step 15, for the products you have in invoice
	* => the sums are the same
	
18. go to Manufacturing order and create a new one, same as before

19. repeat steps 10-13

20. go to invoice candidates, filter for material tracking from step 3 and create a new invoice from gear (make sure the invoice is posted)
	* => you get an invoice of type final settlement

21. run Article Statistics Report again and compare with the one from step 15, for the products you have in invoice
	* => you get the qtys from this last invoice summed up for each product
