---
title: IT FRESH-539 
layout: default
tags:
  - Accounting
---
## #225 Allocation - Accounting 0,00 when Posted

> Testcase to check if allocations with missing accounting despite posting are correctly reposted by the schedule process.

1. Open Allocation Header, select one for testing

1. Check the accounting on button Posted
	* => Konten-Info opens with the accounts, sums etc. from the posting
	
1. Delete the accounting for your allocation header in the database

1. Check the accounting on button Posted for your allocation header once more
	* => it is still posted
	* => no more accounting in Konten-Info
	
1. Run the new schedule process for Documents_FactAcct_Creation_For_Posted (change the cron pattern and restart the server)

1. Check the accounting on button Posted for your allocation header once again
	* => the accounting in Konten-Info is displayed again

1. In database, check de_metas_acct.RV_Reposted_Documents
	* => your Allocation Header is displayed, with document no., etc.
	
