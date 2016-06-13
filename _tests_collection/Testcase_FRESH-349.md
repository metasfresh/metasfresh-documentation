---
title: IT FRESH-349
required data:
   inouts: sales & purchase inouts 
   labels: HUs in HU Editor   
   layout: default
---

# IT FRESH-349
### KPI: Printing Performance
> Testcase to check how the printing 
> performance is displayed in its KPI.


1. Make sure you have the correct Setup for printing in Preferences:
	
	* Select PDF or a hard copy printer
	* Uncheck always print preview
	
1. Check the AD_Printer_Config for your Hostkey

	* => the Config you're using should have AD_Printer_Matching with the PDF or hard copy printer
	
1. Select a sales or purchase inout, note its ID, and press Print (NOT print preview!), note the time until the print is done (=> when the PDF opens or the printer starts printing)

1. In pgAdmin, run


	```sh
	select *
	from RV_InOut_PrintingTime
	where xxx -- ID of your inout
	AND PrintingQueueCreated >= ArchiveCreated
	``` 

|	M_InOut_ID	|	starttime (Example)		|	FromPrintJobInstructionToEnd	|
| -------------	|:-------------------------:|:---------------------------------:|
|	inout ID	|	2016-06-09 10:34:59+02	|	13								|
	

* => starttime is the time when you pressed Print, and FromPrintJobInstructionToEnd is the time (in secs) from the start until the print job was finished
* => FromPrintJobInstructionToEnd should roughly coincide with the time until your print was "done": i.e. the PDF opens or the printer started printing!
* => also displayed are:
	* IsSoTrx (Y/N)
	* ArchiveCreated (timestamp)
	* FromStartToArchive (numeric)
	* PrintingQueueCreated (timestamp)
	* FromArchiveToPrintingQueue (numeric)
	* PrintJobLineCreated (timestamp)
	* FromPrintingQueueToPrintJobLine (numeric)
	* PrintJobInstructionCreated (timestamp)
	* FromPrintJobLineToPrintJobInstruction (numeric)
	* PrintJobInstructionUpdated (timestamp)


1. Do printing and checking in pgAdmin for a purchase inout as well

	* => starttime is the time when you pressed Print, and FromPrintJobInstructionToEnd is the time (in secs) from the start until the print job was finished
	* => FromPrintJobInstructionToEnd should roughly coincide with the time until your print was "done": i.e. the PDF opens or the printer started printing!
	
1. Open e.g. Wareneingang POS, and select an orderline in a warehouse

1. Open the HU Editor, select an HU, and print e.g. Wareneingangsetikett, note the time until the print is done (=> when the PDF opens or the printer starts printing)

1. In pgAdmin, run


	```sh
	select *
	from RV_Etikett_PrintingTime
	where PrintingQueueCreated >= ArchiveCreated
	``` 

|	starttime (Example)		|	FromPrintJobInstructionToEnd	|
|:-------------------------:|:---------------------------------:|
|	2016-06-09 10:44:06+02	|	9								|

	

* => starttime is the time when you pressed Print, and FromPrintJobInstructionToEnd is the time (in secs) from the start until the print job was finished
* => FromPrintJobInstructionToEnd should roughly coincide with the time until your print was "done": i.e. the PDF opens or the printer started printing!
* => also displayed are:
	* ArchiveCreated (timestamp)
	* FromStartToArchive (numeric)
	* PrintingQueueCreated (timestamp)
	* FromArchiveToPrintingQueue (numeric)
	* PrintJobLineCreated (timestamp)
	* FromPrintingQueueToPrintJobLine (numeric)
	* PrintJobInstructionCreated (timestamp)
	* FromPrintJobLineToPrintJobInstruction (numeric)
	* PrintJobInstructionUpdated (timestamp)
		
	
