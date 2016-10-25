---
layout: default
title: Data lifecycle management concept
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
It's fleshed out a bit in the "Partitioner" section.

## Goals

We would like to achieve the following things. 
They are prioritised in descending order. 
Also, note that we are open towards ending up with different solutions for different goals:

* improve performance when working on the production data. We'll need to become much more concrete, but initially, what we have in mind is improving performance of the "usual suspects":
  * material receipt (selecting, changing HU combinations, printing)
  * order (creation, printing, print preview, purchase order from order)
  * inout (lieferdispo search shipment creation, printing)
  * invoice (rechnungsdispo search, filter, create invoices process, print preview, printing)
  * financials (process open items, saldobilanz)
* reduce the size of the (production) data dump.<br>
What we want to gain at least is the ability to easily get a copy of a customer's production data.<br>
What would be even better is the ability to get an even smaller number of records, such as an order that caused certain problems and needs to be analyzed.
* deal with the problem of ever-growing datasets, given that more disk space is cheap, but "attaching" it should be as easy as possible.

## Different approaches on the database level

On the database level, we discussed different basic approaches:

* multiple databases: different DBs for production data and background data.<br>
Migrating from "production" to "background" means to send data to a "background" database and delete them from the "production" database.<br>
We actually already discarded this approach, see below. I'm just writing it up for future reference.
* table partitioning: one database with logical tables and underlying physical tables.<br>
These physical tables are partitioned by a "production data"/"background data" property and can live on different table spaces.<br>
Migrating from "production" to "background" means to delete a record in the "production" table and insert it into the "background" table. But note that both the "production" and "background" table belong to the same logical table.
* single table: partial indices and additional tweaks to restrict the data which the DB has to search within the still large and unpartitioned tables.<br>
Migrating from "production" to "background" means to update some column of the respective records.

We will now go deeper into each approach.

### Multiple databases

The only advantage of multiple databases which I see is that it's easier to make a dump of only the current production data.
Apart from that, the biggest disadvanteges I see are

* we need to replicate master data to preserve FK constraints of the background data. This adds a layer of potential complications.
* we need to invest more effort in the applciation layer (DB connections to different DBs).
* we think we can achieve our goals in a more lightweight way, with one of the other two single DB approaches.

### Single database solutions

These approaches have the advantages of:

* all the data still being in one (logical) table, and therefore accessable at once and over the same DB connection.
* no need to set up and manage another DB or even DBMS

#### The `DLM_ArchiveLevel` column to flag records

How do we logically mark records as archived/background, so that the system knows to exclude them from operational selects?

* IsArchived flag vs multiple archive levels vs "domain-ID"?
  - domain-ID won't work well, because in the domain-concept we wanted to be able to combine different domains into sets and have the actual records reference the set ID. So different sets that still contain the "Archived" domain would have different IDs,
so it would be harder to figure out which is which. Also, we would need a lot of records just to point to the DLM'ed records 
  - I think a simple integer column like **`DLM_ArchiveLevel`** wold be nice. Then we could even have multiple levels. 
  - `NULL` or 0 would mean "not archived"
  - 1 would be a "test" level that could be used by the partitioner, but would be equivalent to 0 for the rest of the system.
  
Note that we will go with the column name `DLM_ArchiveLevel` in the rest of this text. Of course that name might still change.

The bigger the number, the "further" the respective record is away from "production". Or, depending on the solution we will end up with, different numbers might denote different archive-blocks, like archived data from different years.

Yet to be decided: shall `DLM_ArchiveLevel` be a regular AD_Column which is then added to every AD_Table in question? As of now, I don't think so. Nevertheless, the information might be well-placed in `POInfo`

#### Single table

The idea here is to make sure that in the normal operation, the *where-clause* of every SQL statement will be augmented with something like `..AND COALESCE(DLM_ArchiveLevel,0)=0`.<br>
That way the sytem normally never "sees" any background data above the actual database level.

