---
layout: default
title: de.metas.esb
tags:
  - developers_overview
  - module-overview
sequence: 100
summary: esb bundles directories
lang: en
ref: developers_de.metas.esb
---



The [metasfresh-esb-camel](https://github.com/metasfresh/metasfresh-esb-camel) repository also contains two  [camel](https://camel.apache.org/) OSGI bundles which are intended to be deployed in [ServiceMix](https://servicemix.apache.org/).

## Intermission: the replication interface

Currently, the camel OSGI bundles communicate with metasfresh via the replication interface.

Note for ADempiere-people: the replication interface's idea is still very similar to what we got from ADempiere, but we made a lot of changes and additions to it.

For example, we added [CanonicalXSDGenerator](https://github.com/metasfresh/metasfresh/blob/master/de.metas.swat/de.metas.swat.base/src/main/java/de/metas/esb/util/CanonicalXSDGenerator.java) that generates a XSD file for one or many replication format definitions. This XSD file can then be used by [JAXB](https://en.wikipedia.org/wiki/Java_Architecture_for_XML_Binding) to create java code that is able to read and write XML messages understood by the replication interface.

Another example is the [`IReplRequestHandler`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/process/rpl/requesthandler/spi/IReplRequestHandler.java) whose implementors can be registered with a replication format. This way, we can allow the replication interface to answer to incoming replication messages in any way that might be required by the respective use case.

## Back to the bundles

The folders of our ESB bundles are:
* [`de.metas.edi.esb.camel`](https://github.com/metasfresh/metasfresh-esb-camel/tree/master/de.metas.edi.esb.camel)
* [`de.metas.printing.esb.camel`](https://github.com/metasfresh/metasfresh-esb-camel/tree/master/de.metas.printing.esb.camel)

Note that these OSGI bundles are around for a few years and are not considered to be the conceptual state of the art.
Particularly `de.metas.printing.esb.camel` turned out to be just overly complicated "dump pipe" and we plan to sooner or later replace them bundles with solutions where the respective client directly makes calls to metasfresh. Maybe that will be via [JAX-RS](https://jax-rs-spec.java.net/), using [CXF](https://cxf.apache.org/) and our [de.metas.jax.rs](https://github.com/metasfresh/metasfresh/tree/master/de.metas.jax.rs) module.
