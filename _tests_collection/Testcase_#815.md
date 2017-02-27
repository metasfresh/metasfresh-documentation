---
title: IT gh#815
required data:
   bpartner: bpartner G000X (as ad_client!) 
layout: default
tags:
  - Jasper
---
## #815 Jasper Footer: Show bank account in one line

> Testcase to check the Jasper Footer regarding bank account.

1. Open G000X in bpartner window

1. In tab bank account, select a bank with a long name

1. Also set an acct. no., ESR no. and IBAN as well

1. Make this one the default account (checkbox: Standard), then create another, similar one which is not default

1. Create documents for jaspers, e.g. orders, inouts or invoices, and check the footer in the jasper:
	* => infos of the default bank acct. is used
	* => bank name is not cut off, but displayed fully
	* => bank info is displayed in one line, c_bank.name | swiftcode (bic) | iban
	* => acct no. is not displayed anymore, also ESR no. is not displayed