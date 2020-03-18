---
layout: default
title: de.metas.util
tags: 
  - developers_overview
  - module-overview
sequence: 10
lang: en
ref: developers_de.metas.util
---

[`de.metas.util`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.util) contains classes that are not strictly related to metasfresh, but are supposed to be more general purpose. 

Probably the most frequently used class from this project/folder is [`Services`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.util/src/main/java/org/adempiere/util/Services.java) 
(javadoc [here](https://metasfresh.com/javadoc/metasfresh-master/org/adempiere/util/Services.html)) which serves a our generic service registry since long before we started to use spring. 

Other frequently used classes are

* the [`Cached`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.util/src/main/java/org/adempiere/util/proxy/Cached.java) annotation 
(javadocs [here](https://metasfresh.com/javadoc/metasfresh-master/org/adempiere/util/proxy/Cached.html)) which we use to enable caching on a number of DAO services and 
* the [`Check`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.util/src/main/java/org/adempiere/util/Check.java) class 
(javadoc [here](https://metasfresh.com/javadoc/metasfresh-master/org/adempiere/util/Check.html)) which we use to make certain assumptions much more clear ("development by contract").
