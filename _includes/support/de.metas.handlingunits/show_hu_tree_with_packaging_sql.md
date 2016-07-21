{% highlight sql %}
/*
Lists the LU and TUs of a HU tree, together with their packaging products and the packaged consumer products.
Note that only those items are listed that hava a packaging product. Taht means that the leaves ("virtual HUs") of the tree are not shown.
*/
select 
	v.M_HU_ID, v.Value, v.HUStatus,
	hui.M_HU_Item_ID,
	hupi.ItemType,
	pm_p.Value, pm_p.Name,
	hus.M_HU_Storage_ID, hus.Qty, hus.C_UOM_ID, hus_p.Value, hus_p.Name
from "de.metas.handlingunits".m_hu_tree(17996009) v
	JOIN M_HU_Item hui ON hui.M_HU_ID=v.M_HU_ID
		JOIN M_HU_PI_Item hupi ON hupi.M_HU_PI_Item_ID=hui.M_HU_PI_Item_ID AND hupi.ItemType IN ('PM') /* we are interested in the used packing material such as IFCO, palette etc, because that gives us a good idea about how the whole thing looks like*/
			LEFT JOIN M_HU_PackingMaterial hupm ON hupm.M_HU_PackingMaterial_ID=hupi.M_HU_PackingMaterial_ID
				LEFT JOIN M_Product pm_p ON pm_p.M_Product_ID=hupm.M_Product_ID
	JOIN M_HU_Storage hus ON hus.M_HU_ID=v.M_HU_ID
		JOIN M_Product hus_p ON hus_p.M_Product_ID=hus.M_Product_ID
WHERE true
{% endhighlight %}