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

### Test

create a file `test.json` with your json string:

```
{ "shipBPartnerCode":"1000106","datePromised": "2018-08-16T00:00:00.000Z","docTypeName": "Angebot","lines": [{"productCode":"A001","qty":111}]}
```

run the test:

```
cat test.json | curl -X POST -d @- "http://app:8282/api/sales/order" -H "accept: */*" -H "Authorization: fa51643c4e2849ed8db64c70baf578dc" -H "Content-Type: application/json"   > response.log
```

