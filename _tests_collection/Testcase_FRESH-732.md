---
title: IT FRESH-732
required data:
   bpartner: bpartner G000X (customer)
   products: P0001   
layout: default
tags:
  - Invoicing
---
## #448 Rounding issue with partical credit memos

> Testcase to check if the rounding is done correctly in partial credit memos.


1. Create a sales order for G000X, for a huge qty of P0001, so that the overall amt to pay will be >10.000 CHF / EUR

1. Make sure you're using a pricing system that includes taxes!

1. Create the inout, and the invoice

1. Open Zahlung, and create a partial payment for the invoice:
	* select your invoice
	* set the amt to pay (Zahlungsbetrag) to 0,01 CHF / EUR (or another very small amt you prefer)
	* check over-underpayment, so that Abschreibungsbetrag becomes 0,00
	* if there is a Skonto amt set (from payment conditions, e.g.) you can leave it in or take it out
	
1. Save and complete

1. Go back to your invoice, check tab allocation:
	* => payment with 0,01 is displayed
	
1. In the 1st tab, press Credit Memo (Gutschrift) to create a credit memo:
	* select the normal type of Credit Memo
	* you can leave the boxes for references of sales order and invoice
	
1. Check the credit memo, and the amt that was credited:
	* => reference for your invoice
	* => amt: invoice amt - 0,01 OR invoice amt - 0,01 - Skonto amt
	
1. Check your invoice again:
	* => paid checkbox is checked
	* => tab allocations: credit memo is displayed as well
	
1. Try with other types of credit memo too; also, create orders / invoices that include different taxes
	* => should work the same 