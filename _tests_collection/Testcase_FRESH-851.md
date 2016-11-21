---
title: IT FRESH-851
required data:
   bpartner: bpartner G000X (vendor & customer)
   products: P0001, P0002
layout: default
tags:
  - UI
  - Procurement
---
## #563 Report Statistics qty per Week

> Testcase to check the reports for Statistics qty per week.

1. Make sure G000X has a flatrate term for carrot washing cycles and already had washing testcycles and the coorresponding invoices in the past!

1. Search for an Akontorechnung and Endabrechnung for G000X, if possible they should be the only ones of one month

1. Run the statistics reports:
	* Statistik nach Mengen, set G000X, the current period, don't check sales transaction
	* Statistik nach Mengen Woche, set G000X, the current week, don't check sales transaction (org is set automatically, read only)
	* Statistik nach Mengen Gesamt, the current period, don't check sales transaction
	* Statistik nach Mengen Gesamt Woche, the current week, don't check sales transaction (org is set automatically, read only)
	
1. Check the reports:
	* Statistik nach Mengen: all qties from posted invoices for all products & product categories, for G000X, for the current period and the 11 periods before, with overall qty and overall cost (CHF)
	* Statistik nach Mengen Woche: all qties from posted invoices for all products & product categories, for G000X, for the current week and the 11 weeks before, with overall qty and overall cost (CHF)
	* Statistik nach Mengen Gesamt: all qties from posted invoices for all products & product categories, for all bpartners, for the current period and the 11 periods before, with overall qty and overall cost (CHF)
	* Statistik nach Mengen Gesamt Woche: all qties from posted invoices for all products & product categories, for all bpartners, for the current week and the 11 weeks before, with overall qty and overall cost (CHF)
	
1. In all reports, check for the month / week of your Akonto- and Endabrechnung for the resp. products:
	* qties from Akontorechnung are NOT included
	* qties from Endabrechnung are included
	
1. Create a purchase invoice for G000X, P0001: qty:  10, price: 100 (overall), post it

1. Run the reports again:
	* qty for P0001 is increased for the current week / period accordingly (+ qty: 10, + cost: 100) in all reports
	
1. Play with the parameters and run the reports again:
	* product P0001: only qties for P0001 are displayed
	* product category: only qties from that category are displayed
	* bpartner other then G000X: qties from your invoice are not displayed
	* ASI: only qties from products with that ASI are displayed
	
1. Run all reports, for P0002, with sales transaction checked
	
1. Create a sales invoice for G000X, P0002: qty:  10, price: 100 (overall), post it

1. Run the reports again, for P0002, with sales transaction checked:
	* qty for P0002 is increased for the current week / period accordingly (+ qty: 10, + cost: 100) in all reports
