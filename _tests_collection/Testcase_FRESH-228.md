
---
title: IT FRESH-228
required data:
   bpartner: bpartner G000X (vendor)
   flatrate term: procurement for P0001, P0002
   other data: orders & inouts for P0001, P0002
---

# IT FRESH-228
### Change jxls-poi version from 1.0.8 to 1.0.9 when it will be released
> Testcase to check if Procurement Excel report is still
> working correctly after change of jxls-poi version.


1. Run procurement Excel report Anbauplanung Auswertung Excel, set filters: 
	* bpartner G000X
	* product P0001
	
	|	Produkt		|	Geschäftspartner	|	Flatrate Term Info						|	Time Period covered	(with resp. qties orders & inouts)	|
	| --------------|:---------------------:|:-----------------------------------------:|:---------------------------------------------------------:|
	|	P0001		|	G000X				|	time & qties flatrate term for P0001	|	24 months of current & following year, Jan - Dec		|
	
	
1. Run procurement Excel report Anbauplanung Auswertung Excel, set filters:  
	* bpartner G000X
	* start date: e.g. April 2016
	* end date: e.g. June 2016


	|	Produkt		|	Geschäftspartner	|	Flatrate Term Info						|	Time Period covered	(with resp. qties	|
	| --------------|:---------------------:|:-----------------------------------------:|:-----------------------------------------:|
	|	P0001		|	G000X				|	time & qties flatrate term for P0001	|	April 2016, May 2016 & June 2016		|
	|	P0002		|	G000X				|	time & qties flatrate term for P0002	|	April 2016, May 2016 & June 2016		|	
	