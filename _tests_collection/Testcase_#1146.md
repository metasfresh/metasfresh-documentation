---
title: IT gh#1146
required data:
   user: testuser   
layout: default
tags:
  - Request
---
## Change sent by in Request Notifications

> Testcase to check if request notifications include the correct "Sent by" Info


1. Make sure you have the mailing set up correctly done where you are testing! 
	* => http://docs.metasfresh.org/howto_collection/Wie_richte_ich_einen_ausgehenden_Mailserver_ein.html & http://docs.metasfresh.org/howto_collection/Wie_kann_ich_zu_testzwecken_alle_mails_an_eine_email_adresse_schicken.html
	* note that you have to change the info, accordingly to where you test!
	* set your email address as the default one where all mails are sent to
	
1. Have a testuser, or create one, that you can use for testing
	* you can set an email address for this user, but usually for testing purposes, all emails are sent to the default email address, see above

1. Make sure the request notifications are enabled (in System Konfigurator, you might need to restart the Server!)

1. Create new requests, and set your testuser as the assigned user:
	* use both windows Vorgang & Vorgang (alle)!
	* create new requests, set sth in field note and Ergebnis
	* save
	* => new line in request, Aktualisierungen is added
	* => Email should be sent bc of the newly created request
	
1. Check your emails:
	* => you have received an email for every newly created request
	* => every email includes "Sent by metasfresh ERP"
	
1. Add sth in an existing request, in Ergebnis, save
	* => new line in request, Aktualisierungen is added
	* => Email should be sent bc of the newly created request
	* => email includes "Sent by metasfresh ERP"