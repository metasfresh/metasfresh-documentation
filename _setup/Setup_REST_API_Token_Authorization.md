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

```
curl -X POST "http://app:8282/api/sales/order" -H "accept: */*" -H "Authorization: 3e39f8c36f5545de89f858e8fe928e7f" -H "Content-Type: application/json" -d "{ \"shipBPartnerCode\": \"1000000\", \"datePromised\": \"2018-08-16T00:00:00.000Z\",\"docTypeName\": \"Angebot\",  \"lines\": [ { \"productCode\": \"1000003\", \"qty\": 4, \"price\": 2 },{ \"productCode\": \"1000003\", \"qty\": 4 } ]}"
```