Note: the `COALESCE` relieves us from the need to initially update every exising record's column value to 0.
It's much faster to just add a column (without a default value) than it is to add and also set it.
But apart from that, the `COALSECE` is just a technical detail and we will ommit it further on.
Instead we'll just write `DLM_ArchiveLevel=0`.

Archived transaction data like `C_Order` records could still reference unarchived master data like `AD_Client` with FK constraints in place and without the need to also archive (and thus duplicate) the master data records.

We can implement the `DLM_ArchiveLevel` on a "deep" level by renaming tables such as `C_Invoice` to something like `C_Invoice_Tbl` and then create a view such as

```
CREATE VIEW C_Invoice AS SELECT * FROM C_Invoice_Tbl WHERE DLM_ArchiveLevel = 0;
```

That way we would automatically have that where-clause in every SQL of our reports, functions, DAO-services etc.

Once this is in place, we can hope to achive performance gains by adding a (partial) index on the `DLM_ArchiveLevel` column. 

We could also prevent all other indices from growing further by adding a `...WHERE DLM_ArchiveLevel=0` to them.

Note: we might decide to create the new views in a dedicated schema `dlm`, because we already have almost 200 views (which contain actual business logic!) in the public schema, and adding those new trivial views might introduce too much noise there.<br>
We should in this case add "dlm" to the postgres search path.

#### Using config settings to change the visible "scope"

The idea of "hardcoding" a `WHERE DLM_ArchiveLevel=0` into every select has the drawback that now it is harder for the application to access background data in case the user actually wants to access it.

One solution might be to directly access the `C_Invoice_Tbl` table instead of the `C_Invoice` view, but it might turn out to be complicated to implement this at all code location which generate SQL.

The solution which I think we should follow instead is to use postgres settings.

We would modify the above view to be:

```
CREATE VIEW C_Invoice AS SELECT * FROM C_Invoice_Tbl WHERE DLM_ArchiveLevel <= current_setting('metasfresh.DLM_ArchiveLevel')::integer;
```

In the server's `postgresql.conf` we could add something like:

```
custom_variable_classes = 'metasfresh'
metasfresh.DLM_ArchiveLevel = '0'
```

And then, in metasfresh, we could invoke

```
set_config('metasfresh.DLM_ArchiveLevel', '1', false)
```

This way we can implement metasfresh to run "globally" in a mode where also archive data is visible.

If we choose the boolean parameter (which is named `is_local`) to be `true`, then the setting will only be in effect for the current transaction. 
This way we can implement metasfresh to only see archived records in the context of one particular search.

Credits/further reading:

