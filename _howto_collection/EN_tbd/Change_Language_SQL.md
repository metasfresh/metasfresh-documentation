---
title: Change Language via SQL
layout: default
tags:
  - Setup
lang: en
sequence: 30
ref: change_language_sql
---

## Overview
Available `ad_language` values are:

| Language | Value |
| :--- | :---: |
| English | `en_US` |
| German | `de_DE` |
| Swiss German | `de_CH` |

  >**Note:** The above list is not exhaustive and other languages may be added!

## Example
Changes the current system language to German:

```sql
docker exec -u postgres metasfresh-docker_db_1 psql -d metasfresh -c "UPDATE ad_user SET ad_language = 'de_DE' WHERE ad_user_id = '100';"
```
