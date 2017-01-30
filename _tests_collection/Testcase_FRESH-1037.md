---
title: IT FRESH-1037
required data:
   AD_Orgs: Org I, Org II
   accounts: different accounts for both Orgs
   activities: different activities for both Orgs   
layout: default
tags:
  - Jasper
  - Accounting
---
## #714 Marginal Return report calculation add additional Costcenter

> Testcase to check Marginal Return reports for different Orgs with different activities.

1. Log in for Org I, then Org II, and print Marginal Return report for both (leave open for comparison)
	* => reports only show results for the resp. postings for each Org

1. Logged in for Org II, create a GL_Journal for it, using accounts and an activity that's used for Org II, make sure it's posted

1. Run the reports again, for each Org:
	* => report for Org I is not changed
	* => report for Org II shows the sum from GL_Journal in the resp. account, and resp. activity
	
1. Repeat the same with a GL_Journal for Org I, run reports again:
	* => report for Org II is not changed
	* => report for Org II shows the sum from 2nd GL_Journal in the resp. account, and resp. activity
	
1. Logged in for Org I, create a GL_Journal for it, using accounts used for Org I, BUT use an activity that's used for Org II 

1. Run the reports again, for each Org:
	* => report for Org II is not changed
	* => report for Org I shows the sum from GL_Journal in the resp. account, with activity: Andere
	
