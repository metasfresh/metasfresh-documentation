---
title: Create your own metasfresh-installer using a script
layout: default
permalink: admins/installer_scripts/EN/build_new_release.md
---

# Create your own metasfresh-installer
### Requirements:
   * [This script](https://github.com/metasfresh/metasfresh-scripts/blob/master/admin/installer_scripts/build_new_release.sh)
   * [This config-file](https://github.com/metasfresh/metasfresh-scripts/blob/master/admin/installer_scripts/.build_new_release.conf)
   * On your build-server, you'll need following folders owned as "root":
```sh
/opt/build
/opt/build_db
/opt/build_storage
/opt/build_tar
/mf_updates
```   
   * For now, you'll need an initial "build-folder-version" in /opt/build/ (eg.: /opt/build/metasfresh-4_19_18/) including all necessary files and filestructures
   * A separate host were your "master" metasfresh-build is located and installed
   * A (web)server were you can upload your build-packages and your update-packages

### How-To:
   * Put both the shell-script als well as the config file in the same folder
   * Modify the config-file (./build_new_release.conf) according to your setup
   
```sh
#config credentials used in ./build_new_release.sh
SRC_USER=        #username of the owner of metasfresh on your master-host (usually "metasfresh")
SRC_HOST=        #hostname of your master-host
TRGT_USER=       #username for your (web)server
TRGT_HOST=       #hostname of your (web)server
TRGT_DIR_PCKG=   #target directory where you want the installer to be uploaded to
TRGT_DIR_UPDATE= #target directory where you want the update-package to be uploaded to
TRGT_DIR_DB=     #target directory where you want the database-seed to be uploaded to
```
   * Execute the script "build_new_release.sh" using root-privileges
   * The script will scan the folder /opt/build/ for a previous build-structure and will show you the version-number of the latest build
   * Enter the version-number of your new build (eg. 4.19.18)
   * The script will than create a copy of your previous build and will modify all necessary files for your new build
   * After the script finishes, you'll be able to find your build-files here:
```sh
/opt/build_storage/metasfresh-4_19_18.deb        #This will be a debian package wich will be used in the tar-archive
/opt/build_tar/metasfresh-4_19_18.tar.gz         #This is the installer-tar-file
/opt/build_db/metasfresh-4_19_18.pgdump          #This is the database-seed stored in native PostgreSQL-Format (pg_dump -Fc ...)
/opt/mf_updates/metasfreshupdate_4_19_18.tar.gz  #This is the compressed update-package you can use to rollout any metasfresh-installation to this version
```
