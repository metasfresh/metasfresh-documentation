---
layout: default
lang: en
issue: https://github.com/metasfresh/metasfresh-documentation/issues/35
tags: concept
---

= Data lifecylce management concept =

Currenty this is not really a concept, but rather a set of notes.

The objective is to have a frramework that allows us to migrate data in a reversable way from production tables into an "archive".

We need this to achieve two things:
* improve performance when woking on the production tables
* reduce the size of the production database's data dump

Throughout the text, "data lifecycle management" might be abreviated with "DLM".

==Database ==

Generally we need to decide for the first increment: do we want one DBMS with different table spaces or multiple DBMSs?

The only advantage of **multiple DMBSs** is that it's easier to make a dump of only the current production data.

Advantages of **multiple table spaces**:
* we can use table partitioning and metasfresh can logically access *all* the data at once. 
The archived data could be on a slow big disk. 
We would just need to define a constraint that is added to every "normal" where clause and as a result the DB would only search in the production data and never bother with the archived data.
* archived data like C_Order records could still reference unarchived data like `AD_Client` or `C_BPartner` (depending on the setup) with FK constraints in place, and without the need to also archive (duplicate) the referenced records.
* no need to set up and manage another DBMS

Further reading to understand the underpinnings of multiple table spaces:

* postgres table partitioning: [https://www.postgresql.org/docs/current/static/ddl-partitioning.html](https://www.postgresql.org/docs/current/static/ddl-partitioning.html)
* SQL to move a record from one table to the other
  - stackoverflow on how to delete and insert a single record at the same time: [http://stackoverflow.com/questions/2974057/move-data-from-one-table-to-another-postgresql-edition](http://stackoverflow.com/questions/2974057/move-data-from-one-table-to-another-postgresql-edition)
* SQL to move a number of records within one trx?
* We need easy ways to only dump the "current" data without the archived data
  - pg_dump has "--exclude-table-data" we could have a tool (select on pg_catalog) to create that file.

* postgres table partitioning extensions: [pg_partman](https://github.com/keithf4/pg_partman) 
   - only handles inserts, not updates! but maybe the setup, trigger-mgmt etc can be used

== Application ==

=== New (logical) column ===

* How do we logically mark records as archived, so that metasfreseh-seects can augment their respective where clauses?
* IsArchived flag vs multiple archive levels vs "domain-ID"?
  - domain-ID won't work well, because in the domain-concept we wanted to be able to comine different domains into sets and have the actual records reference the set ID. So different sets that still contain the "Archived" domain would have different IDs,<br>
so it would be harder to figure out which is which  
  - i think a simple integer column **`DLM_ArchiveLevel`** wold be nice. Then we could even have multiple levels.


* Background process, auditing data tables

I think there are three main parts to look at
* A **partitioner** that runs in background and creates partitions.<br>
  - By partition I mean a set of records that generally belong to different tables and that are all directly or indirectly linked with each other.<br>
  - In other words, we can migrate the records of one partition together, without breaking foreign key constraints.
  - one record may belong to multiple partitions. Examples/Thoughts
    - `AD_Client` is referenced by by almost every other record. Also the table is small, and it is "masterdata" that can change over time.<br>
Since we realize DLM via table spaces and the "archive"-tables can reference `AD_Client`, there is no point to have AD_client records as parts of the partition.
    - Let's assume for sake of argument that e.g. `C_AllocationHdr` is not referencing anything (besides AD_Client etc), but is directly and indirectly refrenced. Then, for the sake of preserving references, we would not have to migrate it into the archive.<br>
but we still want to do it in order to avoid the "operational" C_AllocationHdr table from getting too big, and because it's an ummutable document that is after some time not very likely to be required in the day to day operative business.
    - `C_BPartner` might or might not be a case for DLM depending on whether there are many partners and on how many of them become "ex-partners" over time.
  - The partitioner stores the partitions in the database. The information can be used not only to migrate data into the archive, but als to extract test data.
  - There could be two tables: one "partion" table and one "partition-item". Or we could check if we can reuse document-ref..to avoid ending up with something that is basically a duplication of document-ref.
  - The partitioner has an API that is agnostic of the tables in which the partitions are stored.
  - Probably, when walking the record-reference graph, the partitioner shall walk "forward" (e.g. from C_OrderLine.C_Order_ID to C_Order) because walking backward is too big of a performance penalty
  - We need to be able to tell the partitioner that e.g. `AD_Client` is not to be migrated. In the underlying database, the FK constraints need to be managed accordingly (i.e. FK from the respective "archive" tables to the `AD_Client` table).
  
* A migrator that can receive partitions and is responsible to migrate them from one storage to the other
  - the migrator can have different implementations. For the first increment, it needs to be able to move partitions from one storage to another
  - the API/SPI shall be such that there is a way to implement the migration in one step (e.g. for postgres it probably makes sense performance-wise to delete and insert in one statement) and also in two steps (e.g. export a partition into JSON and import it somewhere else).
  - audit tables that usually references partitions and shows which partition is currently in which `DLM_ArchiveLevel`.
  
* An extension in metasfresh that by default always prepends an additional condition to the where clause. The "normal" metasfresh code shall not have to care. In normal operation, archived data is just not in the database.