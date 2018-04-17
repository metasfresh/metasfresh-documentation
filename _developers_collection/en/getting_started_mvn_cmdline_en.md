---
layout: default
title: Build metasfresh from command line
tags: developers_getting_started
sequence: 100
summary: how to create a distributable using maven from your command line
lang: en
ref: developers_getting_started_mvn_cmdline
---


This article is about locally building a metasfresh distributable.
You will need to jump through a few loops though. We hope to make it easier in future,
and of course we would be gratefull for any contributor who is good with maven to come along and improve this.


# Install the build system

In order to locally build metasfresh, you need to install maven.
Go to [https://maven.apache.org/](https://maven.apache.org/) and get the latest version (currently this is version 3.5.2)

* Please install maven, following this documentation.
In this example, I'm extracting it into ```C:\development\maven\```.

* Set the following environment variables:
```
MAVEN_HOME=C:\development\maven\apache-maven-3.5.2
MAVEN_OPTS=-Xmx1024m
```

# Edit your maven settings.xml file

The dependency tree of metasfresh contains a few artifacts that are not part of the default maven repository.
Therefore we recommend that you add our public repository to your maven `settings.xml` file.

Please take a look [here](getting_started_maven_settings) for details.

# Build the main part

This section is about building the biggest part of metasfresh.

Once maven is installed, open a command line window, `cd` into your working copy of the metasfresh-parent repo and run
```bash
mvn install
```
to install the "main" parent pom in your local maven artifact repository.

When this is done, please `cd` to your working copy of the metasfresh repo.

There, please do
```bash
mvn install
```

This builds the biggest part of metasfresh, but does not yet create the actual distributable.

# Build additional components and the actual distributable

At this point we already build _most_ of the metasfresh code, but to get the
distributable, we need to build some additional components.

## metasfresh webui API

The API service of the metasfresh webui is in the `metasfresh-webui` repository.
To build it, enter the  `metasfresh-webui` folder and run `mvn install`.

## metasfresh procurement webui

The API service of the metasfresh webui is in the `metasfresh-procurement-webui` repository.
To build it, enter the  `metasfresh-procurement-webui` folder and run `mvn install`.

## metasfresh-dist

The maven projects that build the actual distributable is in metasfresh-dist.
To create the distributable, enter the `metasfresh-dist` folder and run `mvn install`

Now you have the main distributable in `metasfresh-dist\de.metas.endcustomer.mf15.dist\target`

Congrats! (if you got this far ;-) )

## metasfresh-webui-frontend

The metasfresh-webui-frontend repo contains the javascript code of our frontend.

In your working copy run `npm install` first, followed by `./node_modules/webpack/bin/webpack.js --config webpack.prod.js`

Copy the content of the `dist` folder to the root of your webserver. Provide a `config.js`, containing the paths to your server, in the root of your webserver.

Note: make sure you have a appropriate npm/node version istalled, as the package manager of your OS may be installed an outdated version of npm/node. Check with `npm --version` and `node --version`. March 2017 Latest node.js LTS Version: v6.10.1 (includes npm 3.10.10).

More info about the build process may be found in the repository's [Jenkinsfile](https://github.com/metasfresh/metasfresh-webui-frontend/blob/master/Jenkinsfile).

# Further reading

There is an issue at github which is about some of the current maven project structure's shortcomings: [metasfresh/metasfresh#1275](https://github.com/metasfresh/metasfresh/issues/1275).

Feel free to weigh in, and we would be happy to check out your pull requests :-).
