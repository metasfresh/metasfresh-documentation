---
title: IT gh#1411
required data:
 
layout: default
tags:
  - DLM
---
## Possible 1:1 switch for Data Lifecycle Management users

> Testcase to check if Data Lifecycle Management can be switched on and off for certain users.

1. Log in as SysAdmin, check ad_sysconfig:
	* => 2 new entries: de.metas.dlm.ConnectionCustomizer.enabled.general & de.metas.dlm.ConnectionCustomizer.enabled.AD_UserID<ad_user_id>
	* => de.metas.dlm.ConnectionCustomizer.enabled.general is set to N
	
1. Log out, restart the client and log in with another user

1. Check Extras, Settings:
	* => no Settings for DLM Level displayed
	
1. Log out, and in as SysAdmin

1. Set the de.metas.dlm.ConnectionCustomizer.enabled.general to Y

1. Log out, restart the client and log in with the other user

1. Check Extras, Settings:
	* => no Settings for DLM Level displayed
	
1. Log out, and in as SysAdmin

1. Set the de.metas.dlm.ConnectionCustomizer.enabled.AD_UserID<ad_user_id> to Y for the user you used before for Log in

1. Log out, restart the client and log in with the other user

1. Check Extras, Settings:
	* => Settings for DLM Level are now displayed and can be set by the user
	
	
**Note:** This task was about enabling metas / the SysAdmin to make DLM available for certain users, not for the users themselves to select / unselect it!
	
	