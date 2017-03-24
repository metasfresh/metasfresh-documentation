---
title: IT gh#1122
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002, P0003
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Excel
---
## Reporting SQL for Products and vendor/ customer

> Testcase to check if the reporting SQL for Products and vendor/ customer is working correctly.

1. Run the excel report for Zendierung Lieferanten Excel, leave it open for comparison
	* => products with qties and bpartners displayed, for different periods of time
	* => all qties of products are displayed in kg
	* => many products have: no CH / no Inland / no AdR, others have alle Merkmale

1. Make sure P0001 & P0002 are displayed in the Excel, and note the the periods for them, make sure they both have no CH / no Inland / no AdR for G000X!

1. Create a purchase order for G000X:
	* P0001, 10 TU A (kg!)
	* P0002, 10 TU B (Stk)
	
1. In Wareneingang POS, create inouts:
	* P0001, 3 TU A (15kg), no ASI
	* P0001, 1 TU A (5kg), CH & AdR
	* P0001, 1 TU A (5kg), no ASI
	* P0002, 5 TU B (30 Stk, = 4.5 kg), Inland
	* P0002, 3 TU B (18 Stk, = 2.7 kg), no ASI
	
1. Make sure the inouts have movement date not included in the periods of the report

1. Use SQL to update the movement date of each inout to one covered by the periods displayed in the report, check the report after EACH upate:
	* => 1st inout of P0001: qty is displayed / update correctly (15kg or 15+ original qty)
	* => 2nd inout of P0001: qty is NOT displayed bc of ASI
	* => 3rd inout of P0001: qty is updated correctly (20kg or 20+ original qty)
	* => 1st inout of P0002: qty is NOT displayed bc of ASI
	* => 2nd inout of P0002: qty is displayed / update correctly (2.7 kg or 2.7+ original qty)
	
1. Reactivate the 1st inout of P0002, and change the ASI:
	* take out Inland, set a different country (!= CH)
	
1. Complete the inout, and run the excel again:
	* => qty of P0002: qty is update correctly (7.2 kg or 7.2+ original qty)
	
1. Check the excel report for Zedierung Kunden, leave it open

1. Repeat the test for sales side:
	* make sure P0003 has Alle Merkmale set in the report
	* run the report for before / after completing inouts
	
1. Compare results with the original excel:
	* => P0003 is always displayed if the inout has movement date included by the period and is completed
	* => P0001 & P0002 are included if the ASI is not CH / Inland / AdR and the inout has movement date included by the period and is completed
	* => sums of qties are added up correctly