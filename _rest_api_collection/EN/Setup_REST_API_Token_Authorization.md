---
title: Setup Authorization Token for accessing REST API
layout: default
tags:
  - System
lang: en
ref: system.setup.auth.token
---

## Setup Access
[Follow these instructions](../../webui_collection/EN/Authentication_token) to obtain an authorization token.

## Example

This example shows how to create a sales order using the token.

- doctype - doctype of the order (e.g., Angebot, Auftrag, etc.)
- shipBPartnerCode - Partner Value
- productCode - Product Value
- qty - quantity of the product
- price - override price calculated by metasfresh with your own

## Test

### sales/order

create a file `test.json` with your json string:

```
{ "shipBPartnerCode":"1000106","datePromised": "2018-08-16T00:00:00.000Z","docTypeName": "Angebot","lines": [{"productCode":"A001","qty":111}]}
```

run the test:

```
cat test.json | curl -X POST -d @- "http://app:8282/api/sales/order" -H "accept: */*" -H "Authorization: fa51643c4e2849ed8db64c70baf578dc" -H "Content-Type: application/json"   > response.log
```

### sales/order/candidates

#### Post a new sales order candidate
```bash
curl -X POST "http://localhost:8181/api/sales/order/candidates" -H "accept: */*" -H "Authorization: 64390d2e7f8341c685ef1b982a652134" -H "Content-Type: application/json" -d "{ \"org\": { \"code\": \"test-org-03\", \"name\": \"test-org-03-name\" }, \"bpartner\": { \"bpartner\": { \"code\": \"test-create-03\", \"name\": \"test-create-03-name\" }, \"location\": { \"externalId\":\"addr1\", \"countryCode\":\"DE\" }, \"contact\": { \"name\":\"teo\", \"externalId\": \"contact1\" } }, \"dateRequired\": \"2018-10-01\", \"productCode\": \"9002737\", \"qty\": 1, \"price\": 321, \"discount\": 13, \"poReference\": \"external-po-ref\", \"externalId\": \"123456\"}"
```

the JSON is:
```json
{
  "bpartner": {
    "bpartner": {
      "code": "G0001",
      "externalId": "2156425"
    },
    "location": {
      "externalId": "2156425",
      "syncAdvise": {
        "ifExists": "DONT_UPDATE",
        "ifNotExists": "FAIL"
      }
    }
  },
  "currencyCode": "EUR",
  "dataDestInternalName": "DEST.de.metas.ordercandidate",
  "dataSourceInternalName": "SOURCE.de.metas.ordercandidate.rest.OrderCandidatesRestControllerImpl",
  "dateRequired": "2019-08-11",
  "externalHeaderId": "2156425",
  "externalLineId": "2156425",
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
  "poReference": "external-po-ref",
  "price": 2,
  "product": {
    "code": "P002737",
    "syncAdvise": {
      "ifExists": "DONT_UPDATE",
      "ifNotExists": "FAIL"
    }
  },
  "uomCode": "PCE",
  "qty": 1
}
```

#### Post an array of new sales order candidates
```bash
curl -X POST "http://localhost:8181/api/sales/order/candidates/bulk" -H "accept: */*" -H "Authorization: 64390d2e7f8341c685ef1b982a652134" -H "Content-Type: application/json" -d "{ \"requests\": [{ \"org\": { \"code\": \"test-org-03\", \"name\": \"test-org-03-name\" }, \"bpartner\": { \"bpartner\": { \"code\": \"test-create-03\", \"name\": \"test-create-03-name\" }, \"location\": { \"externalId\":\"addr1\", \"countryCode\":\"DE\" }, \"contact\": { \"name\":\"teo\", \"externalId\": \"contact1\" } }, \"dateRequired\": \"2018-10-01\", \"productCode\": \"9002737\", \"qty\": 1, \"price\": 321, \"discount\": 13, \"poReference\": \"external-po-ref\", \"externalId\": \"123456\"} ]}"
```

Basically your JSON will look like
```json
{
  "requests": [
       { order candidate JSON },
       { order candidate JSON },
        ..............................................
  ]
}
```

#### Attach a file to an existing order candidate
Attach test.pdf to an existing order candidate identified by ExternalId=123456:

```json
curl -X POST "http://localhost:8181/api/sales/order/candidates/123456/attachments" -H "accept: */*" -H "Authorization: 64390d2e7f8341c685ef1b982a652134" -H "Content-Type: multipart/form-data" -F "file=@test.pdf;type=application/pdf"
```

Source: <a href="https://github.com/metasfresh/metasfresh/issues/4549#issuecomment-420188488" title="Sales Order Candidates REST API improvements" target="blank">https://github.com/metasfresh/metasfresh/issues/4549#issuecomment-420188488</a>

#### error messages

```
"{\"status\":400,\"body\":\"Could not read JSON document: Can not construct instance of de.metas.order.rest.model.JsonSalesOrderLine, problem: Ihr Test hat einen bisher unentdeckten Fehler offengelegt.\\r\\nBitte leiten Sie diese Meldung an metas weiter:\\n\\nAssumption failure: qty > 0 but it was 0\\n at [Source: java.io.PushbackInputStream@1cf29f9e; line: 1, column: 303] (through reference chain: de.metas.order.rest.model.JsonSalesOrderCreateRequest[\\\"lines\\\"]->java.util.ArrayList[3]); nested exception is com.fasterxml.jackson.databind.JsonMappingException: Can not construct instance of de.metas.order.rest.model.JsonSalesOrderLine, problem: Ihr Test hat einen bisher unentdeckten Fehler offengelegt.\\r\\nBitte leiten Sie diese Meldung an metas weiter:\\n\\nAssumption failure: qty > 0 but it was 0\\n at [Source: java.io.PushbackInputStream@1cf29f9e; line: 1, column: 303] (through reference chain: de.metas.order.rest.model.JsonSalesOrderCreateRequest[\\\"lines\\\"]->java.util.ArrayList[3])\"}"
```

**Reason**: You tried to add an order line with qty = 0 which is not allowed

**Solution**: Put qty > 0
