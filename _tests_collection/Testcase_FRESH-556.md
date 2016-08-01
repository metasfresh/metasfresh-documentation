---
title: IT FRESH-556
required data:   
layout: default
tags:
  - 
---
## #248 Admin Login when deleted properties

> Testcase to check the login after deleted properties.

1. Delete the properties for metasfresh (e.g. in x2go File Manager)

1. Open metasfresh, without existing properties
	* => you have to agree to the license agreement

1. Connect to the server & the database
	* => Anmeldung 1st window: User & Password are empty, you have to set them manually to log in


**Regression:**
1. Log in with a User and password, then log out again

1. Log in once more
	* => the User and password you set are automatically set for the log in
