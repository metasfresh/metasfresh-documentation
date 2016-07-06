---
title: IT FRESH-417
required data:
   bpartner: bpartner G000X (customer, org1), G000Y (vendor, org2)
   products: P0001(org1), P0002(org2) or more
   rolle: rolle1 (org1), rolle2 (org2)
layout: default
---

### Create view and window to identify missing counter documents
> Testcase to check if missing counter documents are listed in rv_missing_counter_documents window

**Setup**

1. Open document type window

2. open doctype bestellung and set "create counter document" and "default counter document" on Y

3. open doctype standardauftrag and set "create counter document" and "default counter document" on Y

4. open c_docbasetype_counter window and set the entries for POO-SOO and SOO-POO inactive

5. open Counter document window and set inactive the one for document type bestellung and counter document type standardauftrag

6. go to business partner window and open the bpartner for your organisation G000X, org1 (the one you are logged on with)

7. open subtab customer and add a sales price system from another organization, org2 

8. open the bpartner for another organisation G000Y, org2

9. open subtab vendor and set a purchase price system from org1 

10. make sure that on both pricelist exists the same product P0001 and P0002 (it's the same product, but the value differs.  See M_Product_Mapped_V)

**rv_missing_counter_documents window**

1. Open a new instance with rolle2, org2

2. go to purchase order and create a new one, add product P0002 (ca also add more products)
 
3. complete the order and go back to the instance of rolle1, org1
	* => there was not created any sales order

4. open rv_missing_counter_documents window
    * => there is 1 (or multiple new entries, depending how many lines you have in your purchase order) new entry 
	* => there you have org2 set, your purchase order's document number, and a link to it. The counter fields are empty

5. go to c_docbasetype_counter and reactivate the entries you inactivated
 
6. you can also go to Counter document window and activate back the entrie for bestellung-standardauftrag

7. go to instance with rolle2, org2 and create a new purchase order, same product(s)

8. go to instance of rolle1, org1
	* => new sales order was created
	* => ref_orderline_id and ref_order_id are set

9. open rv_missing_counter_documents window and search for new entries
    * => there were no new entries created

10. reactivate the sales order and delete a line, complete it back
    * => ref_order_id is not set anymore

11. open rv_missing_counter_documents window and search for new entries
    * => 1 new entry created, for the removed line
    * => The counter fields are empty because ref_order_id is not set in sales order

12. create a new purchase order in rolle2, org2

13. add the same product(s) and complete it
    * => new sales order created 

14. go to database and for the new sales order, set ref_orderline_id on null, for one of the lines

15. open rv_missing_counter_documents window and search for new entries
    * => one new entry for org1, your sales order. 
    * => The counter fields are set with purchase order from org2
