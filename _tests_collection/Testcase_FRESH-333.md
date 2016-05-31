---
title: IT FRESH-333
required data: bpartner with at least 1 procurement flatrate term, with no price set in flatrate data entry for the current month
---

# IT FRESH-333
### Procurement candidate prices not updated correctly
> Testcase to check if the Procurement candidate prices are updated from the right pricelist version

**Price update**

1. Have a bpartner with at least 1 procurement flatrate term:

2. flatrate term A where there is no price set for your product A in flatrate_dataentry subtab

3. make sure the current PLV A that's used for your bpartner in purchase orders has this product and price x for it
 
4. make another pricelist version B (in the same pricelist), which is available from tomorrow and contains product A with price y

5. Create purchase candidates for product A in WebUI: one for today and one for tomorrow

6. Check prices in procurement candidates
    * => the one for today has price x, from pricelist version A
    * => the one for tomorrow has price y, from new pricelist version B

7. make pricelist version B inactive

8. in procurement candidates select gear - update prices 
   * => both candidates have price x, from pricelist A

9. make pricelist version B active again

10. Run again the "update prices" process from procurement candidates
    * => the one for today has price x, from pricelist version A
    * => the one for tomorrow has price y, from new pricelist version B
