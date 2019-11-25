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

To use this endpoint successfully, you might need the following data:
- Data source name of the endpoint (**dataSourceName**): `SOURCE.de.metas.ordercandidate.rest.OrderCandidatesRestControllerImpl`
- Internal name of the data target (**dataDestInternalName**): `DEST.de.metas.ordercandidate`

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
 >**Note:** You can view the **External Header ID** in the [advanced edit menu](../../webui_collection/EN/ViewModes) from the [actions menu](../../webui_collection/EN/StartAction) of the respective sales order candidate's entry.

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
  "dataDestInternalName": "DEST.de.metas.ordercandidate",
  "dataSourceInternalName": "SOURCE.de.metas.ordercandidate.rest.OrderCandidatesRestControllerImpl",
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
  "price": 6.90,
  "pricingSystemCode": 2000837,
  "product": {
    "code": "Coco_2468",
    "name": "Coconuts",
    "type": "ITEM",
    "uomCode": "PCE",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "CREATE"
    }
  },
  "uomCode": "PCE",
  "productDescription": "I've got a lovely bunch of coconuts.",
  "qty": 5
}
```
