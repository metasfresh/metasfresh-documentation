---
title: IT FRESH-533
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
layout: default
---

### #216 Accounting: Invoice grand total Fact_Acct line was not found
> Testcase to check if Invoice grand total Fact_Acct line was created when Allocating Writeoff/ Discount completely

**Invoice with Discount**

1. Create a new sales order and add a tax in the line >0. Complete

2. Create an outgoing payment, set the invoice, complete
	* => allocation was created, invoice grand total line was there

3. Create a new sales order and add a tax in the line >0. Complete

4. Create an outgoing payment, set the invoice, write a discount with the total amount, complete
	* => allocation was created, invoice grand total line was there

5. Create a new sales order and add a tax in the line >0. Complete

6. Create an outgoing payment, set the invoice, write a discount with a partial amount, complete
	* => allocation was created, invoice grand total line was there	

7. Create a new sales order and add a tax in the line >0. Complete

8. Create an outgoing payment, set the invoice, write a discount with the total writeoff, complete
	* => allocation was created, invoice grand total line was there

9. Create a new sales order and add a tax in the line >0. Complete

10. Create an outgoing payment, set the invoice, write a discount with a partial writeoff, complete
	* => allocation was created, invoice grand total line was there	
	
11. repeat the same steps from 1-10 but with a purchase invoice and incoming payment
	* => works the same
	
**Invoice without Discount**

1. Create a new sales order and add a tax in the line =0. Complete

2. Create an outgoing payment, set the invoice, complete
	* => allocation was created, invoice grand total line was there

3. Create a new sales order and add a tax in the line =0. Complete

4. Create an outgoing payment, set the invoice, write a discount with the total amount, complete
	* => allocation was created, invoice grand total line was there

5. Create a new sales order and add a tax in the line =0. Complete

6. Create an outgoing payment, set the invoice, write a discount with a partial amount, complete
	* => allocation was created, invoice grand total line was there	

7. Create a new sales order and add a tax in the line =0. Complete

8. Create an outgoing payment, set the invoice, write a discount with the total writeoff, complete
	* => allocation was created, invoice grand total line was there

9. Create a new sales order and add a tax in the line =0. Complete

10. Create an outgoing payment, set the invoice, write a discount with a partial writeoff, complete
	* => allocation was created, invoice grand total line was there	
	
11. repeat the same steps from 1-10 but with a purchase invoice and incoming payment
	* => works the same