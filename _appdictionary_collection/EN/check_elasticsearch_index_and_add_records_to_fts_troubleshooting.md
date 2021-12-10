---
title: Check Elasticsearch index and add records to FTS (Troubleshooting)
layout: default
tags:  
  - Full-Text Search (FTS)
lang: en
sequence: 20
ref: check_elasticsearch_index_and_add_records_to_fts_troubleshooting
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/9280#issuecomment-925302390
-->

## Issue
A name (e.g., business partner) is recorded in a table and also shows in the list view, but when searching/filtering for it, it isn't found.

## Solution (Troubleshooting)
1. Identify the business partner entry by finding its ID, e.g. `C_BPartner_ID=3296013`.
1. Check `c_bpartner_adv_search` and retrieve the Elasticsearch document ID.

    ```sql
    select c_bpartner_id, es_documentid, created, updated, * from c_bpartner_adv_search where c_bpartner_id=3296013;
    ```

    A possible result could look like this:

    | c\_bpartner\_id | es\_documentid | created | updated |
    | :--- | :--- | :--- | :--- |
    | 3296013 | 3296013-3360717-X | 2021-12-12 07:22:23.000000 +01:00 | 2020-04-14 20:21:55.000000 +01:00 |
    | 3296013 | 3296013-3370769-3471263 | 2021-12-12 07:22:23.000000 +01:00 | 2020-04-14 20:21:55.000000 +01:00 |

1. Check if a given document ID is indexed on Elasticsearch.

    ```
    GET http://localhost:19200/fts_bpartner/_doc/3296013-3360717-X
    ```

1. Check how many documents are in that Elasticsearch index.

    ```
    GET http://localhost:19200/fts_bpartner/_count
    ```

1. Check for the record ID in the Elasticsearch index queue.

    ```sql
    select * from ES_FTS_Index_Queue where record_id=3296013;
    ```

1. Add all missing records (e.g., business partners) to the Elasticsearch index.

    ```sql
    INSERT INTO es_fts_index_queue (es_fts_config_id, eventtype, ad_table_id, record_id)
    SELECT (SELECT es_fts_config_id FROM es_fts_config WHERE es_index = 'fts_bpartner') AS es_fts_config_id,
           'U'                                                                          AS eventtype,
           get_table_id('C_BPartner')                                                   AS ad_table_id,
           bp.c_bpartner_id                                                             AS record_id
    FROM c_bpartner bp
    ORDER BY bp.c_bpartner_id
    ;
    ```

1. Check the indexing progress.

    ```sql
    select processed, count(1) from ES_FTS_Index_Queue group by rollup (processed);
    ```
