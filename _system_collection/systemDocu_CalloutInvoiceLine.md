
1. Invoice callout behaviour

The following table contains the info about imediate changes that some column setting and unsetting interfere with other column values:
<table style="height: 275px;" width="678">
<tbody>
<tr>
<td>Modified column</td>
<td>What changes</td>
<td>How it changes on removal</td>
<td>How it changes on set</td>
<td>Implementation</td>
<td>Notes</td>
</tr>

<tr>
<td>C_OrderLine</td>
<td>IsPackagingMaterial</td>
<td>False</td>
<td>Value from orderLine</td>
<td>de.metas.invoice</td>
<td>&nbsp;</td>
</tr>



<tr>		
<td>&nbsp;</td>
<td>M_AttributeSetInstance_ID</td>
<td> -1</td>			
<td>Value from orderLine. Attribute Set Instance shall remain read_only</td>	
<td>de.metas.invoice</td>													
<td>&nbsp;</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>M_Product_ID</td>		
<td>-1</td>			
<td>Value from orderLine. Afterwards, the product shall remain read-only</td>
<td>de.metas.invoice</td>															
<td>&nbsp;</td>
</tr>

<tr>		
<td>&nbsp;</td>		
<td>QtyEntered</td>			
<td>0</td>			
<td>Value from orderLine</td>
<td>de.metas.invoice</td>														
<td>&nbsp;</td>
</tr>

<tr>		
<td>&nbsp;</td>			
<td>QtyEnteredTU</td>		
<td>0</td>		
<td>Value from orderLine</td>
<td>de.metas.handlingunits</td>												
<td>&nbsp;</td>
</tr>

<tr>	
<td>&nbsp;</td>				
<td>M_HU_PI_Item_Product_ID</td>
<td>0</td>		
<td>Value from orderLine</td>
<td>de.metas.handlingunits</td>													
<td>&nbsp;</td>
</tr>

<tr>	
<td>&nbsp;</td>				
<td>Prices</td>			
<td>All prices turn 0</td>	
<td>All prices are taken from the order line</td>	
<td>de.metas.invoice</td>											
<td>&nbsp;</td>																								
<td>
</tr>

<tr>
<td>C_Order</td>
<td>C_OrderLine_ID</td>
<td>-1</td>
<td>-1</td>
<td>de.metas.invoice</td>
<td>The orderline will remain empty, but mandatory. The user must set it manually from the orderlines of the set order</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>M_Product_ID</td>
<td>-1</td>
<td>-1</td>
<td>de.metas.invoice</td>
<td>The product will remain empty, but mandatory. The user must set an orderlines of the set order and then the product will be automatically set from there. After the orderLine is set, the product shall remain read-only.</td>
</tr>

<tr>
<td>M_Product_ID (mandatory)</td>


<tr>			
<td>&nbsp;</td>			
<td>C_OrderLine_ID</td>	
<td>-1</td>	
<td>-1</td>		
<td>de.metas.invoice</td>		|													
<td>&nbsp;</td>
</tr>

<tr>		
<td>&nbsp;</td>				
<td>M_HU_PI_Item_Product_ID</td>
<td>-1</td>
<td>-1 if it doesn't fit any more</td>
<td>de.metas.handlingunits</td>													
<td>&nbsp;</td>
</tr>

<tr>		
<td>&nbsp;</td>				
<td>C_UOM_ID</td>			
<td>-1</td>			
<td>The one from the product</td>
<td>de.metas.invoice</td>	|													
<td>&nbsp;</td>
</tr>

<tr>	
<td>&nbsp;</td>					
<td>C_Charge_ID</td>
<td>nothing</td>
<td>-1</td>		
<td>de.metas.invoice</td>													
<td>&nbsp;</td>
</tr>

<tr>
<td>C_Charge_ID</td>
<td>M_Product_ID</td>	
<td>nothing</td>
<td>-1</td>	
<td>de.metas.invoice</td>		|													
<td>&nbsp;</td>
</tr>

<tr>	
<td>&nbsp;</td>				
<td>C_OrderLine_ID</td>		
<td>nothing</td>
<td>-1</td>		
<td>de.metas.invoice</td>		|													
<td>&nbsp;</td>
</tr>

<tr>	
<td>&nbsp;</td>				
<td>M_AttributeSetIntnce_ID</td>
<td>nothing</td>
<td>-1</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>
</tr>

<tr>
<td>Tax_ID</td>	
<td>TaxAmt</td>	
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>
<td>We calculate the tax at document level, so this is just for info.</td>
</tr>

<tr>		
<td>&nbsp;</td>				
<td>LineNetAmt</td>		
<td>From BL</td>
<td>From BL</td>	
<td>de.metas.invoice</td>												
<td>&nbsp;</td>
</tr>

<tr>	
<td>&nbsp;</td>					
<td>Prices</td>		
<td>From BL</td>
<td>From BL</td>	
<td>de.metas.invoice</td>													
<td>&nbsp;</td>	
</tr>

<tr>
<td>C_UOM_ID</td>		
<td>PriceEntered</td>		
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>											
<td>&nbsp;</td>
</tr>

<tr>		
<td>&nbsp;</td>			
<td>QtyInvoiced</td>
<td>From BL</td>
<td>It is calculated based on the QtyEntered. It is converted from the product's UOM to the UOM of the invoice line</td>	
<td>de.metas.invoice</td>												
<td>&nbsp;</td>
</tr>

<tr>
<td>Discount</td>		
<td>Prices</td>		
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>
<td> If IsManual=Y then the pricing engine won't change the discount </td>
</tr>

<tr>
<td>M_AttributeSetInstance_ID</td>
<td>Prices</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>|													
<td>&nbsp;</td>	
</tr>

<tr>
<td>Price_UOM_ID</td>
<td>QtyInvoicedInPriceUOM</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>					
<td>LineNetAmt</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>
<td>PriceActual</td>
<td>Prices</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>			
<td>LineNetAmt</td>
<td>From BL</td>
<td>From BL</td>	
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>
<td>PriceEntered</td>		
<td>QtyInvoicedInPriceUOM</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>				
<td>LineNetAmt</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>													
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>				
<td>Prices</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>
<td>PriceList</td>	
<td>Prices</td>	
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>
<td>QtyEntered</td>
<td>Prices</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>					
<td>LineNetAmt</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.invoice</td>													
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>					
<td>QtyInvoiced</td>
<td>From BL</td>
<td>It is calculated based on the QtyEntered. It is converted from the product's UOM to the UOM of the invoice line</td>
<td>de.metas.invoice</td>													
<td>&nbsp;</td>	
</tr>

<tr>
<td>QtyEnteredTU</td>
<td>Prices</td>
<td>From BL</td>
<td>From BL</td>
<td>de.metas.handlingunits</td>													
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>			
<td>LineNetAmt</td>		
<td>From BL</td>
<td>From BL</td>
<td>de.metas.handlingunits</td>			
<td>&nbsp;</td>	
</tr>

</tbody>
</table>
<h1 style="color: #5e9ca0;">&nbsp;</h1>

2. Pricing relevant properties
    * PriceActual
    * PriceEntered
    * PriceLimit
    * PriceList
    * Discount

Updating prices after manual modicications
* The user sets a new PriceEntered and/or a new Discount value
* The presicion used for calculating the PriceActual is taken from, the currecy of the invoice. In case the currecy has precision 0, the precission is taken from the pricelist that was set for the header invoice.
* The discount is subtracted from the PriceEntered. This is the value that gets in the PriceActual.
