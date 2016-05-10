# IT FRESH-272
### hubalance general flatrate filter
> Testcase to check if the filter for flatrate term (= Gebindevertrag) 
> is working correctly for hubalance report (Gebindesaldo Gesamt).

1. Have a bpartner with an active flatrate term for HUs, e.g. LU, in C_Flatrate_Term
1. Check the start date & end date for this flatrate term
1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date covered by the period of the flatrate term
	* Gebinde Vertrag: Y
	* Details anzeigen checked
		* => report shows only HUs of the flatrate term with inouts from that period you set in start and end date, with Saldo at start & end date and the inout lines with date and inout no. 

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date covered by the period of the flatrate term
	* Gebinde Vertrag: N
	* Details anzeigen checked
		* => report shows HUs NOT covered by the flatrate term with inouts from that period you set in start and end date, with Saldo at start & end date and the inout lines with date and inout no. 

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date covered by the period of the flatrate term
	* Gebinde Vertrag: null
	* Details anzeigen checked
		* => report shows all HUs from the two reports before, with Saldo at start & end date and the inout lines with date and inout no. 

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date NOT covered by the period of the flatrate term (before or after)
	* Gebinde Vertrag: Y
	* Details anzeigen checked
		* => report is empty

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date NOT covered by the period of the flatrate term (before or after)
	* Gebinde Vertrag: N
	* Details anzeigen checked
		* => report shows all HUs with inouts from that period you set in start and end date, with Saldo at start & end date and the inout lines with date and inout no. 

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date NOT covered by the period of the flatrate term (before or after)
	* Gebinde Vertrag: null
	* Details anzeigen checked
		* => report shows all HUs with inouts from that period you set in start and end date, with Saldo at start & end date and the inout lines with date and inout no. 

1.  Run Gebindesaldo Gesamt for your bpartner with:
	* start date BEFORE the start date of the flatrate term, and end date covered by the period of the flatrate term
	* Gebinde Vertrag: Y
	* Details anzeigen checked
		* => report shows only HUs of the flatrate term with inouts from the WHOLE period you set in start and end date, with Saldo at start & end date and the inout lines with date and inout no. 

		
1. Add another flatrate term for your bpartner for another type of HUs, e.g. IFCO 6014, in C_Flatrate_Term
1. Set start date & end date, BUT don't commplete it
1. Make an inout for the HU of your new flatrate term, e.g. with Leergutausgabe

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date covered by the period of the new flatrate term
	* Gebinde Vertrag: Y
	* Details anzeigen checked
		* => report is empty OR does not include inouts for the HU of the new flatrate term, but only the HU of the old one

1. Complete the new flatrate term

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date covered by the period of the new flatrate term
	* Gebinde Vertrag: Y
	* Details anzeigen checked
		* => report shows the new HU with the inout you created earlier, with Saldo at start & end date and the other inout lines with date and inout no. (if they exist), and the HU of the old flatrate term

1. Go back to your inout you created before, reactivate it

1. Run Gebindesaldo Gesamt for your bpartner with:
	* start & end date covered by the period of the new flatrate term
	* Gebinde Vertrag: Y
	* Details anzeigen checked
		* => report is empty OR does not include the inout for the HU you reactivated, but only different inouts of that HU type or the inouts for the HU of the old flatrate term