---
title: IT FRESH-850
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Jasper
  - Accounting
---
## #565 Report Revenue per Week and BPartner also show qty

> Testcase to check the new revenue reports with qty.

1. Run the new revenue reports for G000X, e.g. for the last 2 weeks:
	* Umsatzreport Geschäftspartner mit Menge
	* Umsatzreport Geschäftspartner Woche mit Menge
	
1. You can also run the orignal reports (leave all open for comparison):
	* => Umsatzreport Geschäftspartner mit Menge / Umsatzreport Geschäftspartner have the same infos, but the first has additional columns for Menge

1. create a purchase order for G000X:
	* P0001, qty: 10
	* price: 1.00 CHF
	
1. Create the receipt, and run the reports again:
	* => Umsatzreport Geschäftspartner mit Menge: P0001 is not yet included (or qty is not increased)
	* => Umsatzreport Geschäftspartner: P0001 is not yet included (or qty is not increased)
	* => Umsatzreport Geschäftspartner Woche mit Menge: P0001: qty 10, for all columns (CHF & Menge), except for Vergleichsperiode (empty)
	* => Umsatzreport Geschäftspartner Woche: P0001: qty 10, for all columns (CHF), except for Vergleichsperiode (empty)
	
1. Open invoice candidates for your purchase order, change the one for P0001 price_override to 1.50 CHF, and create the invoice

1. Run the reports again:
	* => Umsatzreport Geschäftspartner mit Menge: P0001: qty 10 for columns with Menge, 15 for columns with CHF, except for Vergleichsperiode (empty)
	* => Umsatzreport Geschäftspartner: P0001: qty 15 for all columns (CHF), except for Vergleichsperiode (empty)
	* => Umsatzreport Geschäftspartner Woche mit Menge: P0001: qty 10 for columns with Menge, 15 for columns with CHF, except for Vergleichsperiode (empty)
	* => Umsatzreport Geschäftspartner Woche: P0001: qty 15 for all columns (CHF), except for Vergleichsperiode (empty)
	
1. Run the reports again, but set a time period for comparison (e.g. 2 weeks earlier, if you had qties from receipts / invoices then):
	* => Umsatzreport Geschäftspartner mit Menge: P0001: qty 10 for columns with Menge, 15 for columns with CHF, Vergleichsperiode has qties from earlier weeks displayed
	* => Umsatzreport Geschäftspartner: P0001: qty 15 for all columns (CHF), Vergleichsperiode has qties from earlier weeks displayed
	* => Umsatzreport Geschäftspartner Woche mit Menge: P0001: qty 10 for columns with Menge, 15 for columns with CHF, Vergleichsperiode has qties from earlier weeks displayed
	* => Umsatzreport Geschäftspartner Woche: P0001: qty 15 for all columns (CHF), Vergleichsperiode has qties from earlier weeks displayed
	* => for all lines in all reports: % is calculated like: (qty - qty_compare)/qty_compare x 100 (same for price)
	* =>**Note:** if there is a line with qty in Vergleichsperiode or Differenz = 0, there won't be any qty in % (see calculation)
	
1. Run the new reports, try different filters in parameters:
	* set P0001: only results for P0001, no other products
	* set product category: only results for this category (or error for empty page if none exist)
	* set other currency, EUR: only results for this currency (or error for empty page if none exist)
	* ASI: only results for this ASI (or error for empty page if none exist)
	
1. Create a sales order for G000X:
	* P0002, qty: 10
	* price: 1.00 CHF
	
1. Repeat the tests like before, but check the Sales Transaction checkbox in the report parameters:
	* => results should be similar to the above, with the reports for bpartner only be changed after qty from invoiceline, and weekly reports changed after qty from inoutline, with resp. qties
	* => parameters
	

	**Note:** All documents must be posted so they are considered for the reports! If you reverse your receipts / invoices, the reports will be changed accordingly (qties are reduced / set to 0)! 