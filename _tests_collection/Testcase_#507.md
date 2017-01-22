---
title: IT #507
required data:
   products: P0001
   BOM: product BOM for P0001  
layout: default
tags:
  - UI
---
## #507 Allow Copy with details for BOM

> Testcase to check if copying with details works for BOM.


1. Make sure you have a valid BOM for P0001:
	* P0001 as product that is produced
	* details: qty of products needed to produce P0001
	
1. Open the BOM of P0001, click copy with details:
	* => BOM of P0001 is copied: same header, same detail lines with components, co-products, qties etc.
	* => only search key is not copied
	
1. Try saving the new BOM:
	* => error msg because of duplicate
	
1. Change product in the header, name, save:
	* => new BOM is saved
	
1. Copy the original BOM, but without details:	
	* => only header is copied, detail lines are empty



**Note:** If you use copy with details and set a product from the BOM lines in header, you can save the BOM, but: if you want to use copy with details on the newly created BOM, that's not possible
since product in product in BOM line are the same; this is an old issue and will be fixed in https://github.com/metasfresh/metasfresh/issues/807.