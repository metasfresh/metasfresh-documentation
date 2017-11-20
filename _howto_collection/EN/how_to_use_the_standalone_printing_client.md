---
title: How to setup the standalone printing client with webui?
layout: default
tags:
  - printing webui
lang: en
---

# 1. Prerequisites:
* As of now, to use the standalone printing client, you need to have the ESB set up.
* More specifically, you need to have the "Printing ESB bundle" (which is a camel OSGI bunde intended to run in servicemix) installend.
* (Currently we have no documentation for this)

# 2. Prepare the printing client config file
* the printing client is configured via a settings file that can look like this

```
# the enpoint component to use for the connection. Can be changed e.e for testing
de.metas.printing.client.IPrintConnectionEndpoint=de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint

# the URL where the printing ESB is listening for requests
de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint.ServerUrl=http://your-esb-server:8182/printing

# the adempiere AD_User and password name of which the client shall use for the login
de.metas.printing.client.login.username=metasfresh-printing-client-test
de.metas.printing.client.login.password=metasfresh-printing-client-test

#The hostKey which the client will register itself with on ADempiere
de.metas.printing.client.login.hostkey=PrintingHostService-TU-metas-printing-client-test

#the poll interval in milliseconds. Default: 1000ms
de.metas.printing.client.PrintingClientDaemon.PollIntervalMs=10000
```

Notes

* The property `de.metas.printing.client.endpoint.RestHttpPrintConnectionEndpoint.ServerUrl` contains the URL to which the printing client shall connect.

* The two properties `de.metas.printing.client.login.username` and `de.metas.printing.client.login.password`
password are the credentials of an actual metasfrersh user. It makes sense to have that user be a dedicated user
which has no other purpose than to log on, transmit the printers it has local access to (and their trays) and receive print packages.

* The property `de.metas.printing.client.login.hostkey` sets the hostkey with which the printers are associated.
Also associated with the hostkye can be a mapping between locical printers (like "invoice-printer")
and actual printers the information of which is transmitted by a printing client.

* The property `de.metas.printing.client.PrintingClientDaemon.PollIntervalMs` sets at which intervals the printing client shall query metasfresh for new print jobs.
(yes, we know that polling sucks..we were there wasn't any fancy websockets at the time and we sortof needed the money... )

# 3. Set up a dedicated printing client user

* choose something like StandAlonePrintingClient-Test for the first name
* as a convention the *last name* of non-person users is "TU" (technical user)
* remember to check the "is a systremuser" flag, otherwise the login and password fields are not shown
* choose the username and password from the printing client config file
* remember that in order to log in the user also needs to have a role

# 4. Start the printing client

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
* attempt to log in and get a session-ID
* use the java printing API to look up the printers it has avaialbe and sed that list to metasfresh
* poll for print jobs at regular intervals

# 5. configure the printing client in metasfresh

* Open the "Drucker-Zuordnung" (`AD_Printer_Config`) window
* Search the record with the hostkey from the printing client config file
* Check the "Geteilt" (`IsShared`) flag
  * this is important so that *other* "Drucker-Zuordnung" (`AD_Printer_Config`) records can select the prining client's configuration
* Go to the "Konfiguration" (`AD_Printer_Matching`) tab and select the printing client's printers (and trays) to associate with the logical printer(s) of metasfresh
  * note that the "Konfiguration" (`AD_Printer_Matching`) tab already contains one record for each logical metasfresh printer, with the client's local default printer being selected.

# 6. associate the  printing client's config with the user(s) that need to print

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
