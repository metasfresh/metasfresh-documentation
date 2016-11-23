---
title: IT FRESH-840
required data:
   data: accounts 
layout: default
tags:
  - Jasper
  - Accounting
---
## #557 Report Saldenbilanz & Account Info native Excel Export

> Testcase to check the Excel export of reports Saldenbilanz & Account Info.

1. Run report Saldenbilanz

1. When the report is done, export it into an Excel file:
	* => no errors or exceptions

1. Check the Excel file:
	* => all info from the jasper repport is displayed properly, no cut-offs etc.
	* => no combined columns (=> where there is the same info in 2 columns, they remain separated!)
	* => you can change the columns, they are not read only!
	
1. Run report Account-Info

1. When the report is done, export it into an Excel file:
	* => no errors or exceptions

1. Check the Excel file:
	* => all info from the jasper repport is displayed properly, no cut-offs etc.
	* => no combined columns (=> where there is the same info in 2 columns, they remain separated!)
	* => you can change the columns, they are not read only!
	* => the account and account no. are normal columns!
	* => field is enlarged if needed for more text, e.g. for description
	
1. Run the report Account-Info for a high number of accounts, and export it into an Excel file:
	* => no errors or exceptions

1. Check the Excel file:
	* => all info from the jasper repport is displayed properly, no cut-offs etc.
	* => no combined columns (=> where there is the same info in 2 columns, they remain separated!)
	* => you can change the columns, they are not read only!
	* => the account and account no. are normal columns
	* => field is enlarged if needed for more text, e.g. for description
 
