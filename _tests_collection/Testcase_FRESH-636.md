---
title: IT FRESH-636
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   pricelists: vendor pricelist VP   
layout: default
tags:
  - UI
---
## #361 Request change for customer service

> Testcase to check the changes of window request and the new async process for creating them for material receipts with issues.

**New window layout**

1. Open window Vorgang (alle), check fields and order of fields:
	* at the top: fields Project, Rechnung, Zahlung & RMA
	* in Aktion: Kostenstelle, Datum Nächste Aktion, Ergebnis (drop down), Dringlichkeit, Projekt, User Importance

1. In Vorgangsart, set Lieferanten- or Kundenreklamation, add sth in Notiz, save:
	* => fields and orders of fields changes:
	* at the top: fields Project, Rechnung, Zahlung & RMA are not displayed anymore, new fields Lieferdatum & Rücklieferung
	* in Aktion: Kostenstelle, Datum Nächste Aktion, Ergebnis (drop down), Dringlichkeit, Projekt, User Importance are not displayed anymore
	* in Aktion: new fields Beanstandung (= Ergebnis drop down), Nächste Aktion, Performance Type
	* order in Aktion: Vorgangsart, Priorität, Beanstandung, Notiz, Nächste Aktion, Verantwortlich, Ergebnisvorlagen, Ergebnis, Status, Performance Type
	

**New Async Process for creating requests from material receipt**

1. Create a purchase order for G000X, for P0001 and P0002

1. In Wareneingang POS, create material receipts:
	* receipt I: for P0001, partial qty, with quality discount and quality note
	* receipt II: for P0001, partial qty, without quality issues
	* receipt III: for P0002, partial qty, with quality discount, no note
	* receipt IV: for P0002, partial qty, with quality note, no discount
	
1. Open Vorgang (alle), search for G000X:
	* => 2 (new) entries, created from async for the material receipts with quality issues:
	* => created for receipts I and III
	
1. Check requests created for G000X:
	* => both have doctype Lieferantenreklamation set
	* => both have G000X set in Geschäftspartner
	* => both have Lieferdatum: date of test set
	* => both have the resp. receipt set in Lieferung/Wareneingang
	* => both have the resp. product, P0001 / P0002 set in Produkt
	* => both have Notiz: Qualitätsabzug Wareneingang set, can be changed
	* => Auftrag: is empty, not taken from purchase order: OK for now
	* => doc for receipt I: Beanstandung: the one you set as quality note in Wareneingang

	
**Comparison Vorgang (alle) and Vorgang window**
	
1. For the requests of receipt I, set:
	* Verantwortlich: SuperUser
	
1. Also set sth. in Ergebnis (in text field or select sth. from Ergebnisvorlagen, if some exist), save:
	* => new line is created in Aktualisierungen, at the bottom, for the entry in Ergebnis
	* => Ergebnis is empty again
	
1. Log out and in again, as SuperUser

1. Click Aufgaben button at the right bottom:
	* => window Vorgang opens
	* => the latest entry is the request for receipt I
	
1. Create a new request:
	* => fields and order of fields is as in Vorgang (alle), at the beginning of the test (see above)
	
1. In Vorgangsart, set Lieferanten- or Kundenreklamation, add sth in Notiz, save:
	* => fields and orders of fields changes as described before, window works the same as Vorgang (alle)
	

	
