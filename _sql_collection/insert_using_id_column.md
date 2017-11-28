---
title: Set next value of ID Column when Inserting 
layout: default
tag: 
  - Tips
  
lang: en
---

## Setting next value on ID column when Inserting

you can use `nextval('<sequence name>')` to the next ID 

### example

```
insert into c_invoice (C_Invoice_ID, ....) select nextval('c_invoice_seq'), ... from ....

```
