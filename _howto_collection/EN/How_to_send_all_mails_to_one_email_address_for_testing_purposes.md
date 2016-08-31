---
title: How to send all email to one eMail address for testing purposes

layout: default
<!---- tags:
  - Systemkonfiguration
  - E-Mail ----!>
lang: en
---

1. Login using the role "Systemadministrator" 
1. Open the window "System configuratator"
1. Search for the following name "org.adempiere.user.api.IUserBL.DebugMailTo" 
1. In the specific field **Search string** type in the Email adress where all mails should go
1. Restart the server and your client
