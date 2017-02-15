---
title: IT gh#797
required data:
   bpartner: bpartner G000X (customer)
   product: P0001  
layout: default
tags:
  - UI
  - Invoicing
---
## #797 Zoom does not open new document

> Testcase to check if creating Credit Memo from Invoice opens the correct window

1. Create new sales invoice, and a product and complete it
	* => there are 2 new buttons: one for credit memo and one for adjustment charge
	
2. create new credit memo from the button, select a doctype (do not select complete it), press ok
	* => new credit memo is created and opened in a new window
	* => on the first invoice the credit memo button is readonly
	
3. repeat steps 1 and 2 for the other doctypes from credit memo
	* => works the same
	
4. create a new sales invoice, add a product and complete it
	* => there are 2 new buttons: one for credit memo and one for adjustment charge
	
5. press on create adjustment charge button and select a doctype, press ok
	* => new adjustment charge is created and opened in a new window
	* => on the first invoice the adjustment charge button is readonly

6. repeat steps 4 and 5 for the other doctypes from credit memo
	* => works the same
