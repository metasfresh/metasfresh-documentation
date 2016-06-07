---
title: IT FRESH-304
required data:
   accounts: acct X with account type Expense or Revenue, acct Y with another acct type
layout: default
---

# IT FRESH-304
### Report Konten-Information Rev+Exp accounts Saldovortrag year end
> Testcase to check if Saldovortrag in Konten-Information
> for Revenue or Expense accounts from year end is not taken
> for the new year.


1. Run report Salobilanz for the last day of last year, e.g. 31.12.2015

1. Note the amounts for accts X and Y (numbers are examples):

	|	Account		|	Amount 31.12.2015		|	
	| ------------- |:-------------------------:|
	|	X			|	1.000 000				|	
	|	Y			|	50.000					|	
	
	
1. Run report Salobilanz for the first day of this year, e.g. 01.01.2016, note the amounts  for accts X and Y:

	|	Account		|	Amount 01.01.2016		|	
	| ------------- |:-------------------------:|
	|	X			|	<1.000 000				|	
	|	Y			|	>=50.000				|	 

	
1. Run Konten-Information for
	* account X, with start & end date: 01.01.2016
	* account Y, with start & end date: 01.01.2016
	
	|	Account		|	Anfangssaldo 01.01.2016	|	Summe											|
	| ------------- |:-------------------------:|:-------------------------------------------------:|
	|	X			|	0.00					|	sum of postings for acct X **on 01.01.16 only**	|
	|	Y			|	50.000					|	50.000 + sum of postings for acct Y on 01.01.16	|
	
	
1. In Konten (Account Element), change the account type of account X to one != Expense or Revenue, check currency and select EUR

1. Again, run Konten-Information for
	* account X, with start & end date: 01.01.2016
	* account Y, with start & end date: 01.01.2016
	
	|	Account		|	Anfangssaldo 01.01.2016	|	Summe												|	Summe in Euro		|
	| ------------- |:-------------------------:|:-----------------------------------------------------:|:---------------------:|
	|	X			|	1.000 000				|	1.000 000 + sum of postings for acct X on 01.01.16 	| sum from Summe in EUR	|
	|	Y			|	50.000					|	50.000 + sum of postings for acct Y on 01.01.16		|	*not displayed*		|
	

	
