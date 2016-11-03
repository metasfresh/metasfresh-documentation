
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
<td>Nothing</td>
<td>If the tax is WholeTax, TaxAmt will have the value of the LineNetAmt. If the tax is not included, TaxAmt will be the correct procent from LineNetAmt, as required in the Tax's rate. In case the tax is included, the TaxAmt will what it's left from LineNetAmt after subtracting the correct percent </td>
<td>de.metas.invoice</td>
<td>We calculate the tax at document level, so this is just for info. Logic only used for Purchase side</td>
</tr>

<tr>		
<td>&nbsp;</td>				
<td>LineNetAmt</td>		
<td>Nothing</td>
<td>TaxAmt (see avobe) added to the LineNetAmt</td>	
<td>de.metas.invoice</td>												
<td>Logic only used for Purchase side</td>
</tr>

<tr>
<td>C_UOM_ID</td>		
<td>PriceEntered</td>		
<td>Nothing</td>
<td>PriceEntered is converted from the product's UOM to the UOM of the invoice line</td>
<td>de.metas.invoice</td>											
<td>PriceEntered ONLY changes when it was not manually set (manualPrice)</td>
</tr>

<tr>		
<td>&nbsp;</td>			
<td>QtyInvoiced</td>
<td>Nothing</td>
<td>It is calculated based on the QtyEntered. It is converted from the product's UOM to the UOM of the invoice line</td>	
<td>de.metas.invoice</td>												
<td>&nbsp;</td>
</tr>

<tr>
<td>Discount</td>		
<td>PriceActual</td>		
<td>PriceEntered</td>
<td>PriceEntered with subtracted discount</td>
<td>de.metas.invoice</td>
<td>Logic only applies to manual siscount </td>
</tr>

<tr>
<td>M_AttributeSetInstance_ID</td>
<td>Prices</td>
<td>Prices update based on the Pricing Rules that are applied</td>
<td>Prices update based on the Pricing Rules that are applied</td>
<td>de.metas.invoice</td>|													
<td>No changes in case of manual prices</td>	
</tr>

<tr>
<td>Price_UOM_ID</td>
<td>QtyInvoicedInPriceUOM</td>
<td>QtyInvoiced</td>
<td>QtyInvoiced converted to the new Price UOM</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>	
<td>&nbsp;</td>					
<td>LineNetAmt</td>
<td>QtyInvoicedInPriceUOM multiplied by the PriceActual. In case the scale of this amount is higher than the standard precision provided by the pricelist, the LineNetAmt will receive the standard scale.</td>
<td>Same logic as for removal. See above how QtyInvoicedInPriceUOM changes. </td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>

<tr>
<td>PriceActual</td>
<td>Price Entered</td>
<td>0</td>
<td>PriceActual converted to the invoice's Price UOM</td>
<td>de.metas.invoice</td>												
<td>&nbsp;</td>	
</tr>


<tr>	
<td>&nbsp;</td>				
<td>LineNetAmt</td>
<td>QtyInvoicedInPriceUOM multiplied by the PriceActual. In case the scale of this amount is higher than the standard precision provided by the pricelist, the LineNetAmt will receive the standard scale.</td>
<td>Same logic as for removal. See above how QtyInvoicedInPriceUOM changes. </td>
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
<td>QtyInvoicedInPriceUOM multiplied by the PriceActual. In case the scale of this amount is higher than the standard precision provided by the pricelist, the LineNetAmt will receive the standard scale.</td>
<td>Same logic as for removal. See above how QtyInvoicedInPriceUOM changes. </td>
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
