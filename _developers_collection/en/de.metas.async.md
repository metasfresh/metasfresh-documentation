---
layout: default
title: de.metas.async
tags:
  - developers_overview
  - module-overview
sequence: 30
lang: en
ref: developers_de.metas.async
---

The purpose [`de.metas.async`](https://github.com/metasfresh/metasfresh/tree/master/de.metas.async) is to queue up and process tasks on the server side.

To outline how it works, let's look at the tables that are involved:

* `C_Queue_WorkPackage` for each single task, there is one work package record, so the workpackage table makes up the actual queue elements. Among other things, the workpage's priority is set directly in these records.
There are three "sub-tables" which all reference one workpackage each. Each workpackage can be referenced by any number of "sub-records". The tables are:
  - `C_Queue_Element` records each reference one metasfresh record to work with via `AD_table_ID` and `Record_ID` columns. Examples include invoice candidates, shipment candidates etc.
  - `C_Queue_WorkPackage_Param` records can specify parameters to be used when the workpackage is processed.
  - `C_Queue_WorkPackage_Log` records contain audit/log informations that were collected while the work pacage was processed
* `C_Queue_PackageProcessor` records specify the business logic that can be applied to a given workpackage. More specifically, the package processor table has a column named [Classname](https://github.com/metasfresh/metasfresh/blob/master/de.metas.async/src/main/java-gen/de/metas/async/model/I_C_Queue_PackageProcessor.java)
which references a java class that in turn implements the interface [IWorkpackageProcessor](https://github.com/metasfresh/metasfresh/blob/master/de.metas.async/src/main/java/de/metas/async/spi/IWorkpackageProcessor.java).
Each workpackage references one package processor that is in charge of processing it.
When processing a workpackage, the package-processor's customer business logic accesses the workpackage's elements and parameters to do the job, and write audit messages to the work package's log.
* `C_Queue_Processor` records reference one or many package processors. They basically constitue a queue.
This means metasfresh does not need to have one queue for each workpackage-processor, but can also have one queue for different kinds of workpackages.

Here is an experimental ascii-Diagram i started working on.
Thx to http://stable.ascii-flow.appspot.com/

<pre>
             +-------------------+
             | C_Queue_Processor |&lt;--+
             |-------------------|   |
             |                   |   |                                         +---------------------------+
             |                   |   |                                      +-+| C_Queue_Element           |
             +-------------------+   |n:n                                   |  |---------------------------|
                                     |                                      |  | C_Queue_WorkPackage_ID    |
                                     |                                      |  | AD_Table_ID               |
 n:1  +--------------------------+   |                                      |  | Record_ID                 |
  +--&gt;| C_Queue_PackageProcessor |&lt;--+                                      |  +---------------------------+
  |   |--------------------------|                                          |
  |   | ClassName                |                                          |
  |   |                          |                                          |  +---------------------------+
  |   +--------------------------+                                          |  | C_Queue_WorkPackage_Param |
  |                                           +---------------------+  1:n  |  |---------------------------|
  |                                           | C_Queue_WorkPackage |&lt;------+--+ C_Queue_WorkPackage_ID    |
  |   +-----------------------------+   1:n   |---------------------|       |  |                           |
  |   | C_Queue_Block               |&lt;---+----| C_Queue_Block_ID    |       |  +---------------------------+
  |   |-----------------------------|         | Prio                |       |
  +---+ C_Queue_PackageProcessor_ID |         | ReadyForProcessing  |       |
      |                             |         | Processed           |       |  +---------------------------+
      +-----------------------------+         | Error               |       |  | C_Queue_WorkPackage_Log   |
                                              | ...                 |       |  |---------------------------|
                                              +---------------------+       +--+ C_Queue_WorkPackage_ID    |
                                                                               |                           |
                                                                               +---------------------------+</pre>
