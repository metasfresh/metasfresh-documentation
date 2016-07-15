---
layout: default
title: Data lifecylce management concept
lang: en
issue: https://github.com/metasfresh/metasfresh-documentation/issues/35
tags: concept
---

## Some notes and sloppy definitions

* Currenty this concept is still a work in progress.
* Throughout the text, "data lifecycle management" might be abbreviated with "DLM".
* we will distinguish between **"production"** or **"operational"** data on one hand and **"archived"** or **"background"** data on the other.<br>
The former is the data what needs to be availabe with a high client performance, the latter just needs to be available on demand.<br>
As of writing this, it's not yet clear what the best terms are.
* we talk about "migrating" data when records are moved from "production"/"operational" to "archived"/"background" or vice versa.
* we distinguish between "master data" and "transaction data".<br>
In short, transaction data is the data which we might want to migrate and turn into background data and master data is the data which were are not interested in migrating.<br>
It's fleshed out a bit in the [#Partitioner] section.

## Goals

We to achieve the following things. 
They are prioritised in descending order. 
Also, note that we are open towards ending up with different solutions for different goals:

* improve performance when working on the production data. We'll need to become much more concrete, but initially, what we have in mind is improving performance of the "usual suspects":
  * material receipt (selecting, changing HU combinations, printing)
  * order (creation, printing, print preview, purchase order from order)
  * inout (lieferdispo search shipment creation, printing)
  * invoice (rechnungsdispo search, filter, create invoices process, print preview, printing)
  * financials (process open items, saldobilanz)
* reduce the size of the (production) data dump.<br>
What we want to gain at least is the ability to easiely get a copy of a customer's production data.<br>
What would be even better is the ability to get an even smaller number of records, such as an order that caused certain problems and needs to be analyzed.
* deal with the problem of ever-growing datasets, given that more disk space is cheap, but "attaching" it should be as easy as possible.

## Different approaches on the database level

On the database level, we discussed different basic approaches, and did not yet conclude on which one we think is the best:

* multiple databases: different DBs for production data and background data.<br>
Migrating from "production" to "background" means to send data to a "background" database and delete them from the "production" database.<br>
We actually already discarded this approach, see below. I'm just writing it up so that we can easier understand our past selves in the future.
* table partitioning: one database with logical tables and underlying pyhsical tables.<br>
These physical tables are partitioned by a "production data"/"background data" property and can potentially be on different table spaces.<br>
Migrating from "production" to "background" means to delete a record in the "production" table and insert it into the "background" table. But note that both tables belong to the same logical table.
* single table: partial indices and additional tweaks to restrict the data which the DB has to search within the still large and unpartitioned tables.<br>
Migrating from "production" to "background" means to update some column of the respective records.

### Multiple databases

The only advantage of multiple databases which we see is that it's easier to make a dump of only the current production data.
Apart from that, the biggest disadvanteges we see are

* we need to replicate also master data to preserve FK constraints of the background data. This adds a layer of pentential complicatios
* we need to invest more effort in the applciation layer (DB connections to different DBs)
* we think we can achieve our goals in a more lightweight way, with one of the other two approaches.

### Single database solutions

These approaches have the advantages of:

* all the data still being in one (logical) table, and therefore accessable at once and over the same DB connection.
* no need to set up and manage another DB or even DBMS

#### The `DLM_ArchiveLevel` column to flag records

How do we logically mark records as archived/background, so that the system knows to exclude them from operational selects?

* IsArchived flag vs multiple archive levels vs "domain-ID"?
  - domain-ID won't work well, because in the domain-concept we wanted to be able to combine different domains into sets and have the actual records reference the set ID. So different sets that still contain the "Archived" domain would have different IDs,<br>
so it would be harder to figure out which is which  
  - i think a simple integer column like **`DLM_ArchiveLevel`** wold be nice. Then we could even have multiple levels. `NULL` or 0 would mean "not archived".<br>
  - note that we will go with the column name `DLM_ArchiveLevel` in the rest of this text. Of course that name might still change...
The bigger the number, the "further" the respective record is away from "production". Or, depending on the solition we will end up with, different numbers might denote different archive-blocks, like archived data from different years.
* yet to be decided: shall `DLM_ArchiveLevel` be a regular AD_Column which is then added to every AD_Table in question? As of now, I don't think so. Nevertheless, the information might be well-placed in `POInfo`

#### Single table

The idea here is to make sure that in the normal operation, the *where-clause* of every SQL statement will be augmented with something like `..AND COALESCE(DLM_ArchiveLevel,0)=0`.<br>
That way the sytem normally never "sees" any background data above the actual database level.

