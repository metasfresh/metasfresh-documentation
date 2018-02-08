---
title: IT FRESH-802
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   flatrate term: procurement
layout: default
tags:
  - UI
  - Procurement
---
## #515 Generating C_Flatrate_Term from C_RfQ_Response then don't complete the term

> Testcase to check if newly created flatrate terms for procurement are not autmatically completed.

1. Open bpartner window, search for G000X

1. Click Gear, Erzeuge Vertrag für gefilterte Geschäftsparter to create a flatrate term

1. Check the available flatrate terms in dropdown for Vertragsbedingungen:
	* => Liefervereinbarung (Procurement) is NOT included

1. Open window Laufender Vertrag (flatrate_data), search for G000X 
	* => all flatrate terms for G000X are included in 2nd tab, Vertragsperiode (flatrate_term); if G000X has none yet, create one from bpartner
	
1. Select G000X, click Gear, Neuen Liefervertrag erstellen:
	* => small window opens for setting the terms: product, time period, UOM etc.
	* => checkbox Fertigstellen, to decide if the flatrate term should be completed right away
	
1. Select P0001, UOM, time period etc., don't check the box for Fertigstellen, OK:
	* => new flatrate term for procurement is created, with the settings as selected
	* => the flatrate term is NOT completed
	
1. Create another flatrate term, for G000X, with a different product P0002, time period etc., check the box for Fertigstellen, OK:
	* => new flatrate term for procurement is created, with the settings as selected
	* => the flatrate term is already completed