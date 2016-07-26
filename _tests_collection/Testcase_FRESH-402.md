---
title: IT FRESH-402
required data:
   bpartner: bpartners G000X, G000Y, G000Z (vendors)
   flatrate terms: procurement flatrate term for at least 1 bpartner
   products: P0001   
layout: default
tags:
  - RfQ
  - Procurement
---
## Procurement bidding

> Testcase to check the procurement bidding process (RfQ or Ausschreibung).


**SetUp of RfQ**

1. Make sure P0001 is a Produkt für Lieferanten-Vertrag, used for procurement!

1. Make sure that at least 1 of the bpartners, has a running flatrate term for procurement for P0001

1. Also make sure that this bpartner has a user with access to the procurement WebUI, with an email address

1. The other bpartners need a user with an email address to be used for testing as well

1. For testing purposes, make sure the DebugMail is set to your own email address!

1. Create a new entry in Vertragsbedingungen: => Ausschreibung RfQ (select a Vertragsverlängerung which has Vertragslaufzeit = 0; if none exists, create one!)

1. Make sure you have mail templates for procurement bidding: info, info without qty, winner, loser (if none exist, create them)

1. Make sure you have the corresponding jasper reports for info, info without qty, winner, loser as well

1. Create a new RfQ Topic (Ausschreibungs-Thema) with:
	* name: select one you like, e.g. with the name of the product you will test with
	* Ausschreibung Art: Procurement
	* Vertragsbedingungen: Ausschreibung RfQ
	* EMail texts: select Email templates you created
	* Email print formats: select the jasper reports
	* in tab subscribers, create a line for each of your bpartners G000X, G000Y, G000Z, and set the contact with the email address!
	
1. Create a new RfQ (Ausschreibung) with:
	* name: select one you like for testing purposes
	* RfQ Topic: select your RfQ Topic
	* Ausschreibung Art: Procurement
	* Vertragsbedingungen: Ausschreibung RfQ
	* Bid start date: date & time when the bidding process begins 
	* Bid end date: date & time when the bidding will be closed 
	* Response date: date & time until when the subscribers can send their responses for the bidding 
	* Workstart date / Complete date: possible date & time for delivery of the qties from the bidding
	* line: select P0001 as Lieferprodukt, with the resp. packing item (if there are >1, select one of them), set a qty if you like
	
1. Save RfQ entry, and complete it via Gear: complete RfQ (Ausschreibung fertig stellen)
	* => RfQ: Status Completed
	* => RfQ Response (Ausschreibung Antwort) is created for your RfQ, status: Drafted
	* => Ausschreibung Antwort Position is created for each bpartner, to be filled manually / by WebUI, status: Drafted
	
1. In RfQ, gear, Publish RfQ
	* => small window with info about Emails being sent for the RfQ pops up, with the name of your RfQ
	* => email with information about the bidding will be sent to the users of your bpartners
	* => the WebUI of your bpartners will now include info about the bidding in Preisanfrage
	* => RfQ Response (Ausschreibung Antwort), Invited: date of publishing is added

1. Check your emails
	* => you shall receive the info email for the procurement bidding for each user of your bpartners
	* => there are 2 different mail templates for the info, one for when qty is set, and one when not; make sure it's the correct one for your set up!
	* => the attached jaspers include all info for your RfQ (P0001, qties etc.) and the info for each bparter (address, user etc.) as well

1. If one or more of your bpartners has a procurement flatrate term for P0001, run the Anbauplanung Auswertung Excel now, for the dates covered by the RfQ and P0001
	* leave the report(s) open for comparison!


**Entry with WebUI**

1. Open the procurement WebUI for the resp. bpartner(s)
	* => new button Preisanfrage (Prix)
	
1. Click Preisanfrage (Prix) 
	* => line for your RfQ, with P0001 with the resp. PI and the possible dates for delivery (there will be more lines if the bpartner is subscriber of several RfQ Topics / several RfQs of the same topic!)
	
1. Click the line for your RfQ, check info about the bidding process of P0001:
	* Product: P0001
	* Packing: PI from your RfQ
	* From / To: possible dates for delivery (Workstart date / Complete date from RfQ)
	* Close: date of end of bidding
	* Qty requested: the qty you set (if!) for the required qty
	* Price: you can set the price for each bpartner
	* Daily quantities: line for each day of the possible dates for delivery
	
1. Set a price for the product for each bpartner, and qties for several of the possible dates (try full amount of CHF, as well as 0,XX or 0.XX; the latter NOT in Firefox!), Enter
	* => price is taken as set, as X.XX CHF
	* => qty displayed for each possible date as set

