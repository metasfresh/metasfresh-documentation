---
title: IT FRESH-505
required data:
   financial data: data with / without Kostenstelle  
layout: default
tags:
  - UI
  - Jasper
---
## #174 Report Konten-Information empty c_activity_id

> Testcase to check if new filter in Konten-Info Report
> "Nur leere Kostenstelle anzeigen" works correctly.


1. Open report Konten-Information
	* => new Filter Nur leere Kostenstelle anzeigen
	
1. Select an account which ususally has a lot of data and Kostenstelle set (e.g. 1200)

1. Set start & end date

1. Leave Kostenstelle empty, run report
	* => all data for your account and the dates set, with all Kostenstellen and with Kostenstelle empty
	
1. Run report again, with same account and dates, select a Kostenstelle in filters (e.g. 1000)
	* => checkbox for Nur leere Kostenstelle anzeigen becomes read-only
	* => only data with the selected Kostenstelle is included in the report
	
1. Run report again, with same account and dates, set the filter for Nur leere Kostenstelle anzeigen
	* => filter for Kostenstelle becomes read-only
	* => only data with Kostenstelle empty is included in the report
