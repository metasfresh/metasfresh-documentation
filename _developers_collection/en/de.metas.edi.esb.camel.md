---
layout: default
title: de.metas.edi.esb.camel
tags: 
  - developers_overview
  - module-overview
sequence: 110
summary: the EDI esb bundle
lang: en
ref: developers_de.metas.edi.esb.camel
---

This bundle can import ORDERS files from a configurable camel endpoint (so far we gained experiences with the file and FTP endpoints) and send them to metasfresh.

It can also receive shipments and sales invoices from metasfresh and export them into EDI files. To achieve the importing and exporting, it uses [smooks](http://www.smooks.org/).
