---
layout: default
title: Get the code into your IDE
tags: developers_getting_started
sequence: 30
summary: how to import the source code into your IDE (Eclipse)
lang: en
ref: developers_getting_started_ide
---

Even if you just want to study the code, it probably makes a lot of sense to do so in an IDE.

# Get Eclipse

* Download the latest Eclipse version (currently this is Eclipse Neon) from [http://www.eclipse.org/](http://www.eclipse.org/)
Note: the "Eclipse IDE for Java Developers" will probably do. We found that at least for us, the "Eclipse IDE for Java EE Develeopers" has too much unneeded overhead.

* Open the `eclipse.ini` file in the Eclipse instalation directory and check the `-vm` value. This is the java version Eclipse will run with. Please make sure that it is a recent version. For example, with java-1.8.0_65, Eclipse is unable to retrieve maven artifacts from our repository (some missing root certificate).

## Install Lombok

We recently started using [lombok](https://projectlombok.org/).

To enable your local Eclipse to compile the code, please go to [https://projectlombok.org/download.html](https://projectlombok.org/download.html) and follow the instructions for Eclipse. You might also want to check out our metasfresh-issue [#1125](https://github.com/metasfresh/metasfresh/issues/1125) for further details.

## Import the code

* Start Eclipse. You will be asked for a workspace location. In my example, I'm using `C:\development\repos`, because it's where all my working copies are located.
* In order for Eclipse to get all the source folders right, it needs the m2e connector for the build-helper-maven-plugin. To install it, you can go like this:
  - Open the "Install New Software..." Dialog:
![developers_getting_started_ide_eclipse_neon_install_helper_plugin_10]({{ site.github.url }}/images/developers/developers_getting_started_ide_eclipse_neon_install_helper_plugin_10.png)
  - Enter the following URL into the "Work with:" field: URL [https://repository.sonatype.org/content/repositories/forge-sites/m2e-extras/0.15.0/N/0.15.0.201206251206/]( https://repository.sonatype.org/content/repositories/forge-sites/m2e-extras/0.15.0/N/0.15.0.201206251206/)
![developers_getting_started_ide_eclipse_neon_install_helper_plugin_20]({{ site.github.url }}/images/developers/developers_getting_started_ide_eclipse_neon_install_helper_plugin_20.png)
  - Now Eclipse should present the connector plugin for instalation:
![developers_getting_started_ide_eclipse_neon_install_helper_plugin_30]({{ site.github.url }}/images/developers/developers_getting_started_ide_eclipse_neon_install_helper_plugin_30.png)
  - Note that you can also auto-discover and install this plugin later, after having imported the code. However at this point, you spend already quite some time for Eclipse trying to build and finding 100000s of compile errors, due to the missing source folders.
* Make sure that you java the ***Java*** perspective open, not the Java EE perspective.
* If you intend to contribute changes, we recommend that you check out the `eclipse-config` folder in the [metasfresh-dev](https://github.com/metasfresh/metasfresh-dev) repository.
* Now you can import the code by
  - switching to the workbench, right-clicking into the Package Explorer (on the left of the Eclipse window) and choosing "Import..."
![developers_getting_started_ide_eclipse_neon_import_code_10]({{ site.github.url }}/images/developers/developers_getting_started_ide_eclipse_neon_import_code_10.png)
  - selecting "Existing Maven Projects"
  - choosing the location of your working copies
  - and let Eclipse do the rest

* Note that if often happens that an Eclipse project needs to be refreshed from its respective maven `pom.xml`. This can be done with the shortcut `Alt-F5` or via right-click on the project in question, and then:
![developers_getting_started_ide_maven_update_project]({{ site.github.url }}/images/developers/developers_getting_started_ide_maven_update_project.png)


## Start metasfresh from within Eclipse

* Starting a client with embedded server
  - The launcher file `/de.metas.endcustomer.mf15.swingui/de.metas.SwingUIApplication_mf15_with_embedded_server.launch` starts the client with an embedded server.<br>When developing, this is often the most practical way to run metasfresh from Eclipse.

* Starting the server and client individually:
  - Start the server: use the launcher file `/de.metas.endcustomer.mf15.serverRoot/de.metas.ServerBoot_mf15.launch`
    * Note that the server needs a preexisting metasfresh-properties file. In case it does not find such a file, it will fail. It is recommended to first run the client with embedded server.
  - Start the client: use the launcher file `/de.metas.endcustomer.mf15.swingui/de.metas.SwingUIApplication_mf15.launch`
  - there is also an alternative  `..._jrebel.launch` for both client and server. You can them in case you have the [JRebel](http://zeroturnaround.com/software/jrebel/) Eclipse plugin.


Note that until eclipse version neon2 the lombok integration is tricky.
The recommended eclipse version is neon3, as the lombok integration works out of the box with the lombok gui installer (also across multiple eclipse projects). See [here](http://stackoverflow.com/questions/42444457/lombok-does-not-work-for-eclipse-neon) for further infos.

# Other IDEs

We don't yet have experince with code contributions that were created with e.g. Netbeans or IntelliJ.

We don't think there is a need to dictate a particular IDE,

however, when contributing, please make sure to text-format your contribution in a way that allows us to get a meaningfull diff.
to that end, note that your IDE might be able to import our [Eclipse formatting spec](https://github.com/metasfresh/metasfresh-dev/blob/master/eclipse-config/eclipse_metas_formatter.xml).
