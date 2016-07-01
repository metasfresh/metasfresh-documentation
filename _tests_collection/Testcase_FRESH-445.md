---
title: IT FRESH-445
required data:
   bpartner: bpartner G000X (customer & vendor)
   orders: purchase and sales order for G000X
   User: User with contact details for G000X  
layout: default
tags:
  - Email
---
## Awkward eMail encoding in Swiss language

> Testcase to check if Umlaute are displayed correctly
> in Emails.

1. Make sure the User of G000X has your own email address set in the contact details!

1. Make sure the Charset in your testing system is UTF-8

1. Check the [Set Up for the Mailsever] (Wie_richte_ich_einen_ausgehenden_Mailserver_ein) and the [Set Up of the Email Server Routing] (Testcase_FRESH-203)

1. Open the purchase and sales order for G000X

1. In both, press the Email icon, and create an email for each order:

	* email should include Umlaute ä, ö & ü
	* recipient email address should be yours, as you set it for G000X's user
	
1. Send the emails

1. Open C_Doc_Outbound_Log (Ausgehende Belege), search for your orders

1. Press process, Auswahl als Email an Geschäftspartner senden

1. Check your inbox for the emails sent

	* => you have received 4 emails, 2 for each order
	* => Umlaute ä, ö & ü are displayed correctly
