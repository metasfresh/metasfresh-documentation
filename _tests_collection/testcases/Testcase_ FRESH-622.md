---
title: IT FRESH-622
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
layout: default
---

### #338 Get rid of legacy NOT-EQUALS operators from logic expression
> Testcase to check readonly, display and color logic

**Readonly logic**

1. Check readonly logic, using AND, OR logic

2. go to Product window and find a product which is of type R, E or O
	* => product's uom is readonly

3. go to Product window and find a product which is not of type R, E or O
	* => product's uom is editable
	
4. Check readonly logic, using simple = logic

5. Go to Geschaftspartner window, subtab Customer

6. set bpartner.isSales = N
	* => warehouse is readonly

6. set bpartner.isSales = Y
	* => warehouse is editable
	
**Color Logic**

1. create a sales order, complete and go to shipment schedule (set it on forced if is not)
	* => qty field is green

2. Make a partial inout, see shipment schedule
	* => qty is orange

3. make inout for the remaining qty
	* => qty is red

**Display logic**

1. test display logic using simple = logic

2. go to sales order and create a new one, set isdropship on Y
	* => 3 new fields appear: bpartner, address and location of dropship

3. set isdropship on N
	* => those 3 fields disappear

4. test display logic using AND, OR logic

5. create an invoice, for a bpartner which is edi, set isEdi on Y

6. close or complete the invoice
	* => edi button for validation appears
	
7. test display logic using 1=2 (false)

8. go to sales order and see if there is any processed checkbox
	* => no processed checkbox is ever seen
	
9. test display logic using !

10. create a purchase invoice, add a product and complete it
	* => there is no reversal_id shown

11. reverse correct the invoice
	* => reversal_id field is shown and set

12. test display logic using > or < 

13. create a new allocation header or open existing one which was made when you reversed the invoice above
	* => there is no reversal_id shown

14. reverse correct the allocation
	* => reversal_id field is shown and set