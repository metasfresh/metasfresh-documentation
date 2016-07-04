---
title: IT FRESH-397
required data:
layout: default
---

### Upgrade to JasperStudio and latest jasper version
> Testcase to check if jaspers work the same as the previous jasper version (used it to compare)

**Documents print preview**

1. run print preview in each documents: sales and purchase: order, inout and invoice
	* => works ok, special font in invoice works the same
	
2. print preview also specific inouts like: customer and attributes specific
	* => specific inout print previews works fine
	
3. print preview in other documents: manufacturing (from gear), dunning (from gear) and shipper transportation 
	* => works fine
	
4. repeat the same case for different language (e.g. fr)
	* => works ok, the report is in the selected language
	
5. export pdf from print preview 
	* => works ok, bold fields are fine

**Jasper Processes**

1. run all jasper processes: open items, umsatzreport, umsatzreport for bpartner (also per week and attribute), statistics, konten - info, deckungsbeitragsrechnung (with short version with and without last year), saldobilanz, bilanz, bankauszug, kostenstellenweschel, gebindesaldo, gebindeubersicht, fibukonto and lagerwert
	* => all work fine
	
2. export pdf 
	* => works ok, bold fields are fine

3. run pricelist report from business partner window
	* => works ok

4. export excel from print preview (konten-info, hubalance, movements, open items, qty statistics, sales groups, umsatz reports and pricelist)
	* => works ok, hidden columns are hidden, and the columns are aligned ok

5. run excel for procurements 
	* => works fine, the months you did not select are hidden 

**Handling Units Labels**

1. go to Receipt POS and open a line, select an HU

2. print etickets: receipt, ifco, sscc, etc
	* => they work fine, pictures are showing accordingly to attributes