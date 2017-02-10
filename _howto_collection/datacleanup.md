---
title: SQL Data Cleanup
layout: default
tags:
lang: de
---


```

--UPDATE pg_trigger SET tgenabled='D'
WHERE tgenabled='O' and tgconstrrelid !=0;

SET CONSTRAINTS ALL DEFERRED;

-- Deleting non-org bpartners
--DELETE FROM C_BPartner WHERE C_BPartner_ID!=1000000 AND COALESCE(AD_OrgBP_ID, 0)=0;
--UPDATE C_BPartner SET M_PriceList_ID=null, VaTaxID=null;

--DELETE FROM AD_User u
WHERE 
  (AD_User_ID NOT IN (0, 100, 1000000, 1000001) --Don't --DELETE System, SuperUser, Admin and User (IDs of last two might differ on other systems)
  AND EXISTS (select 1 from C_BPartner bp where u.C_BPartner_ID=bp.C_BPartner_ID) -- --DELETE "normal" BPartner contacts
  AND Name NOT like '%Automatik%' -- Don't --DELETE users that are used in automated jobs
  ) OR (
	C_BPartner_ID IS NOT NULL AND NOT EXISTS (select 1 from C_BPartner p where p.C_BPArtner_ID=u.C_BPArtner_ID)
  )
 ;

--DELETE FROM AD_User_Roles ur WHERE NOT EXISTS (select 1 from AD_User u where u.AD_User_ID=ur.AD_User_ID);

--DELETE FROM AD_Role_PermRequest;

--DELETE FROM c_bp_customer_acct a WHERE NOT EXISTS (select 1 from C_BPartner bp where a.C_BPartner_ID=bp.C_BPartner_ID);
--DELETE FROM c_bp_employee_acct a WHERE NOT EXISTS (select 1 from C_BPartner bp where a.C_BPartner_ID=bp.C_BPartner_ID);
--DELETE FROM c_bp_vendor_acct a WHERE NOT EXISTS (select 1 from C_BPartner bp where a.C_BPartner_ID=bp.C_BPartner_ID);

--DELETE FROM C_Sponsor;	
--DELETE FROM C_Sponsor_Salesrep;

--UPDATE AD_User SET C_bpartner_id=NULL;

--DELETE FROM C_BPartner_Location l WHERE NOT EXISTS (select 1 from C_BPartner bp where l.C_BPartner_ID=bp.C_BPartner_ID);


--DELETE FROM C_Greeting;
--DELETE FROM c_greeting_trl;

--
-- --DELETE M_Product
--
--DELETE FROM M_Product WHERE M_Product_ID NOT IN (1000000, 1000001); -- Standardprodukt, Versandkostenpauschale
--DELETE fROM c_uom_conversion c WHERE M_Product_ID IS NOT NULL AND NOT EXISTS (select 1 from M_Product p where p.M_Product_ID=c.M_Product_ID);

--UPDATE M_Product SET m_locator_ID=NULL;
--DELETE FROM M_Product_Acct WHERE NOT M_Product_ID IN (1000000, 1000001);
--DELETE FROM M_Product_Costing WHERE M_Product_ID NOT IN (1000000, 1000001);
--DELETE FROM m_product_trl WHERE M_Product_ID NOT IN (1000000, 1000001);

--DELETE FROM m_attributeinstance;
--DELETE FROM M_AttributeSetInstance WHERE M_AttributeSetInstance_ID>0;

--DELETE FROM m_storage;
--DELETE FROM m_costdetail where AD_Org_ID>0;
--DELETE FROM m_transaction;

--DELETE FROM C_Allotment;

--
-- no need to --DELETE warehouses, it's only a potential source of trouble here
--
--DELETE FROM m_warehouse WHERE M_Warehouse_ID>1000000;
--UPDATE M_Warehouse SET C_Location_ID=NULL;

--DELETE FROM m_warehouse_acct WHERE M_Warehouse_ID>1000000;
--DELETE FROM m_replenish;
--DELETE FROM m_locator;


--DELETE FROM c_validcombination c WHERE C_BPartner_ID IS NOT NULL AND NOT EXISTS (select 1 from C_BPartner bp where bp.C_BPArtner_ID=c.C_BPartner_ID);
--DELETE FROM c_validcombination WHERE c_locfrom_id IS NOT NULL OR c_locto_id Is NOT NULL;

--DELETE FROM fact_acct;
--DELETE FROM gl_journal;
--DELETE FROM gl_journalLine;

--DELETE FROM m_purchaseschedule;
--DELETE FROM c_order_line_alloc;
--DELETE FROM C_OLCand;
--DELETE FROM c_olcandprocessor WHERE c_olcandprocessor_ID>0;
--DELETE FROM c_olcandaggandorder;
--DELETE FROM C_Order;
--DELETE FROM C_OrderLine;
--DELETE FROM C_OrderTax;

--DELETE FROM c_tax_acct c WHERE t_due_acct IS NOT NULL AND NOT EXiSTS (select 1 from C_ValidCombination p WHERE p.C_ValidCombination_ID=c.t_due_acct);

--DELETE FROM c_contract_term_alloc;

--DELETE FROM m_shipmentschedule;
--DELETE FROM m_shipmentschedule_qtypicked;
--DELETE FROM M_InOut;
--DELETE fROM m_inoutconfirm;

--DELETE FROM M_InOutLine;
--DELETE FROM M_InoutLineMA;
--DELETE FROM m_inoutlineconfirm;

--DELETE FROM m_rma;
--DELETE FROM m_rmaLine;

--DELETE FROM m_tour;
--DELETE FROM m_tourversion;
--DELETE FROM m_tourversionline;

--DELETE FROM m_package;
--DELETE FROM m_packageLine;
--DELETE FROM m_packagingcontainer;
--DELETE FROM m_packagingtree;
--DELETE FROM m_packagingtreeitem;
--DELETE FROM m_packagingtreeitemsched;

--DELETE FROM C_Invoice_Candidate;
--DELETE FROM c_invoice_clearing_alloc;
--DELETE FROM c_invoicecandidate_inoutline;
--DELETE FROM c_invoice_line_alloc;
--DELETE FROM C_Invoice;
--DELETE FROM C_InvoiceLine;
--DELETE FROM C_InvoiceTax;
--DELETE FROM c_invoice_detail;

--DELETE FROM C_Dunning_Candidate;
--DELETE FROM C_DunningDoc;
--DELETE FROM C_DunningDoc_Line;

--DELETE FROM esr_import;
--DELETE FROM esr_importline;

--DELETE FROM c_flatrate_term;
--DELETE FROM c_flatrate_matching;
--DELETE FROM c_flatrate_dataentry;
--DELETE FROM c_flatrate_data;
--DELETE FROM c_subscriptionprogress;

--DELETE FROM C_Flatrate_Conditions; 
--DELETE FROM c_flatrate_transition; 
--DELETE FROM C_contract_change;

--DELETE FROM C_AllocationHdr;
--DELETE FROM C_AllocationLine;

--DELETE FROM C_Queue_Block;
--DELETE FROM C_Queue_Workpackage;
--DELETE FROM C_Queue_Element;
--DELETE FROM c_queue_workpackage_param;
--DELETE FROM c_queue_workpackage_Log;

--DELETE FROM C_Doc_Outbound_Log;
--DELETE FROM C_Doc_Outbound_Log_Line;

--DELETE FROM AD_Archive;
--DELETE FROM AD_Attachment;

--DELETE FROM ad_printerhw;
--DELETE FROM ad_printer_matching;
--DELETE FROM ad_printerhw_mediasize;
--DELETE FROM ad_printerhw_calibration;
--DELETE FROM ad_printerhw_mediatray;
--DELETE FROM ad_printertray_matching;

--DELETE FROM c_print_job;
--DELETE FROM c_print_job_detail;
--DELETE FROM c_print_job_instructions;
--DELETE FROM c_print_job_line;
--DELETE FROM c_print_package;
--DELETE FROM c_print_packageinfo;
--DELETE FROM c_printing_queue;
--DELETE FROM c_printpackagedata;

--
-- IMPORTANT: THIS TIME WE DON'T --DELETE THE ORGS
--
--DELETE FROM AD_Org WHERE AD_Org_ID NOT IN (0, 1000000);
--DELETE FROM AD_OrgInfo WHERE AD_Org_ID NOT IN (0, 1000000);

--DELETE FROM AD_Preference p WHERE NOT EXISTS (select 1 from AD_User u where u.AD_User_ID=p.AD_User_ID);
--DELETE FROM AD_User_OrgAccess uoa WHERE NOT EXISTS (select 1 from AD_User u where u.AD_User_ID=uoa.AD_User_ID);

--DELETE FROM ad_userquery;

--DELETE FROM ad_treebar tb WHERE NOT EXISTS (select 1 from AD_User u where u.AD_User_ID=tb.AD_User_ID);

--DELETE FROM m_matchpo;
--DELETE FROM m_matchInv;
--DELETE FROM M_Inventory;
--DELETE FROM m_inventoryline;
--DELETE FROM m_inventorylinema;

--DELETE FROM m_movement;
--DELETE FROM m_movementline;
--DELETE FROM m_movementlinema;
;
--DELETE FROM m_forecast;
--DELETE FROM m_forecastline;
--bishier
--
-- --DELETE Prices
--
--DELETE FROM M_PricingSystem WHERE Name NOt IN ('Divers','Standardpreis System');
--DELETE FROM M_PriceList c WHERE NOT EXISTS (select 1 from M_PricingSystem p where p.M_PricingSystem_ID=c.M_PricingSystem_ID);
--DELETE FROM M_PriceList_Version c WHERE NOT EXISTS (select 1 from M_PriceList p where p.M_PriceList_ID=c.M_PriceList_ID);
--DELETE FROM M_ProductPrice c WHERE NOT EXISTS (select 1 from M_PriceList_Version p where p.M_PriceList_Version_id=c.M_PriceList_Version_id)
	OR NOT EXISTS (select 1 from M_Product p where p.M_Product_id=c.M_Product_id)
;
--DELETE FROM m_productscaleprice; -- we don't have scaleprices anyways
--DELETE FROM M_ProductPrice_Attribute;
--DELETE FROM m_productprice_attribute_line;

--DELETE FROM m_discountschemaBreak;
--DELETE FROM m_discountschemaline;


--
-- HU
--
--DELETE FROM M_HU;
--DELETE FROM m_hu_assignment;
--DELETE FROM m_hu_attribute;
--DELETE FROM m_hu_attribute_snapshot;
--DELETE FROM m_hu_item;
--DELETE FROM m_hu_item_snapshot;
--DELETE FROM m_hu_item_storage;
--DELETE FROM m_hu_item_storage_snapshot;
--DELETE FROM m_hu_lutu_configuration;
--DELETE FROM m_hu_packingmaterial;
--DELETE FROM m_hu_pi;
--DELETE FROM m_hu_pi_attribute;
--DELETE FROM m_hu_pi_item;
--DELETE FROM m_hu_pi_item_product;
--DELETE FROM m_hu_pi_version;
--DELETE FROM m_hu_snapshot;
--DELETE FROM m_hu_storage;
--DELETE FROM m_hu_storage_snapshot;
--DELETE FROM m_hu_trx_attribute;
--DELETE FROM m_hu_trx_hdr;
--DELETE FROM m_hu_trx_line;
--DELETE FROM m_package_HU;
--DELETE FROM m_pickingslot_hu;
--DELETE FROM m_pickingslot_trx;


--DELETE FROM pp_MRP;
--DELETE FROM pp_mrp_alloc;
--DELETE FROM pp_mrp_alternative;

--DELETE FROM PP_Order;
--DELETE FROM pp_order_bom;
--DELETE FROM pp_order_bom_trl;
--DELETE FROM pp_order_bomline;
--DELETE FROM pp_order_bomline_trl;
--DELETE FROM pp_order_cost;
--DELETE FROM pp_order_node;
--DELETE FROM pp_order_node_asset;
--DELETE FROM pp_order_node_product;
--DELETE FROM pp_order_node_trl;
--DELETE FROM pp_order_nodenext;
--DELETE FROM pp_order_report;
--DELETE FROM pp_order_workflow;
--DELETE FROM pp_order_workflow_trl;
--DELETE FROM pp_product_bom;
--DELETE FROM pp_product_bom_trl;
--DELETE FROM pp_product_bomline;
--DELETE FROM pp_product_bomline_trl;
--DELETE FROM pp_product_planning;
--DELETE FROM pp_cost_collector;
--DELETE FROM pp_cost_collectorma;

--DELETE fROM m_productionplan;

--DELETE FROM AD_PInstance;
--DELETE FROM AD_PInstance_Para;
--DELETE FROM ad_pinstance_log;
--DELETE FROM AD_ChangeLog;


--DELETE FROM IMP_ProcessorLog;
--DELETE FROM AD_Issue;

--DELETE FROM AD_Note;
--DELETE FROM ad_usermail;

--DELETE from c_doc_responsible;

--DELETE FROM m_receiptschedule;
--DELETE FROM m_receiptschedule_alloc;

--DELETE FROM edi_desadv;
--DELETE FROM edi_desadvLine;
--DELETE FROM edi_desadvline_sscc;

--DELETE FROM C_Bank where C_Location_ID IS NOT NULL; -- the ones with location-ID are the ones that are not imported from the "official list"
--DELETE FROM c_bankaccount; --obsolete anyways
--DELETE FROM c_bankaccount_acct;

--DELETE FROM C_BP_BankAccount a WHERE 
	NOT EXISTS (select 1 from C_BPartner bp where a.C_BPartner_ID=bp.C_BPartner_ID)
	OR NOT EXISTS (select 1 from C_Bank p where a.C_Bank_ID=p.C_Bank_ID);
--DELETE FROM c_bp_bankaccount_acct a WHERE 
	NOT EXISTS (select 1 from C_BP_BankAccount bp where a.C_BP_BankAccount_ID=bp.C_BP_BankAccount_ID);

--DELETE FROM C_Location l WHERE true
	AND NOT EXISTS (select 1 from C_BPartner_Location pl where pl.C_Location_ID=l.C_Location_ID)
	AND NOT EXISTS (select 1 from C_Bank b where b.C_Location_ID=l.C_Location_ID)

--DELETE FROM c_bankstatement;
--DELETE FROM c_bankstatementline;
--DELETE FROM c_bpartner_product;
--DELETE FROM c_bp_relation;
--DELETE FROM c_payment;
--DELETE FROM c_payselectioncheck;
--DELETE FROM c_payselectionLine;
--DELETE fROM c_payment_request;

--DELETE FROM sepa_export;
--DELETE FROM sepa_export_line;

--DELETE FROM dd_order;
--DELETE FROM dd_orderline;
--DELETE FROM dd_orderline_alternative;

--DELETE FROM dd_networkdistribution;
--DELETE FROM dd_networkdistributionline;

--UPDATE ad_wf_node SET s_resource_ID=null;
--DELETE from S_resource;

--DELETE FROM m_material_tracking;
--DELETE FROM m_material_tracking_Ref;

--DELETE FROM m_pickingslot WHERE IsDynamic='N';
--UPDATE m_pickingslot SET C_BPartner_ID=null, C_BPartner_Location_ID=null;

--DELETE FROM M_Tour;
--DELETE FROM m_tour_instance;
--DELETE FROM m_tourversion;
--DELETE FROM m_tourversionLine;

--DELETE FROM r_request;
--DELETE FROM r_request--UPDATE;

--DELETE FROM m_shippertransportation;
--DELETE FROM m_shippingpackage;

--DELETE FROM t_aging;
--DELETE FROM t_alter_column;
--DELETE FROM t_boilerplate_spool;
--DELETE FROM t_bomline;
--DELETE FROM t_distributionrundetail;
--DELETE FROM t_inventoryvalue;
--DELETE FROM t_invoicegl;
--DELETE FROM t_letter_spool;
--DELETE FROM t_lock;
--DELETE FROM t_m_storage_candidate;
--DELETE FROM t_mrp_crp;
--DELETE FROM t_query_selection;
--DELETE FROM t_replenish;
--DELETE FROM t_report;
--DELETE FROM t_reportstatement;
--DELETE FROM t_selection;
--DELETE FROM t_selection2;
--DELETE FROM t_spool;
--DELETE FROM t_transaction;
--DELETE FROM t_trialbalance;

--QS, weitere zu leerende Tabellen

--UPDATE adempiere.C_BP_Group SET M_PricingSystem_ID=NULL, PO_PricingSystem_ID=NULL;

--UPDATE AD_Scheduler SET Supervisor_ID=1000000 --"Admin, Automatik-Benutzer"
WHERE Supervisor_ID NOT IN (0,1000000);

--DELETE from ad_wf_process;
--DELETE from ad_wf_activity;
--DELETE from ad_wf_eventaudit;

--DELETE from r_group_prospect;
--DELETE from r_request;
--DELETE from r_requestaction;

--DELETE from m_productgroup;
--DELETE from c_cash; -- only "Standard" existing
--DELETE from c_cashline;
--DELETE from c_project;  -- only "Standard" existing

--DELETE FROM c_letter;
--DELETE FROM c_recurrentpayment;
--DELETE FROM m_deliveryday;
--DELETE from m_deliveryday_alloc;
--DELETE FROM i_bpartner;
--DELETE FROM a_asset;
--DELETE FROM a_asset_change;

--DELETE FROM m_cost;
--DELETE FROM m_costdetail;
--DELETE FROM m_costqueue;

--DELETE FROM m_productgroup_product;

--DELETE FROM x_bpartner_stats_mv;
--DELETE fROM x_mrp_productinfo_mv;
--DELETE FROM x_mrp_productinfo_detail_mv;
--DELETE FROM m_iolcandhandler_log;
--DELETE FROM ad_relation;
--DELETE FROM m_material_balance_detail;
--DELETE FROM exp_replicationtrxline;
--DELETE FROM c_invoice_candidate_headeraggregation;

--DELETE FROM ad_schedulerlog;
--DELETE FROM ad_session;
--DELETE FROM c_referenceno_doc;
--DELETE FROM c_referenceno;

--UPDATE pg_trigger SET tgenabled='O'
WHERE tgenabled='D' and tgconstrrelid !=0;

```

