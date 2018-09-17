---
title: Setup Vertical Cabling
layout: default
tags:
  - Vertical
lang: en
ref: de.metas.vertical.setup

---


## Technical Setup

### Enable the cable/pipes application profile

By enabling the de.metas.vertical.cables spring profile following changes will be applied:
- cables/pipes specific quick/batch entry will be used in sales order line

The profile shall be enabled for metasfresh-webui-api service, e.g. add following to your application.properties.
In case you are using docker its here: `<yourdockerfolder>/webapi/sources/configs/application.properties`

just add this to the file:

`spring.profiles.active=de.metas.vertical.cables`

## Functional Setup

### Create attribute / label

IMPORTANT: please use the `CableLength` as value.
It is hardcoded in the sales order batch entry.

![image](assets/43263279-7c20cb86-90eb-11e8-897c-24080ba627fd.png)

#### Define the BOM
Remark:
* BOM Type shall be "Make to Order"
* on cable product we use the CableLength external attribute.

![image](assets/43263333-a86ad196-90eb-11e8-80cd-2c4c34586528.png)

#### Configure the attribute set for our BOM
![image](assets/43263378-c9a924a2-90eb-11e8-8db0-00bb7d41d21b.png)
![image](assets/43263409-e3fc4230-90eb-11e8-8e0a-7dae0304762e.png)


#### Configure the product prices
Remark:
* all components shall be in the price list
* the BOM product shall be in the price list (because of tax category) but it's prices shall be ZERO.

![image](assets/43263481-1169d3ea-90ec-11e8-80c1-fbfa5c19c293.png)


#### Pricing conditions based on CableLength attribute
HINT: check product price's Price Limit. If it's set it will be enforced no matter of what discount you are setting in pricing conditions.

![image](assets/43308846-8e64da3a-918b-11e8-9b48-7228ae91d52d.png)

### Configure how an attribute will be rendered in description
e.g. `@Label@: @Value@ @UOM@`

NOTE: if u will leave DescriptionPattern empty, will work as before, i.e. the attribute's value will be rendered.

![image](assets/43320566-8dcbd1e8-91b1-11e8-94d9-a193c0575afd.png)


which might look like this:
![image](assets/43320597-a7f8d2a0-91b1-11e8-9445-71355e2b1f73.png)
