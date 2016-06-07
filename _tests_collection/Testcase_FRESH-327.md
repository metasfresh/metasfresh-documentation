---
title: IT FRESH-327
required data:
   bpartner: bpartner data for setup
   logo: logo != metasfresh 
layout: default
---

# IT FRESH-327
### Subsequent change of logo not working correctly without cache reset
> Testcase to check if subsequent change of logo in setup 
> wizard is working correctly without cache reset.

1. After new rollout of mf15, use SetUp Wizard to set up a new AD_Client & AD_Org:
	* company name, contact info, banking info etc.
	* do NOT set a logo!
	
1. Create & complete a sales order, check the print preview

	* => all info from the new company you set is displayed in header and footer of the report, but logo is still metasfresh
	
1. Use the SetUp Wizard again, to set another logo

1. Check print preview of your sales order again

	* => the new logo is displayed now, no cache reset needed

