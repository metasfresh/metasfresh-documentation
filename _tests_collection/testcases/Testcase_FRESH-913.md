---
title: IT FRESH-913
required data:
   accounts: several different accounts
   activities: several different activities
   AD_Orgs: Org I, Org II 
layout: default
tags:
  - Jasper
  - Finance
---
## #639 Marginal Return report calculation does not check ad_org_id

> Testcase to check the Marginal Return report calculation for another Org.

1. Log in with Org II

1. For comparison, have an old the Marginal Return report (Deckungsbeitragsrechnung report) for Org II,  or run it before changes are implemented if possible:
	* => activities (Kostenstelle) included are: 1000, 2000, 100, 150 and others (Andere)
	
1. Create several GL_Journals (Hauptbuch - Journal), using accounts included in the report before:
	* => use different activities, from 10, 20 - 50, plus others (90 or 150)
	* => make sure you use each account - activity combination only once!
	* => for the sums in Haben & Soll, set simple, recognizable numbers like e.g. 100, 150 etc.
	* => you can set Posting type A (Ist) for most, and also B (Budget) for one or 2 to test
	* => also create a GL_Journal without actitivy set
	* => make sure the GL_Journals are all posted (wait for posting or do it manually)
	
1. Run the Marginal Return report (Deckungsbeitragsrechnung report) for Org II, without Budget:
	* => activities (Kostenstelle) included are now: 10, 20, 30, 40, 50 and others (Andere)
	* => for each account, the sum you set in GL_Journal is displayed for the correct activity (no activity is also included in others!)
	* => the sums where Posting type Budget was set are not included, since Budget is not included in the report
	
1. Run the Marginal Return report (Deckungsbeitragsrechnung report) for Org II again, wit Budget:
	* => column Budget is now included, and the sums where Posting type Budget was set are displayed for the resp. account(s)
	
**Note:** If you use the same each account - activity combination more than once, the sums will be calculated accordingly! Also, if you have a higher / lower sum displayed in the
report than you set in GL_Journal, check Fact_acct in database for postings for this account and Org II: there should be more postings displayed then your GL_Journal, from other documents.