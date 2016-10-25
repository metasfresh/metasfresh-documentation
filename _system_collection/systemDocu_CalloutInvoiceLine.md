
1. Invoice callout behaviour

The following table contains the info about imediate changes that some column setting and unsetting interfere with other column values:

	|	Modified column						|	What changes						|	How it changes on removal		|	How it changes on set				|	Implementation          |	Notes										 					|
	| --------------------------------------|:-------------------------------------:|:---------------------------------:|:-------------------------------------:|:-------------------------:|:-----------------------------------------------------------------:|
	|C_OrderLine							|IsPackagingMaterial					|False								|Value from orderLine					| de.metas.invoice 			|																	|
	|										|M_AttributeSetInstance_ID				| -1								|Value from orderLine					|de.metas.invoice			|																	|
	|										|M_Product_ID							|-1									|Value from orderLine					|de.metas.invoice			|																	|
	|										|QtyEntered								|0									|Value from orderLine					|de.metas.invoice			|																	|
	|										|QtyEnteredTU							|0									|Value from orderLine					|de.metas.handlingunits		|																	|
	|										|M_HU_PI_Item_Product_ID				|0									|Value from orderLine					|de.metas.handlingunits		|																	|
	|										|Prices									|From BL							|From BL								|de.metas.invoice			|																	|																												|
	|M_Product_ID (mandatory)				|C_Order_ID								|-1									|-1										|de.metas.invoice			|																	|
	|										|C_OrderLine_ID							|-1									|-1										|de.metas.invoice			|																	|
	|										|M_HU_PI_Item_Product_ID				|-1									|-1 if it doesn't fit any more			|de.metas.handlingunits		|																	|
	|										|C_UOM_ID								|-1									|The one from the product				|de.metas.invoice			|																	|
	|										|C_Charge_ID							|nothing							|-1										|de.metas.invoice			|																	|
	|C_Charge_ID							|M_Product_ID							|nothing							|-1										|de.metas.invoice			|																	|
	|										|C_OrderLine_ID							|nothing							|-1										|de.metas.invoice			|																	|
	|										|M_AttributeSetIntnce_ID				|nothing							|-1										|de.metas.invoice			|																	|
	|Tax_ID									|TaxAmt									|From BL							|From BL								|de.metas.invoice			|We calculate the tax at document level, so this is just for info.	|
	|										|LineNetAmt								|From BL							|From BL								|de.metas.invoice			|																	|
	|										|Prices									|From BL							|From BL								|de.metas.invoice			|																	|	
	|C_UOM_ID								|PriceEntered							|From BL							|From BL								|de.metas.invoice			|																	|	
	|										|QtyInvoiced							|From BL							|From BL								|de.metas.invoice			|																	|	
	|Discount								|Prices									|From BL							|From BL								|de.metas.invoice			|If IsManual=Y then the pricing engine won't change the discount 	|
	|M_AttributeSetInstance_ID				|Prices									|From BL							|From BL								|de.metas.invoice			|																	|	
	|Price_UOM_ID							|QtyInvoicedInPriceUOM					|From BL							|From BL								|de.metas.invoice			|																	|	
	|										|LineNetAmt								|From BL							|From BL								|de.metas.invoice			|																	|	
	|PriceActual							|Prices									|From BL							|From BL								|de.metas.invoice			|																	|	
	|										|LineNetAmt								|From BL							|From BL								|de.metas.invoice			|																	|	
	|PriceEntered							|QtyInvoicedInPriceUOM					|From BL							|From BL								|de.metas.invoice			|																	|	
	|										|LineNetAmt								|From BL							|From BL								|de.metas.invoice			|																	|	
	|										|Prices									|From BL							|From BL								|de.metas.invoice			|																	|	
	|PriceList								|Prices									|From BL							|From BL								|de.metas.invoice			|																	|	
	|QtyEntered								|Prices									|From BL							|From BL								|de.metas.invoice			|																	|	
	|										|LineNetAmt								|From BL							|From BL								|de.metas.invoice			|																	|	
	|QtyEnteredTU							|Prices									|From BL							|From BL								|de.metas.handlingunits		|																	|	
	|										|LineNetAmt								|From BL							|From BL								|de.metas.handlingunits		|																	|	

2. Pricing relevant properties
    * PriceActual
    * PriceEntered
    * PriceLimit
    * PriceList
    * Discount


