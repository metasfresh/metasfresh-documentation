---
title: IT FRESH-792
required data:
   accounts: 2 different accounts 
layout: default
tags:
  - Jasper
  - Accounting
---
## #504 new filter in saldobilanz report

> Testcase to check the new filter in Saldobilanz.

1. Run Saldobilanz for day of test:
	* new filter: Jahr Ende
	
1. Run the 3 reports for Deckungsbeitragsrechnung, Konten-Information (select a wider range of accounts), and Fibukonto-Kontoblatt

1. Leave the reports open for comparison

1. Create a new GL Journal (Hauptbuch-Journal):
	* in 1st & 2nd tab, set Buchungsart Ist (Jahr Ende)
	* in 3rd tab, set 2 different accounts (select 2 that are displayed in the Deckungsbeitragsrechungs Reports, and covered by your Konten-Information before)
	* set amt 100 for Haben / Soll for the accounts
	* save, and complete in the 1st tab
	
1. Wait for the GL Journal to be booked

1. Run Saldobilanz again, don't set the new filter:
	* => the amt for the accounts you selected in GL Journal are changed, one with + / one with - 100
	
1. Run Saldobilanz once more, set the new filter:
	* => no change in the amts of the 2 accounts, the report is the same as the one you first ran
	
1. Run the other reports:
	* => Deckungsbeitragsrechnung: amt for the accounts you selected are changed respectively
	* => Deckungsbeitragsrechnung Kurzversion: Total sum for the accoutns groups of your accounts are changed respectively
	* => Deckungsbeitragsrechnung Kurzversion mit Vorjahr Total sum for the accoutns groups of your accounts are changed respectively
	* => Konten-Information: amt for the accounts you selected are changed respectively
	* => Fibukonto-Kontoblatt: no change, because only invoices are checked for this report!