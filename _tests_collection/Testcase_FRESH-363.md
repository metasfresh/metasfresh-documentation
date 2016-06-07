---
title: IT FRESH-363
required data:
   AD_Client: Client I
   AD_Orgs: Org I
   layout: default
---

# IT FRESH-363
### Client metasfresh not getting results from server due to cxf bug
> Testcase to check if login with and without properties file works fine

**Login**

1. open application with your current config
 	* => application opens, no errors
 	
1. delete your properties file and open the application again
    *  => the popup with license appears
    
1. press ok
    * => server connection (MyAppsServer, MyDataBase etc), buttons are red

1. add the correct server, press ok
    * => button gets green, database name is updated, no errors

1. press on the red button to test database
    * => button gets green, no errors

1. press ok twice
    * => popup with user, password, client and org appears. Then application opens fine, without errors

1. logout, remove the properties file

1. login again, write wrong data to server and database, press ok
    * => you cannot login. error message pops up

1. press on x, run the application agan
    * => the wrong configs were not remembered

1. set the right config, press ok
    * => application opens fine, without errors

1. logout and login again
    * => config is set to the right one and application opens without the need to change it