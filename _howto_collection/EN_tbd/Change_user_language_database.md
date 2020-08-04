---
title: Change User Language in the Database
layout: default
tags:
  - Setup
lang: en
sequence: 30
ref: change_user_language_database
---

You can update the `ad_user` table `ad_language` entry in the database.
 >**Note:** You might have to restart the metasfresh docker stack afterwards!

Available `ad_language` values are:

| Language | Value |
| :--- | :---: |
| English | `en_US` |
| German | `de_DE` |
| Swiss German | `de_CH` |

  >**Note:** The above list is not exhaustive and other languages may be added!

## Example
Changes the current user language to German:

```bash
docker exec -u postgres metasfresh-docker_db_1 psql -d metasfresh -c "UPDATE ad_user SET ad_language = 'de_DE' WHERE ad_user_id = '100';"
```