* [http://stackoverflow.com/questions/1307582/postgresql-can-one-define-a-session-variable-with-the-language-and-use-it-in-vi](http://stackoverflow.com/questions/1307582/postgresql-can-one-define-a-session-variable-with-the-language-and-use-it-in-vi)
* [https://www.postgresql.org/docs/current/static/runtime-config-custom.html](https://www.postgresql.org/docs/current/static/runtime-config-custom.html)
* [https://www.postgresql.org/docs/current/static/functions-admin.html](https://www.postgresql.org/docs/current/static/functions-admin.html)

##### Update: this doesn't work

We tried it and the problem here is that postgres won't use the partial index if we have `current_setting('metasfresh.DLM_ArchiveLevel')` in the view's where clause.

I assume that the reason is related to `current_setting()` being `VOLATILE`. That way, the planner doesn't know when
` DLM_Level <= current_setting('metasfresh.DLM_ArchiveLevel')` is equivalent to `0 <= 0.

It might also be the case that the function's volatility might not be the actual problem, but instead that the planner can map the view's 
```
WHERE COALESCE(DLM_Level,0) <= current_setting('metasfresh.DLM_ArchiveLevel')
``` 
with the partial indices'
```
WHERE COALESCE(DLM_Level,0) <= 0
```
See this [stackoverflow answer](http://stackoverflow.com/a/26031289/1012103) for more details.

Either way, we can't have that function in the where clause and at the same time have a partial index.

So, in order to access data from metasfresh, we need to either query the underlying `_Tbl' table directly or first migrate the data in question back to "production".

##### Update 2: no point in having a partial index

* it turned out that we basically need a full index if we want to do to *anything* with the archived data that gues beyond retrieving a record via its PK.
* also, the performance wuith a partial index wasn't better than the performance with a full index. I'm sure that the database is not forced to actually load the full index into memory if it only needs certain blocks.
* so, we don't need partial indices to start with and therefore we can as well add `current_setting('metasfresh.DLM_ArchiveLevel')` to the view's whereclause and gain more flexibility.

#### Inserts and updates

When we append `_Tbl` to the actual table name and add a view with the original name, then the question about write-access to the renamed table arises.

We can append `_Tbl` to the table name in each DML and DDL statement that we create in metasfresh.<br>
Or we can use postgres to "translate" an insert or update that aims at a view into the respective operation on the underlying table.

As of now, we can assume that we will do DLM only on postgres-9.5, so we can make use of postgresql's ability to forward and update to our views directly to the underlying table.
See e.g. [here](https://wiki.postgresql.org/wiki/What's_new_in_PostgreSQL_9.4#Updatable_view_improvements) and [here](http://paquier.xyz/postgresql-2/postgres-9-3-feature-highlight-auto-updatable-views/) for more details.

#### Table partitioning

This approach builds on top of the "single" table approach.

In addition to what we might gain with the "Single table" arpproach, table partioning offers those advantages:

* the physical table accessed by the DB is simply small.
That means we do not have the DB to deal with a large table and find way of helping it not to be burdened by it's "background" data part. Instead there simply isn't a lot of data in the foreground data table with which the DB can be burdened.<br>
The archived data could be on a slow big disk and be only accessed on rare occasions. However logically, if a query without `DLM_ArchiveLevel=0` is made, then all the data would be retrived.
* we creating a DB dump, we can instruct the `pg_dump` tool to exclude the background data tables to achieve a smaller dump which contains just the production data.

Further reading to understand the underpinnings of multiple table spaces:

 * postgres table partitioning: [https://www.postgresql.org/docs/current/static/ddl-partitioning.html](https://www.postgresql.org/docs/current/static/ddl-partitioning.html)
 * SQL to move a record from one table to the other
   - stackoverflow on how to delete and insert a single record at the same time: [http://stackoverflow.com/questions/2974057/move-data-from-one-table-to-another-postgresql-edition](http://stackoverflow.com/questions/2974057/move-data-from-one-table-to-another-postgresql-edition)
 * We need a way to only dump the "current" data without the archived data
   - pg_dump has a parameter `--exclude-table-data` which takes a file with tables to exclude; we could have a tool (select on pg_catalog) to create that file.
 * postgres table partitioning extensions: [pg_partman](https://github.com/keithf4/pg_partman) 
   - only handles inserts, not updates! but maybe the setup, trigger-mgmt etc can be used

## PostgreSQL-Version

We currently have PostgreSQL versions 9.1, 9.3 and 9.5 out there.

When rolling out DLM, we can assume that the DBMS is postgresql-9.5 or later.
   
## Rough architectural outline

General implementation note:

 * any API we provide to load and store migrating and partitioning config and actually any API needs to be database agnostic.

I think there are four main parts to look at

### Partitioner

By **partitioner** I mean a component that runs in background and creates partitions.

 * By partition I mean a set of records that can generally belong to different tables and that are all directly or indirectly linked with each other.<br>
 * In other words, we can migrate the records of one partition together, without breaking foreign key constraints.
 * one record may belong to multiple partitions. Examples/Thoughts
   - `AD_Client` is referenced by almost every other record. Also the table is small, and it is "masterdata" that can change over time.
Since we realize DLM via a single-DB approach and the archived-records can reference `AD_Client`, there is no point to have AD_Client records as parts of the partition.
   - Let's assume for sake of argument that e.g. `C_AllocationHdr` is not referencing anything (besides AD_Client etc), but is directly and indirectly refrenced. Then, for the sake of preserving references, we would not have to migrate it into the archive.<br>
But we still want to migrate it in order to avoid the operational C_AllocationHdr table from getting too big, and because it's an immutable document that is after some time not very likely to be required in the day to day operative business.
   - `C_BPartner` might or might not be a case for DLM depending on whether there are many partners and on how many of them become "ex-partners" over time.
 * The partitioner stores the partitions in the database. The information can be used not only to migrate data into the archive, but also to extract test data.
 * There could be two tables: one "partion" table and one "partition-item". Or we could check if we can reuse document-refid..to avoid ending up with something that is basically a duplication of document-refid.
 * The partitioner has an API that is agnostic of the tables in which the partitions are stored.
 * When walking the record-reference graph, the partitioner shall walk "forward" (e.g. from `C_OrderLine.C_Order_ID` to `C_Order`) because walking "backward" is too big of a performance penalty
 * We need to be able to tell the partitioner that e.g. `AD_Client` is not to be migrated. If we do table partition, then the FK constraints need to be managed accordingly in the underlying database, (i.e. FK from the respective archive tables to the `AD_Client` table).

#### Partitioner and single table approach

It's important to note that we need the partitioner, even if we "just" go with the single table approach.<br>
This is because to the application, background data won't be "there", even with the single table approach (remember the where-clause-view).<br>
Therefore, if we set `DLM_ArchiveLevel=1` for a given `C_Order` record then we need to do the same for the `C_Invoice` records which referenece that order via `C_Invoice.C_Order_ID`. 
If we don't, we end up with a "dangling" reference and there will be errors in the application. Other than in the "table partitioning" approach, we don't have FK constraints to prevent such a situation.

#### Optimistic partitioner

However, if we learn that the single table approach in general can give us a preformance boost already, we might be able to get away with a less rigorous or say "optimistic" partitioner.
This partitioner would not add to a partition *everything* that is required to retain referential integrity, but just what we think usually goes together application-wise.

In that scenario, if an invoice is still within production, but its order can't be loaded because it is already in background, and *if* the application needs to load that order, then we do as follows:

 * move the order back into production
 * log the event 
 * and retry loading the order

We could then provide ourselves with statistics about which records had to be handeled this way, and how often it occured and how much time it cost. We can use these statistics to tune that partitioner.

On the other hand, we can't handle reports in the same way, because they are "just" SQL, so we can't trigger this sort of exception handling, and we even might not become aware those problems.<br>
The next section is about how we can solve that.

Also see the section "Idea: a "self-learning" combination of migrator and optimistic partitioner" further below.

#### Reports and single table approach

As written above, with the single table approach, no FK constraints prevent us from causing "dangling" references within our production data.
As long as our reports are essentially SQL-based, we need conclude that without some sort of automatic validation we can't guarantee on a constant basis that 

 * if we run any report with any `DLM_ArchiveLevel=0` record
 * all the records which the SQL might reference
 * do always also have `DLM_ArchiveLevel=0`

We can't guarantee it, so might sometimes work out and sometimes not.
I see these options:

 * implement a non-optimistic partioner and make it work great (therefore no automatic validation needed)
 * implement whatever partitioner and *do not* distinguish between production and background data when it comes to reports (i.e. the performance of report queries will not benefit from the `DLM_ArchiveLevel=0` where-clause).
 * implement referential integrety using triggers (-> next section)

#### Integrity and single table approach

We should be able to add triggers which inforce FK-like integrity among records, within the single table approach.
Those triggers would only fire during migration, to there would probably be no performance degradation otherwise.

Example: asuming that there is an FK-Contraint for `C_Invoice.C_Order_ID` referencing `C_Order.C_Order_ID`. Now we could add a trigger.

This would be the trigger. The name follows our convention for FK constraints, with a prepended "dlm_":

{% highlight SQL %}
CREATE CONSTRAINT TRIGGER dlm_corder_cinvoice 
AFTER UPDATE OF DLM_ArchiveLevel ON C_Order
DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW
WHEN DLM_ArchiveLevel > 0 /* only fire when we migrate out of production */
EXECUTE PROCEDURE dlm_corder_cinvoice_tgfn;
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
	WHERE 
		i.C_Order_ID = NEW.C_Order_ID 
		AND COLAESCE(i.DLM_ArchiveLevel,0)=0;

	IF C_Invoice_C_Invoice_ID IS NOT NULL
	THEN

		RAISE EXCEPTION 
'ERROR: Migrating the C_Order record with C_Order_ID=% to DLM_ArchiveLevel=% violates the constraint dlm_corder_cinvoice, 
			NEW.C_Order_ID, NEW.DLM_ArchiveLevel
		USING ERRCODE = '235D3', /* '23503' is defined as foreign_key_violation.. we use 235D3 with D for DLM */
			HINT=The C_Invoice with C_Invoice_ID='|| C_Invoice_C_Invoice_ID ||' and DLM_ArchiveLevel='|| C_Invoice_DLM_ArchiveLevel ||' still references that order via its C_Order_ID column',
			DETAIL='DLM_Referencing_Table_Name=C_Invoice; DLM_Referencig_Column_Name='C_Order_ID';' /* shall be parsable by metasfresh*/
	END IF;
RETURN NULL;
END; $BODY$
  LANGUAGE plpgsql VOLATILE;
{% endhighlight %}

**The above is not yet tested and probably has syntax errors!**

I believe we can provide ourselves with means to automatically generate these triggeres and functions for existing FK constraints.

Further reading:

* [https://www.postgresql.org/docs/9.5/static/sql-createtrigger.html](https://www.postgresql.org/docs/9.5/static/sql-createtrigger.html)
* as to the question whether triggers or rules might be best, [this article](https://www.postgresql.org/docs/current/static/rules-triggers.html) is quite clear: triggers.

#### The partioner's config

* `DLM_Partion_Config`
  * contains "header" data

* `DLM_Partion_Config_Version`
  * `DLM_Partion_Config_ID`: link to parent table
  * `Processed` (see below)
  
* `DLM_PartionLine_Config`
  * one line per table that is subject to DLM
  * `DLM_Partion_Config_Version_ID`: link to parent table
  * `AD_Table_ID`: a table that shall be subject to DLM, e.g. M_Invoice
  * `Description` etc

* `DLM_PartionReference_Config`
  * `DLM_PartionLine_Config_ID`: link to parent table
  * `DLM_Referencing_Column_ID`: a column of the table DLM_Partion_Config.AD_Table_ID that references a another record, e.g. M_Invoice.C_Order_ID
  * `DLM_Referenced_Table_ID`: the table that is referenced by DLM_Referencing_Column_ID, e.g. C_Order
  * `DLM_Referencing_PartionLine_Config_ID`: FK-reference to `DLM_PartionLine_Config_ID`, if the referenced table is also part of DLM according to this config-version, then this column references the respective line.
    * Note that if the referenced table is not part of the same DLM config, then there isn't a point to this whole DLM_PartionReference_Config record.

Further notes:

* so we have different config versions.<br>
If a version is "processed" it can be *extended*, but nothing can be removed or changed anymore, unless all its partitions are deleted and all the partitioned data are migrated back into production.<br>
Also, it can be deep-copied to serve as blueprint for another version.
  * we need the possibility to extend an existing DLM_Partion_Config_Version, because if we add another table that references an already DLMed table, then this is not a problem for existing records that were already archived before the new table existed.<br>
Having to create a new version makes no sense in that scenario, it would just make things more complicated
* the partioner configuration invites the partitioner implementation(s) to "forward-follow" existing references.<br>
So, when loading and adding records to a partition, the implementation should go from `C_Invoice` via `C_Invoice.C_Order_ID` to the referenced `C_Order`, and not from an order to the referencing invoices.<br>
I think that's much more performant.
* Repeating myself: despite this is specified in terms of metasfresh tables, the API needs to be DB agnostic. That means, the config shall be representable in terms of simple POJOs and lists or maps of pojos.

#### How to store partitions

About using `document-refid`:
* pro: we can use this to add each record to many partitions
* con: we need one `C_ReferenceNo_Doc` record for "every" DLM'ed database record. This is a no-go. 
* Note: we could still use `document-refid` for special cases, e.g. if we want to group a few records and export them for a test case, but not for the actual DLM-ish partitioning. We can later add such a feature on-top, if we want to.

So, we store partitions by 
* Adding another column `DLM_Partion_ID` to every DLM'ed table. By this table, each record can be long to one partition, which is enough for DLM.<br>
Important: `DLM_Partion_ID` shall be no FK constraint. See the notes below

* Adding a table `DLM_Partion`
  * `DLM_Partion_Config_Version_ID`
  * `DLM_ArchiveLevel`: level of this record
  * `DLM_Partion_ArchiveLevel`: level of the records that belong to the partition
  * `DLM_Partion_Target_ArchiveLevel`: set by the "Coordinator" component (see below) in case the partition can be archived
  * `DLM_Revalidate_After`: timestamp set by the "Coordinator" component (see below), in case the partition can not yet be archived and shall be revalidated in future.
  * misc additional columns

* Adding a table `DLM_Partion_Index`
  * `DLM_Partion_Config_Version_ID`
  * `DLM_Partion_ArchiveLevel`: level of the records that belong to the indexed partitions
  * `DLM_Partion_From_ID`
  * `DLM_Partion_To_ID`

Notes: 
* The `DLM_Partion` records can be temporary or can also themselves be DLM'ed. The important non-redundant informations they hold is `DLM_Partion_Target_ArchiveLevel` and . These infos are important while the partition was created but not yet archived. 
In addition can use them to store detailed information (audit, debug etc), but we can also drop them.<br>
We can even decide to not even create `DLM_Partion` records in the first place, if the records are directly moved to their designated `DLM_Partion_Target_ArchiveLevel` in one go.
* The `DLM_Partion_Index` can't be DLM'ed or archived. But I think we dan do with a relatively small number of `DLM_Partion_Index` records 
that cover large ranges of consecutive `DLM_Partion_ID` values which all belong to the same `DLM_ArchiveLevel` and were all partioned using the same `DLM_Partion_Config_Version_ID`.

### Coordinator

By **coordinator**  I mean a component that checks out existing partitions and decides what to do this them. Not every partition shall "blindly" be migrated.

* this component has the job of evaluating partitions and see
  * whether they should be migrated. This might include some SPI to invoke domain specific stuff..e.g. a C_Invoice might not only require `Processed='Y'`, but also `Paid='Y'` to be true
  * if they are not yet ready, decide when the time for a re-evaluation will be (`DLM_Partion.DLM_Revalidate_After`).
* if they should be migrated, flag them accordingly (`DLM_Partion.DLM_Partion_Target_ArchiveLevel`).
* keep audit records, so if a partition should not (yet) be migrated, make it easy for the users to understand why not.
  * this can be done in a table such as `DLM_Partion_Log`


`DLM_Coordinator`
* `Description`
* `AD_JavaClass_ID` which points to the implementation code

### Migrator

By **migrator** I mean a component that can receive partitions and is responsible to migrate them from one "level" to the other.

  * the migrator can have different implementations. For the first increment, it might just need to be able to update tables' `DLM_ArchiveLevel` columns.
  * the API/SPI shall be such that there is a way to implement the migration in one step (e.g. delete and insert or simply update, both in one statement) and also in two steps (e.g. export a partition into JSON and import it somewhere else).
  * audit tables that usually reference partitions and show which partition is currently in which `DLM_ArchiveLevel`.

### Filter

An extension in metasfresh that by default always adds an additional condition to the where clause. 
The "normal" metasfresh code shall not have to care. In normal operation, the background data just seems to be not to exist in the database.

We can achive this using the "view" that was introduced in the "Single table" section.

### Idea: a "self-learning" combination of migrator and optimistic partitioner

Outline:

* the partitioner's configuration starts out "sparse". If we are interested in DLMing `C_Invoice`, we just add the table `C_Invoice` to the config.
* consequently, the partitioner will create individual partitions which just contain one `C_Invoice` record each.
* if the migrator tries to migrate a `C_Invoice` record that is referenced by a `C_Payment` which is not also migrated, then our trigger will raise an error with error-code `235D3`.
* this causes an SQL exception that is evaluted by the migrator, so the migrator can then notify the partioner about the problem ("incomplete partitioner config").
* the partitioner can then complete both its configuration and its already existing but incomplete partitions
* the migrator can try again.

This way, a user can configure what he/she knows to or wants to add. The rest will be added automatically and might then be further customized by the user.

## Increments and their estimations

### DB level

* Update to postgresql-9.5 (TODO)

* Augment `postgresql.conf` (don't forget comments/docs)
* Implement a DB function that for a given table
  * appends "_tbl" to the table's name and creates the view with the table's former name (done)
  * adds a DLM_ArchiveLevel column (done)
  * adds an index on the new column (done)
  * adds a trigger and trigger-function for each existing FK-constraint (TODO - 8h)

* Extend metasfresh (TODO - 4h)
  * Add a read-only "IsDLM" flag to `AD_Table`. It indicates if e.g. `C_BPartner` is just a view and the actual table is named `C_BPartner_Tbl`.
  * Add a process that can DLMify a given table by calling the above function.
  * Also add a process and a house-keeping task that can update AD_Table.IsDLM, e.g. if metasfresh starts up after a table was DLMified via migration script.
  
* To test (incomplete list):
  * use the new function on e.g. M_HU_Attribute (it should finish "fast", despite that table beeing rather large)
  * update DLM_ArchiveLevel to 1 for an M_HU_Attribute record
  * check out if the error message and error code is correct.
  
### Partitioner (TODO - 32h)

* Create the config table(s)
* Create the actual partition table(s)
* Create and implement the configuration API
* Create and implement the actual partitioning API which iterates database records and generates partitions


### Coordinator (TODO - 16h)

* Create the config table(s) and add stuff so we can link them to partition-config-versions
* create and implement the API


### Migrator (TODO - 32h)

* Create the audit table(s)
* Create and implement the API
* Also crreate the logic that detects and handles too optimistic/too small partitioner configs.
  
### Filter (8h)

* Augment metasfresh so it can get the current connection level to use e.g. from Env, and pass it to the DB-connection.
Then the DB connection shall call `set_config()` to make sure the rest of metasfresh allways gets the data it needs in the given context.
* Add `DLM_ArchiveLevel` field to Ini.java and the preferences dialog so that a user can include archived records in the standard client, 
as long as we didn't implement any deep archiving which would required the data to be refetched from so background storage. 
In other words, as long as we go with a single-database solution, all data shall be retrievable with a sufficiently high `DLM_ArchiveLevel`.

## Q&A

### How time consuming is it to add another column to a large table?

`alter table M_HU_Attribute add column DLM_ArchiveLevel integer` is fast, because it just adds the column to the table metadata, but not assignes a value to any row.

