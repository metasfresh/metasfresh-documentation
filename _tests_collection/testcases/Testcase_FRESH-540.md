---
title: IT FRESH-540
required data:
   bpartner: bpartner G000X (customer)
   pricelist: customer pricelist CP, with currency EUR 
layout: default
tags:
  - Jasper
---
## #226 show accounting currency in open items report

> Testcase to check if accounting currency is shown in open items report correctly.


1. Check currency rate: you should have a conversion rate != 1.0 for EUR to CHF, for Currency Type: Company (used for invoices), e.g. 1.1

1. Open the Open Items report, (filters: sales transaction checked!) check for G000X, and leave it open for comparison

1. Create a customer invoice, use customer pricelist CP (amt. e.g. 100 EUR)

1. Check the rate in the invoice by clicking Posted, and in Enter Query, check Display Source Info, then refresh
	* => currency rate used for the posting is displayed, 1.1
	
1. Run the Open Items report again, check for G000X (at the bottom, since amts in EUR are displayed beneath all amts for CHF)
	* => line for the invoice you created is displayed, with amt: 100 EUR
	* => add. amts shown underneath the EUR ones, in CHF: 110 CHF
	* => Gesamtsumme at the end: in EUR, plus amt in CHF underneath
	
1. Run the report some more, set different filters (e.g. for G000X, start date) each time
	* => same result as before

