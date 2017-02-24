---
title: WebUI Basic Test
layout: default
tags:
  - WebUI
---


1. Logon with User SuperUser and Pw System
1. Select Role Admin
1. Menu => New Sales Order 
1. Partner: "Testkunde"
1. Add New
1. Product "Convenience Salat"
1. click Done
1. Complete Document
1. Hamburger Menu => Print
 * Expectation: Sales Order Confirmation is opened
 * Background: Verifies if the Jasper Server works fine
1. Hamburger Menu => Lieferdisposition
1. highlight line 
1. Hamburger Menu => Generate Inout
 * Expectation: Notification is displayed after 1-2 secs
 * Background: Verifies if Websockets, ActiveMQ and App Server are working fine
