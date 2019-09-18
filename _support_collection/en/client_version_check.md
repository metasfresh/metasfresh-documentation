---
layout: default
title: When and how to use "-Dde.metas.clientcheck.Enabled=false"
issue: https://github.com/metasfresh/metasfresh-documentation/issues/30
tags:
  - Client
lang: en
---

### Summary

Add `-Dde.metas.clientcheck.Enabled=false` to the startup options to disable the client from comparing its own version with the version stored in the `AD_System` database table.

This means that the client will start, even if its build number/version does not match the metasfresh server's version.

Disabling the version check is useful if you temporarily need to run a modified client without the need to make a complete company-wide metasfresh rollout.

### Further notes:
- To disable the client check, you can comment-in the commented-out variable `METASFRESH_CLIENT_CHECK_OPTS` in either the
[`RUN_metasfresh_linux.sh`](https://github.com/metasfresh/metasfresh-dist/blob/master/swingui/src/main/resources/RUN_metasfresh_linux.sh) or
[`RUN_metasfresh.bat`](https://github.com/metasfresh/metasfresh-dist/blob/master/swingui/src/main/resources/RUN_metasfresh.bat) client startup script.
- You can also set `de.metas.clientcheck.Enabled` to `'N'` in the `AD_Sysconfig` table in order to globally disable the client check.
