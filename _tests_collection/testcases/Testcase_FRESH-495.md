---
title: IT FRESH-495
required data:
   user: TestUser, SuperUser   
layout: default
tags:
  - UI
---
## Make de.metas.fresh.printing.spi.impl.C_Order_MFGWarehouse_Report_NotificationCtxProvider thread safe

> Testcase to check if the notification for MFGWarehouse Report still works fine.


1. Select a warehouse (e.g. X), set TestUser as person in charge

1. In User, set:
	* => for TestUser: Betreuer benachrichtigen
	* => Betreuer for TestUser: SuperUser
	* => SuperUser: Notification in Status Bar / Email
	
1. Make sure your own email is set as debug mail, so you will receive any emails sent!

1. In SysConfig, search for the settings for printing problems (C_Print_Job_Instructions.NotifyPrintReceiver):
	* => set notification in case of printing problems = Y
	* => for the time after which the system will check the printing success: >0 for both
	
1. Make sure you have a printer selected, but there is no printer connected so you can't print, and always Print Preview is not checked in Settings
	
1. Search for a product which is produced in the warehouse X

1. Create and complete a sales order for that product (logged in as SuperUser)

1. Check the MFGWarehouse Report for this sales order (in Bestellkontrolle), check in printing info and printing queue
	* => status in printing queue should be waiting for print
	
1. Check the notification status
	* => notification for the MFGWarehouse Report waiting for print, for which order: 
	Der Status steht seit mindestens 5 Sekunden auf Wartet auf druck. Auftrag : XY, Bestellkontrolle : XYZ.
	
1. Check your emails
	* => email was sent with the same info