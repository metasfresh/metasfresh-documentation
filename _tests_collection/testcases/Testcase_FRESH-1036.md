---
title: IT FRESH-1036
required data:
   accounts: several accounts   
layout: default
tags:
  - Jasper
  - Accounting
---
## #713 Marginal Return Report (short version) doubled sums for accounting group

> Testcase to check Marginal Return Report (short version) not having doubled sums.


1. Open the marginal return reports (short versions), and check the sums for account 340 (leave them open for comparison):
	* => acct 340 is displayed 3 times in the reports
	* => each sum for acct 340 is different
	
1. Run the normal marginal return report as well, leave it open for comparison
	* => acct 3403 is displayed for 580

1. Create a GL_Journal, use acct 3403 as one of the accounts

1. Complete the GL_Journal, and make sure it's posted

1. Run all marginal return reports again:
	* => normal marginal return report: sum in 3403 is changed accordingly to your GL_Journal
	* => short marginal return reports: sums in 340 are not changed by your GL_Journal, but sum in 580 is changed accordingly