---
title: IT FRESH-539 
layout: default
tags:
  - Accounting
---
## #225 Allocation - Accounting 0,00 when Posted

> Testcase to check if allocations with missing accounting despite posting are correctly reposted by the schedule process.

1. Open Allocation Header, select one for testing (you can also select several, for payment, invoice etc., BUT make sure they are created on the day before testing!)

1. Check the accounting on button Posted
	* => Konten-Info opens with the accounts, sums etc. from the posting
	
1. Delete the accounting for your allocation header(s) in the database

1. Check the accounting on button Posted for your allocation header(s) once more
	* => it is still posted
	* => no more accounting in Konten-Info
	
1. Run the new schedule process for Documents_FactAcct_Creation_For_Posted (change the cron pattern and restart the server)

1. Check the accounting on button Posted for your allocation header(s) once again
	* => the accounting in Konten-Info is displayed again

1. In database, check de_metas_acct.RV_Reposted_Documents
	* => your Allocation header(s) is displayed, with document no., etc.
	
**Note:** The schedule process is set to repost only data created the day before, and runs usually every night at 1:30 AM. If you want to have older data reposted, you have to change the created date for those in db first!
