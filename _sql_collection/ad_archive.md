---
title: AD_Archive
layout: default
tag: 
  - Data Model
  - Documents
lang: en
---

## Retrieve file attachment of a record

PDF for Documents are stored in `ad_archive` but if a user uploads a file to a record its stored in `ad_attachmententry`

```SQL
select ad_wf_node_template_id,e.filename,e.binarydata from AD_WF_Node_Template adwftemp
left join ad_attachment_multiref fileref on fileref.ad_table_id=get_table_id('AD_WF_Node_Template') and fileref.record_id= adwftemp.ad_wf_node_template_id
left JOIN ad_attachmententry e ON e.ad_attachmententry_id = fileref.ad_attachmententry_id
```


## Export Binary Data from AD_Archive to Files

1. Log into psql on your Linux Server and run:

```SQL
metasfresh=# COPY (SELECT binarydata from ad_archive limit 1) TO E'/tmp/youroutputfile.zip' (FORMAT binary);
```

2. Then apply this on the file to make the zip compatible:

```BASH
zip -FFv youroutputfile.zip --out fixed.zip
```

3. Copy the file fixed.zip to your Computer and unzip it into `AdempiereArchive`.

4. Rename `AdempiereArchive` to `AdempiereArchive.PDF`

5. Open `AdempiereArchive.PDF` using PDF Viewer

