---
title: IT FRESH-468
required data:
   account: account with postings 
layout: default
tags:
  - Excel
  - Accounting
---
## Excel Export of report Konten-Information not working

> Testcase to check if the Excel Export of 
> report Konten-Information works fine.

1. Open Konten-Information in Berichte

1. Select your account with postings as Konto

1. Set start and end dates, OK

	* => Jasper report opens with the postings from your account, for the covered time period

1. Export the Jasper report into Excel, check the Excel file

	* => Excel file opens without any errors or problems
	* => results from Jasper report are all displayed correctly
	
1. Try again with a different role (e.g. Fibu)

	* => works the same, no errors etc.
