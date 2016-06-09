---
title: IT FRESH-344
required data: 
   ad_cliend_id: client1
   pp_order_id: production orders
   c_order_id: sales and purchase orders
   c_invoice_id: sales and purchase invoices
   m_inout_id: sales and purchase inouts
layout: default
---

# IT FRESH-344
### Move KPI SQL to repository and new DB Schema
> A list with some of the KPIs we have and what they do


**Inventory Turnover**

1. What is used for 
	*  this report is used to see how often you deliver certain product in relation to what you store
		* => high result = often, low = not so often 
	* this function returns the following columns:
        * m_product_id (taken from m_hu_storage -> m_hu -> M_HU_Item -> M_HU_Trx_line -> M_Product.M_Product_ID) 
		* product_name (taken from M_Product.Name like above)
        * qty_stored 
			* the sum of stored qtys (Active and Picked, without Materialenthname) in these 13 months divided by 13, for the selected period and 12 months before, or you can choose the number of months 
			* taken from m_hu_storage -> m_hu -> M_HU_Item -> M_HU_Trx_line.Qty
		* qty_delivered
			* the sum of delivered qtys in these 13 months divided by 13. Taken from inouts and production - for now Materialenthname
			* taken from m_inoutline -> m_product, M_inout where ispackagingmaterial='N' AND issotrx='Y' AND docstatus in ('CO','CL'). And also taken from m_hu_storage -> m_hu -> M_HU_Item -> M_HU_Trx_line.Qty but only where the warehouse is Materialenthname and M_HU_Trx_line.hustatus NOT IN ('P', 'D', 'E')
        * qty_inv_turnover is qty_stored/qty_delivered 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Inventory_Turnover(*your c_period_id*, *number of months*)

**Purchase Order Aging Report**

1. What is used for 
	* this report shows the purchase orders which are not fulfilled in a range of time 
	* this means orders which are not yet delivered (being delivered means all lines are delivered)
	* the available time ranges: 2h/ 5h/ 12h/ 2days/ +2days 
	    * => per each: number of orders, grand total and for all: sums of orders
	* this function returns the following columns:
		* intervalh = 2h/ 5h/ 12h/ 2days/ +2days
		* ordersno = number of orders not delivered in the corresponding interval
		* grandtotal (taken from C_Order.grandtotal)
	* !!!! note!!!! we might want to take the created/completed time duration from AD_WF_Process. Currently is taken from AD_ChangeLog.Created and if null then C_Order.Updated

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Purchase_Order_Aging_Report ('2015-06-15 14:56:27+03'::timestamp with time zone,'2015-07-21 14:56:27+03'::timestamp with time zone) 

**Sales Order Aging Report**

1. What is used for 
	* this report shows the sales orders which are not fulfilled in a range of time 
	* this means orders which are not yet delivered (being delivered means all lines are delivered)
	* the available time ranges: 2h/ 5h/ 12h/ 2days/ +2days 
	    * => per each: number of orders, grand total and for all: sums of orders
	* this function returns the following columns:
		* intervalh = 2h/ 5h/ 12h/ 2days/ +2days
		* ordersno = number of orders not delivered in the corresponding interval
		* grandtotal (taken from C_Order.grandtotal)
	* !!!! note!!!! we might want to take the created/completed time duration from AD_WF_Process. Currently is taken from AD_ChangeLog.Created and if null then C_Order.Updated 
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Sales_Order_Aging_Report ('2015-06-15 14:56:27+03'::timestamp with time zone,'2015-07-21 14:56:27+03'::timestamp with time zone) 
	
**Purchase price range**

