---
title: IT FRESH-893
required data:
   accounts: accounts 340, 3402 - 3404, 3406 - 3408 
layout: default
tags:
  - Jasper
  - Accounting
---
## #620 Marginal Return Report doubled sums for accounting group

> Testcase to check the changes for sums for accounting group 340 in Deckungsbeitragsrechnung.

1. It's helpful to have an older version of Deckungsbeitragsrechnung stored somewhere, so you can compare!

1. Run the report Deckungsbeitragsrechnung, check the accounts 340, 3402 - 3404, 3406 - 3408:
	* => acct 340: if only 1 acct is included in the section (e.g. 3404, 3408), then 340 shows the same numbers
	* => acct 340: if > 1 acct is included in the section (e.g. 3406 & 3407), then 340 shows the sume of those accts
	* => all sums of 340 in the report are different probably, since they only include the amts from the 340x acct(s) in the specific section
	
1. Create new entries in gl_journal (Hauptbuch-Journal):
	* set acct e.g. 3407 for one (in 3rd tab, Position, select another random one, e.g. 1100, as combination acct, Buchungsart: Ist,), with 555,- CHF
	* set acct e.g. 3404 for one (in 3rd tab, Position, select another random one, e.g. 1100, as combination acct, Buchungsart: Budget,), with 111,- CHF
	
1. Make sure your entries are posted

1. Run report Deckungsbeitragsrechnung again, check the accounts:
	* => 3407: sum in Andere & Total is decreased by 555,- CHF
	* => 340 of the section including 3407: sum in Andere & Total is decreased by 555,- CHF, and number in first % is changed accordingly
	* => 3404: has no change, since the gl_journal entry had posting type: Budget, and that wasn't set as parameter for the report
	
1. Run report Deckungsbeitragsrechnung again, set Parameter: Zeige Budget, check the accounts:
	* => 3404: sum in Budget is decreased by 111,- CHF, Andere & Total are the same, but numbers in the % sections are changed accordingly
	* => 340 of the section including 3404: sum in Budget is decreased by 111,- CHF, Andere & Total are the same, but numbers in the % sections are changed accordingly