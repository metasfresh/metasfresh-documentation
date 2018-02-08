---
title: IT gh#837
required data:
   accounts: ZZZ, YYY
   activity: XXX  
layout: default
tags:
  - Jasper
  - Accounting
---
## #837 Marginal return accounts doubled

> Testcase to check the marginal report for doubled accounts.

1. Make sure you have an account ZZZ, which is used in several parts of the marginal report, e.g. for different types of personnel cost, and another acct YYY not used there

1. Make sure you have an activity for posting type XXX for e.g. Administration, which is one type of usage of personnel cost besides others

1. Run the marginal report, leave it open for comparison:
	* => ZZZ is displayed with resp. sums, several times for different types of personnel cost

1. Create a GL_Journal, using
	* e.g. sum: 155.00 CHF
	* accts: ZZZ, YYY (combination Debit - Credit)
	* as activity, set XXX
	
1. Complete and post it

1. Run the marginal report again:
	* => ZZZ is displayed with resp. sums, several times for different types of personnel cost
	* => only the sum for activity XXX is raised by 155.00, the other sums are NOT affected!