1. What is used for 
    * this report shows the average price of purchased products, for a given time frame
	* it takes the products from c_invoice for a timeframe. Finds what was the cheapest price, most expensive one and make an average
	* this function returns the following columns:
		* max_product_value = the value of the product with biggest price purchased 
        * max_product_name = the name of the product with biggest price purchased 
		* max_price = the biggest price the product above was purchased
        * averagePriceMax - for the product above (taken from M_Cost of the M_Product, where M_CostElemet's costingmethod is "A" - which means the average of the price which the product was purchased (need to check because the value does not seem correct))
        * min_product_value = the value of the product with lowest price purchased
        * min_product_name = the name of the product with lowest price purchased
        * min_price = the lowest price the product above was purchased 
        * averagePriceMin - for the product above (taken from M_Cost of the M_Product, where M_CostElemet's costingmethod is "A" - which means the average of the price which the product was purchased (need to check because the value does not seem correct)) 
    * the data was taken from:
        * M_Product -> C_InvoiceLine -> C_Invoice
        * where invoices are purchase, and dateinvoiced between the param dates, price bigger than 0 and DocStatus IN ('CO','CL') 
 
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Purchase_Price_Range('2015-08-01', '2016-08-01')
		
**Sales Price Range**

1. What is used for 
	* this report shows the average price of sold products, for a given time frame
	* it takes the products from c_invoice for a timeframe. Finds what was the cheapest price, most expensive one and make an average
	* this function returns the following columns:
		* max_product_value = the value of the product with biggest price sold 
        * max_product_name = the name of the product with biggest price sold 
		* max_price = the biggest price the product above was sold
        * averagePriceMax - for the product above (taken from M_Cost of the M_Product, where M_CostElemet's costingmethod is "I" - which means the average of the price which the product was sold (need to check because the value does not seem correct))
        * min_product_value = the value of the product with lowest price sold
        * min_product_name = the name of the product with lowest price sold
        * min_price = the lowest price the product above was sold 
        * averagePriceMin - for the product above (taken from M_Cost of the M_Product, where M_CostElemet's costingmethod is "I" - which means the average of the price which the product was sold (need to check because the value does not seem correct)) 
    * the data was taken from:
		* M_Product -> C_InvoiceLine -> C_Invoice
		* where invoices are sales, and dateinvoiced between the param dates, price bigger than 0 and DocStatus IN ('CO','CL') 
		
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Sales_Price_Range('2015-08-01', '2016-08-01')

**Top Customers**

1. What is used for 
	* this report shows the top 3 customers, by revenue and number of orders
	* this function returns the following columns:
		* revenue (taken from from fact_acct fa (fa.amtacctdr-fa.amtacctcr), from the account that we have in C_BP_Customer_Acct in C_Receivable_Acct field, for the corresponding C_Invoice that are sales invoices, for the given dates in params)
		* revenuek = user friendly way of representing the revenue amount 
		* ordersNo = counting the number of orders that have this bpartner in C_BPartner_ID column and are sales orders, for the given dates in params 
		* bpartnerName (taken from c_BPartner)

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Customer_Function ('2015-08-01', '2015-08-31') 
	
**Top Vendors**

1. What is used for 
	* this report shows the top 3 vendors, by expense and number of orders
	* this function returns the following columns:
		* expense (taken from: expense from fact_acct fa (fa.amtacctcr-fa.amtacctdr), from the account that i have in C_BP_Vendor_Acct in V_Liability_Acct field, for the corresponding C_Invoice that are purchase invoices, for the given dates in params)
		* expensek = user friendly way of representing the expense amount 
		* ordersNo = counting the number of orders that have this bpartner in C_BPartner_ID column and are purchase orders, for the given dates in params 
		* bpartnerName (taken from c_BPartner)

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Vendor_Function ('2015-08-01', '2015-08-31') 
	
**Top Performers purchase**

1. What is used for 
	* this report shows which user has recorded the most purchase order lines during the last 30 days  
	* this is applied for all 3 tables: order lines, inout lines and invoice lines
	* this function returns the following columns:
		* ad_user_id = AD_User.AD_User_ID from all users which has at least 1 order, or 1 inout or 1 invoice line
        * userName = AD_User.Name from all users which has at least 1 order, or 1 inout or 1 invoice line
        * tablename (taken from AD_Table WHERE tablename= 'C_OrderLine' / 'M_InOutLine' / 'C_InvoiceLine')
        * LinesNo = the lines are counted: COUNT(C_OrderLine.OrderLine_ID / M_InoutLine.M_InOutLine_ID / C_InvoiceLine.C_InvoiceLine_ID) 
	* and it is ordered by the documentType and by the number of lines (tablename and LinesNo)
    * And also joined C_Order, M_inOut and C_Invoice to take issotrx for filtering the purchase and docstatus for filtering out voided or in progress documents 
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Performers_Purchase('2015-08-01', '2015-08-31')

**Top Performers sales**

1. What is used for 
	* this report shows which user has recorded the most sales order lines during the last 30 days  
	* this is applied for all 3 tables: order lines, inout lines and invoice lines
	* this function returns the following columns:
		* ad_user_id = AD_User.AD_User_ID from all users which has at least 1 order, or 1 inout or 1 invoice line
        * userName = AD_User.Name from all users which has at least 1 order, or 1 inout or 1 invoice line
        * tablename (taken from AD_Table WHERE tablename= 'C_OrderLine' / 'M_InOutLine' / 'C_InvoiceLine')
        * LinesNo = the lines are counted: COUNT(C_OrderLine.OrderLine_ID / M_InoutLine.M_InOutLine_ID / C_InvoiceLine.C_InvoiceLine_ID) 
	* and it is ordered by the documentType and by the number of lines (tablename and LinesNo)
    * And also joined C_Order, M_inOut and C_Invoice to take issotrx for filtering the sales and docstatus for filtering out voided or in progress documents 
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Performers_Sales('2015-08-01', '2015-08-31')
	
**Top Products Purchase**

1. What is used for 
	* this report shows which are the most purchased products, in a given time frame 
	* the info is taken from M_InOutLine.qtyEntered
	* this function returns the following columns:
		* productName (taken from M_Product.Name)
		* purchasedProductsNo = the SUM of qtyEntered from C_InOutLine for the corresponding product
		* purchasedProductsNoK = the user friendly way to show the number of purchased products
	* the M_InOutLine is not PackagingMaterial and the data is gathered for a period of time, given in params, for the corresponding purchase M_InOut, with docbasetype='MMS' and docsubtype='MS' (so we won't get retournables)	
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Products_Purchase_Function ('2015-08-01', '2015-08-31') 

**Top Products Sales**

1. What is used for 
	* this report shows which are the most sold products, in a given time frame 
	* the info is taken from M_InOutLine.qtyEntered
	* this function returns the following columns:
		* productName (taken from M_Product.Name)
		* soldProductsNo = the SUM of qtyEntered from C_InOutLine for the corresponding product
		* soldProductsNoK = the user friendly way to show the number of sold products
	* the M_InOutLine is not PackagingMaterial and the data is gathered for a period of time, given in params, for the corresponding sales M_InOut, with docbasetype='MMR' and docsubtype='MR' (so we won't get retournables)	
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Products_Sales_Function ('2015-08-01', '2015-08-31') 

**Vendor delivery promise date performance**

1. What is used for 
	* this report shows the worst performing top 10 vendors in delivery date compared to promised date 
	* this function returns the following columns:
		* c_bpartner_id
		* name (taken from C_BPartner(s) who are vendors and the order wasn't delivered in time)
		* deliveredPastPromisedPercent = this is the percentage of qty not delivered in time and is calculated like this:
			* ((SUM(deliveredPastPromised) / SUM(deliveredPastPromised + deliveredOnPromised) )*100)
			* for this we take the purchase C_Order(s) from the C_BPartner(s) and join them with C_OrderLine(s) which has isSOTrx='N', isPackagingMaterial = 'N' and datePromised between the parameters.
			* orderlines are joined with inoutlines and inouts with inoutlines
			* we compare inout.MovementDate with orderline.datePromised and we increase the qty delivered in time and qty delivered past promise accordingly
			* we also check for doc status for order and inout to be IN ('CO', 'CL') 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Vendor_Delivery_PromisedDate_Performance('2015-05-01','2015-08-31')
	
**Vendor delivery quality performance**

1. What is used for 
	* this report shows top 10 poor performers of vendors according to quality differences in material receipt 
	* this function returns the following columns:
		* c_bpartner_id
		* name (from c_Bpartner)
		* isissuepercentage
    * we have versions of this function because some old data from invoice candidates might be wrong 
	* v1:
        * isissuepercentage is calculated like this:  SUM(qtysWithIssues)/SUM(goodqty+issuesqty)
        * C_BPartner is joined with C_Invoice_Candidate ON Bill_BPartner_ID
        * inouts joined with invoice candidates by this table: C_InvoiceCandidate_InOutLine
        * qtymoved is taken from inoutline: iol.isindispute='Y' for those with issues and iol.isindispute='N' for those without issues
        * where invoice candidates with issotrx='N', ic.isPackagingmaterial = 'N' AND ic.C_OrderLine_ID IS NOT NULL
        * where inouts: io.docstatus in ('CO','CL')
        * and all the data gathered is between the dates in params 
    * v2:
        * everything is taken from C_BPartner joined with C_Invoice_Candidate on Bill_BPartner_ID
        * isissuepercentage is calculated like this: SUM(ic.qtywithissues)/SUM(ic.qtydelivered) - both qtys taken from C_Invoice_Candidates - but those qtys are sometimes wrong
        * where invoice candidates with ic.issotrx='N' AND ic.qtyDelivered != 0 AND ic.isPackagingmaterial = 'N' AND C_OrderLine_ID IS NOT NULL
        * and all the data gathered is between the dates in params 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Vendor_Delivery_Quality_Performance('2015-08-01','2015-08-31')
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Vendor_Delivery_Quality_Performance_v2('2015-08-01','2015-08-31')

**Workflow duration purchase inout**

1. What is used for 
	* this report shows all purchase inouts in a timeframe, only first 25% with most lines. Calculates durations per lines, order by duration per lines. Then the Top 10 are compared with other top 10, last date range
	* this function returns the following columns:
		* table_id (taken from AD_WF_Process, which in this case is the id from M_InOut table )
        * record_id (taken from AD_WF_Process, for the inouts which have issotrx='N')
        * created (AD_WF_Process.Created)
        * duration (the difference between the moment the workflow was created until updated: AD_WF_Process.Updated - AD_WF_Process.Created )
		* duration_perline 
			* the duration per each line of the current inout: duration / lines number
			* Inouts with the highest 25% number of lines: where linenos >= floor((maxline - (((maxline * 25)::float)/100))::float))
		* difference_duration 
			* first is calculated the average time from all inouts' duration described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way
		* difference_duration_perline 
			* first is calculated the average time from all inouts' duration_perline described above, for a time frame given in params.
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Workflow_Duration_Purchase_InOut ('2016-03-01', '2016-04-01', null,null)		

**Workflow duration purchase invoice**

1. What is used for 
	* this report shows all purchase invoices in a timeframe, only first 25% with most lines. Calculates durations per lines, order by duration per lines. Then the Top 10 are compared with other top 10, last date range
	* this function returns the following columns:
		* table_id (taken from AD_WF_Process, which in this case is the id from C_Invoice table )
        * record_id (taken from AD_WF_Process, for the invoices which have issotrx='N')
        * created (AD_WF_Process.Created)
		* duration (the difference between the moment the workflow was created until updated: AD_WF_Process.Updated - AD_WF_Process.Created )
		* duration_perline
			* the duration per each line of the current invoice: duration / lines number. 
			* Also we only take the invoices with the highest 25% number of lines: where linenos >= floor((maxline - (((maxline * 25)::float)/100))::float)
			* Shown in a user-friendly way.
		* difference_duration
			* first is calculated the average time from all invoices' duration described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.
		* difference_duration_perline
			* first is calculated the average time from all invoices' duration_perline described above, for a time frame given in params.
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are.
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.
		
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Workflow_Duration_Purchase_Invoice ('2016-03-01', '2016-04-01', null,null)

**Workflow duration purchase order**

1. What is used for 
	* this report shows all purchase orders in a timeframe, only first 25% with most lines. Calculates durations per lines, order by duration per lines. Then the Top 10 are compared with other top 10, last date range
	* this function returns the following columns:
		* table_id (taken from AD_WF_Process, which in this case is the id from C_Order table )
		* record_id (taken from AD_WF_Process, for the orders which have issotrx='N')
		* created (AD_WF_Process.Created)
		* duration (the difference between the moment the workflow was created until updated: AD_WF_Process.Updated - AD_WF_Process.Created )
		* duration_perline 
			* The duration per each line of the current order: duration / lines number.
			* Also we only take the orders with the highest 25% number of lines: where linenos >= floor((maxline - (((maxline * 25)::float)/100))::float)
			* Shown in a user-friendly way.
		* difference_duration
			* first is calculated the average time from all orders' duration described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.
		* difference_duration_perline
			* first is calculated the average time from all orders' duration_perline described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Workflow_Duration_Purchase_Order ('2016-02-01', '2016-03-01', null,null)	

**Workflow duration sales inout**

1. What is used for 
	* this report shows all sales inouts in a timeframe, only first 25% with most lines. Calculates durations per lines, order by duration per lines. Then the Top 10 are compared with other top 10, last date range
	* this function returns the following columns:
		* table_id (taken from AD_WF_Process, which in this case is the id from M_InOut table )
		* record_id (taken from AD_WF_Process, for the inouts which have issotrx='Y')
		* created (AD_WF_Process.Created)
		* duration (the difference between the moment the workflow was created until updated: AD_WF_Process.Updated - AD_WF_Process.Created )
		* duration_perline
			* the duration per each line of the current inout: duration / lines number. 
			* Also we only take the inouts with the highest 25% number of lines: where linenos >= floor((maxline - (((maxline * 25)::float)/100))::float). 
			* Shown in a user-friendly way.
		* difference_duration
			* first is calculated the average time from all inouts' duration described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.
		* difference_duration_perline
			* first is calculated the average time from all inouts' duration_perline described above, for a time frame given in params.
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Workflow_Duration_Sales_InOut ('2016-03-01', '2016-04-01', null,null)

**Workflow duration sales invoice**

1. What is used for 
	* this report shows all sales invoices in a timeframe, only first 25% with most lines. Calculates durations per lines, order by duration per lines. Then the Top 10 are compared with other top 10, last date range
	* this function returns the following columns:
		* table_id (taken from AD_WF_Process, which in this case is the id from C_Invoice table )
		* record_id (taken from AD_WF_Process, for the invoices which have issotrx='Y')
		* created (AD_WF_Process.Created)
		* duration (the difference between the moment the workflow was created until updated: AD_WF_Process.Updated - AD_WF_Process.Created )
		* duration_perline
			* the duration per each line of the current invoice: duration / lines number. 
			* Also we only take the invoices with the highest 25% number of lines: where linenos >= floor((maxline - (((maxline * 25)::float)/100))::float). 
			* Shown in a user-friendly way.
		* difference_duration 
			* first is calculated the average time from all invoices' duration described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.
		* difference_duration_perline 
			* first is calculated the average time from all invoices' duration_perline described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Workflow_Duration_Sales_Invoice ('2016-03-01', '2016-04-01', null,null)
	
**Workflow duration sales order**

1. What is used for 
	* this report shows all sales orders in a timeframe, only first 25% with most lines. Calculates durations per lines, order by duration per lines. Then the Top 10 are compared with other top 10, last date range
	* this function returns the following columns:
		* table_id (taken from AD_WF_Process, which in this case is the id from C_Invoice table )
		* record_id (taken from AD_WF_Process, for the invoices which have issotrx='Y')
		* created (AD_WF_Process.Created)
		* duration (the difference between the moment the workflow was created until updated: AD_WF_Process.Updated - AD_WF_Process.Created )
		* duration_perline 
			* the duration per each line of the current order: duration / lines number. 
			* Also we only take the orders with the highest 25% number of lines: where linenos >= floor((maxline - (((maxline * 25)::float)/100))::float). 
			* Shown in a user-friendly way.
		* difference_duration 
			* first is calculated the average time from all orders' duration described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.
		* difference_duration_perline 
			* first is calculated the average time from all orders' duration_perline described above, for a time frame given in params. 
			* Then is calculated the average for another timeframe: either you give it in params, or is the last period from the one you are. 
			* And so, difference_duration is calculated like: average_of_now - average_last_period. 
			* Shown in a user-friendly way.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Workflow_Duration_Sales_Order ('2016-02-01', '2016-03-01', null,null)
	
**Accounts Payable Turnover**

1. What is used for 
	* this report shows the average amount of days the customers take time to pay an invoice. Additional number which shows the average time of days paid before/ after date due 
	* The information for this KPI will be taken from the table C_AllocationLine
    * The parameters for the KPI would be DateFrom and DateTo
    * The invoices will be taken via C_AllocationLine.C_Invoice_ID
    * The invoices that are eligible for this KPI if:
        * The time frame in which the invoices are due is the one given by the parameters
        * For finding out when a due date is for an invoice, check C_Invoice.C_PaymentTerm_ID and then C_PaymentTerm.NetDays
        * The due date will be C_Invoice.DateInvoiced + C_PaymentTerm.NetDays
        * The invoices are COmpleted or CLosed C_Invoice.DocStatus in ('CO', 'CL')
        * The invoices are for the sales part. THis means they have a C_Invoice.C_DocType_ID that has C_DocType.DocBaseType = 'ARI' ( ARI_Rechnung (Debitorenkonten)) 
	* this function returns the following columns:
		* TurnoverAccountsPayable = This number represents the average number of days the customers waited to pay the invoice
			* For finding out when an invoice was paid, search for the C_AllocationLine.C_AllocationHdr_ID and take the C_AllocationHdr.DateTrx value
			* For a certain invoice, the difference between invoicing and payment will be determined by C_AllocationHdr.DateTrx - C_Invoice.DateInvoiced
            * Note: This number shall be always positive unless anomalies happen 
		*  AverageDaysDue = This info will be the average of the differences between the due date and the date when the invoices were paid
			* A negative number -x means the invoices were paid, on average, x days before the due date
			* 0 would be payment on due date
            * A positive number x would mean an average number of x days after the due date when the invoices were paid  
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Accounts_Payable_Turnover_Function('2015-08-01','2015-08-31')
	
**Accounts Receivable Turnover**

1. What is used for 
	* this report shows the average amount of days the vendors take time to pay an invoice. Additional number which shows the average time of days paid before/ after date due 
	* The information for this KPI will be taken from the table C_AllocationLine
    * The parameters for the KPI would be DateFrom and DateTo
    * The invoices will be taken via C_AllocationLine.C_Invoice_ID
    * The invoices that are eligible for this KPI if:
        * The time frame in which the invoices are due is the one given by the parameters
        * For finding out when a due date is for an invoice, check C_Invoice.C_PaymentTerm_ID and then C_PaymentTerm.NetDays
        * The due date will be C_Invoice.DateInvoiced + C_PaymentTerm.NetDays
        * The invoices are COmpleted or CLosed C_Invoice.DocStatus in ('CO', 'CL')
        * The invoices are for the purchase part. THis means they have a C_Invoice.C_DocType_ID that has C_DocType.DocBaseType = 'API' ( API_Rechnung (Kreditorenkonten) ) 
	* this function returns the following columns:
	    * TurnoverAccountsReceivable = This number represents the average number of days the vendors waited to pay the invoice
			* For finding out when an invoice was paid, search for the C_AllocationLine.C_AllocationHdr_ID and take the C_AllocationHdr.DateTrx value
			* For a certain invoice, the difference between invoicing and payment will be determined by C_AllocationHdr.DateTrx - C_Invoice.DateInvoiced
            * Note: This number shall be always positive unless anomalies happen 
		* AverageDaysDue = This info will be the average of the differences between the due date and the date when the invoices were paid
            * A negative number -x means the invoices were paid, on average, x days before the due date
            * 0 would be payment on due date
            * A positive number x would mean an average number of x days after the due date when the invoices were paid 
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Accounts_Receivable_Turnover_Function('2015-08-01','2015-08-31')
	
**Performance Asynch today vs average 30 Days**

1. What is used for 
	* this report shows the async performance for today (given date) vs last 30 days
	* The information needed for this KPI will be taken from the C_Queue_WorkPackage table.
	* this function returns the following columns:
		* currentperformance = For calculating the performance for a day we will divide the sum of C_Queue_WorkPackage.lastdurationmillis values to the number of C_Queue_WorkPackage entries for that day
			* In sql form: SUM(lastdurationmillis)/(GREATEST(COUNT(C_Queue_WorkPackage_ID),1))
            * Note: we used greatest between the count and 1 in case there was no work package to be processed that day 
		* averageperformance = For calculating the Avarage performance for a certain period of time, the performances for each day of that period will be summed up and divided to the number of days in the period
			* In our concrete case, the avg will be done for the interval of 30 days before (exclusively) the current day, divided by 30
            * Note: current date can be any date, not necessarily "today" . It will be passed as parameter, and the avg will be calculated for the 30 days before it 
	* In case the customer has free days, the SQL can be adjusted to exclude these days
    * For instance, I prepared the filter for the business case when the weekends are free : EXTRACT(DOW FROM laststarttime) NOT IN(0,6)
    * I don't know if this will be the case, so I left this as a comment in the sql, to be used according with the business model of our customers 
    * In case the customer uses the table C_NonBusinessDay, we will use the filter: NOT EXISTS (SELECT Date1 from C_NonBusinessDay where date1 = date_trunc('day', laststarttime) )
    * left this filter also as comment in the SQL 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.kpi_async_performance_vs_30_days_function ('2016-06-07')
	
**Machine time as percentage of order lead time**	

1. What is used for 
	* this report shows how much of the entire time it used (as percentage), for each of the machines implied in the production of the PP_Order's elements
	* The information about overall worksflow per PP_Order is found in PP_Order_Workflow where the PP_Order_ID is the given PP_Order
	* The information about the machines activity are found in the table PP_Order_Node, where the PP_Order_Workflow_ID is of the given workflow
	* The machine itself is specified in the column PP_Order_Node.S_Resource_ID
	* The time spent by a machine to produce the required products is provided by the column PP_Order_Node.Duration or the difference between PP_Order_Node.Date finish and PP_Order_Node.DateStart (to be decided)
    * Note: until now, we do not have the implementation of this logic. The duration is always 0 and the start and finish time are always equal. Nevertheless, we will create the KPI as if these values were correctly set, leaving the actual implementation of the logic to a future task. This was decided together with Mark (see this task's Skype chat)
    * The total duration of a pp_Order will be given by the sum of the durations of its PP_Order_Workflows
	* The percentage for a machine will be the sum of durations for that machine divided by the total duration
	* this function returns the following columns:
		* machine
		* duration
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Machine_Time_Percentage_Order_Lead_Time(*your pp_order_id*)	
	
**Open Session today**

1. What is used for 
	* this report shows who was logged in on a given date, and for how much time
	* The information for this KPI will be taken from the table AD_Session
    * A session is from a certain date when its AD_Session.LoginDate equals that date
    * Note: in the SQL, the current date is given as a parameter. This way the function can be used for any date.
    * However, if only the current date is needed, the parameter could simply be replaced with postgresql's current_date 
    * A session is Open when it has the flag AD_Session.Processed = 'N'
	* this function returns the following columns:
		* UserName (taken from the column AD_Session.LoginUserName )
		* IP (taken from the column AD_Session.Remote_Addr)
		* LoginTime (taken from the column AD_Session.Created)
    * The entries will be ordered by the time they were created (LoginTime in KPI)
    * Note: Some of the AD_Session entries in out db (mostly Server web sessions) do not have a userLoginName. Are excluded from the KPI's SQL.
    * If they are needed to be displayed in this KPI, delete the condition AND LoginUserName IS NOT NULL
    * Or maybe we could have a separate KPI for the server web sessions if they are important 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Open_Sessions_Today_Function('2016-06-07')
	
**Qty open sessions today vs. average 30 days**

1. What is used for 
	* this report is used for measuring the average number of open sessions for a period 
	* The information needed for this KPI will be taken from the table AD_Session
	* this function returns the following columns:
		* CurrentOpenSessions 
			* A session is from a certain date when its AD_Session.LoginDate equals that date
			* Note: in the SQL, the current date is given as a parameter. This way the function can be used for any date.
			* However, if only the current date is needed, the parameter could simply be replaced with postgresql's current_date 
			* A session is Open when it has the flag AD_Session.Processed = 'N'
			* So, for getting the current date's number of open sessions, use COUNT(s.AD_Session_ID) for the entries that have the LoginDate = current date and that are not processed 
		* AVGOpenSessions 
			* For measuring the average number of open sessions for a period, count them as above, grouped by loginDate and then divide them by the number of days contained by the period
			* In our concrete case, count the open sessions for each of the days that fit the condition: s.LoginDate >= ((date ($1) - interval '1 day') - interval '29 days') AND s.LoginDate <$1 , sum them up and divide them by 30 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.kpi_open_sessions_vs_30_days_function('2016-06-07')
	
**Production Run setup Time**

1. What is used for 
	* this report shows simulated and actual setup time in production
	* this function returns the following columns:
		* Machine
		* ProjectedSetupTime 
		* ActualSetupTime
	* The information about overall workflow per PP_Order is found in PP_Order_Workflow where the PP_Order_ID is the given PP_Order
	* The information about the machines activity are found in the table PP_Order_Node, where the PP_Order_Workflow_ID is of the given PP_Order
	* For each of the machines implied in the production of the PP_Order's elements, we will need info about the projected SetupTime (from Simulation) and the SetupTimeReal
	* The machine itself is specified in the column PP_Order_Node.S_Resource_ID
	* The setup time for a machine is provided by the column PP_Order_Node.SetupTime (to be implemented)
	* Note: until now, we do not have the implementation of this logic. The duration is always 0 and the start and finish time are always equal. Nevertheless, we will create the KPI as if these values were correctly set, leaving the actual implementation of the logic to a future task.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.kpi_production_run_setup_time (*pp_order_id*)
	
**projected vs. actual time production line**

1. What is used for 
	* this report shows simulated and actual time in production
	* this function returns the following columns:
		* Machine
		* ProjectedTime 
		* ActualTime
	* Will provide this PP_Order by it's ID, as parameter
	* The information about overall workflow per PP_Order is found in PP_Order_Workflow where the PP_Order_ID is the given PP_Order
	* The information about the machines activity are found in the table PP_Order_Node, where the PP_Order_Workflow_ID is of the given PP_Order
	* For each of the machines implied in the production of the PP_Order's elements, we will need info about the projected Duration (from Simulation) and the DurationReal
	* The machine itself is specified in the column PP_Order_Node.S_Resource_ID
	* The time spent by a machine to produce the required products is provided by the column PP_Order_Node.Duration or the difference between PP_Order_Node.Date finish and PP_Order_Node.DateStart (to be decided)
	* Note: until now, we do not have the implementation of this logic. The duration is always 0 and the start and finish time are always equal. Nevertheless, we will create the KPI as if these values were correctly set, leaving the actual implementation of the logic to a future task.

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.kpi_projected_vs_actual_production_line

**Operating Cash Flow**

1. What is used for 
	* this report shows the difference between incoming and outgoing payments for a given client, in a given time frame
	* this function returns the following column:
		* OperatingCashDifference
    * The information will be taken from the table C_Payment
    * The KPI will return results for a certain range of time. For now, I will pass it as 2 parameters: DateFrom and DateTo 
    * The payments that the sql selects form must be COmpleted or CLosed: C_Payment.DocStatus IN ('CO', 'CL')
    * The amounts must be in the same currency for all the payments.
        * For finding the currency used by the client that opens the KPI we have to search for it in the AD_ClientInfo.C_AcctSchema1_ID. This is why AD_CLient_ID is also a parameters in the function I provided for the KPI
        * For this, use the sql function currencyConvert 
    * Incoming payments are the entries from C_Payment that have the C_Payment.C_DocType_ID that has C_DocType.DOcBaseType = 'ARR' (ARR_Zahlungseingang (Debitorenkonten))
    * Outgoing payments are the entries from C_Payment that have the C_Payment.C_DocType_ID that has C_DocType.DOcBaseType = 'APP' (APP_Zahlung (Kreditorenkonten))
    * The results will be the difference between the sum or C_Payment.PayAmt of the first and second types of payments 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_OperatingCash_Function (*AD_Client_ID*, '2015-08-01','2015-08-31')
	
**Projected cash flow**

1. What is used for 
	* this report shows the possible future cash flow 
	* this function returns the following column:
		* ProjectedCashDifference
	* The data will be taken from the invoices ( C_Invoice) that are due in a certain range of time
	* The time range will be given a 2 Date parameters: DateFrom and DateTo
	* Even if the KPI is for projected time range, the sql will for for any given dates 
	* The invoices that the sql selects form can have any docstatus. We are talking about the existing invoices that are due in future but might be completed or not.
	* The amounts must be in the same currency for all the invoices.
	* For finding the currency used by the client that opens the KPI we have to search for it in the AD_ClientInfo.C_AcctSchema1_ID. This is why AD_CLient_ID is also a parameters in the function I provided for the KPI
    * For this, use the sql function currencyConvert 
	* Incoming invoices are the entries from C_Invoice that have the C_Invoice.C_DocType_ID that has C_DocType.DOcBaseType = 'ARI' (ARI_Rechnung (Debitorenkonten))
	* Outgoing invoices are the entries from C_Invoice that have the C_Invoice.C_DocType_ID that has C_DocType.DOcBaseType = 'API' (API_Rechnung (Kreditorenkonten))
	* The results will be the difference between the sum or C_Invoice.GrandTotal of the first and second types of invoices 	

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_ProjectedCash_Function (*AD_Client_ID*, '2015-08-01','2015-08-31')
	
**Purchase Order Status**

1. What is used for 
	* this report shows if a purchase order is completed, allocated, issued, received and invoiced quantity
	* this function returns the following columns:
		* confirmed 
			* This info comes from the C_Order.DocStatus. It is only confirmed when the status is 'CO'. Can only be 1 (for status CO) or 0 ( for all the other statuses)
		* allocated
			* Check all the order lines of this order that have IsPackagingLine = 'N' (we don't consider the receipt schedules for the HUs for now, to have everything similar with the sales side)
			* For each of them, check the created M_ReceiptSchedule entries (M_ReceiptSchedule.C_OrderLine_ID = C_OrderLine_ID from above)
			* For each of them, check the M_ReceiptSchedule_Alloc entries (M_ReceiptSchedule_Alloc.M_ReceiptSchedule_ID = M_ReceiptSchedule.M_ReceiptSchedule_ID from above)
			* Sum up M_ReceiptSchedule_Alloc.QtyAllocated
			* A possible way of calculating the percentage per order would be: SUM (LEAST(M_ReceiptSchedule_Alloc.QtyAllocated/C_OrderLine.QtyEntered,1 )) / number of non-packing material order lines) 
		* issued
			* This will give info about the percentage of the ordered qty that was with issues
			* For getting this info we use the M_ReceiptSchedule_Alloc.QtyWithIssues
			* Percentage calculation: SUM (LEAST(COALESCE(rsa.QtyWithIssues, 0)/GREATEST(ol.QtyEntered,1), 1 :: numeric )) / COUNT(ol.C_OrderLine_ID) 
		* received
			* Check all the completed inouts for the given order: C_Order -> C_OrderLine -> M_inOutLine -> M_InOut 
			* The M_InOut must be completed
			* Calculate SUM( LEAST(COALESCE( iol.QtyEntered,0)/GREATEST(ol.QtyEntered,1),1 :: numeric)) / COUNT(ol.C_OrderLine_ID) 
		* invoiced
			* Check all the completed invoices for the given order: C_Order -> C_OrderLine -> C_InvoiceLine -> C_Invoice 
            * The Invoice must be completed or closed
			* Calculate SUM( LEAST(COALESCE( il.QtyEntered, 0)/ GREATEST(ol.QtyEntered,1),1 :: numeric)) / COUNT(ol.C_OrderLine_ID) 
		
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.kpi_purchase_order_status_function(*C_Order_ID*)

**Purchase Order Status Overview**

1. What is used for 
	* this report shows if the purchase orders from a given time frame are completed, allocated, issued, received and invoiced quantity
	* For finding the the needed information about the orders in this time range, we will use the same logic as in KPI_Purchase_Order_Status_Function 
	* this function returns the following columns:
		* confirmed 
			* for annotating KPI_Purchase_Order_Status_Function we will use the abbreviation "POSKPI"
			* Sum up all the confirmed orders and divide them by their number: SUM(POSKPI.Confirmed)/(GREATEST( Count(POSKPI.Confirmed), 1)) 
			* Note that for each of the columns we avoided all possible "division by 0" errors by replacing the Count with 1 in case there are no confirmed orders for the time range 
		* allocated
			* Sum up all the proportions of the allocated orders and divide them by the number of confirmed orders: SUM(POSKPI.Allocated)/(GREATEST( Count(POSKPI.Confirmed), 1)) 
		* issued
			* Sum up all the proportions of qty with issues per orders and divide them by the number of confirmed orders: SUM(POSKPI.Issued)/(GREATEST( Count(POSKPI.Confirmed), 1))
		* received
			* Sum up all the proportions of the received orders and divide them by the number of confirmed orders: SUM(POSKPI.Received)/(GREATEST( Count(POSKPI.Confirmed), 1))
		* invoiced
			* Sum up all the proportions of the invoiced orders and divide them by the number of confirmed orders: SUM(POSKPI.Invoiced)/(GREATEST( Count(POSKPI.Confirmed), 1)) 
	* Note: there are 2 sqls which can be used for this function: 
		* The first sql contains the exact same sql as the purchase order status KPI 
		* The second sql calls the KPI_Purchase_Order_Status_Function directly
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Purchase_Order_Status_Overview_Function('2015-08-01','2015-08-31')
	* => SELECT * FROM de_metas_fresh_kpi.kpi_purchase_order_status_overview_function_v2('2015-08-01','2015-08-31')
	
**Sales Invoice Status**

1. What is used for 
	* this report shows the status of a given invoice and the paid amount
	* this function returns the following columns:
		* invoiced
		    * Take this information from C_Invoice.DocStatus
			* In case the DocStatus is COmpleted or CLosed, consider the document Invoiced (value 1)
			* For all the other statuses consider the document not invoiced (value 0) 
		* paid
		    * we are looking in both C_Payment entries that have the specified C_Payment.C_Invoice_ID and in the C_AllocationLine entries that have the specified C_AllocationLine.C_Invoice_ID AND also have a C_AllocationLine.C_Payment_ID
			* For providing the proportion of the invoice's paid amount, sum up amounts from payments and the absolute values of the amounts from allocation lines, take the maximum between the sums 2 and divide it to the C_Invoice.GrandTotal
			* In case the result is 1 or greater, the Paid value will be 1. For the rest of the cases, it will be the result of the division or 0 in case there was no payment or allocation
			* SQL part that computes the amounts from the Payments: LEAST((SUM(p.PayAmt) / (CASE WHEN i.GrandTotal <> 0 THEN i.GrandTotal ELSE 1 END)),1)
			* SQL part that computes the amounts from the C_AllocationLine entries: LEAST(((@(SUM (al.Amount))) / (CASE WHEN i.GrandTotal <> 0 THEN i.GrandTotal ELSE 1 END)) ,1)
			* Note: In the sqls, in case the amounts are null, the result will be replaced with 0 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Sales_Invoice_Status_Function(*c_invoice_id*)
	
**Sales Order Status**

1. What is used for 
	* this report shows if a sales order is completed, allocated, picked, shipped and invoiced quantity
	* this function returns the following columns:
		* confirmed 
			* this info comes from the C_Order.DocStatus. It is only confirmed when the status is 'CO'
			* Can only be 1 (for status CO) or 0 ( for all the other statuses) 
		* allocated
			* Check the created M_ShipmentSchedule entries
			* For each of them, check the QtyOrdered column. This QtyOrdered value might differ from the order line's qtyEntered
			* (this is happening because in the M_ShipmentSchedule we have the QtyOrdered_Override column and we can change the original qty using it)
			* Note1: the QtyOrdered from the M_ShipemtnSchedule might be greater, smaller or equal to the original QtyEntered
			* Note2: the original qtyOrdered can also be found in M_ShipmentSchedule's QtyOrderedCalculated 
			* Per order, the complete qtyallocated would be the sum of the qtys allocated to the shipment schedules
			* A possible way of calculating the percentage per order would be:
				* SUM (LEAST(COALESCE(ss.QtyOrdered, 0)/GREATEST(ol.QtyEntered,1), 1 :: numeric )) / number of Shipment Schedules (or non-packing material order lines)
            * In case of overdeliveries, M_ShipmentSchedule.QtyOrdered/C_OrderLine.QtyEntered will be >1. In such cases, I think it we should consider it 1 
		* picked
			* Check all the entries in M_ShipmentSchedule_QtyPicked that have M_ShipmentSchedule_ID one of the IDs above (from the Shipment Schedules linked with the order)
			* Percentage per Order:
				* Calculate SUM( LEAST( M_ShipmentSchedule_QtyPicked.QtyPicked/ OrderLine.QtyEntered,1)) / number of shipment schedules(or non-packing material order lines)
			* (In case of overdelivery, just take 100 % (1)) 
		* shipped
			* Check all the completed inouts for the given order:  C_Order -> C_OrderLine -> M_inOutLine -> M_InOut
            * The M_InOut must be completed
			* Calculate SUM( LEAST( M_InOutLine.QtyEntered/ OrderLine.QtyEntered,1)) / number of order lines)
			* Same as above, consider overdelivery as 100% 
		* invoiced
			* Check all the completed invoices for the given order: C_Order -> C_OrderLine -> C_InvoiceLine -> C_Invoice       
			* The Invoice must be completed
			* Calculate SUM( LEAST( C_InvoiceLine .QtyEntered/ OrderLine.QtyEntered,1)) / number of order lines)
			* Same as above, consider overdelivery as 100% 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Sales_Order_Status_Function(*c_order_id*)
	
**Sales Order Status Overview**

1. What is used for 
	* this report shows if the sales orders from a given time frame are completed, allocated, picked, shipped and invoiced quantity
	* For finding the the needed information about the orders in this time range, we will use the same logic as in KPI_Sales_Order_Status_Function 
	* this function returns the following columns:
		* confirmed 
			* Sum up all the confirmed orders and divide them by their number: SUM(C_Order.Confirmed)/(GREATEST( Count(SOSKPI.Confirmed), 1))
			* Note that for each of the columns we avoided all possible "division by 0" errors by replacing the Count with 1 in case there are no confirmed orders for the time range 
		* allocated
			* Sum up all the proportions of the allocated orders and divide them by the number of confirmed orders: SUM(SOSKPI.Allocated)/(GREATEST( Count(SOSKPI.Confirmed), 1))
		* picked
			* Sum up all the proportions of the picked orders and divide them by the number of confirmed orders: SUM(SOSKPI.Picked)/(GREATEST( Count(SOSKPI.Confirmed), 1))
		* shipped
			* Sum up all the proportions of the shipped orders and divide them by the number of confirmed orders: SUM(SOSKPI.Shipped)/(GREATEST( Count(SOSKPI.Confirmed), 1)) 
		* invoiced
			* Sum up all the proportions of the invoiced orders and divide them by the number of confirmed orders: SUM(SOSKPI.Invoiced)/(GREATEST( Count(SOSKPI.Confirmed), 1))
	* Note: there are 2 sqls which can be used for this function: 
		* The first sql contains the exact same sql as the sales order status KPI 
		* The second sql calls the KPI_Sales_Order_Status_Function directly

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Sales_Order_Status_Overview_Function('2015-08-01','2015-08-31')
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Sales_Order_Status_Overview_Function_v2('2015-08-01','2015-08-31')
	
**Top 10 Best Scrap Numbers**	

1. What is used for 
	* this report shows what Scrap percentage was planned in PP_Order vs what scrap percentage was used in reality
	* There will be 2 date parameters which will describe the time frame for the KPI.
	* this function returns the following columns:
		* documentno (pp_order's DocumentNo) 
		* ScrapDifference
			* ScrapDifference will be the difference between the sum of PP_OrderBOMLine.Scrap entries of this PP_Order and the Sum of the linked PP_Cost_Collector.ScrappedQty values
	* PP_Orders are eligible for this KPI if they were ordered in the given time frame
	* For finding the worst differences we will order the found numbers desc, with a limit of 10 (which can be deleted or changed based on the needs of the user)
	* For negative scraps the difference is replaced with 0 (to be checked if this is ok)
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Scrap_Best_Numbers('2015-08-01','2015-08-31')

**Top 10 Worst Scrap Numbers**

1. What is used for 
	* this report shows what Scrap percentage was planned in PP_Order vs what scrap percentage was used in reality 	
	* this function returns the following columns:
		* documentno (pp_order's DocumentNo) 
		* ScrapDifference
			* ScrapDifference will be the difference between the sum of PP_OrderBOMLine.Scrap entries of this PP_Order and the Sum of the linked PP_Cost_Collector.ScrappedQty values
	* PP_Orders are eligible for this KPI if they were ordered in the given time frame
	* For finding the worst differences we will order the found numbers desc, with a limit of 10 (which can be deleted or changed based on the needs of the user)
	* For negative scraps the difference is replaced with 0 (to be checked if this is ok)
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Scrap_Worst_Numbers('2015-08-01','2015-08-31')

**Shipment Status**

1. What is used for 
	* this report shows the status of a shipment and the invoiced amount
	* this function returns the following columns:
		* shipped
			* A shipment is Shipped when it hasDocStatus COmpleted
			* In case the shipment is completed, the result is 1. For all the other values, the result would be 0 
		* invoiced
			* Find all the M_InOutLine entries of the inout;
			* Find all the M_MatchInv entries for the M_InOutLines above
			* Note that even if the C_InvoiceLine has an M_InOutLine_ID field, we cannot rely fully on it, because some of the inout lines may be for the same product, and in case of aggregation, all these lines will get to a single invoice line, and that invoice line will have no M_InOutLine set. 
			* Find all the C_InvoiceLine entries for these match invs
			* Find all the C_Invoice entries of these invoice lines. These invoices must be with docstatus COmpleted or CLosed
			* For calculating the proportion of the invoiced qty, I used the following: SUM( LEAST(COALESCE( il.QtyEntered, 0)/ GREATEST(iol.QtyEntered,1),1 :: numeric)) / COUNT(iol.M_InOutLine_ID)
			* Note that in case of over-invoicing (for instance, when setting a value in the QtyToInvoice_Override field in the C_Invoice_Candidate that is higher than the qtyEntered in the inout line, the result would still be 1 (100%)) 
		
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Shipment_Status_Function(*m_inout_id*)
	
**Top 10 Worst Machine Times As Percentage or Order Lead Time**

1. What is used for 
	* this report shows worst time for each production machine in given time frame
	* this function returns the following columns:
		* machine
		* worsttime
	* The information will be taken from the table PP_Order_Node
	* The eligible data for this KPI are the PP_Order_Node entries that have a PP_Order_Node.PP_Order_Workflow_ID of a PP_Order which was ordered in the given time frame
    * The machine is represented by the PP_Order_Node.S_Resource_ID
    * For each of the machines, the maximum duration is calculated as MAX(PP_Order_Node.Duration)
    * The maximum duration means the worst performance
    * The worst 10 times will be displayed together with the names of the machines
    * Note: there could be the case that there are not 10 machines. In this case, we will have the worst times of all the machines
    * The data is ordered by the max duration, desc.
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_10_Worst_Machine_Time ('2015-08-01','2015-08-31')
	
**Top 10 Products Inventory Value**

1. What is used for 
	* this report calculates inventory value of whole organization for top products, for given date and compared with top products from another given dates
	* this function returns the following columns:
		* p_value (product's value)
		* p_name (product's name)
		* currentqty
		    * This is the quantity provided by the Lagerwert SQL for the first date parameter.
			* Note: Even if it is called "current", it can be any date value, so basically we can provide the inventory values from any 2 dates 
		* comparisonqty
			* This is the quantity provided by the Lagerwert SQL for the second date parameter. 
    * Observations:
        * This KPI contains both Artikel products and packing materials.
        * For instance in my database the top 10 products are packing materials 
        * It's used limit 10 to only get the top 10 products but the sql provides info about all the products except the ones that have qty 0 for the current date
        * The Qtys may be negative (as they may be in the Lagerwert Jasper too) 
	* we have 2 functions for this report:
		* The first partially uses sql contained by the function HU_CostPrice_Function 
		* The second function uses directly the results of the HU_CostPrice_Function 
			
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Products_Inventory_Function ('2015-08-01','2015-08-31') 
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Top_Products_Inventory_v2_Function ('2015-08-01','2015-08-31') 
	
**Worst Performing Products last year - Purchase**

1. What is used for 
	* this report shows the products which were less purchased
	* this function returns the following columns:
		* productName (product's name)
		* productvalue (product's value)
		* purchasedqty
		    * This will be the sum of the M_InOutLine.QtyEntered
			* Conditions for selecting from a certain inoutline:
            * It shall have M_InOutLine.IsPackagingMaterial = 'N'
            * Because in this KPI the packaging materials are not important. We just follow the performance of normal, "Artikel" products
            * If, by chance, this shall contain the said packaging materials, delete this condition from the SQL
            * If we need a KPI for the worst performance packaging materials, reverse this condition by replacing the 'N' with 'Y' 
            * It shall belong to an inout with M_InOut.IsSOTrx = 'N' because the KPI is for purchase side
            * It shall belong to an inout that has M_InOut.DocStatus IN (CO, CL) -> the inout must be COmpleted or CLosed
            * It shall belong to an inout that has M_InOut.MovementDate in the range of the given parameters (e.g. the start date and end date of the last year : '2015-01-01', '2015-31-12')
            * It shall belong to an inout with a DocType that has:" C_DocType. DocBaseType = MMR (MMR_Wareneingang)
            * In case we want to exclude empties, it shall belong to an inout with a DocType that has:" C_DocType.DocSybType = MR (MR_Produktanlieferung)
            * If this is not the case, delete this filter: AND dt.docsubtype='MR' 
	* The products with 0 qty will be excluded
    * Because we want the products with the worst performance, we will order the results by the sum of the qty, ASCENDING.
    * Note: Even if the KPI has the title for last year, the SQL is created to support any range of dates (dateFrom, dateTo)
    * Note: In the SQL we provided, we set a limit of 10, but commented out. When this KPI will be added in the application, there will have to be decided how many of the worst products are do be displayed in the KPI, and the limit in the SQL to be set accordingly. 
	
1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Worst_Products_Purchase_Function ('2015-08-01','2015-08-31') ;

**Worst Performing Products last year - Sales**

1. What is used for 
	* this report shows the products which were less sold
	* this function returns the following columns:
		* productName (product's name)
		* productvalue (product's value)
		* purchasedqty
			* This will be the sum of the M_InOutLine.QtyEntered
			* Conditions for selecting from a certain inoutline:
            * It shall have M_InOutLine.IsPackagingMaterial = 'N'
            * Because in this KPI the packaging materials are not important. We just follow the performance of normal, "Artikel" products
            * If, by chance, this shall contain the said packaging materials, delete this condition from the SQL
            * If we need a KPI for the worst performance packaging materials, reverse this condition by replacing the 'N' with 'Y' 
            * It shall belong to an inout with M_InOut.IsSOTrx = 'Y' because the KPI is for sales side
            * It shall belong to an inout that has M_InOut.DocStatus IN (CO, CL) -> the inout must be COmpleted or CLosed
            * It shall belong to an inout that has M_InOut.MovementDate in the range of the given parameters (e.g. the start date and end date of the last year : '2015-01-01', '2015-31-12')
            * It shall belong to an inout with a DocType that has: C_DocType. DocBaseType = MMS (MMS_Warenllieferung)
            * In case we want to exclude empties, it shall belong to an inout with a DocType that has: C_DocType.DocSybType = MS (MS_Produktauslieferung)
            * If this is not the case, delete this filter: AND dt.docsubtype='MS' 
	* The products with 0 qty will be excluded
    * Because we want the products with the worst performance, we will order the results by the sum of the qty, ASCENDING.
    * Note: Even if the KPI has the title for last year, the SQL is created to support any range of dates (dateFrom, dateTo)
    * Note: In the SQL we provided, we set a limit of 10, but commented out. When this KPI will be added in the application, there will have to be decided how many of the worst products are do be displayed in the KPI, and the limit in the SQL to be set accordingly. 

1. Calling the function
	* => SELECT * FROM de_metas_fresh_kpi.KPI_Worst_Products_Sales_Function ('2015-08-01','2015-08-31') ;
