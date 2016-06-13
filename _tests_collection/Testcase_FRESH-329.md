---
title: IT FRESH-329
required data:
layout: default
---

# IT FRESH-329
### periods missing in dropdown because of no translations
> Testcase to check if the parameters contain all the periods

**Translations in parameters**

1. Login with Deutsch language

1. open a report or a process which has period as parameter (e.g. Umsatzreport)

1. press on the period dropdown
    * => the field is filled with all periods
   
1. Logout and login with another language (e.g. English)

1. repeat steps 2 and 3
   * => works the same 
   
1. go to calendar year and period, select a period and remove a translation for English

1. repeat steps 2 and 3
   * => the periods which you removed from translations are missing

1. logout and login as sysadmin, open Language window, pick English 

1. press Language Maintenance button, choose Add Missing Translations

1. login back, on English and check the process and the periods
   * => the periods are created back

