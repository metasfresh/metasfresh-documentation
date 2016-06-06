---
permalink: developers/developer_doc_metasfresh_overview
---

# metasfresh folders/modules overview

The main [metasfresh code repository](https://github.com/metasfresh/metasfresh) has a number of different folders which we try to outline in this section.

## de.metas.adempiere.adempiere
[`de.metas.adempiere.adempiere`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere) contains the code from the [ADempiere](http://www.adempiere.net/) project.

ADempiere is still around and its source code is available [here](https://github.com/adempiere/adempiere). Everyone familiar with ADempiere will notice the subdirectories such as `base`, `client` etc. However, note that in comparison to adempiere, we removed a number of folders which we believed to be not neccessary for metasfresh.
In addition to the code we inherited from ADempiere, we added a lot of own work, such as the [`InterfaceWrapperHelper`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/model/InterfaceWrapperHelper.java) (javadoc [here](http://metasfresh.com/javadoc/metasfresh-master/org/adempiere/model/InterfaceWrapperHelper.html)) and the [`IQueryBL`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/ad/dao/IQueryBL.java) and [`IQueryBuilder`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/ad/dao/IQueryBuilder.java) which allow us to write business logic that is indenpendent from the database and can therefore be unit tested.

If you are coming from the ADempiere world, feel free to contact us - for example in our [gitter chat](https://gitter.im/metasfresh/metasfresh) - and ask us what happened with particular parts and folders. We would be happy to answer and at the same time extend this documentation.


## de.metas.business
[`de.metas.business`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.business)
Contains business logic, a large part of which was originally in [`de.metas.adempiere.adempiere`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere)`/base`.
We perceived the need to moved it into a different directory because in order to be callable asynchronously it had to depend on the [`de.metas.async`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.async) module. However, like almose every other module, `de.metas.async` needs `InterfaceWrapperHelper` and other classes from [`de.metas.adempiere.adempiere/base`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere/base). So we moved the business logic on question from `base` to `de.metas.business` and in the long one intend to clear all the business logic out of `base` to make it a technical "core" of metasfresh without any business logic whatsoever.

## de.metas.swat
[`de.metas.swat`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.swat) was historically the first project/folder we added to ADempiere in order to implement tasks for our german customers. It still contains a lot of important code, but technically, it should be dissolved and it's code be moved to [`de.metas.adempiere.adempiere/base`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere/base), [`de.metas.adempiere.adempiere/client`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere/client), [`de.metas.business`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.business) and probably some more repositories.

## esb bundles directories

At the time of this writing, the `metasfresh` repository also contains a number of [camel](https://camel.apache.org/) OSGI bundles which are intended to be deployed in [ServiceMix](https://servicemix.apache.org/).

### Intermission: the replication interface

Currently, the camel OSGI bundles communicate with metasfresh via the replication interface of metasfresh. 
Note for ADempiere-people: the replocation interface is still very similar to what we got from ADempiere, but we made a lot of changes to the code.

For example, we added [[CanonicalXSDGenerator]](https://github.com/metasfresh/metasfresh/blob/master/de.metas.swat/de.metas.swat.base/src/main/java/de/metas/esb/util/CanonicalXSDGenerator.java) that generates a XSD file for one or many replication format definitions. This XSD file can then be used by [JAXB](https://en.wikipedia.org/wiki/Java_Architecture_for_XML_Binding) to create java code that is able to read and write XML messages understood by the replication interface.

Another example is the [`IReplRequestHandler`](https://github.com/metasfresh/metasfresh/blob/master/de.metas.adempiere.adempiere/base/src/main/java/org/adempiere/process/rpl/requesthandler/spi/IReplRequestHandler.java) whose implementors can be registered with a replication format. This way, we can allow the replication interface to answer to incoming replication messages in any way that might be required by the use case.

### Back to the bundles

The folders of our ESB bundles are:
* [`de.metas.edi.esb.camel`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.edi.esb.camel)
* [`de.metas.document.archive.esb`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.document.archive.esb)
* [`de.metas.printing.esb.camel`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.printing.esb.camel)

Note that these OSGI bundles are around for a few years and, with the exception of the "EDI" one, are not considered to be the conceptual state of the art. 
they turned out to be just overly complicated dumpo pipes and we plan to sooner or later replace the "printing" and "archive" bundles with solutions where the respective client directly makes [JAX-RS](https://jax-rs-spec.java.net/) calls to metasfresh.

### de.metas.edi.esb.camel

This bundle can import ORDERS files from a configurable camel endpoint (so far we gained experiences with file and the FTP endpoints) and send them to metas fresh.
It can also receive shipments and sales invoices from metasfresh and export them into EDI files. To achive the importing and exporting, it uses [smooks](http://www.smooks.org/).

## de.metas.endcustomer.mf15
In [`de.metas.endcustomer.mf15`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.endcustomer.mf15) we take all the metasfresh projects and their artifacts and construct the distributables.
Also see [developer_doc_getting_started] in order to better understand this process.

Note that `mf15` is our internal customer/client code for the "metasfresh" project. 
For other customers or clients, we might have dedicated `de.metas.endcustomer.ab12` repositories. However, note that we put as little into any `de.metas.endcustomer.ab12` project as we can, in order to avoid duplication.
 
Usually, what goes into such an endcustomer project is mostly dedicated `.properties` files which we use as custom [resource bundle](https://en.wikipedia.org/wiki/Java_resource_bundle)s in our jasper reports, and also some jasper reports, like dedicated shipping documents that only make sense for the respective customer or client.
