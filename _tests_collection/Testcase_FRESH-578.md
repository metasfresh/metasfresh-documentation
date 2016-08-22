---
title: IT FRESH-578
required data:
   bpartner: bpartner G000X (customer), G000Y (vendor)
   products: P0001
layout: default
tags:
  - Picking
  - Attributes
---
## #275 In Picking HU Editor. New Flag ignore attributes for Filter

> Testcase to check the flag for ignoring attributes in Picking Terminal HU Editor.

1. Make sure that the new checkbox for ignoring attributes in Picking Terminal is enabled in SysConfig!

1. Open Packvorschrift, and make sure:
	* which attributes have "Use in ASI" checked for No Handling Unit (= template attribute, not just used for LU & TU level) and 
	* which attributes have "Use in ASI" checked for LU level (mind the org of the LU!)

1. Create a sales order for G000X

1. Add orderline with P0001, several TUs (at least 5), set an attribute like Herkunft: Spain

1. Create a purchase order for G000Y

1. Add orderline with P0001, several TUs (at least 5), DON'T set an attribute 

1. Open Wareneingang POS, make sure destination warehouse for your order = warehouse of your sales order! (if not, create the resp. distribution network!)

1. In Wareneingang POS, create several inouts (different attributes are per LU!):
	* with no attribute
	* with Herkunft: Spain
	* with Herkunft: e.g. Germany
	* with Label: Bio
	* with Herkunft: Spain, Label: Bio
	
1. Open Picking Terminal 1st window, select warehouse of your sales order and G000X

1. Select P0001 (and delivery date), OK

1. Select a picking slot, and P0001

1. Click HU Editor:
	* => Editor opens, with new checkbox: Attribute berücksichtigen, checked
	* => only the HU from your inout with Herkunft: Spain is displayed
	
1. Uncheck the checkbox
	* => the other HUs from your inout are displayed as well
	
1. Select the HU with Herkunft: Spain, to check the TU & VPI, then check the attribute checkbox again

1. Click the Home button
	* => back on LU level, only the HU with Herkunft: Spain is displayed again now
	
1. Uncheck the attribute checkbox once more, and select 2 HUs (different attributes, 1 with Herkunft: Spain)

1. Make picking for these 2 HUs 

1. Open the Lieferdispo for your sales order
	* => Auf Packzettel: qty from your inout in Picking Terminal
	
1. Create the shipment with Gear, Auswahl liefern, Erstellen mit kommissionierter Menge checked

1. Check the shipment:
	* => 2 inoutlines, 1 for each HU with different attribute

1. Go back to Picking Terminal, open the HU Editor again
	* => checkbox: Attribute berücksichtigen, checked
	* => the HU Editor is empty at first opening, since the HU with Herkunft: Spain is already picked

1. Uncheck the checkbox, select a HU, check the attributes on TU and VPI
	* => remaining HUs are displayed
	* => attributes are the same as on LU level

1. Click Home button
	* => back on LU level, all remaining HUs are displayed
	
1. Select 2 HUs, with different attributes, and pick them

1. Open Verdichtung POS, select your warehouse, G000X, and location for shipment

1. Select your 2 HUs, select a Speditionsauftrag, and create the shipment

1. Check the shipment:
	* => 2 inoutlines, 1 for each HU with different attribute
	
1. Create another shipment, pick >1 HU in picking HU Editor, but at least 2 with the SAME template attribute and at least 2 with only different attribute on LU / TU level (e.g. SSCC18, tare weight)

1. Check the shipment:
	* => 1 inoutline, with overall qty, with the same template attribute
	* => 1 inoutline, with overall qty, with NO attribute set
	
1. Open Rechnungsdispo for your sales order:
	* => 1 invoice candidate for P0001
	* => invoice candidates for the Gebinde used in your inouts
	
1. Create the invoice:
	* => different invoice lines for the different attributes, 1 invoiceline per inoutline (=> you can have >1 invoiceline with the same attribute, because of >1 inoutline)

1. Create another sales order for G000X, P0001, but do NOT set an attribute

1. Create several inouts in Wareneingang POS for P0001 again, with different attributes

1. Open Picking Terminal
	* => checkbox: Attribute berücksichtigen, checked
	* => the HU Editor includes all HUs from Wareneingang POS, with the different attributes (since none is set in the order)

1. Pick several HUs with different attributes (template and non template)

1. Create the shipment via Lieferdispo, Erstellen mit kommissionierter Menge
	* => 1 inoutline for each different template attribute (overall qty, if there were >1 HUs with the same attribute)
	* => 1 inoutline for the overall qty with NO attribute set

	
**Note:**
* the attribute on LU level overwrites the attribute on lower levels, => if you have >1 TU with different attributes, on the same LU, then the attribute will be taken from the LU for inoutline!
* some template attributes are not displayed in the inoutline / the inout jasper (Subproducer / Produktionsart), => you will still get >1 inoutline if they are different in the LUs! (but not necessarily >1 invoiceline!)
** => to be decided in follow-up tasks how to deal with that


Regression testing:
* shipment from Lieferdispo without picking, sev. lines
* shipment from Lieferdispo without picking, EDI, sev. lines
* shipment from Lieferdispo with picking, sev. lines
* shipment from Lieferdispo with picking, sev. lines, EDI
* consolitated shipment
* shipment from Verdichtung, sev. lines
* shipment from Verdichtung, sev. lines, EDI
