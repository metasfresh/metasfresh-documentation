---
title: IT gh#868
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Jasper
  - Accounting
---
## #868 Weekly Revenue Report

> Testcase to check the weekly revenue report.


1. Run the weekly revenue report and leave it open for comparison:
	* => week: sum this week
	* => compare with: sum last week
	* => Difference: sum this week - sum last week
	* => %: (difference / sum last week) *100
	* => kumuliert this week: all over sum this year until this week
	* => kumuliert last week: all over sum this year until week
	* => Difference: sum this week - sum last week
	* => %: (difference / kumuliert last week) *100
	
1. Also run the normal revenue report, for the curent period 
	* sums are calculated per period
	* difference and % is calculated the same

1. For G000X, create a purchase invoice with P0001, e.g. 100.00 CHF (net sum is used for fact.acct!), complete and post it

1. Run the weekly revenue report again, same parameters:
	* => sum of this week: +100.00 CHF
	* => Difference: sum this week - sum last week
	* => %: (difference / sum last week) *100
	* => kumuliert this week: +100.00 CHF
	* => kumuliert last week: as before
	* => Difference: sum this week - sum last week
	* => %: (difference / kumuliert last week) *100
	
1. Run the normal revenue report again:
	* => sums are calculated per period, for current period it should be +100.00 CHF
	* => difference and % is calculated the same
	
1. Repeat test with a customer invoice; in the reports the Sales Transaction checkbox must be checked then
	* => works the same as for purchase side, calculations are done the same way
	
	
