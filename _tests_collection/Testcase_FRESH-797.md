---
title: IT FRESH-797
required data:
   bpartner: bpartner G000X 
layout: default
tags:
  - UI
---
## #508 Creating User without Business Partner throws Exception

> Testcase to check if creating a new user works without business partner.

1. Open window User, to create a new user for G000X

1. Enter first name, last name, and name for the User, then save
	* => no exception, new user is saved without setting G000X

Regression:	
1. Add G000X in bpartner field, save
	* => works fine
	
1. Open bpartner window, search for G000X, check tab User:
	* => your user is listed there
	
1. Create another user in that tab:
	* => works fine as well, but G000X is set automatically