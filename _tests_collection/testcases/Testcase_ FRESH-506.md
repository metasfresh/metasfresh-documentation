---
title: IT FRESH-506
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
layout: default
---

### #175 Payment Rule SQL and Batch for "cheque"
> Testcase to check payment rule scheduler

**Payment rule in invoice**

1. Create new sales invoice and credit memo manually

2. check the paymentrule in database
	* => Payment rule is P (credit)

3. 	Create new purchase invoice and credit memo manually
	* => Payment rule is P (credit)

4. 	Create new sales order, go to invoice candidates and set invoice rule to immediate

5.  create invoice from gear 
	* => Payment rule is P (credit)	
	
6. Create new purchase order, go to invoice candidates and set invoice rule to immediate

7.  create invoice from gear 
	* => Payment rule is P (credit)	 

8. create new sales order, make inout then invoice from invoice candidates (don't change invoice rule) - gear
	* => Payment rule is P (credit)	 

9. create new purchase order, make inout then invoice from invoice candidates (don't change invoice rule) - gear
	* => Payment rule is P (credit)	 
	
10. in the database, set payment rule on S to all invoices you've just created

11. wait for the next day and check the invoices again
    * => Payment rule is P (credit)	for all invoices