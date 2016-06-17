---
title: IT FRESH-309
required data:
   bpartner: bpartner G000x (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B 
layout: default
---

### Missing ADR ASIs in purchase order lines since february
> Testcase to check the ASI in orders and data migration

**ASI in Orders**

1. go to business partner window and pick bpartner G000x

2. on customer subtab set an adr A

3. on vendor subtab set an adr B

4. go to purchase order and create a new one for bpartner G000x

5. add a line with product P0001
    * => on the line ASI adr is set to adr B, the one set in bpartner

6. go to pricelist of your purchase order and pick product P0002

7. go to attribute price subtab and add 2 new ones for TU A, and TU B

8. for TU A set adr to C and make the productprice attribute standard

9. for TU B set adr to D 

8. create a new purchase order and add product P0002 with the default TU A
    * => adr is C

9. add a new line, product P0002, TU B
    * => adr is B (only for default attribute price is taken the adr. In rest is taken the adr from bpartner)

10. go to system configurator, select de.metas.fresh.ADRAttribute
    * => search key is 1000015, the ID of the M_Attribute record concerning ADR

11. set it to -1, save

12. create a new purchase order, add product P0001
    * => adr ASI is missing, no errors in console

13. add a new line with P0002, TU A
    * => adr is set like in pricelist, adr C

14. add a new line with P0002, TU B
    * => adr is missing

15. repeat the same testcase for Sales order (this step is not necessary since sales orders were not changed)
    * => works the same, and instead of adr B, you will have no adr (the adr is not taken from bpartner)

**Data migration**

1. sql to check if the purchase orders' ASI are migrated correctly. Shall return no values: 
 ```sh
SELECT DISTINCT x.m_attributesetinstance_id, x.m_attribute_id, x.ad_client_id, x.ad_org_id, 'Y' AS IsActive, now() AS Created, 99 AS CreatedBy, now() AS Updated, 99 AS UpdatedBy,
				x.m_attributevalue_id, x.value, 0 AS valuenumber, null:: timestamp without time zone AS valuedate  
FROM 
(
	SELECT asi.M_AttributeSetInstance_ID, a.M_Attribute_ID, asi.AD_Client_ID, asi.AD_Org_ID, aval.M_AttributeValue_ID, aval.Value
    FROM C_OrderLine ol
	JOIN C_Order o on ol.C_Order_ID = o.c_order_ID
    JOIN C_BPartner bp on o.C_BPartner_ID = bp.C_BPartner_ID
    JOIN M_Product p on ol.M_Product_ID = p.M_Product_ID
    JOIN M_Product_Category pc on p.M_Product_Category_ID = pc.M_Product_Category_ID
    JOIN M_AttributeSet aset ON (p.M_AttributeSet_ID= aset.M_AttributeSet_ID OR pc.M_AttributeSet_ID= aset.M_AttributeSet_ID)
    JOIN M_AttributeUse au ON au.M_AttributeSet_ID= aset.M_AttributeSet_ID
    JOIN M_Attribute a ON a.M_Attribute_ID = au.M_Attribute_ID
    JOIN M_AttributeValue aval ON a.M_Attribute_ID = aval.M_Attribute_ID AND bp.Fresh_AdRVendorRegion = aval.Value
    JOIN M_AttributeSetInstance asi on ol.M_AttributeSetInstance_ID = asi.M_AttributeSetInstance_ID
    WHERE a.M_Attribute_ID = (SELECT Value FROM AD_SysConfig where Name = 'de.metas.fresh.ADRAttribute'):: numeric
			AND o.IsSoTrx = 'N' 
			AND bp.isADRVendor = 'Y' 
) x
WHERE (NOT EXISTS (SELECT 1 FROM M_AttributeInstance ai WHERE ai.M_Attribute_ID = x.M_Attribute_ID AND ai.M_AttributeSetInstance_ID = x.M_AttributeSetInstance_ID))
```
2. sql to check if the purchase inouts' ASI are migrated correctly. Shall return no values: 
```sh
SELECT y.IOL_ASI_ID, y.m_attribute_id, y.ad_client_id, y.ad_org_id, y.isactive, y.created, y.createdby, y.updated, y.updatedby, y.m_attributevalue_id, y.value, y.valuenumber, y.valuedate 
 FROM
(
	SELECT DISTINCT iol.M_AttributeSetInstance_ID AS IOL_ASI_ID, x.C_Orderline_ID, x.m_attributesetinstance_id, x.m_attribute_id, iol.ad_client_id, iol.ad_org_id, 'Y' AS IsActive,
					now() AS Created, 99 AS CreatedBy, now() AS Updated, 99 AS UpdatedBy, x.m_attributevalue_id, x.value, 0 AS valuenumber, null:: timestamp without time zone AS valuedate
	FROM  M_InOutLine iol
    JOIN
    ( 
    SELECT ol.C_Orderline_ID, asi.M_AttributeSetInstance_ID, a.M_Attribute_ID, asi.AD_Client_ID, asi.AD_Org_ID, aval.M_AttributeValue_ID, aval.Value
    FROM C_OrderLine ol
	JOIN C_Order o on ol.C_Order_ID = o.c_order_ID
    JOIN C_BPartner bp on o.C_BPartner_ID = bp.C_BPartner_ID
    JOIN M_Product p on ol.M_Product_ID = p.M_Product_ID
    JOIN M_Product_Category pc on p.M_Product_Category_ID = pc.M_Product_Category_ID
    JOIN M_AttributeSet aset ON (p.M_AttributeSet_ID= aset.M_AttributeSet_ID OR pc.M_AttributeSet_ID= aset.M_AttributeSet_ID)
    JOIN M_AttributeUse au ON au.M_AttributeSet_ID= aset.M_AttributeSet_ID
    JOIN M_Attribute a ON a.M_Attribute_ID = au.M_Attribute_ID
    JOIN M_AttributeValue aval ON a.M_Attribute_ID = aval.M_Attribute_ID AND bp.Fresh_AdRVendorRegion = aval.Value
    JOIN M_AttributeSetInstance asi on ol.M_AttributeSetInstance_ID = asi.M_AttributeSetInstance_ID
    WHERE a.M_Attribute_ID = (SELECT Value FROM AD_SysConfig where Name = 'de.metas.fresh.ADRAttribute'):: numeric
			AND o.IsSoTrx = 'N' 
			AND bp.isADRVendor = 'Y' 
	) x
ON iol.C_Orderline_ID = x.C_Orderline_ID
 WHERE (NOT EXISTS (SELECT 1 FROM M_AttributeInstance ai WHERE ai.M_Attribute_ID = x.M_Attribute_ID AND ai.M_AttributeSetInstance_ID = x.M_AttributeSetInstance_ID))
)y
WHERE (NOT EXISTS (SELECT 1 FROM M_AttributeInstance ai WHERE ai.M_Attribute_ID = y.M_Attribute_ID AND ai.M_AttributeSetInstance_ID = y.IOL_ASI_ID))
```
3. sql to check if the purchase invoices' ASI are migrated correctly. Shall return no values: 
```sh
SELECT y.IL_ASI_ID, y.m_attribute_id, y.ad_client_id, y.ad_org_id, y.isactive, y.created, y.createdby, y.updated, y.updatedby, y.m_attributevalue_id, y.value, y.valuenumber, y.valuedate 
FROM
(
    SELECT DISTINCT il.M_AttributeSetInstance_ID AS IL_ASI_ID, x.C_Orderline_ID, x.m_attributesetinstance_id, x.m_attribute_id, il.ad_client_id, il.ad_org_id, 'Y' AS IsActive,
			now() AS Created, 99 AS CreatedBy, now() AS Updated, 99 AS UpdatedBy, x.m_attributevalue_id, x.value, 0 AS valuenumber, null:: timestamp without time zone AS valuedate
    FROM C_InvoiceLine il
    JOIN
    ( 
		SELECT ol.C_Orderline_ID, asi.M_AttributeSetInstance_ID, a.M_Attribute_ID, asi.AD_Client_ID, asi.AD_Org_ID, aval.M_AttributeValue_ID, aval.Value
		FROM C_OrderLine ol
		JOIN C_Order o on ol.C_Order_ID = o.c_order_ID
		JOIN C_BPartner bp on o.C_BPartner_ID = bp.C_BPartner_ID
		JOIN M_Product p on ol.M_Product_ID = p.M_Product_ID
		JOIN M_Product_Category pc on p.M_Product_Category_ID = pc.M_Product_Category_ID
		JOIN M_AttributeSet aset ON (p.M_AttributeSet_ID= aset.M_AttributeSet_ID OR pc.M_AttributeSet_ID= aset.M_AttributeSet_ID)
		JOIN M_AttributeUse au ON au.M_AttributeSet_ID= aset.M_AttributeSet_ID
		JOIN M_Attribute a ON a.M_Attribute_ID = au.M_Attribute_ID
		JOIN M_AttributeValue aval ON a.M_Attribute_ID = aval.M_Attribute_ID AND bp.Fresh_AdRVendorRegion = aval.Value
		JOIN M_AttributeSetInstance asi on ol.M_AttributeSetInstance_ID = asi.M_AttributeSetInstance_ID
		WHERE a.M_Attribute_ID = (SELECT Value FROM AD_SysConfig where Name = 'de.metas.fresh.ADRAttribute'):: numeric
			AND o.IsSoTrx = 'N' 
			AND bp.isADRVendor = 'Y' 
    ) x
    ON il.C_Orderline_ID = x.C_Orderline_ID
    WHERE (NOT EXISTS (SELECT 1 FROM M_AttributeInstance ai WHERE ai.M_Attribute_ID = x.M_Attribute_ID AND ai.M_AttributeSetInstance_ID = x.M_AttributeSetInstance_ID))
)y
WHERE (NOT EXISTS (SELECT 1 FROM M_AttributeInstance ai WHERE ai.M_Attribute_ID = y.M_Attribute_ID AND ai.M_AttributeSetInstance_ID = y.IL_ASI_ID))
```