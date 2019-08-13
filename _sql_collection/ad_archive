---
title: AD_Archive
layout: default
tag: 
  - datamodel
  - documents
lang: en
---

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

