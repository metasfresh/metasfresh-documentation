---
title: IT #757
required data:
   bpartner: several bpartners (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   flatrate terms: different flatrate terms, e.g. for packing items
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - flatrate terms
---
## #757 Automatic contract extension doesn't work anymore

> Testcase to check if the extension of flatrate terms works properly.

1. Make sure you have a couple of different flatrate terms, e.g. for packing items (e.g. TU A, TU B) for different bpartners, which are to be extended automatically when they run out

1. Make sure you have an AD_Scheduler which is supposed to extend these flatrate terms at this point in time (when they run out)

1. Check the AD_Scheduler the day after the automatic extension was about to take place (e.g. first day of the year):
	* => no error in the scheduler, the extension process should have been successful
	
1. Check some of the flatrate terms which had to be extended:	
	* => the extension worked fine
	* => new end date: e.g. 31.12. of the new year
	* => if the flatrate term was to be completed automatically (check the flatrate transition conditions!), then the extended term is completed
	
1. Select 1 flatrate term and extend it manually, start date: first day after end date of the current term, no selection of completion / no completion:
	* => parameters to be set: completion: Yes / No / empty, start date of new flatrate term
	* => the new flatrate term is created, and if the flatrate transition conditions included automatic completion, then the new term is completed
	

**Note:** You can check e.g. the number of flatrate terms for Gebinde for all bpartners (or the number of bpartners who have such a flatrate term) in the db with SQL, and then check if all these flatrate terms
have an enddate > 1.1. of the new year; note that bpartners can have >1 flatrate terms for different Gebinde, so keep that in mind when comparing the numbers!
	

