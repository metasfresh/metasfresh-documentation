---
title: IT FRESH-472
required data:
   AD_Orgs: Org 1, Org 2   
layout: default
tags:
  - Document Type
---
## Sequence on Org for more than 1 Doctype

> Testcase to check if different Orgs have different 
> sequences of document numbers for the same Doctype.

1. Open Document Type

1. Search for e.g. orders, invoices etc.

	* => several Document Types will have a Document Sequence set

1. Check subtab Sequence for the Document Types with Document Sequence set

	* => there is a special sequence set for Org 2 for these Document Types
	
1. Open all types of documents (orders, invoiced etc.), start creating one for Org 1 manually (i.e. set bpartner, dates etc.), save

1. Do the same, but use Org 2

1. Also try changing the Org after you have already saved the document

1. Create documents via process too, i.e. invoice from invoice candidates, inouts from shipment schedules etc.

1. Check the document number and the sequence used for all documents created, manually or via process:


	|	Window				|	Document Type				|	Organization		|	Document Number	|
	| ---------------------	|:-----------------------------:|:---------------------:|:-------------:|
	|	Sales Order			|	Standardauftrag				|	org1				|	default		|
	|	Sales Order			|	Standardauftrag			    |	org2				|	10.000		|			
	|	Sales Order			|	Angebot						|	org1				|	default		|
	|	Sales Order			|	Angebot						|	org2				|	10.000		|
	|	Sales Order			|	Angebot (bindend)		    |	org1				|	default		|			
	|	Sales Order			|	Angebot (bindend)			|	org2				|	10.000		|
	|	Purchase Order		|	Bestellung				    |	org1				|	default		|
	|	Purchase Order		|	Bestellung					|	org2				|	20.00		|
	|	Shipment			|	Lieferschein				|	org1				|	default		|	
	|	Shipment			|	Lieferschein				|	org2				|	30.000		|
	|	Shipment			|	Lieferschein (indirekt)		|	org1				|	default		|
	|	Shipment			|	Lieferschein (indirekt)		|	org2				|	30.000		|
    |	Material Receipt	|	Produktanlieferung			|	org1				|	default		|			
    |	Material Receipt	|	Produktanlieferung			|	org2				|	default		|	
    |	Invoice Customer	|	Ausgangsrechnung			|	org1			    |	default		|			
    |	Invoice Customer	|	Ausgangsrechnung		    |	org2				|	50.000	   	|	
    |	Invoice Customer	|	Ausgangsrechnung (indirekt)	|	org1				|	default		|			
    |	Invoice Customer	|	Ausgangsrechnung (indirekt)	|	org2				|	50.000 		|	
    |	Invoice Customer	|Nachbelastung - Preisdifferenz	|	org1				|	default		|			
    |	Invoice Customer	|Nachbelastung - Preisdifferenz |	org2				|	50.000 		|	
    |	Invoice Customer	|Nachbelastung - Mengendifferenz|	org1				|	default		|			
    |	Invoice Customer	|Nachbelastung - Mengendifferenz|	org2				|	50.000 		|	
    |	Invoice Customer	|  Gutschrift - Lieferdifferenz	|	org1				|	default		|			
    |	Invoice Customer	|  Gutschrift - Lieferdifferenz |	org2				|	10.000 		|	
    |	Invoice Customer	|  Gutschrift - Preisdifferenz  |	org1				|	default		|			
    |	Invoice Customer	|  Gutschrift - Preisdifferenz  |	org2				|	10.000 		|	    
    |	Invoice Customer	|	Gutschrift					|	org1				|	default		|			
    |	Invoice Customer	|	Gutschrift					|	org2				|	10.000 		|	
    |	Invoice Customer    |	Gutschrift - Retoure		|	org1				|	default		|			
    |	Invoice Customer	|	Gutschrift - Retoure		|	org2				|	10.000 		|	 
    |	Invoice Vendor		|	Eingangsrechnung			|	org1				|	default		|			
    |	Invoice Vendor	    |	Eingangsrechnung			|	org2				|	default  	|	
    |	Invoice Vendor		|	Akontozahlung				|	org1				|	default		|			
    |	Invoice Vendor		|	Akontozahlung				|	org2				|	default    	|	
    |	Invoice Vendor		|	Endabrechnung				|	org1				|	default		|			
    |	Invoice Vendor		|	Endabrechnung				|	org2				|	default		|	
    |	Invoice Vendor		|	Gutschrift (Lieferant)		|	org1				|	default		|			
    |	Invoice Vendor		|	Gutschrift (Lieferant)		|	org2				|	default		|	
    |	Invoice Vendor		|	Produzentenabrechnung		|	org1				|	default		|			
    |	Invoice Vendor	    |	Produzentenabrechnung	    |	org2				|	default		|	
    |	Customer Return		|	Kundenwarenrückgabe			|	org1				|	default		|			
    |	Customer Return		|	Kundenwarenrückgabe			|	org2				|	40.000		|	
    |	Customer Return		|	Leergutrücknahme			|	org1				|	default		|			
    |	Customer Return		|	Leergutrücknahme			|	org2				|	default		|	
    |	Customer Return		|	Saldokorrektur Kunde		|	org1				|	default		|			
    |	Customer Return		|	Saldokorrektur Kunde		|	org2				|	40.000		|	
    |	Return To Vendor	|	Leergutausgabe				|	org1				|	default		|			
    |	Return To Vendor	|	Leergutausgabe				|	org2				|	30.000		|	
    |	Return To Vendor	|	Lieferantenrückgabe		    |	org1				|	default		|			
    |	Return To Vendor	|	Lieferantenrückgabe			|	org2				|	30.000		|	
    |	Return To Vendor	|	Saldokorrektur Lieferant	|	org1				|	default		|			
    |	Return To Vendor	|	Saldokorrektur Lieferant	|	org2				|	30.000		|	
    |	Manufacturing Order	|	Maintenance Order       	|	org1				|	default		|			
    |	Manufacturing Order	|	Maintenance Order       	|	org2				|	default		|
    |	Manufacturing Order	|	Produktionsauftrag       	|	org1				|	default		|			
    |	Manufacturing Order	|	Produktionsauftrag       	|	org2				|	default 	|	
    |	Manufacturing Order	|	Quality Order              	|	org1				|	default		|			
    |	Manufacturing Order	|	Quality Order              	|	org2				|   default  	|	
    |	Manufacturing Order	|	Waschprobe                	|	org1				|	default		|			
    |	Manufacturing Order	|	Waschprobe                	|	org2				|	default		|	
    |	Inventory Move  	|	Warenbewegung              	|	org1				|	default		|			
    |	Inventory Move      |	Warenbewegung              	|	org2				|	10.000		|	
    |	Distribution Order 	|	Distribution Order       	|	org1				|	default		|			
    |	Distribution Order  |	Distribution Order         	|	org2				|	default		|
    |	GL Journal Batch 	|	Journal                    	|	org1				|	default		|			
    |	GL Journal Batch 	|   Journal                 	|	org2				|	10.000		|

