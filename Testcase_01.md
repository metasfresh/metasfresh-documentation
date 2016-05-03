# Testcase 1 (taken from https://docs.google.com/spreadsheets/d/1kzJpnT0MoAl9XlpSevm1AnAt2i0IDU3D3rBiswtcoYA/edit#gid=0, testcase 11189)
### Procurement: purchase candidates have editable price
> Testcase to check if the price taken from flatrate term / pricelist can be edited in Bestelldisposition after the ProductSupply from WebUI and is correctly taken from there in purchase order, invoice etc.

1. Open Bestelldispo, select a purchase candidate
    * Preis: taken from Flatrate_DataEntry; if none was set there: Preis is taken from pricelist
    * Preis abweichend: can be added manually 
2.  Set a price in Preis abweichend, save, then do Aktion: Bestellen, OK
    * Bestellung is created
    * Preis in orderline: as set in Preis abweichend
3. Complete the Bestellung, make an inout in Wareneingang POS
    * HU Editor, Wareneingang POS: VPI costprice = as set in Bestelldispo, Preis abweichend
4. Create the invoice for your Bestellung
    * price = as set in Bestelldispo, Preis abweichend
