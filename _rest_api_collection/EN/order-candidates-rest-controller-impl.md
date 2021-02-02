---
title: order-candidates-rest-controller-impl (sales order candidates/disposition)
layout: default
tags:
  - Endpoints
lang: en
sequence: 10
ref: order-candidates-rest-controller-impl
---

## Overview
Via this endpoint you can import sales order candidates into metasfresh and at the same time even create new business partner and product entries. You can also use this endpoint to upload file attachments and attach them to the sales order candidates.

To use this endpoint successfully, you require the following data:
- Data source name of the endpoint (**dataSource**):<br> `int-SOURCE.de.metas.rest_api.ordercandidates.impl.OrderCandidatesRestControllerImpl`
- Internal name of the data target (**dataDest**): `int-DEST.de.metas.ordercandidate`

These are so-called "identifier strings" (ID strings) whose respective values need to be provided using one of the corresponding prefixes:
- `int-` for the ID of the data record on the internal platform (`internalId`)
- `ext-` for the ID of the data record on the external platform (`externalId`)
- `val-` for the search key of the data entry in metasfresh

If no prefix is provided, the element value is regarded as the ID of the data entry (`AD_Input_DataSource_ID` = `metasfreshId`).

| **Note:** |
| :--- |
| You will find the imported sales order candidates and file attachments under "[Sales Order Disposition](../../webui_collection/EN/Menu)" in the WebUI menu. |

## Steps

### Import sales order candidates
[Follow these instructions](General_info_REST_API) and use the request method **<span style="color: #ffffff; background-color: #49cc90">&nbsp;POST </span>/api/sales/order/candidates**. At **step 7**, paste your JSON server request you have prepared based on the request example provided for this endpoint.

### Upload file attachments
1. Click on the request method<br> **<span style="color: #ffffff; background-color: #49cc90">&nbsp;POST </span>/api/sales/order/candidates/{dataSourceName}/{externalReference}/attachments**.
1. Click !["Try it out"](assets/button_try_it_out.png) on the right below the request method. Several input fields become editable.
1. In the field **Authorization token**, paste your [authentication token](../../webui_collection/EN/Authentication_token).
1. In the field **dataSourceName**, paste the endpoint's data source name.
1. In the field **externalReference**, enter the external reference ID (**External Header ID**) of the sales order candidate's entry where the file shall be attached.
 >**Note:** You can view the **External Header ID** in the [advanced edit menu](../../webui_collection/EN/ViewModes#adv-edit) from the [actions menu](../../webui_collection/EN/StartAction#actions-menu) of the respective sales order candidate's entry.

1. In the field **file**, click ![Google Chrome: "Choose file"](assets/button_Choose_file.png) or ![Mozilla Firefox: "Browse..."](assets/button_Browse.png) to select the attachment file.
1. Click ![Execute](assets/button_execute.png) to upload the file attachment.
 >**Note:** Any error messages will be displayed in the **Responses** section below.

## Example server request

### Create sales order candidates incl. business partner and product entry
```json
{
  "bpartner": {
    "bpartner": {
      "active": true,
      "code": "API_001_testBP",
      "companyName": "API Inc.",
      "externalId": "API-bp00001",
      "group": "Standard",
      "name": "Ganesh Rupka BP",
      "phone": "1800-CALL-ME",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "CREATE"
      }
    },
    "contact": {
      "active": true,
      "description": "RESTing with the apes.",
      "email": "ganesh.rupka@nomail.com",
      "externalId": "API-con00001",
      "firstName": "Ganesh",
      "lastName": "Rupka",
      "phone": "1800-CALL-ME-NOW",
      "name": "Ganesh B. Rupka",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "CREATE"
      }
    },
    "location": {
      "active": true,
      "address1": "Street No. 1",
      "address2": "East Wing",
      "address3": "Apt. 3",
      "address4": "Room 4",
      "postal": "1234",
      "city": "New Dehli",
      "countryCode": "IN",
      "externalId": "API-loc00001",
      "name": "Ganesh Rupka's address",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "CREATE"
      }
    },
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "CREATE"
    }
  },
  "currencyCode": "INR",
  "dataSource": "int-SOURCE.de.metas.rest_api.ordercandidates.impl.OrderCandidatesRestControllerImpl",
  "dataDest": "int-DEST.de.metas.ordercandidate",
  "dateRequired": "2019-08-23",
  "externalHeaderId": "extHead-101",
  "externalLineId": "extLine-101",
  "invoiceDocType": {
    "docBaseType": "ARI"
  },
  "org": {
    "code": "001",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "FAIL"
    }
  },
  "poReference": "SEO_768-04",
  "pricingSystemCode": "Testpreise Kunden",
  "product": {
    "code": "Coco_2468",
    "name": "Coconuts",
    "type": "ITEM",
    "priceStd": 6.90,
    "uomCode": "PCE",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "CREATE"
    }
  },
  "uomCode": "PCE",
  "productDescription": "I've got a lovely bunch of coconuts.",
  "qty": 5
  "salesPartnerCode": "test_42",
  "shipper": "val-DPD - Classic",
  "paymentRule": "OnCredit",
  "orderDocType": "SalesOrder"
}
```

### Useful Tips

| Element | Note |
| :--- | :--- |
| `"pricingSystemCode":` | The [pricing system](../../webui_collection/EN/Add_price-system) provided in the JSON server request must point to an existing [sales price list](../../webui_collection/EN/Add_price-list) that contains a [price list version](../../webui_collection/EN/Add_price-list-version) whose validity period includes the date from the server request in order for the [product prices](../../webui_collection/EN/Add_price) to be created. The aforementioned price list must also be equipped with a **default tax category**.<br> In addition, make sure that the [scheduler](../../webui_collection/EN/Menu) for the sales order candidate import process (`C_OLCand process to C_OrderLines`) is set to *active*. |
| `"postal":`<br>`"city":`<br>`"countryCode":` | When importing **ZIP**, **city** and **country**, make sure that the postal code provided also exists in the system, otherwise it cannot be linked to the corresponding database table `C_Location` and only the respective fields are populated without further [georeference](../../webui_collection/EN/Update_geocoding). |
