---
title: IT gh#791
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP   
layout: default
tags:
  - UI
  - Invoicing
---
## #791 Create Nachbelastung from Invoice Cast exception

> Testcase to check if Nachbelastung works fine without throwing exceptions


1. Create 2 sales invoices for G000X (manually or from order and inout):
	* P0001, 5 TU A, for 10.00 each; P0002, 10 TU B, for 5.50 each, set a reference
	* P0002, 11 TU B, for 5.50 each; P0001, 7 TU A, for 10.00 each, set a reference and a description
	
1. In the 1st invoice, click Nachbelastung:
	* => no error popping up
	* => small window opens, where you can select the type: Nachbelastung Mengendifferenz, Nachbelastung Preisdifferenz
	
1. Select Nachbelastung Mengendifferenz, OK
	* => new invoice window opens, doc type: Nachbelastung Mengendifferenz
	* => reference: same as 1st invoice
	* => all lines from original 1st invoice are included
	* => description: Nachbelastung for invoice: no. of 1st invoice, order reference: reference of 1st invoice, original invoice text: empty

1. Delete one of the invoice lines, and change the qty of TUs in the other invoice line; save & complete

1. Print the jasper:
	* => Nachbelastung, all info from the invoice displayed correctly (plus inout if you created one)
	
1. Check your original 1st invoice:
	* => the button for Nachbelastung is not displayed anymore, only for credit memo
	
1. In the 2nd invoice, click Nachbelastung:
	* => no error popping up
	* => small window opens, where you can select the type: Nachbelastung Mengendifferenz, Nachbelastung Preisdifferenz
	
1. Select Nachbelastung Preisdifferenz, OK
	* => new invoice window opens, doc type: Nachbelastung Preisdifferenz
	* => reference: same as 2nd invoice
	* => all lines from original 2nd invoice are included
	* => description: Nachbelastung for invoice: no. of 2nd invoice, order reference: reference of 2nd invoice, original invoice text: text from description in 2nd invoice
	
1. Delete one of the invoice lines, and change the price in the other invoice line; save & complete

1. Print the jasper:
	* => Nachbelastung, all info from the invoice displayed correctly (plus inout if you created one)
	
1. Check your original 2nd invoice:
	* => the button for Nachbelastung is not displayed anymore, only for credit memo	
	
1. If you like, you can reverse / delete one of your Nachbelastungen again, and check the original invoice once more:
	* => a new invoice is created, as coutnerpart for the reversed / deleted Nachbelastung, with neg. qties
	* => both Nachbelastungen are marked as paid, and have an allocation for the reversal / delete in tab Zuordnung
	* => the Nachbelastung button is displayed again in the original invoie´ce, you can create a new Nachbelastung 
