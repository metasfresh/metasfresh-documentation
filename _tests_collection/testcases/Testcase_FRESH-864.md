---
title: IT FRESH-864

required data:

    AD_Org: Org1, Org2 
    C_BPartner: BP1 for org 1, BP2 for Org2
    
layout: default
---

### #583 Reports without ad_org_id show wrong results
> Test if the reports respect the organization they are run for


**Test if the reports respect the organization they are run for**

*Rüstliste* 
1. Create a sales inout for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 
    
*Artikelstatistik*
1. Create an invoice for BP1 and post it

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 
    
*Statistik nach Mengen*
1. Create an invoice for BP1 and post it

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 
    
*Statistik nach Mengen Gesamt* 
1. Create an invoice for BP1 and post it

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 
    
*Bankauszug* 
1. Go to Kassenjournal and create an entry for Org1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 
    
*Gebindesaldo Gesamt* - in M_Material_Balance_Detail, inoutline; also has excel
1. Create a shipment for BP1, with some lines

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
    
*Gebindeübersicht* 
1. Create a shipment for BP1, with some lines

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
    
*Offene Posten Fibu*
1. Create an invoice for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files

    
*Umsatzliste*
1. Create an invoice for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 
    
*Umsatzreport*
1. Create an invoice for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
    
*ADR Auswertung*
1. Create an invoice for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
    
*Umsatzreport Geschäftspartner*
1. Create an invoice for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
    
*Umsatzreport Geschäftspartner Woche*
1. Create a shipment for BP1, make sure it has invoice cands created

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
    
*Umsatzreport Geschäftspartner Woche mit menge*
1. Create a shipment for BP1, make sure it has invoice cands created

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files
 
*Umsatzreport Geschäftspartner mit Menge*
1. Create an invoice for BP1

2. Run the report for Org1 and Org 2
    * => OK: The BP1 related info displayed for Org1
    * => OK: The BP1 related info not displayed for Org2 

3. Export XLS
    * => OK: The info is also corect in the .xls files


**Regression: Reports that should be identical for both organizations:**


*Revisionsstelle Geschäftspartner*
1. Make a change in BP1 (e.g. change his language and then change it back)

2. Run the report for Org1 and Org 2
    * => OK: The reports are identical

*Picking Vorbereitung Liste*
1. Create a sales order for BP1

2. Go to Picking Slot, make sure there is an entry for BP1 with the location what was set in the sales order ( create one if there isn't any) 

3.  Run the report for Org1 and Org 2
    * => OK: The reports are identical
    
*Lagerwert*
1. Create a material receipt for  BP1

2. Run the report for Org1 and Org 2
    * => OK: The reports are identical