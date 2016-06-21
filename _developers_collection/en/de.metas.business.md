---
layout: default
title: de.metas.business
tags: 
  - developers_overview
  - module-overview
sequence: 30
lang: en
ref: developers_de.metas.business
---

[`de.metas.business`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.business)
Contains business logic, a large part of which was originally in [`de.metas.adempiere.adempiere/base`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere/base).

We perceived the need to move it into a different directory, because in order to be callable asynchronously it had to depend on the [`de.metas.async`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.async) module. However, like almose every other module, `de.metas.async` needs `InterfaceWrapperHelper` and other classes from [`de.metas.adempiere.adempiere/base`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere/base). 
So we moved the business logic in question from `base` to `de.metas.business` and in the long run we intend to clear all the business logic out of `base` to make it a technical "core" of metasfresh without any business logic whatsoever.
