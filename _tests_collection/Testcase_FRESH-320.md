---
title: IT FRESH-320
required data: -
---

# IT FRESH-300
### client not starting when config is not completed
> Testcase to check if the License aggrement popup has an icon down in task bar

**Login without properties**

1. delete your properties file and open the application
    *  => the popup with license appears and it has an icon in the task bar
    
1. press no
    * => application closes
    
1. open the application again
    * => the popup with license appears and it has an icon in the task bar
  
1. press yess
    * => popup with server connection (MyAppsServer, MyDataBase etc) appears and the license icon disapeares
    
1. config database
   * => application opens fine

**Login with properties file**

1. login with the properties file from the test above
   * => application opens fine 

