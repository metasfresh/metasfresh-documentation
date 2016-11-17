---
title: IT FRESH-838
required data:
   data: accounts 
layout: default
tags:
  - Jasper
  - Accounting
---
## #553 Report Account Info adjustments. Add parms date range.

1. Run report Account Info:
	* => new date parameters you can set
	* => new parameters are not mandatory
	* => period start and period end are still mandatory, though
	* => set a range of accounts (Account from / to) you know will get you results
	
1. Set the new dates for start and end, plus the period ones for different time (e.g. start date 1.8.16, end date 31.10.16, periods Jul-16 - Nov-16), run the report:
	* => report is displayed for the time start date 1.8.16, end date 31.10.16, NOT the time set in the period parameters! 

1. Set the new date for start only, plus the period ones (e.g. start date 15.9.16, periods Jul-16 - Nov-16), run the report:
	* => report is displayed for the time start date 15.9.16, end date 30.11.16, NOT with start date 1.7.16!

1. Set the new date for end only, plus the period ones (e.g. end date 21.9.16, periods Jul-16 - Nov-16), run the report:
	* => report is displayed for the time start date 1.7.16, end date 21.9.16, NOT with end date 30.11.16!

1. Set only the period dates, run the report:
	* => data for the set periods, like before