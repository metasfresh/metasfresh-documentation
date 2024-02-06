---
title: How to setup the standalone printing client with WebUI?
layout: default
tags:
  - Printing WebUI
lang: en
published: false
---

<!--
Declared OBSOLETE by Tobi via https://github.com/metasfresh/mf15-documentation/issues/6#issue-2099995966 (January 2024)
Current documentation up to date at that time: https://docs.metasfresh.org/setup/Printing_PDF_Setup_Guide.html
-->

## Intro
A standalone printing client is useful in different scenarios.
For example, if you use a hosted metasfresh instance, that instance which runs on our server has no access to your local printers.
Still, your processes might require that at certain stages, documents are automatically printed by your local servers.

To address this and other scenarios, the standalone printing client can run locally, with access to your local printers.
It can retrieve print jobs from metasfresh and perform them using your printers.

## 0. Get the printing client software

* The client is a single jar file that can be executed with java.
  * This means that you need to have a java runtime environment (JRE) on the computer where the client shall run.
* The client needs to run on a local system of yours which needs to have access to your printer(s). The client will use java's <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/jps/spec/jpsOverview.fm4.html" title="Print Service API" target="\_blank">Print Service API</a> to access those printers.
* Can be obtained in different ways:
  * The client is available from our artifact repository. The latest release version can be obtained [here](https://repo.metasfresh.com/service/local/artifact/maven/redirect?g=de.metas.printing&a=de.metas.printing.client&v=LATEST&r=mvn-release&p=jar&c=jar-with-dependencies).
  * If you installed the metasfresh.tar.gz distribution, then the current version of the printing client binary is the file `de.metas.printing.client-jar-with-dependencies.jar`, located in your metasfresh server's `/opt/metasfresh/download` folder.

## 1. Set up a dedicated printing-client-user in metasfresh

Background: metasfresh allows to configure one user to print on behalf of another user.
The standalone printing client will connect to metasfresh a the user which we configure in this step.
It can then receive those other users' print jobs to print all of the on your local printers.

* Choose something like StandAlonePrintingClient-Test for the first name
* As a convention the *last name* of non-person users is "TU" (technical user), but that's not a must
* Obtain an authentication token for the new user; it will be used by the printing client when connecting to metasfresh
  * The token is created in the "Authentication Tokens" tab of the user window
  * The token is a random string that is generated automatically as soon as you create the new authentication record.
* Also:
  * Remember to check the "is a systremuser" flag, otherwise the login and password fields are not shown
  * Remember that in order to log in, the user also needs to have a role

# 2. Create the printing client config file

* The printing client is configured via a settings file that can look as follows.
  * We recomment that you copy the
* You can use a normal text editor to create and maintain this file
* We suggest to name the file e.g. `metasfresh-printing-client-config.properties` and place it in the same folder that contains the printing client.

```
#
# Settings that you certainly need to adapt
#
# The URL where the printing endpoint is listening for requests
de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint.ServerUrl=http://<your-metasfresh-server>:<port>/api/printing

# Authorization token, to be used when the printing client connects to metasfresh's rest API
# The correct token needs to be generated for the respective user in metasfresh
de.metas.printing.client.login.apiToken=<the token you generated further up>

# The hostKey is an identifier under which the client will register its local printer(s) etc on metasfresh.
# Please pick a value that makes sense for you. For example, if you only have one printing client you can simply go with `PrintingHostService`
de.metas.printing.client.login.hostkey=<host-key-for-this-printing-client>

#
# Settings that you might want to tweak
#
# The poll interval in milliseconds. Default: 1000ms
# Sets at which intervals the printing client shall query metasfresh for new print jobs (yes, we know that polling sucks..).
de.metas.printing.client.PrintingClientDaemon.PollIntervalMs=10000

# If the client receives a printing error from the underlying printer API,
# then these two parameters can be used to specify how often the client shall retry and how long it shall wait between each retry.
# Two retries mean that the client will attempt the print three times max.
# Defaults: retry 3 times and wait 5 seconds between each retry
de.metas.printing.client.engine.retryCount=3
de.metas.printing.client.engine.retryIntervalMs=5000

#
# TESTING: these properties can be used to simulate problems with the printing client
#
# Uncomment if the printing client shall return an error status even when the print was successful
#de.metas.printing.client.testing.alwaysReportError=true
#
# Error message to be send by the client *if* allwaysReturnError=true is enabled
# thx to http://stackoverflow.com/questions/11838674/how-to-read-property-name-with-spaces-in-java
#de.metas.printing.client.testing.errorMessage="TESTING\:\ The\ client\ returned\ 'ERROR'\ for\ testing\ purposes"
#
# Uncomment if the printing client shall *not* return *any* response after printing
#de.metas.printing.client.testing.dontSendResponse=true

#
# Settings that you most probably don't want to touch
#
# The enpoint component to use for the connection. Can be changed e.e for testing
de.metas.printing.client.IPrintConnectionEndpoint=de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint

# Possible values are base64 (when getting data from the ESB) and binary (when getting data directly from metasfresh)
# The default is "base64" to ensure that new client binaries still work with the old ESB infrastructure,
# without changing the config file
de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint.dataEncoding=binary
```

Additional notes

* The property `de.metas.printing.client.login.apiToken` is basically the credential of an actual metasfresh user (i.e. the one we created in step 1).
It makes sense to have that user be a dedicated user
which has no other purpose than to log on, transmit the printers it has local access to (and their trays) and receive print packages.

* The property `de.metas.printing.client.login.hostkey` sets the hostkey with which the printers are associated.
Also associated with the hostkey can be a mapping between logical printers (like "invoice-printer")
and actual printers the information of which is transmitted by a printing client.

## 3. Start the printing client

You can now open a command line and start the printing client like this:

```
java -Xmx200m -Dconfig="<printing-client-config-file>" -jar <printing-client.jar>
```

Example: `java -Xmx200m -Dconfig="metasfresh-printing-client-config.properties" -jar my-downloaded-standalone-printing-client.jar`

Note: as a windows user, you can open a command line by entering `cmd.exe` into the start menu search field.

The console output should look like this:
```
Jun 18, 2017 7:03:14 AM de.metas.printing.client.PrintingClientStandaloneService
 logVersionInfo
INFO: Resource jar:file:<printing-client.jar>!/META-INF/MANIFEST.MF has version <printing-client-build-version>
Jun 18, 2017 7:03:15 AM de.metas.printing.client.engine.PrintingClientDaemon loginIfNeeded
INFO: Successfully logged in as user metasfresh-printing-client-test-IT. Received sessionId=1097453
```

When the printing client starts up, it does the following
* attempt to log in to metasfresh and get a session-ID
* use the local java printing API to find its local printers and send that list to metasfresh
* poll for print jobs at regular intervals

## 4. Configure the printing client in metasfresh

* Open the "Drucker-Zuordnung" (`AD_Printer_Config`) window
* Search the record with the hostkey from the printing client config file
* Check the "Geteilt" (`IsShared`) flag
  * This is important so that *other* "Drucker-Zuordnung" (`AD_Printer_Config`) records can select the prining client's configuration
* Go to the "Konfiguration" (`AD_Printer_Matching`) tab and select the printing client's printers (and trays) to associate with the logical printer(s) of metasfresh
  * note that the "Konfiguration" (`AD_Printer_Matching`) tab already contains one record for each logical metasfresh printer, with the client's local default printer being selected.

## 5. Associate the  printing client's config with the user(s) that need to print

Here the important part is to find out that user's hostkey.

The hostkey is stored in the user's session, so if you just logged in as "myLoginName", you can select

```
SELECT updated, LoginUserName, hostkey FROM AD_Session
WHERE LoginUserName='myLoginName'
ORDER BY AD_Session_ID DESC LIMIT 1
```

Notes:
* when logging in via webui, metasfresh uses your IP address such as `192.168.134.10` as your hostkey
* the hostkey is currently created on-demand; if you didn't print anything yet, the value is `<not-yet-determined>`

Once you have the host key, create a new record in "Drucker-Zuordnung" (`AD_Printer_Config`)
* Host key needs to be the one from `AD_Session`
* "Benutzte Configuration" needs to be the one of the standalone printing client

Now you are done..e.g. go to Wareneingangsdispo and press invoke the "Drucken Produktanlieferung" action.
