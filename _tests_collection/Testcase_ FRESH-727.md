---
title: IT FRESH-727
required data:
layout: default
---

### #31 Implement document actions
> Testcase to check jaspers, processes, document actions and error logging

**Print preview**

1. Go to Extras, Settings set Always print by preview on Y, printer pdf (or some printer)
	
2. run reports from process, from gear and from documents 
	* => you first see a loading message
	* => you get a print preview 

3. Go to Extras, Settings set Always print by preview on N, printer pdf (or some printer)

4. run reports from process, from gear and from documents 
	* => no loading message
	* => if printer is pdf: you get a pdf saved somewhere in your user folder 	
	* => if printer is set to a real printer: you will get your document printed

**Reports from menu**

1. open all reports from menu
	* e.g. Saldobinaz, Konten-Info, Revisionsstelle Geschäftspartner
	* => they work fine

2. if the report also has excel, export the file from print preview	
	* e.g. Gebindesaldo gesamt
	* => an excel file is saved on the path you selected
	
3. run excel reports from menu (e.g. Einkaufsstatistk)
	* => an excel file opens 
	
**Reports from window button**

1. go to Speditionsauftrag window 

2. find one which has lines and it's completed

3. press on Rustliste drucken
	* => jasper print preview opend for that document
	
**Reports from gear**

1. open all reports from gear (e.g. Pricelist from Bpartner window, SSCC18 from edi, PP_Order)
	* => they work fine

**Reports from documents**

1. open all reports from documents (print preview button from documents: order, inout, invoice and so on)
	* => they work fine

**Label Reports**

1. open all label reports from:
	* receipt pos
	* handling units pos
	* aggregation pos
	* distribution pos
	* issue pos
	* => all work fine
	
**Report language**

1. when a document jasper is printed, the language is taken from the bpartner
	* => most jasper documents are taking the language from bpartner 
	* exception are inout drafted

2. run print preview for a drafted sales inout
	* => you get the report in the language you log in with
	
3. have an order containing both bpartner and dropship bpartner, each with different language. Print the report
	* => language is taken from bpartner

4. there are some reports processes which are translated (e.g. ADR Auswertung). Run them for a special bpartner
	* => language is taken from that bpartner
	
**Modal vs Regular**

1. Check the id of a document
	* => a modal panel opens with document's info
	* => you can't access other windows without closing it first

2. open any pos, open HU Editor
	* => hu editor is a modal panel so you cannot access other windows while it's open
	
3. open any jasper process from menu
	* => process panel is regular so you can access any other window
	
4. open any jasper process from gear
	* => process panel is modal so you can't access any other window
	
5. open and run a process that it should return a message (e.g. bestellung aus auftrag)
	* => process runs fine, after it's done you get an info message with the order's document number that was crated
	* => also all processes that have allowprocessrerun on Y, shall have the panel remaning there after it's done
	
**Document processing**

1. Check if complete, reactivate, close, void and reverse-correct works on documents
	* => works fine, no errors
	
**Scheduled Processes**

1. create a sales order and wait a bit
	* => a shipment schedule is created
	
2. go to shipment schedule and create an inout from it. Don't complete it
	* => shipment schedule is set on "to act." then it actualizes

3. change qty in inoutline 
	* => shipment schedule is set on "to act." again and in aprox. 1 minute it actualizes
	
4. create an invoice or a journal and complete it. Wait a bit
	* => the document gets posted without errors 
	
**Errors**

1. check if consoles and UI errors work fine:
	* e.g.: go to warehouses and make sure that no warehouse is issue
	* create a purchase order and open it in receipt pos, set a quality discount
	* press ok
	* => an error appears saying that there is no issue warehouse defined (seen in both UI and console)
	
2. check if server errors work fine:
	* create a gl journal with 2 accounts that are not compatible
	* => an error will appear on server

3. check if the async errors work fine
	* log in with another org, that has almost all configurations to have a counter document created for a purchase order
	* don't make a counter product for it, or set a wrong pricelist for the couter bpartner
	* while in org2, create a purchase order, complete it
	* log in to org1 and check async window
	* => there you get an error for the uncompleted configuration