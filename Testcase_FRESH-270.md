# IT FRESH-270
### material tracking: total received qty and scrap sometimes missing on invoice
> Testcase to check if total received qty and scrap are included in the Endabrechnung
> of a M_Material_Tracking, where the quality inspection (M_QualityInsp_LagerKonf) does not include 
> AdditionalFee and ProcessingFee.

1. Find a bpartner that has a C_Flatrate_Term for product P000167_Knollensellerie Lager
1. Create M_Material_Tracking for this bpartner and P000167_Knollensellerie Lager, with correct M_QualityInsp_LagerKonf_Version
1. Create a purchase order for your bpartner, P000167_Knollensellerie Lager, e.g. 15 TUs
1. In orderline, ASI, choose the Material-Vorgang-ID you set in M_Material_Tracking; save & complete
1. In Wareneingang POS, set destination warehouse: Produktion LG for your orderline
1. Make inout for 4 Paloxen
1. Set a different destination warehouse, make inout for the rest
1. Create a PP_Order: 
* Type: Waschprobe
* your Material-Vorgang-ID
* product: P000164_Knollensellerie gewaschen
* Workflow: LG Karotten
* BOM: P000164_Knollensellerie gewaschen
* Ressource & Warehouse: Industriestrasse, Produktion LG
* Qty: 500
* Dates: date of test
1. Save & complete
1. Open Produktion Fertigstellung POS, PRoduktion LG, and select you PP_Order
1. Press Zuteilung, select 2 of your TUs from inout, step 6.
1. Press Empfang, and do receipt for P000164_Knollensellerie gewaschen and P001926_Knollensellerie gross gewaschen
1. Close PP_Order
	* invoice candidates are created for the first PP_Order
1. Open Rechnungsdispo, search for your Material-Vorgang-ID
	* invoice candidates for purchase order and PP_Order:
	* ICs for P000167_Knollensellerie Lager, Paloxe, P000164_Knollensellerie gewaschen and P001926_Knollensellerie
	* IC for MT_Witholding_Akonto_Akonto (Einbehalt)
1. Gear, Fakturierung: invoice the ICs to get the Akonto invoice 
	* invoice: Akontozahlung, with P000164_Knollensellerie gewaschen and P001926_Knollensellerie & MT_Witholding_Akonto_Akonto (Einbehalt)
	* jasper for Akontozahlung: displays PP_Order and P000167_Knollensellerie Lager with qty from inout, step 6., and Erdbesatz with resp. qties from 1. PP_Order, 50% Einbehalt
	* invoice: Eingangsrechnung for Paloxen
1. Repeat 8.-15., for the Endabrechnung
	* invoice candidates for PP_Order, as in 14.1, plus IC for MT_Witholding_Akonto_Akonto (Einbehalt)
	* additional IC for MT_RegularPPOrder_Produkt für Auslagerung
	* invoice: Endabrechnung, with P000164_Knollensellerie gewaschen and P001926_Knollensellerie & MT_Witholding_Akonto_Akonto (Einbehalt)
	* jasper for Endabrechnung: 
	* displays PP_Orders and P000167_Knollensellerie Lager with qty from inout, step 6., and Erdbesatz with resp. qties from 2. PP_Order
	* Akonto-Netto: net sum from 15.

 

