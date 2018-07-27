---
title: Setup a PDF Printer
layout: default
tags:
  - System
lang: en
ref: printpdfsetup

---


## Server
### enable printing 

1. set sysconfig to Y
1. restart app server

eventually add to docoutbound config to have printing queue records


### enable hostkey of user

1. open user window
2. set checkbox isloginhostkey

By enabling this the system will not use the session ID but the login name of the user as Hostkey which is used to do the matching between the user and the printer settings.

### create pdf printer

1. open window printer
1. create new pdf printer
1. output type = PDF

### create printer allocation

1. open java client
1. login with the user where you want to use the PDF printer
1. open window "printing allocation"
1. create new record printer allocation
1. go to subtab tray and add one record that links the logical tray with the printer tray

### configure logical printer

you can go with the existing logical printer

### test print

1. open window printing queue 
1. select a record which is not processed yet
1. run action "print all"
