---
title: IT #98 
required data:  
layout: webui
tags:
  - login, webui
---
## #98 Exception error messages are not parsed, so they are not translated

> Testcase to check if messages on login are translated

1. Login with your user and add a wrong password
	* => fields are red and you get the following message
	* => "Nutzer oder Passwort ist nicht korrekt!"

2. Login with an unexisting user:
	* => fields are red and you get the following message
	* => "Nutzer und Kennwort passen nicht zueinander"

3. login with the right user and password
	* => successfully logged in