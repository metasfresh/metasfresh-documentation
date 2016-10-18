---
title: IT FRESH-724
required data:
   bpartner: bpartner G000X (customer / vendor)
   products: P0001
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - DocOutbound
---
## #443 Add is to be sent as email to doc outbound log

> Testcase to check 

1. Check if G000X has isinvoiceemailenabled set Y/N, or not set (in bpartner window, 1st tab)

1. Make sure G000X has isinvoiceemailenabled: Y

1. Create an invoice and an order for G000X, use P0001

1. Open DocOutbound (Ausgehende Belege), and search for G000X (and date of test):
	* => invoice has checkbox isinvoiceemailenabled: Y set
	* => order does not have checkbox for isinvoiceemailenabled displayed
	
1. Check the order in db:
	* the order has isinvoiceemailenabled: Y set as well
	
1. Set isinvoiceemailenabled for G000X to N

1. Create another invoice and order for G000X, and check DocOutbound again:
	* => invoice has isinvoiceemailenabled: N set
	* => order does not have checkbox for isinvoiceemailenabled displayed
	
1. Check the 2nd order in db:
	* the order has isinvoiceemailenabled: Y set
	
1. Set isinvoiceemailenabled for G000X to Y again

1. Check DocOutbound again, refresh (esp. for the 2nd invoice):
	* => isinvoiceemailenabled for invoice has updated: Y is set
	
1. Create new bpartner G000Y, make sure it has isinvoiceemailenabled NOT set (NULL)

1. Create a new user for G000Y as well:
	* set isinvoiceemailenabled: N
	* set him as sales contact person, so he will be contact for the sales orders / invoices 

1. Create an invoice and another document (e.g. inout)

1. Check DocOutbound again, for G000Y and date of test:
	* => invoice has isinvoiceemailenabled: Y set
	* => inout does not have checkbox for isinvoiceemailenabled displayed
	
1. Check the order in db:
	* the inout has isinvoiceemailenabled: Y set	
	
1. Set isinvoiceemailenabled: N for G000Y now, but Y for its new user, and check DocOutbound again for G000Y (refresh):
	* => invoice has isinvoiceemailenabled: N set
	* => inout does not have checkbox for isinvoiceemailenabled displayed (it's Y in db)

1. Make sure your own email address is the default one set in db, for testing purposes!
	
1. Gear, Auswahl als Email senden:
	* => both docs are sent as mail, also the invoice!
	
1. Filter again, but for isinvoiceemailenabled: Y, and send Emails again (uncheck the box "Nur bisher nicht gemailte"):
	* => only the inout is sent, NOT the invoice!

1. Make sure G000X has a user, with isinvoiceemailenabled: N; but G000X still has isinvoiceemailenabled: Y
	
1. In DocOutbound, set filters for G000X, and date of test (so you only get your new order / invoice for G000X)

1. Gear, Auswahl als Email senden:
	* => all docs are sent, since G000X still has isinvoiceemailenabled: Y
	
1. Set the user of G000X to isinvoiceemailenabled: NULL, and repeat Auswahl senden in DocOutbound (uncheck the box "Nur bisher nicht gemailte"):
	* => all docs are sent, since G000X still has isinvoiceemailenabled: Y

