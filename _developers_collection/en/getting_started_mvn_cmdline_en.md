---
layout: default
title: Build metasfresh from command line
tags: developers_getting_started
sequence: 100 
summary: how to create a districbutable using maven from your command line
lang: en
ref: developers_getting_started_mvn_cmdline
---




This article is about locally building a metasfresh distributable.
You will need to jump through a few loops though. We hope to make it easier in future, 
and of course we would be gratefull for any contributor which are good with maven to come along and improve this
(But note that after the simplification, versions-maven-plugin:set will still need to work).


# Install the build system

In order to locally build metasfresh, you need to install maven. 
Go to [https://maven.apache.org/](https://maven.apache.org/) and get the latest version (currently this is version 3.3.9)

* Please install maven, following this documentation.
In this example, I'm extracting it into ```C:\development\maven\```.

* Set the following environment variables:
```
MAVEN_HOME=C:\development\maven\apache-maven-3.3.9
MAVEN_OPTS=-Xmx1024m -XX:MaxPermSize=256M
```

# Build the main part

This section is about building the biggest part of metasfresh. 
If you just get through this section, you can already be sure that there are no missing dependencies.

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

# Build additional components and the actual distributable

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