---
title: IT FRESH-307
required data:
   bpartner: G000X in Org I, G000Y in Org II (both customer)
   AD_Org: Org I, Org II
layout: default
---

# IT FRESH-307 (incl. FRESH-326)
### New Organisation: Financial Data of existing Org
> Testcase to check if the financial data of a specific Org 
> is displayed in the reports of this Org only, and not
> another one.

*Please note: I created and saved all financial reports for Org I and II, before the task was rolled out, in order to compare them with the reports after the rollout. For comparison reasons, I then used the same
dates used for the old reports when running the new ones as well (e.g. same Stichtag, same time period etc.). I also selected the same account, if it was a necessary filter (e.g. for Konten-Information).*


1. Log in with Org I, as Admin

1. Run the following financial reports (leave them open for comparison):
	* Bankauszug FiBU
	* Bilanz
	* Bundesamt für Statistik
	* Deckungsbeitrag Kurz
	* Deckungsbeitrag Kurz mit Vorjahr
	* Deckungsbeitragsrechnung
	* Konten-Information
	* Kostenstellenwechsel
	* Saldobilanz
	
		* => Org I is already selected, read-only
		* => financial data displayed is only the data of Org I
	
1. In a different session, log in with Org II, Admin

1. Run the same financial reports again

	* => Org II is already selected, read-only
	* => financial data displayed is only the data of Org II (if there is no existing financial data for Org II, the report will have no pages or all amts =  0.00)
	
1. Run report Fibukonto-Kontoblatt, set Org I

	* => Org is not selected, but can be set (=> role Admin!)
	* => financial data displayed is only the data of Org I
	
1. Run report Fibukonto-Kontoblatt again, set Org II

	* => financial data displayed is only the data of Org II (if there is no existing financial data for Org II, the report will have no pages or all amts =  0.00)
	
1. Create a sales invoice A for G000X in Org I, and one invoice B for G000Y in Org II

1. Complete them, and make sure they are both posted (check which accounts are used for posting!)

1. Run Konten-Information for Org I and the resp. account used for posting of the invoice of G000X

	* => invoice A is displayed and the sum is included in the overall amt, **NOT** invoice B
	
1. Run Konten-Information for Org II and the resp. account used for posting of the invoice of G000Y

	* => invoice B is displayed and the sum is included in the overall amt, **NOT** invoice A
	
1. Run Saldobilanz again for Org I

	* => amt of the acct used for posting of invoice A is increased by the resp. sum
	
1. Run Saldobilanz again for Org II

	* => amt of the acct used for posting of invoice B is increased by the resp. sum
	
	

	


	
