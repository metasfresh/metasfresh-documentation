---
layout: default
title: de.metas.endcustomer.mf15
tags: module-overview
sequence: 1000
summary: where the actual distributable is build
lang: en
ref: developers_de.metas.endcustomer.mf15
---

In [`de.metas.endcustomer.mf15`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.endcustomer.mf15) we take all the metasfresh projects and their artifacts and construct the distributables.
Also see [developer_doc_getting_started] in order to better understand this process.

Note that `mf15` is our internal "customer code" for the "metasfresh" project. 
For other customers or clients, we might have dedicated `de.metas.endcustomer.ab12` repositories. 

However, note that we put as little into any `de.metas.endcustomer.ab12` project as we can, in order to avoid duplication and enable external contribution.
 
Usually, what goes into such an endcustomer project is mostly dedicated `.properties` files which we use as custom [resource bundle](https://en.wikipedia.org/wiki/Java_resource_bundle)s in our jasper reports, and also some jasper reports, like dedicated shipping documents that only make sense for the respective customer or client.
