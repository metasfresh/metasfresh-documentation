---
title: IT gh#1169
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Flatrate Term
  - UI
---
## Prevent C_Flatrate_Terms with overlapping dates

> Testcase to check if creating new, completed C_Flatrate_Terms is prohibited if there is an existing C_Flatrate_Term with overlapping dates.


1. Make sure if you already have existing flatrate terms with overlapping dates: incomplete ones are not considered! (check with the SQL in task description)

1. Pls note: the flatrate terms can be for the same product (e.g.  a certain packing item or type of carrots, or a flatrate term can be covering a grop of products and therefore include several, e.g. a term for ALL packing items

1. If you fine existing flatrate terms with overlapping dates, for the same product or included ones: try completing the incomplete ones (in window C_Flatrate_Term, Laufender Vertrag):
	* => error msg, informing user about the terms with overlapping dates
	
1. Change the dates in the incomplete term, so they don't overlap with the existing, completed one anymore, and try completing again:
	* => completing works fine without errors
	
1. Make sure you already have existing flatrate terms for G000X:
	* P0001 (carrots), e.g. Apr 2017 - Sep 2017
	* TU A, e.g. May 2017 - Dec 2017
	* all packing items, e.g. Jan 2018 - Feb 2018
	
1. Open bpartner window (Geschäftspartner), Gear, and try creating new flatrate terms:
	* for P0001, starting Aug 2017
	* for P0002, starting Aug 2017
	* for TU A, starting Jan 2018
	* for TU B, starting Feb 2018
	
1. Check the msg for the user:
	* => P0001: info that the term was not created, bc there is already an existing one
	* => P0002: term is created, info with ID of the new term
	* => TU A: term was created, but could not be completed bc of overlapping dates, with the ID of the new term
	* => TU B: term was created, but could not be completed bc of overlapping dates, with the ID of the new term
	
1. Check the flatrate term window for G000X:
	* => 3 new terms, 2 incompleted bc of overlapping dates
	
1. Change the dates for the incomplete terms:
	* TU A: starting Mar 2018
	* TU B: starting Apr 2018
	
1. Complete the 2 terms:
	* => no error msg, terms are completed
	
1. Try creating a new flatrate term from bpartner window for:
	* P0001, starting Oct 2017
	* => works fine, without error msg
	
	
1. Make sure all flatrate term types which can be created from bpartner window are covered by the testing (atm, we have terms for packing items and carrots)!



**Regression:**
1. Make sure you have C_Flatrate_Conditions for Abonnement set up

1. Make sure the column for Abo-Vertragsbedingungen is shown and used in sales order, orderline

1. Create a sales order, and select the C_Flatrate_Conditions for Abonnement in the sales orderline, complete

1. Check the flatrate term window for the bpartner:
	* => flatrate term was created correctly, with the C_Flatrate_Conditions for Abonnement


