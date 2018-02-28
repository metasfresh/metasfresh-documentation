---
title: IT FRESH-579
required data:  
layout: default
tags:
  - UI
---
## #276 Report Konten-Info new Parameter

> Testcase to check the new parameters in report Konten-Info.


1. Open report Konten-Info:
	* => parameters Konto von / Konto bis, instead of just one account
	* => parameters Periode von / Periode bis, instead of start date / end date
	
1. Select 2 accounts for the account parameters

1. Select 2 periods for the period parameters, OK

1. Konten-Info report opens with:
	* => each account has its own header, with account no., name, and page from - to
	* => period covered is displayed in each header
	
1. Export the report to Excel
	* => working fine, all data from jasper report is included
	* => headers for all different accounts from your report are included as well