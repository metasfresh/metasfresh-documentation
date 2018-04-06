---
title: How to setup the standalone printing client with webui?
layout: default
tags:
  - printing webui
lang: en
---

# 0. Get the printing client binary

* the current version of the printing client binary is the file `de.metas.printing.client-jar-with-dependencies.jar`, located in your metasfresh server's `/opt/metasfresh/download` folder.
* it needs to run on a local system of yours which needs to have access to your printer(s). The client will use java's [Print Service API](https://docs.oracle.com/javase/8/docs/technotes/guides/jps/spec/jpsOverview.fm4.html) to access those printers.

# 1. Set up a dedicated printing-client-user in metasfresh

* choose something like StandAlonePrintingClient-Test for the first name
* as a convention the *last name* of non-person users is "TU" (technical user), but that's not a must
* generate an API-token for the new user; it will be used to authenticate the client.
* also:
  * remember to check the "is a systremuser" flag, otherwise the login and password fields are not shown
  * remember that in order to log in, the user also needs to have a role

# 2. Prepare the printing client config file
* the printing client is configured via a settings file that can look like this

```
# the enpoint component to use for the connection. Can be changed e.e for testing
de.metas.printing.client.IPrintConnectionEndpoint=de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint

# the URL where the printing endpoint is listening for requests
de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint.ServerUrl=http://<your-metasfresh-server>:8282/printing

# the adempiere AD_User and password name of which the client shall use for the login
de.metas.printing.client.login.apiToken=<the token you generated further up>

#The hostKey under which the client will register it's local printers etc on metasfresh
de.metas.printing.client.login.hostkey=PrintingHostService-TU-metas-printing-client-test

#the poll interval in milliseconds. Default: 1000ms
de.metas.printing.client.PrintingClientDaemon.PollIntervalMs=10000
```

Notes

* The property `de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint.ServerUrl` contains the URL to which the printing client shall connect.

* The two properties `de.metas.printing.client.login..apiToken` is basically the credential of an actual metasfrersh user (i.e. the one we created in step 1). 
It makes sense to have that user be a dedicated user
which has no other purpose than to log on, transmit the printers it has local access to (and their trays) and receive print packages.

* The property `de.metas.printing.client.login.hostkey` sets the hostkey with which the printers are associated.
Also associated with the hostkey can be a mapping between logical printers (like "invoice-printer")
and actual printers the information of which is transmitted by a printing client.

* The property `de.metas.printing.client.PrintingClientDaemon.PollIntervalMs` sets at which intervals the printing client shall query metasfresh for new print jobs.
(yes, we know that polling sucks..)

# 3. Start the printing client

Start the printing client using

```
java -Xmx200m -Dconfig="<printing-client-config-file>" -jar <printing-client.jar>
```

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

# 4. configure the printing client in metasfresh

* Open the "Drucker-Zuordnung" (`AD_Printer_Config`) window
* Search the record with the hostkey from the printing client config file
* Check the "Geteilt" (`IsShared`) flag
  * this is important so that *other* "Drucker-Zuordnung" (`AD_Printer_Config`) records can select the prining client's configuration
* Go to the "Konfiguration" (`AD_Printer_Matching`) tab and select the printing client's printers (and trays) to associate with the logical printer(s) of metasfresh
  * note that the "Konfiguration" (`AD_Printer_Matching`) tab already contains one record for each logical metasfresh printer, with the client's local default printer being selected.

# 5. associate the  printing client's config with the user(s) that need to print

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
