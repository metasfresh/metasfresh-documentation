---
title: IT FRESH-300
required data: -
---

# IT FRESH-300
### client not starting when config is not completed
> Testcase to check login with wrong data and that no matter what data you set, the application doesn't crash

**Login with correct properties**

1. open application with your current config
 	* => application opens
 	
1. delete your properties file and open the application again
    *  => the popup with license appears
    
1. press ok
    * => server connection (MyAppsServer, MyDataBase etc), buttons are red
    
1. on server connection don't setup anything, press ok
    * => error message NoDBConnection
  
1. press ok on the error message, set the application host and press test application
    * => button gets green, the one for DB is still red, but the correct data is set and readonly
    
1. press ok twice, choose language, press ok, choose role and press ok again
   * => application opens fine
   
1. logout, delete properties again

**Login and write wrong data in properties file**

1. login and leave application host like it is and put wrong data in database, press ok
   * => error message with NoDBConnection 
   
1. press on x, open application again

1. set correct dates in database (don't change application host)

1. test database to make sure you wrote well, press ok
    * => if database is ok button turns green

1. choose language and role
    * =>  application opens fine

**Login with wrong properties file**

1. change the properties file as it's a wrong one:

1. open it and where you see "Connection=" write "test" after it, and let the rest of the line which was there

1. save and open the application again
    * => the server connection opens with the same config like when you remove the properties file  
    * => if you press x the application closes, if you press ok you get the error with the NoDBConnection 
