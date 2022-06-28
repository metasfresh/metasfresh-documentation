---
layout: default
title: de.metas.adempiere.adempiere
tags:
  - developers_overview
  - module-overview
sequence: 20
lang: en
ref: developers_de.metas.adempiere.adempiere
---

[`de.metas.adempiere.adempiere`](https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.adempiere.adempiere) contains code that originates from the [ADempiere](http://www.adempiere.net/) project.

ADempiere is still around and kicking, and its source code is available [here](https://github.com/adempiere/adempiere).

Everyone familiar with ADempiere will notice the subdirectories such as `base`, `client` etc. However, note that in comparison to adempiere, we removed a number of folders which appeared to be not neccessary for metasfresh.

In addition to the code we inherited from ADempiere, we added a lot of own work, such as
* the [`InterfaceWrapperHelper`](https://github.com/metasfresh/metasfresh/blob/master/backend/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/model/InterfaceWrapperHelper.java) (javadoc [here](https://metasfresh.com/javadoc/metasfresh-master/org/adempiere/model/InterfaceWrapperHelper.html)),
* the [`IQueryBL`](https://github.com/metasfresh/metasfresh/blob/master/backend/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/ad/dao/IQueryBL.java) and [`IQueryBuilder`](https://github.com/metasfresh/metasfresh/blob/master/backend/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/ad/dao/IQueryBuilder.java) which allow us to write business logic that is indenpendent from the database and can therefore be unit tested,
* annotatation for both [callouts](https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/ad/callout/annotations)
(javadoc [here](https://metasfresh.com/javadoc/metasfresh-master/org/adempiere/ad/callout/annotations/package-summary.html))
and [model interceptors](https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/ad/modelvalidator/annotations)
(a.k.a. model validators, javadoc [here](https://metasfresh.com/javadoc/metasfresh-master/org/adempiere/ad/modelvalidator/annotations/package-summary.html)).

If you are coming from the ADempiere world, feel free to contact us - for example in our [gitter chat](https://gitter.im/metasfresh/metasfresh) - and ask us what happened with particular parts and folders. We would be happy to answer and at the same time extend this documentation.
