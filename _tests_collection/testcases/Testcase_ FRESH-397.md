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


|Document Type 	                    |	Document Status	  | Partner Language | Report Language   | Preview | PDF |
| ----------------------------------|:--------------------:|:----------------:|:-----------------:|:-------:|:---:|
|Standardauftrag                    |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Bestellung                         |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Lieferschein                       |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | Deutsch (Schweiz) | OK      | OK  |
|Produktanlieferung                 |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Ausgangsrechnung                   |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Gutschrift                         |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Gutschrift - Retoure               |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Eingangsrechnung                   |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Akontozahlung                      |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Endabrechnung                      |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Gutschrift (Lieferant)             |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Produzentenabrechnung              |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Lieferschein (customer specific)   |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | Deutsch (Schweiz) | OK      | OK  |
|Kundenwarenrückgabe                |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Leergutrücknahme                   |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Saldokorrektur Kunde               | Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|Leergutausgabe                     |  Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | Deutsch (Schweiz) | OK      | OK  |
|Lieferantenrückgabe                | Completed           | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | Deutsch (Schweiz) | OK      | OK  |
|Saldokorrektur Lieferant           | Completed            | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Draft               | Deutsch (Schweiz)| Deutsch (Schweiz) | OK      | OK  |
|                                   |  Completed           | French (Schweiz) | French (Schweiz)  | OK      | OK  |
|                                   |  Draft               | French (Schweiz) | Deutsch (Schweiz) | OK      | OK  |
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
	

**Pricelist Export / Import with Excel**

1. Open Geschäftspartner, select a bpartner

1. Press Gear, Preisliste, select one, OK
	* => pricelist you selected opens in Jasper
	
1. Select XLS, and export the pricelist as excel file

1. Open the pricelist with Excel
	* => all infos for bpartner displayed
	* => no hidden columns shown, all products with prices and attributes included correctly

1. Set qties for several products (as Menge for overall qty, and Menge TU for qty Gebinde), save

1. Import the excel file with WinSCP

1. Open Auftragsdisposition (OLCands), and search for your pricelist in Replikationstransaktion
	* => one OLCand for every product where you set the qty
	* => bpartner info for shipment and invoice address correct

1. Create the sales order, the shipment, and the invoice for your OLCands
	* => all working fine, qties and product / bpartner infos are correct

1. Go back to Geschäftspartner, select another bpartner, and repeat export into Excel for Preislistenvergleich
	* => all infos for bpartner displayed
	* => no hidden columns shown, all products with prices and attributes included correctly
	* => Preis (bold) and Preis Alt (where existing) are displayed correctly
