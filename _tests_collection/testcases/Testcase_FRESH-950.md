---
title: IT FRESH-950
required data:   
layout: default
tags:
  - Properties
---
## #658 make Ini more robust

> Testcase to check the Ini.loadProperties.

1. In X2Go File Manager, delete the properties file you're going to test with

1. Open the database of the properties file you just deleted:
	* => you have to agree to the license agreement, set Username, password etc.

1. Log in as you would normally for testing / using the database:
	* => no problems, everything works fine and loading ok

1. Check the File Manager again:
	* => new properties file was created
