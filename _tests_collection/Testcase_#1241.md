---
title: IT gh#1241
required data:
   bpartner: bpartner G000X
   product: P0001
layout: default, webui
tags:
  - procurement webui
---
## #1241 metasfresh does not notify procurement-webui about new contracts

> Testcase to check if the quantity report event has the right flatrate term

1. Go to Flatrate Data window and select BPartner G000X

2. Go to next subtab Flatrate Term and create a new one using gear: create new flatrate term

3. create the new flatrate term using product P0001 and in such way that it will end tomorrow

4. add some data entries and complete it

5. go to Procurements webui and login with G000X

6. select your product and add a quantity, select Send

7. go to quantity report event window and filter for your bpartner
	* => there is a new entry, and the flatrate term you just created is set there
	
8. wait until the date after tomorrow for the new flatrate to be created (your flatrate being extended)

9. open Procurements webui again and select your product, add a qty and send it

10. go to quantity report event window and filter for your bpartner
	* => there is a new entry, and the extended flatrate term is set there (not the one you created but the new one that was extended from yours)