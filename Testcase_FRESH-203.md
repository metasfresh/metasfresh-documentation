# IT FRESH-203
### Procurement: Mail in BPartner language, other eMail Address
> Testcase to check if the emails sent from Doc_Outbound (Ausgehende Belege) 
> have the correct sender email address and the text is in the correct 
> language.

1. In AD_MailBox (EMail Server), check if the Email Server is set up correctly, or set it up manually (=> http://dewiki908/mediawiki/index.php/ADempiere_Test_Mailbox)
	* => you should have an EMail and a Registered EMail (with PW) for your EMail-Server (e.g. smtp.metasconsult.de), with SMTP-Anmeldung checked

1. Add two more emails (AD_MailBox), with the same data (you can copy with details!), but set one with Email for purchase (e.g. einkauf@metasconsult.de) and one for sales side (e.g. verkauf@metasconsult.de)

1. In AD_MailConfig (EMail Server Routing), create an entry for purchase side:
	* process: Auswahl als Email an Geschäftspartner senden
	* Document BaseType: Purchase Order (Bestellung)
	* Doc Sub Type: leave empty
	* Mail Box: select the one which includes einkauf@metasconsult.de

1. Create another entry for sales side:
	* process: Auswahl als Email an Geschäftspartner senden
	* Document BaseType: Sales Order (Auftrag)
	* Doc Sub Type: Standard Order (Standardauftrag)
	* Mail Box: select the one which includes verkauf@metasconsult.de
	
1. To make sure you receive the emails yourself, check  http://dewiki908/mediawiki/index.php/ADempiere_Test_Mailbox again and set your own email address as the debugmail

1. Select a bpartner that is vendor and customer, and has language = DE set

1. Check the users of this bpartner in tab AD_User, and set your own email address for them

1. Create an Auftrag and a Bestellung for this bpartner

1. Open C_Doc_Outbound_Log (Ausgehende Belege), search for your bpartner and date of test
	* => your Auftrag and Bestellung are displayed
		
1. Press Gear, Auswahl als Email an Geschäftspartner senden

1. Check your email inbox (in Outlook)
	* => one email with a confirmation of the Bestellung, with sender address einkauf@metasconsult.de, text & subject in german
	* => one email with a confirmation of the Auftrag, with sender address verkauf@metasconsult.de, text & subject in german

1. Go back to bpartner window, and set the language for your bpartner to FR

1. In C_Doc_Outbound_Log (Ausgehende Belege), send emails again with Gear, Auswahl als Email an Geschäftspartner senden for your two orders again

1. Check your email inbox (in Outlook)
	* => one email with a confirmation of the Bestellung, with sender address einkauf@metasconsult.de, text & subject in french
	* => one email with a confirmation of the Auftrag, with sender address verkauf@metasconsult.de, text & subject in french


