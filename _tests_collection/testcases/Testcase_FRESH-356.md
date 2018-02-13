---
title: IT FRESH-356
required data:
   bpartner: bpartner Org I
   orders: purchase & sales orders
   invoices: purchase  & sales invoices
   inouts: purchase  & sales inouts
   AD_Orgs: Org I
   logos: logo.png & logoII.png
   layout: default
---

# IT FRESH-356
### make logo work for any org
> Testcase to check if the logo for any Org
> can be set and changed without errors.


1. Make sure  Org I has no logo set in C_BPartner, Logo and in AD_OrgInfo

1. In C_BPartner, Logo, set logo.png for Org I, save

1. Log out and in again

1. Open your orders, invoices and inouts, search for Org = Org I

1. Print Preview all of them
		
	* => logo.png is displayed in all Jaspers
	
1. In AD_OrgInfo, set logoII.png as Logo for Org I, save

1. Log out and in again

1. Print Preview all of your orders, invoices and inouts with Org = Org I again
	
	* => logo.png is displayed in all Jaspers
	
1. In C_BPartner, Logo, delete logo.png for Org I, save

1. Log out and in again

1. Print Preview all of your orders, invoices and inouts with Org = Org I once more
	
	* => logoII.png is now displayed in all Jaspers
	



