---
title: IT FRESH-886

required data:

    C_Country entry for GB_England
    
layout: default
---

### #611 IBAN Error for RBS Bank
> Test if an IBAN code for GB can be set in a partner's bank account


**Check if an IBAN for GB can be set in a partner's bank account**

1. Go to the window Land, Region, Stadt and select the England entry

2. Go to its IBAN section and make sure all the fields are filled according with the specification from this document: https://www.swift.com/sites/default/files/resources/swift_standards_infopaper_ibanregistry_1.pdf ( page 29, 2.23 GB – United Kingdom, IBAN section)

3. Go to the Organization BPartner for the org you loggeed on with

4. Go to their BankAccount tab (Bank Konto)

5. Create a new entry and set the IBAN GB29NWBK60161331926819 ( taken from the document above: https://www.swift.com/sites/default/files/resources/swift_standards_infopaper_ibanregistry_1.pdf )

6. Save the entry
    * => OK: The entry is saved without error in the console
    
7. Create a manual payment (use Zahlung)  and use this new account for it

8. Complete the payment
    * => OK: No error. Payment completes correctly.
