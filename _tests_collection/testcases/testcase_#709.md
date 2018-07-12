---
title: IT FRESH-1026
required data:
layout: default
tags:
  - performance, dlm
---
### #709 DLM related performance QA

> Testcase to check the performance we gain from DLM

1. First make the preparations from this task: https://github.com/metasfresh/metasfresh/issues/709 to set up the config

2. Check the following windows, with subtab and advanced search: 
	* auftrag/bestellung (c_order)
	* wareneingang/lieferung (m_inout)
	* rechnung/eingangsrechnung (c_invoice)
	* rechnungsdispo (c_invoice_candidate)
	* lieferdispo(m_shipmentSchedule)
	* wareneingangsdispo (m_receiptSchedule)
	* geschaftspartner (c_bpartner)
	* product info
	* geschaftspartner info
	* mrp info
	* mrp product info
	* olcand (c_olcand)
	* product (m_product)
	* async (C_Queue_WorkPackage)
	* packvorschrift (M_HU_PI)
	* handling units (m_hu)
	* handling units transaction (M_HU_Trx_Line)
	* cu-tu zuordnung (M_HU_PI_Item_Product)
	* dunning candidates (C_Dunning_Candidate)
	* dunnning documents (C_Dunning)
	* vorgang alle (R_Request)
	* bestellkontrolle (C_Order_MFGWarehouse_Report)
	* speditionsauftrag (M_ShipperTransportation)
	* edi desadv (EDI_Desadv)
	* material balance (M_Material_Balance_Detail)
	* laufender vertrag (C_Flatrate_Data), flatrate term (C_Flatrate_Term)
	* kundentrucklieferung (m_inout)
	* lieferantenrucklieferung (m_inout)
	* zahlung (c_payment)
	* zahlung zuordnung 
	* zahlung anweisen (c_payselection)
	* bankauszug (C_BankStatement)
	* lager (m_warehouse)
	* uom (c_uom)
	* product category (m_product_category)
	* preise (m_pricelist, M_ProductPrice, M_PriceList_V)
	* merkmal satz (m_attribute, m_attributeset, m_attributesetinstance)
	* material vorgang (m_material_tracking)
	* konten (fact_acct)
	* wahrung (c_currency)
	* journal (gl_journalBatch)
	* plandate (m_product)
	* esr (esr_import)
	* picking slot (m_picking_slot), picking slot trx (m_picking_slot_trx)
	* liefertage (m_delivery_day)
	* mrp notice (ad_note)
	* productions auftrag (pp_order)
	* distribution order (dd_order)
	* warenbevegung (m_movement)
	
3. Conclusion: 
	* Overall, the performance was improved. Searching in most of the windows took less than 1s. 
	* The following took more: 
		* - filter for ALL in product info (around 94s)
			* 	=> If you put a filter is really fast (1s). Also not related with dlm
		* - last subtab in pricing system , M_PriceList_V (around 95s)
			* 	=> Not related with dlm
		* - Buchführungs-Details: fact_acct (around 3m 34s)
		* - Ausprägung Merkmals-Satz: M_AttributeSetInstance (around 3m 40s)
	* from these four, only fact_acct and M_AttributeSetInstance have dlms. And i checked with value 2 and 3 in config, and both work faster in 3 (aprox 1 min less). 


 