Archived transaction data like `C_Order` records could still reference unarchived master data like `AD_Client` with FK constraints in place and without the need to also archive (and thus duplicate) the master data records.

One suggestion of how to implement the `DLM_ArchiveLevel` on a deep level is to rename tables such as `C_Invoice' to something like `C_Invoice_Tbl` and then create a view such as

```
CREATE VIEW C_Invoice AS SELECT * FROM C_Invoice_Tbl WHERE COALESCE(DLM_ArchiveLevel,0)=0;
```

That way we would automatically have that whereclause in every SQL of our reports, functions, DAO-services etc.

Once this is in place we might be able to achive performance gains by adding a (partial) index on the `DLM_ArchiveLevel` column. 

We could also prevent all other indices from growing further by adding a `...WHERE COALESCE(DLM_ArchiveLevel,0)=0` to them.

#### Table partitioning

This approach builds on top of the "single" table approach.

In addition from what we might gain with the "Single table" arpproach, table partioning offers the additional advantage that the physical table accessed by the DB is simply small.<br>
That means we do not have the DB to deal with a large table and find way of helping it not to be burdened by it's "background" data part. Instead there simply isn't a lot of data in the foreground data table with which the DB can be burdened.<br>
The archived data could be on a slow big disk and be only accessed on rare occasions. Howerver logically, if a query without `COALESCE(DLM_ArchiveLevel,0)=0` is made, then all the data would be retrived.

Further reading to understand the underpinnings of multiple table spaces:

 * postgres table partitioning: [https://www.postgresql.org/docs/current/static/ddl-partitioning.html](https://www.postgresql.org/docs/current/static/ddl-partitioning.html)
 * SQL to move a record from one table to the other
  - stackoverflow on how to delete and insert a single record at the same time: [http://stackoverflow.com/questions/2974057/move-data-from-one-table-to-another-postgresql-edition](http://stackoverflow.com/questions/2974057/move-data-from-one-table-to-another-postgresql-edition)
 * We need a way to only dump the "current" data without the archived data
  - pg_dump has a paremeter "--exclude-table-data" which takes a file with tables to exclude; we could have a tool (select on pg_catalog) to create that file.
 * postgres table partitioning extensions: [pg_partman](https://github.com/keithf4/pg_partman) 
   - only handles inserts, not updates! but maybe the setup, trigger-mgmt etc can be used

## PostgreSQL-Version

We currently have PostgreSQL versions 9.1, 9.3 and 9.5 out there.<br>

It *might* turn out that when we play with the single table approach on postgres-9.1, we gain a ton of performance. But we would not have gained it with 9.3 or 9.5.

However, I'm willing to bet that newer versions will not get worse.
   
## Rough architectural outline

General implementation note:
 * any API we provide to load and store migrating and partitioning config and actually any API needs to be database agnostic.

I think there are three main parts to look at

### Partitioner

By **partitioner** i mean a component that runs in background and creates partitions.

 * By partition I mean a set of records that can generally belong to different tables and that are all directly or indirectly linked with each other.<br>
 * In other words, we can migrate the records of one partition together, without breaking foreign key constraints.
 * one record may belong to multiple partitions. Examples/Thoughts
   - `AD_Client` is referenced by almost every other record. Also the table is small, and it is "masterdata" that can change   over time.<br>
Since we realize DLM via table spaces and the "archive"-tables can reference `AD_Client`, there is no point to have AD_client records as parts of the partition.
   - Let's assume for sake of argument that e.g. `C_AllocationHdr` is not referencing anything (besides AD_Client etc), but is directly and indirectly refrenced. Then, for the sake of preserving references, we would not have to migrate it into the archive.<br>but we still want to do it in order to avoid the "operational" C_AllocationHdr table from getting too big, and because it's an ummutable document that is after some time not very likely to be required in the day to day operative business.
   - `C_BPartner` might or might not be a case for DLM depending on whether there are many partners and on how many of them become "ex-partners" over time.
 * The partitioner stores the partitions in the database. The information can be used not only to migrate data into the archive, but als to extract test data.
 * There could be two tables: one "partion" table and one "partition-item". Or we could check if we can reuse document-ref..to avoid ending up with something that is basically a duplication of document-ref.
 * The partitioner has an API that is agnostic of the tables in which the partitions are stored.
 * Probably, when walking the record-reference graph, the partitioner shall walk "forward" (e.g. from C_OrderLine.C_Order_ID to C_Order) because walking backward is too big of a performance penalty
 * We need to be able to tell the partitioner that e.g. `AD_Client` is not to be migrated. If we do table partition, then the FK constraints need to be managed accordingly in the underlying database, (i.e. FK from the respective "archive" tables to the `AD_Client` table).

#### Partitioner and single table approach

It's important to note that we *probably* need the partitioner, even if we "just" go with the single table approach.<br>
This is because to the application, background data won't be "there", even with the single table approach (remember the where-clause-view).<br>
Therefore, if we set `DLM_ArchiveLevel=1` for a given `C_Order` record then we need to do the same for the `C_Invoice` records which referenece that order via `C_Invoice.C_Order_ID`. 
If we don't, we end up with a "dangling" reference and there weill be errors in the application. Other that in the "table partitioning" approach, we don't have FK constraints to prevent such a situation.

#### Optimistic partitioner

However, *if* we learn that the single table approach in general can give us a preformance boost already, we might be able to get away with a less rigorous or say "optimistic" partitioner.
This partitioner would not add to a partition *everything* that is required to retain referential integrety, but just what we think usually goes together application-wise.

In that scenario, if an invoice is still within production, but its order can't be loaded because it is already in background, and *if* the application needs to load that order, then we do as follows:

 * move the order back into production
 * log the event 
 * and retry loading the order

We can then provide ourselves with statistics about which records had to be handeled this way, and how often it occured and how much time it cost. We can use these statistics to tune that partitioner.

On the other hand, we can't handle reports in the same way, because they are "just" SQL, so we can't trigger this sort of exception handling, and we even might not become aware those problems.

#### Reports and single table approach

As written above, with the single table approach, no FK constraints prevent us creating "dangling" references within our production data.
As long as our reports are essentially SQL-based, I think we must conclude that we can't guarantee con a constant basis that 

 * if we run any report with any `DLM_ArchiveLevel=0` reocrd
 * all the records which the SQL might reference
 * do always also have `DLM_ArchiveLevel=0`

We can't guarantee it, so might sometimes work out and sometimes not.
I see these options:

 * implement a non-optimistic partioner and make it work great
 * implement whatever partitioner and *do not* distinguish between production and background data when it comes to reports (i.e. reports queries will not have the `DLM_ArchiveLevel=0` restriction).
 * implement referential integrety using triggers (-> next section)

#### Integrity and single table approach

We should be able to add triggers which inforce FK-like integrity among records, within the single table approach.
Those triggers would only fire during migration, to there would probably be no performance degradation otherwise.

Example: asuming that there is an FK-Contraint for `C_Invoice.C_Order_ID` referencing `C_Order.C_Order_ID`. Now we could att a trigger

This would be the trigger. The name follows our convention for FK constraints, with a prepended "dlm_":

{% highlight SQL %}
CREATE CONSTRAINT TRIGGER dlm_corder_cinvoice 
AFTER UPDATE OF DLM_ArchiveLevel ON C_Order
DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW
WHEN DLM_ArchiveLevel > 0 /* when we migrate out of production */
EXECUTE PROCEDURE function_name;
{% endhighlight %}

The trigger function could look like this:

{% highlight SQL %}
CREATE OR REPLACE FUNCTION dlm_corder_cinvoice_tgfn()
  RETURNS trigger AS
$BODY$
BEGIN

	SELECT INTO 
		C_Invoice_C_Invoice_ID, C_Invoice_DLM_ArchiveLevel
		i.C_Invoice_ID, i.DLM_ArchiveLevel 
	FROM C_Invoice i 
	WHERE i.C_Order_ID = NEW.C_Order_ID AND COLAESCE(i.DLM_ArchiveLevel,0)=0;

	IF C_Invoice_C_Invoice_ID IS NOT NULL
	THEN

		RAISE EXCEPTION 
'ERROR: migration C_Order with C_Order_ID=% to DLM_ArchiveLevel=% violates the constraint dlm_corder_cinvoice;

Detail: the C_Invoice with C_Invoice_ID=% and DLM_ArchiveLevel=% still references that order via its C_Order_ID column', 
			NEW.C_Order_ID, NEW.DLM_ArchiveLevel, C_Invoice_C_Invoice_ID, C_Invoice_DLM_ArchiveLevel
		USING ERRCODE = '235D3'; /* '23503' is defined as foreign_key_violation.. we use 235D3 with D for DLM */

	END IF;
RETURN NULL;
END; $BODY$
  LANGUAGE plpgsql VOLATILE;
{% endhighlight %}

**The above is not yet tested!**

I believe we can provide ourselves with means to automatically generate these triggeres and fucntions for existing FK constraints.

Further reading:

* [https://www.postgresql.org/docs/9.5/static/sql-createtrigger.html](https://www.postgresql.org/docs/9.5/static/sql-createtrigger.html)
* as to the question wheter triggers or rules might be best, [this article](https://www.postgresql.org/docs/current/static/rules-triggers.html) is quite clear: triggers.

### Migrator

By **migrator** i mean a component that can receive partitions and is responsible to migrate them from one "level" to the other.

  * the migrator can have different implementations. For the first increment, it might just need to be able to update tables' `DLM_ArchiveLevel` columns.
  * the API/SPI shall be such that there is a way to implement the migration in one step (e.g. delete and insert or simply update, both in one statement) and also in two steps (e.g. export a partition into JSON and import it somewhere else).
  * audit tables that usually references partitions and shows which partition is currently in which `DLM_ArchiveLevel`.

### Filter

An extension in metasfresh that by default always prepends an additional condition to the where clause. The "normal" metasfresh code shall not have to care. In normal operation, the background data just seems to be not to exist in the database.

We can achive this uing the "view" that was introduced in the "Single table" section.

### Idea: a "self-learning" combination of migrator and optimistic partitioner

Outline:

* the partitioner's configuration starts out "sparse". If we are interested in DLMing `C_Invoice`, we just add the table `C_Invoice` to the config.
* consequently, the partitioner will create individual partitions which just contain one `C_Invoice` record each.
* then if the migrator tries to migrate a C_Invoice record that is referenced by a C_Payment which is not also migrated, then our trigger function will rause an error with error-code `235D3`.
* this causes an SQL exception that is evaluted by the migrator, so the migrator can then notify the partioner about the problem (missing partitioner config item).
* the partitioner can then complete both its configuration and its already existing but incomplete partitions
* the migrator can try again.

This way, a user can configure what he/she knows or wants to add. The rest will be added automatically and might then be further customized by the user.

## Increments

**TO BE DONE**

**the following subsections are outdated!**

Notes: 
* start with single table approach
* compare performances on mf15-DB with aprox 100 records with a sp80 DB
  - only client, no server should run in the background
  - measure widow opening times, how long it takes to search for a documentNo, zoom from invoice to order etc
* add the `DLM_ArchiveLevel` column to some tables of the sp80-DB. Add the views, indices etc.<br>
Update some records to `DLM_ArchiveLevel=1`. For that we need to check out the table structures and decide if we want to start with a rudimentory partitioner and migrator, or if we can/want to update the tables manually.
* repread the sp80 performance test

### `HU_`-Tables

By far the fastest-growing table is `M_HU_Attribute`, followed by `M_HU_Attribute_Snapshot` and `M_HU_Trx_Line`. At the same time, `M_HU_Attribute` is not referenced by many other tables.
That makes it the perfect candidate for a first WI that does not need a sophisticated "partitioner" implementation.
 
TODO for this increment:
* set up an "archive" table space
* figure out the dependency relations and how a minimal partition with `M_HU_Attribute` would look like (i.e. figure out which tables actually reference `M_HU_Attribute`).
* depending on the result, create a minimal part of the "partitioner" infrastructure
* set up partition tables, indexes FK-constraints etc, keeping in mind that we need to do this automatically in further increments
* create a minimal part of the "migrator" infrastructure, so that we can move records from one table to the other; maybe a DB function that is run via SQL-async is already enough.
* provide some proof of concept around `pg_dump` that allows us to create the dump and reload it into a different DB.

### metasfresh-SQL

* Find the places where we actually generate our SQL and make sure that we only select records with `COALESCE(DLM_ArchiveLevel,0) = 0`, and ofc only if the respective table actually has a DLM_ArchiveLevel column.
* Maybe we can at the same time fix issue [#196](https://github.com/metasfresh/metasfresh/issues/196)

### partitioner

Figure out how the partitioner needs to be configured if we want to archive "Order, Inout, Invoice" "stuff" and implement it

This might include a process which analyzes `AD_Table` and `AD_Column` and writes the results into the config data, to be fine-tuned.

### migrator

Flesh out the table-to-table implementation; this certainly includes code to turn "normal tables into "DLM-enabled" tables ( create new partitions, FK constraints etc).

###take stop and see what's next

## Q&A

### How time consuming is it to add another column to a large table?

`alter table M_HU_Attribute add column DLM_ArchiveLevel integer` is fast, because it just adds the column to the table metadata, but not assignes a value to any row.

