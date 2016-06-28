---
title: IT FRESH-378
required data:
   bpartner: bpartner G000X (customer & vendor) 
   flatrate term: for packing items (Gebinde) 
layout: default
tags:
  - Invoicing
---
## Projekt Datenfriedhof


> Testcase to check if invoice candidates which are not yet invoiced
> can be set to completely invoiced by a process and certain invoice
> candidates are set to invoiced after inout resp. invoicing.

1. Check the SysConfig:

	* => C_Invoice_Candidate_Close_IsToClear & C_Invoice_Candidate_Close_PartiallyInvoiced shall both be set to Y
	
1. Make sure G000X has a running flatrate term for certain packing items

1. Create sales orders with several products for G000X, including packing items both covered AND not covered by the flatrate term

1. Check the invoice candidates for your orders:

	* => candidates for the products: not invoiced, Komplett Abgerechnet abw. empty
	
1. Check the shipment schedules:

	* => qty delivered 0, completed = N

1. Make partial inouts for the inouts, use some packing items which are covered by the flatrate term and some which are not

1. Check the invoice candidates for your orders:

	* => candidates for products and packing items not covered by the flatrate term are not yet invoiced (Komplett Abgerechnet Eff. is not checked)
	* => candidates for the packing items covered by the flatrate term have IsToClear (zur Verrechnung) checked and Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes
	
1. Check the shipment schedules for your sales order:

	* => schedules are not closed 
	
1. In invoice candidates, filter for some of the products (so you don't have the remaining candidates for packing items displayed and some products left out), press Process, Auswahl schließen, OK

1. Check the invoice candidates for your orders again (might need to refresh):

	* => candidates for the products and packing items covered by the flatrate term are now invoiced (Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes)
	* => candidates for the packing items not covered by the flatrate term are not invoiced yet
	
1. Check your shipment schedules and receipt schedules again:

	* => schedules are now closed 
	
1. Make more partial inouts, so that you have underdelivery / overdelivery as well (for products whose invoice candidates were not included in the process earlier!) 

1. Create an invoice for an invoice candidate where you made such an inout, and which was not yet invoiced / covered by the process

1. Filter for these invoice candidates and check them again (might need to refresh):

	* => candidates are now invoiced (Komplett Abgerechnet Eff. checked, but Komplett Abgerechnet abw. not set Yes!)

1. Check all the invoice candidates for your orders again (might need to refresh):

	* => all candidates are now invoiced (Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes)
	* => candidates for the packing items have IsToClear (zur Verrechnung) checked, but are invoiced as well
	
1. Go back to the invoice you created earlier, and try to reverse it

	* => reversing works fine
	
1. Check the invoice candidates of the invoice you just reversed:

	* => candidate for the product (and packing items without IsToClear) is not invoiced anymore, Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. not set (empty)
	* => candidates for the packing items with IsToClear (zur Verrechnung) checked still invoiced (Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes)
	* => tab allocation invoice: line for the original invoice and the reversal
	
1. Check the shipment schedule for this product:

	* => shipment schedule remains closed
	
1. Invoice the candidates again

	* => invoice is created correctly once more
	
1. Repeat the test for a purchase order, but do an inout with quality issue as well

	* => all invoice candidates covered by the closing process have Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes afterwards
	* => invoice candidates for packing items with IsToClear (zur Verrechnung) checked are invoiced (Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes) directly after inout
	* => receipt schedules for your purchase order are also closed after the process ran
	* => the inout lines for the products which were included in the closing process in invoice candidates are not displayed in Wareneingang POS after the process
	* => invoice candidates have Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes after you did invoicing for partial inouts / overdelivery, with QtyOrdered set = QtyDelivered
	* => invoice candidate which had InDispute because of quality issue is also set to invoiced after the process 

1. In SysConfig, set C_Invoice_Candidate_Close_IsToClear & C_Invoice_Candidate_Close_PartiallyInvoiced to N

1. Create another order, make a partial inout including packing items covered by the flatrate term, and create an invoice

	* => the candidates for the packing items with IsToClear (zur Verrechnung) don't have Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes after inout
	* => candidates for the packing items with IsToClear (zur Verrechnung) are not included in the invoice
	* => candidates for the product and the packing items without IsToClear don't have Komplett Abgerechnet Eff. checked and Komplett Abgerechnet abw. set Yes after the invoicing
	
1. Run the process for closing the invoice candidates

	* => process closes those candidates



