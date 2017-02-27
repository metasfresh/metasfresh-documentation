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
and of course we would be gratefull for any contributor who is good with maven to come along and improve this.


# Install the build system

In order to locally build metasfresh, you need to install maven.
Go to [https://maven.apache.org/](https://maven.apache.org/) and get the latest version (currently this is version 3.3.9)

* Please install maven, following this documentation.
In this example, I'm extracting it into ```C:\development\maven\```.

* Set the following environment variables:
```
MAVEN_HOME=C:\development\maven\apache-maven-3.3.9
MAVEN_OPTS=-Xmx1024m
```

# Build the main part

This section is about building the biggest part of metasfresh.

Once maven is installed, open a command line window, `cd` into your working copy of the metasfresh-parent repo and run
```bash
mvn install
```
to install the "main" parent pom in your local maven artifact repository.

When this is done, please `cd` to your working copy of the metasfresh repo, and then `cd` to `de.metas.parent`.

There, please do
```bash
mvn --non-recursive install
```
After these two poms are installed in your local maven repository, you can build the "main" metasfresh
by once again `cd`ing into the your working copy of the metasfresh repo, then further going into the `de.metas.reactor` directory and from there once again running `mvn install`.

This builds the biggest part of metasfresh, but does not yet create the actual distributable.

# Build additional components and the actual distributable

At this point we already build _most_ of the metasfresh code, but to get the
distributable, we need to build some additional components.

## ESB bundles

metasfresh comes with anumber of servicemix OSGI bundles for advanced usage scenarios.

To build those, go back to your metasfresh working copy, cd into `de.metas.esb`
and run `mvn install`.

## metasfresh webui API

The API service of the metasfresh webui is in the `metasfresh-webui` repository.
To build it, enter the  `metasfresh-webui` folder and run `mvn install`.

## metasfresh procurement webui

The API service of the metasfresh webui is in the `metasfresh-procurement-webui` repository.
To build it, enter the  `metasfresh-procurement-webui` folder and run `mvn install`.

## metasfresh-dist

The maven projects that build the actual distributable is in metasfresh-dist.
To create the districbutable, enter the `metasfresh-dist` folder and run `mvn install`

Now you have the main distributable in `metasfresh-dist\de.metas.endcustomer.mf15.dist\target`

Congrats! (if you got this far ;-) )

## A note about metasfresh-webui-frontend

The metasfresh-webui-frontend repo contains the javascript code of our frontend.
I don't know how it's build locally, but if you want to know how it is build,
I recommend to check out the repository's [Jenkinsfile](https://github.com/metasfresh/metasfresh-webui-frontend/blob/master/Jenkinsfile).
