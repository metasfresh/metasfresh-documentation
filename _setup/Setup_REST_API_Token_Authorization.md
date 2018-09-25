---
title: Setup Authorization Token for accessing REST API 
layout: default
tags:
  - System
lang: en
ref: system.setup.auth.token

---


## Setup Access
1. open user window
1. go to tab "authorization"
1. add new record
1. **Role:** specify which permissions the token should be able to use
1. confirm
1. token is generated and saved

Now you can use that token to access the API.

## Example

This example shows how to create a sales order using the token.

- doctype - doctype of the order (e.g. Angebot, Auftrag, etc.)
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

### Usage examples

#### Post a new sales order candidate
```bash
curl -X POST "http://localhost:8181/api/sales/order/candidates" -H "accept: */*" -H "Authorization: 64390d2e7f8341c685ef1b982a652134" -H "Content-Type: application/json" -d "{ \"org\": { \"code\": \"test-org-03\", \"name\": \"test-org-03-name\" }, \"bpartner\": { \"bpartner\": { \"code\": \"test-create-03\", \"name\": \"test-create-03-name\" }, \"location\": { \"externalId\":\"addr1\", \"countryCode\":\"DE\" }, \"contact\": { \"name\":\"teo\", \"externalId\": \"contact1\" } }, \"dateRequired\": \"2018-10-01\", \"productCode\": \"9002737\", \"qty\": 1, \"price\": 321, \"discount\": 13, \"poReference\": \"external-po-ref\", \"externalId\": \"123456\"}"
```

the JSON is:
```json
{
  "org": {
    "code": "test-org-03",
    "name": "test-org-03-name"
  },

  "bpartner": {
    "bpartner": {
      "code": "test-create-03",
      "name": "test-create-03-name"
    },
    "location": {
      "externalId":"addr1", "countryCode":"DE"
    },
    "contact": { "name":"teo", "externalId": "contact1" }
  },

  "dateRequired": "2018-10-01",
  "productCode": "9002737",
  "qty": 1,
  "price": 321,
  "discount": 13,
  "poReference": "external-po-ref",
  "externalId": "123456"
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
