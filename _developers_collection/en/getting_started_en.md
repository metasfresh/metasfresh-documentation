---
layout: default
title: Getting started
tags: Overview
sequence: 50 
summary: how to obtain and build metasfresh from the sources
---

# About this document

The goal of this guide is to enable everyone who would like to contribute to metasfresh or to just simply study the code to do so.

# Get the code

* Go to the metasfresh repository at https://github.com/metasfresh/metasfresh and create your initial clone.
Check the screenshot [developers/getting_started_initial_clone.png] for where to click.
Particularly if you are new to git, we recommend installing _GitHub Desktop_ from https://desktop.github.com/ and then use the "Open in Desktop"
option. Also note that we basically follow the "GitHub Flow" which is documented at https://guides.github.com/introduction/flow/.

* In addition to the metasfresh repo, you will also need the https://github.com/metasfresh/metasfresh-parent repo. 
It basically contains only one `pom.xml` file, but that file is very important to build any of the metasfresh code
therefore, please also get a clone of this repository.

As a sidenote: we recomment that you clone all the metasfresh repos to the same location.
For this documentation, i'm using `C:\developement\repos`, so the individual repos' working copies are located at be `C:\developement\repos\metasfresh` and `C:\developement\repos\metasfres-parent` etc.

# Java version

Please make sure you are using java 7 while building the code.

# Get the code into your IDE

Even if you just want to study the code, it probably makes a lot of sense to do so in an IDE.

## Eclipse

* Download the latest eclipse version (currently this is eclipse Mars) from http://www.eclipse.org/
Note: the "Eclipse IDE for Java Developers" will probably do, we found that at least for us, the "Eclipse IDE for Java EE Develeopers" has too much unneeded overhead.

* Start Eclipse. You will be asked for a workspace location. In my excample, i'm using C:\development\repos, because it's where all my working copies are located.
* Now you can import the code by 
 - switching to the workbench, right-clicking into the Package Explorer (on the left of the eclipse window) and choosing "Import..."
 - selecting "Existing Maven Projects"
 - choosing the location of your working copies 
 - and let eclipse do the rest

* Starting the server and client:
 - Start the server: use de.metas.ServerBoot_mf15 launcher (or de.metas.ServerBoot_mf15_jrebel)
 - Start the client: use de.metas.SwingUIApplication_mf15 launcher (or de.metas.SwingUIApplication_mf15_jrebel)

## Other IDEs

We don't yet have experince with code contributions that were created with e.g. Netbeans or IntelliJ.

We don't think there is a need to dictate a particular IDE,

however, when contributing, please make sure to format your contribution in a way that allows us to get a meaningfull diff.


# Build on command line 

This section is about locally building a metasfresh distributable.
You will need to jump through a few loops though. We hope to make it easier in future, 
and of course we would be gratefull for any contributor which are good with maven to come along and improve this
(But note that after the simplification, versions-maven-plugin:set will still need to work).


## Install the build system

In order to locally build metasfresh, you need to install maven. 
Go to https://maven.apache.org/ and get the latest version (currently this is version 3.3.9)
* Please install maven, following this documentation.
In this example, I'm extracting it into ```C:\development\maven\```.

*Set the following environment variables:
```
MAVEN_HOME=C:\development\maven\apache-maven-3.3.9
MAVEN_OPTS=-Xmx1024m -XX:MaxPermSize=256M
```

## Build the main part

This section is about building the biggest part of metasfresh. 
If you just get through this section, you can aready be sure that there are no missing dependencies.

Once maven is installed, open a command line window, `cd` into your working copy of the metasfresh-parent repo and run
```
mvn install
```
to install the "main" parent pom in your local maven artifact repository.

When this is done, please `cd` to your working copy of the metasfresh repo, and then `cd` to `de.metas.parent`.

There, please do 
```
mvn --non-recursive install
```
After there two poms are installed in your local maven repository, you can build the "main" metasfresh 
by once again `cd`ing into the your working copy of the metasfresh repo, then further going into the `de.metas.reactor` directory and from there once again running `mvn install`.

This builds _allmost_ all of metasfresh, but does not yet create the actual distributable.

## Build additional components and the actua distributable

To finally get that distributable, you first need to build some additional components that are supposed to be distributed along with the main components.

One of these is a little spring-boot-admin application that is very handy to monitor metasfresh's health status and change log levels.
to build it, clone https://github.com/metasfresh/metasfresh-admin, `cd` into that repo's working copy and run `mvn install`

The other group of these components are some servicemix OSGI bundles for advanced usage scenarios.

To build those, go back to your metasfresh working copy, cd into de.metas.esb and run 
```
mvn install -DskipTests
```
Note that we use `-DskipTests` to avoid this build from running unit tests.

The reason is, that certain tests are quite sensitive about encoding and are likely to fail on some windows machines.

Again, we would be happy about any contributor who is good with maven to improve this.

Now, finally cd into de.metas.endcustomer.mf15 and run mvn install one last time.

Now you have the main distributable in `de.metas.endcustomer.mf15\de.metas.endcustomer.mf15.dist\target`

Congrats! (if you got this far ;-) )
