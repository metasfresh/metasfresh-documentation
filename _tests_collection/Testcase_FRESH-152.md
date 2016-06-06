---
title: IT FRESH-152
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
---

# IT FRESH-152
### Extract statistics fields from C_BPartner and put them to a new table called C_BPartner_Stats
> Testcase to check if the C_BPartner_Stats table updates accordingly

**C_BPartner_Stats table**

1. go to business partner window, C_BPartner_Stats subtab
	* => you see there the following fields: client, org, bpartner, isactive, credit, credit status, actual value, open balance
	* => SO_CreditUsed, TotalOpenBalance & ActualLifeTimeValue not included in C_BPartner table. These columns are in C_BPartner_Stats
	
**C_BPartner_Stats after invoice**

1. Create new purchase invoice, manually

2. add a product, a quantity and a price. Complete 
	* => async process for bpartner_stats ran ok, no errors

3. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2)  

4. Create a sales invoice, manually 

5. repeat steps 2 and 3
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2)
	* => async process for bpartner_stats ran ok, no errors
	
6. create a sales and a purchase invoice, automatically, from orders: 
	* create a sales and purchase orders. Add a product and some prices. Complete
	* go to shipment schedule window, gear, create inout (auswahl liefern) - for the sales order
	* go to sales inout window and complete your inout
	* go to wareneingang pos (receipt pos), select your purchase order and press ok, select your HUs and press ok again 
		* => purchase inout created
	* go to invoice candidates window and select the ones for your orders, gear, create invoices (auswahl fakturieren)
	    * => sales and purchase invoices are created

7. Wait a bit and run the sql you'll find at the bottom of the page
	* => async process for bpartner_stats ran ok, no errors
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 
		
**C_BPartner_Stats after credit memo**	

1. open one of the sales invoices you did above and press on "create credit memo" button, select a doc subtype, ok
    * either you select the credit memo to be completet from the start, or you complete it after it's created
	    * => async process for bpartner_stats ran ok, no errors

2. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 

3. on the same invoice press on "Adjustment Charge" button, select a doc subtype, press ok

4. complete the new invoice
	* => async process for bpartner_stats ran ok, no errors

5. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 

6. go to sales invoice window and create a new credit memo invoice, manually, complete
	* => async process for bpartner_stats ran ok, no errors

7. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 

8. go to purchase invoice window and create a new credit memo invoice, manually, complete
	* => async process for bpartner_stats ran ok, no errors

9. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 
	
	
**C_BPartner_Stats after payments**	

1. go to payment windows and create a new one: incoming

2. add your sales invoice there, complete

3. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 

4. create another payment: outgoing, and add your purchase invoice there 

5. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 

6. go to pay selection window and create a new one
	* use create from button to add lines
	* complete it and go to gear - create payments
		* => new payment created	

7. Wait a bit and run the sql you'll find at the bottom of the page
	* => you'll get 2 columns of each: so_credit_used, totalopenbalance and actuallifetimevalue. They have the same values (2 by 2) 

**sql function to compare the results**

```sql
SELECT
COALESCE((SELECT SUM(currencyBase(invoiceOpen(i.C_Invoice_ID,i.C_InvoicePaySchedule_ID),i.C_Currency_ID,i.DateInvoiced, i.AD_Client_ID,i.AD_Org_ID)) FROM C_Invoice_v i
WHERE i.C_BPartner_ID=bp.C_BPartner_ID AND i.IsSOTrx='Y' AND i.IsPaid='N' AND i.DocStatus IN ('CO','CL')),0) AS SO_Credit_Used,
bps.SO_CreditUsed,
COALESCE((SELECT SUM(currencyBase(invoiceOpen(i.C_Invoice_ID,i.C_InvoicePaySchedule_ID),i.C_Currency_ID,i.DateInvoiced, i.AD_Client_ID,i.AD_Org_ID)*i.MultiplierAP) FROM C_Invoice_v i
WHERE i.C_BPartner_ID=bp.C_BPartner_ID AND i.IsPaid='N' AND i.DocStatus IN ('CO','CL')),0) -
COALESCE((SELECT SUM(currencyBase(Paymentavailable(p.C_Payment_ID),p.C_Currency_ID,p.DateTrx,p.AD_Client_ID,p.AD_Org_ID)) FROM C_Payment_v p
WHERE p.C_BPartner_ID=bp.C_BPartner_ID AND p.IsAllocated='N'
AND p.C_Charge_ID IS NULL AND p.DocStatus IN ('CO','CL')),0) as Total_Open_Balance,
bps.TotalOpenBalance,
COALESCE ((SELECT SUM(currencyBase(i.GrandTotal,i.C_Currency_ID,i.DateInvoiced, i.AD_Client_ID,i.AD_Org_ID)) FROM C_Invoice_v i
WHERE i.C_BPartner_ID=bp.C_BPartner_ID AND i.IsSOTrx='Y' AND i.DocStatus IN ('CO','CL')),0) as Actual_LifeTIme_Value,
bps.ActualLifeTImeValue
FROM C_BPartner bp join C_BPartner_Stats bps on bps.C_BPartner_ID = bp.c_bpartner_ID WHERE bp.C_BPartner_ID= your_BP_id;
```
