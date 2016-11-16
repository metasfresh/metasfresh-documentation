---
title: IT FRESH-845

required data:
   C_Activity: Act1
   Account: 01 ( with default activity set), 02 (without default activity)
layout: default
---

### #558 Marginal return calculation - Accountings without c_activity_id
> Testcase to check if accountings without c_activity_id work fine


**Test for GJ Journal of type Balance**

1. Go to the element value of the 01 and set the default activity to Act1

2. Run the report Deckungsbeitragsrechnung

3. Run the report Deckungsbeitragsrechnung Kurzversion

4. Run the report Deckungsbeitragsrechnung Kurzversion mit Vorjahr

5. For all of the above remember the values for 01 and 02 in Andere and Act1 column (if 01 and 02 are high level, check for their base accounts.

6. Create a GL Journal entry:
    * Sammeleintrag tab: 
        * set Kontrollbetrag to 100
        * set Buchungsart = Ist, save
    * Journal tab: set Kontrollbetrag to 100, save
    * Position tab:
        * Go to Kombination-Soll
        * Click the red button, add 01 to konto, save, ok
        * Go to Kombination-Haben
        * Click the red button, add 02 to konto, save, ok
    * Set Soll to 100, save
    * Go back to tab Sammeleintrag, Complete
    * GO to tab Journal, Post it
        * => OK : Soll 100 for 01
        * => OK: Haben 100 for 02

7. Run the report Deckungsbeitragsrechnung

8. Run the report Deckungsbeitragsrechnung Kurzversion

9. Run the report Deckungsbeitragsrechnung Kurzversion mit Vorjahr

10. Check again the numbers from step 5
    * => OK: For 01, all values from step 5 increased by 100
    * => OK: For 02, all values from step 5 increased by 100 

Note: the numbers could also decrease. It depends on the Account type!
    

**Test for GJ Journal of type Budget**

1. Go to the element value of the 01 and set the default activity to Act1

2. Run the report Deckungsbeitragsrechnung

3. Run the report Deckungsbeitragsrechnung Kurzversion

4. Run the report Deckungsbeitragsrechnung Kurzversion mit Vorjahr

5. For Deckungsbeitragsrechnung remember the values for 01 and 02 in Total

6. For the other two reports, remember the values for 01 and 02 in Total and Act1 column for section Budget (if 01 and 02 are high level, check for their base accounts.

7. Create a GL Journal entry:
    * Sammeleintrag tab: 
        * set Kontrollbetrag to 100
        * set Buchungsart = Budget, save
    * Journal tab: set Kontrollbetrag to 100, save
    * Position tab:
        * Go to Kombination-Soll
        * Click the red button, add 01 to konto, save, ok
        * Go to Kombination-Haben
        * Click the red button, add 02 to konto, save, ok
    * Set Soll to 100, save
    * Go back to tab Sammeleintrag, Complete
    * GO to tab Journal, Post it
        * => OK : Soll 100 for 01
        * => OK: Haben 100 for 02

8. Run the report Deckungsbeitragsrechnung with parameter Budget set on true

9. Run the report Deckungsbeitragsrechnung Kurzversion

10. Run the report Deckungsbeitragsrechnung Kurzversion mit Vorjahr

11. Check again the numbers from step 5, 6
    * => OK: For 01, all values from step 5 increased by 100 ( all reports)
    * => OK: For 02 , budget increased by 100 in the first report. Nothing modified in the other two reports

    