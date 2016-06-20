---
title: IT FRESH-409
required data:
   bpartner: bpartners G000X, G000Y, G000Z 
layout: default
tags:
  - Masterdata
---
## Creating Partner Relation throws Exception

> Testcase to check Partner Relations are created
> correctly without exceptions.

1. Open window BPartner, search for G000X

1. Press Process, create partner relation

1. Select an address for G000X, then set G000Y as related partner and select an address for G000Y

1. Check isBillto, then OK

	* => no exception
	
1. Open window Partner Relation, search for G000X

	* => in Proxy, related partner is G000Y, with the selected address
	* => isBillto is checked
	
1. Go back to windo BPartner, G000X

1. Press Process, create partner relation

1. Select an address for G000X, then set G000Z as related partner and select an address for G000Z

1. Check sth else, e.g. Delivery Standard, OK

* => no exception
	
1. Open window Partner Relation, search for G000X

	* => in Proxy, additional related partner is G000Z, with the selected address
	* => Delivery Standard is checked
