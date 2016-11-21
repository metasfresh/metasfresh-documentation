---
title: IT FRESH-859
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002   
layout: default
tags:
  - Jasper
---
## #576 Report Reclamation result, quality note and minor changes

> Testcase to check the latest changes in Report Reklamationen.

1. Create a request for a material receipt:
	* purchase order for G000X, P0001
	* in Wareneingang POS, set a quality issue & quality note
	
1. Open the request in window Vorgang (alle):
	* => doctype: Lieferantenbeanstandung 
	* => bpartner, product, material receipt no. etc. are set
	* => Quality note is set in Beanstandung, as set in Wareneingang POS
	
1. In Ergebnis, set a longer text (e.g. copy some sentences from Wikipedia), save

1. Run Report Reklamationen:
	* => header Lieferung / Wareneingang is displayed in 2 lines
	* => quality note from receipt is displayed correctly in Beanstandung
	* => the text from Ergebnis is fully displayed (maximum i had was 14 lines in the report, after that the text is cut off)
	
1. Create a request for a sales inout:
	* sales order for G000X, P0002
	* create the inout with Lieferdipso
	* in Lieferung, click Anfrageverfolgung and Neue Anfrage anlegen
	
1. Open the request in window Vorgang (alle):
	* => doctype: Kundenbeanstandung 
	* => bpartner, inout no. etc. are set
	* => product is not yet set!
	
1. Set the product P0002 in the resp. field, set sth in Notiz, and a longer text in Ergebnis (e.g. copy some sentences from Wikipedia), save

1. Run Report Reklamationen:
	* => header Lieferung / Wareneingang is displayed in 2 lines
	* => quality note from inout: empty, since it wasn't set
	* => the text from Ergebnis is fully displayed (maximum i had was 14 lines in the report, after that the text is cut off)
	* => Notiz is not included in the report
	
1. Run Report Reklamationen for a longer time period, so you get more requests displayed:
	* => header Lieferung / Wareneingang is displayed in 2 lines
	* => quality note: empty, if it wasn't set (e.g. for sales inouts), always displayed if set (for material receipts with quality note set in Wareneingang POS)
	* => the text from Ergebnis is fully displayed (maximum i had was 14 lines in the report, after that the text is cut off)