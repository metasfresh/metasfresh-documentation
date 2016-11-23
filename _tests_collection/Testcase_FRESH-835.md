---
title: IT FRESH-835
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   flatrate term: flatrate term for procurement 
layout: default
tags:
  - flatrate term
  - procurement
---
## #549 Improve the "extend" process for procurement flatrate terms

> Testcase to check the improvements in procurement flatrate terms.

1. Have or create 2 completed flatrate terms for G000X, for procurement:
	* P0001, TU A, start date: 1.6.16, end date: 31.5.17
	* P0002, TU B, start date: 1.11.16, end date: 31.10.17

1. Make sure you set data for all months for 1st flatrate term in tab Liefersatz, with qty of product to deliver & amt for it

1. The 2nd flatrate term should have data for only 6 months in tab Liefersatz	

1. Make sure the periods for calendar for 2018 exist!

1. In the 2nd flatrate term, click Vertrag verlängern, and check the box for completion (don't set a date):
	* => window pops up: new flatrate term was created
	
1. Check the newly created flatrate term:
	* => data in 2nd tab Vertragsperiode is like in the 2nd flatrate term, regarding P0002, TU B, flatrate term, bpartner etc.
	* => start date: 1.11.17, end date: 31.10.18
	* => data in 3rd tab Liefersatz is like in the 2nd flatrate term, for 6 months: the same months as in the original one, but in the following year
	* => the new flatrate term is completed already
	
1. In the 1st flatrate term, click Vertrag verlängern, and set start date: 1.1.17:
	* => window pops up: new flatrate term was created
	
1. Check the newly created flatrate term:
	* => data in 2nd tab Vertragsperiode is like in the 1st flatrate term, regarding P0001, TU A, flatrate term, bpartner etc.
	* => start date: 1.1.17, end date: 31.12.17
	* => data in 3rd tab Liefersatz is like in the 1st flatrate term, for all months
	* => new flatrate term is not yet completed!
	
1. Check the 1st flatrate term:
	* => start & end date and everything else is like before
	
1. Complete the new flatrate term for P0001, and check the old one again:
	* => end date was changed from 31.5.17 to 31.12.16, so the new one follows directly to the old onw, and there is no overlapping
	