1. Go back to the start page Tägliche Meldung and send your qties (click Senden / Envoyer)

1. Open Ausschreibung Antwort Position for each of your bpartners with WebUI:
	* => Zusagbar qty in header is overall qty from the qties you sent
	* => price is as set in WebUI
	* => 1 line in Antwort-Menge for each date you sent qties for, with the resp. date & qty
	
1. In gridmode, you can compare the qties and prices for each bpartner so far (status: Drafted)

	
**Manual entry**

1. Ausschreibung Antwort Position: open single view for the bpartner(s) without WebUI

1. Enter a price in the header, save

1. Add a line for a qty and date for the bidding in Antwort-Menge and save
	* => if the selected date is not covered by the possible dates for delivery, you'll receive an error!
	* => qty for Zusagbar in header is updated accordingly 

1. Add more lines with qty and date for the bidding if you like
	* => Zusagbar qty in header will be overall qty
	
1. In gridmode, you can compare the qties and prices for all bpartners (Docstatus: Draft), from both manual and WebUI entry


**Results of RfQ** 

1. Go back to RfQ, Gear, close RfQ (Ausschreibung schließen)
	* => bidding is over now
	* => the info about the bidding process being closed is sent to the WebUI, as are the qties given by the bpartners
	
1. Open WebUI for your bpartners again, click Preisanfrage
	* => the RfQ is not displayed anymore
	
1. Check Ausschreibung Antwort Position for your bpartners
	* => status: Completed

1. Select 1 or 2 winners, by checking the corresp. box

1. Go back to RfQ, refresh
	* => summed up qties from Ausschreibung Antwort Position for the winner(s) are displayed (in 1 line)
	
1. Gear, close RfQ results
	* => RfQ responses & response lines get closed
	* => a flatrate term with Vertragsbedingungen: => Ausschreibung RfQ is created for the winners, status: Draft
	
1. Gear, Publish RfQ results
	* => small window opens with info about responses for RfQ: Emails sent, procurement WebUI
	* => procurement candidates are created for the winners: 1 candidate for each line in Ausschreibung Antwort Position
	* => email for the winners / losers will be sent with the resp. text (from template), and Jasper attached
	* => the flatrate term with Vertragsbedingungen: => Ausschreibung RfQ is completed for the winners	

1. Check your emails again
	* => emails for the winner(s) and loser(s), with the text from the resp. template and the resp. jasper attached
	* => if the bpartner is e.g. french, then the text translation of the template was used
	* => attached jasper: included the price you set, and the qties you agreed to deliver for each bpartner (jasper for loser has no price included!)
	
1. Run the Anbauplanung Auswertung Excel again
	* => no additional line for the product from the new flatrate term Ausschreibung RfQ
	* => the qty from the Ausschreibung Antwort Position is not included in gemeldete Menge, for the resp. month(s) 
	
1. Check the procurement candidates
	* => only candidates for the winner(s) were created
	* => 1 candidate per line in Ausschreibung Antwort Position, with the resp. qty and delivery date
	* => if the bpartner has an active flatrate term procurement for the same product, then the price is NOT from this flatrate term, BUT the one from Ausschreibung Antwort Position!
	* => in single line view: field Abrechnungssatz: (1st) month which includes the dates for the delivery in RfQ
	
1. Open Laufender Vertrag, search for your bpartner(s) who was / were the winner(s)

1. Check tab Vertragsperiode
	* => new entry with Vertragsbedingungen = Ausschreibung RfQ, status: completed
	
1. Open the entry with Vertragsbedingungen = Ausschreibung RfQ and its subtab Liefersatz
	* => Vertrag autom. verlängern is not checked
	* => Anfangsdatum & Enddatum are the dates set for the possible dates for delivery in RfQ
	* => Liefersatz: has only 1 line, Period: the one month which includes the dates for delivery in RfQ, with the price and overall qty from Ausschreibung Antwort Position
	
1. Go back to the procurement candidate(s) for the winner (or winners)

1. Create a purchase order: set a qty TU, save, and click Bestellen, OK
	* => purchase order is created
	
1. Check the purchase order
	* => price and qty from procurement candidate
	* => date promised: as in procurement candidate, the delivery date set in Ausschreibung Antwort Position
	
1. Create the receipt(s) for the purchase order(s)
	
1. Run the Anbauplanung Auswertung Excel again
	* => no additional line for the product from the new flatrate term Ausschreibung RfQ
	* => the qty from the inout is not included in gelieferte Menge, for the resp. month(s) 
	


