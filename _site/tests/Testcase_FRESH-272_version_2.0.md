# IT FRESH-272
### hubalance general flatrate filter
> Testcase to check if the filter for flatrate term (= Gebindevertrag) 
> is working correctly for hubalance report (Gebindesaldo Gesamt).

Setup for test (dates are examples, can be changed accordingly!):
* bpartner X with active flatrate term I in C_Flatrate_Term for Gebinde, e.g. LU A
* start date of flatrate term I: 01.05.16 
* end date of flatrate term I: 30.06.16
* several inouts for LU A and other types of HUs (e.g. IFCO C, Paloxe) from time period 01.05. - 30.06.16


|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.05.16				|	Saldo on 01.05.16											|
|	end date 15.06.16				|	Saldo on 15.06.16											|
|	Geschäftspartner X				|	results for bpartner X only									|
|	Gebinde Vertrag Ja				|	results for LU A only, no other type of HU included			|
|	Details anzeigen checked		|	inout lines from 01.05. -  15.06.16	with date and inout no.	|		



|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.05.16				|	Saldo on 01.05.16											|
|	end date 15.06.16				|	Saldo on 15.06.16											|
|	Geschäftspartner X				|	results for bpartner X only									|
|	Gebinde Vertrag Nein			|	results for other types of HU, LU A  NOT included			|
|	Details anzeigen checked		|	inout lines from 01.05. -  15.06.16	with date and inout no.	|		


 
|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.05.16				|	Saldo on 01.05.16											|
|	end date 15.06.16				|	Saldo on 15.06.16											|
|	Geschäftspartner X				|	results for bpartner X only									|
|	Gebinde Vertrag Null			|	results for all types of HU, LU A  included					|
|	Details anzeigen checked		|	inout lines from 01.05. -  15.06.16	with date and inout no.	|		


 
|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.04.16				|	report is empty												|
|	end date 30.04.16				|																|
|	Geschäftspartner X				|																|
|	Gebinde Vertrag Ja				|																|
|	Details anzeigen checked		|																|	


 
|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.04.16				|	Saldo on 01.04.16											|
|	end date 30.04.16				|	Saldo on 30.04.16											|
|	Geschäftspartner X				|	results for bpartner X only									|
|	Gebinde Vertrag Nein			|	results for all types of HU, LU A  included					|
|	Details anzeigen checked		|	inout lines from 01.04. -  30.04.16	with date and inout no.	|	
		

		
|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.07.16				|	Saldo on 01.07.16											|
|	end date 30.09.16				|	Saldo on 30.09.16											|
|	Geschäftspartner X				|	results for bpartner X only									|
|	Gebinde Vertrag Null			|	results for all types of HU, LU A  included					|
|	Details anzeigen checked		|	inout lines from 01.07 -  30.09.16	with date and inout no.	|	
		

		
|	Gebindesaldo Gesamt Filters		|	Results displayed in Jasper Report							|
| -----------------------------		|:-------------------------------------------------------------:|
|	start date 01.04.16				|	Saldo on 01.04.16											|
|	end date 30.05.16				|	Saldo on 30.05.16											|
|	Geschäftspartner X				|	results for bpartner X only									|
|	Gebinde Vertrag Ja				|	results for LU A only, no other type of HU included			|
|	Details anzeigen checked		|	inout lines from 01.04 -  30.05.16	with date and inout no.	|	
		
