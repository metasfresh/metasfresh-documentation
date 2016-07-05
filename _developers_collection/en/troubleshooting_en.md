---
layout: default
title: Troubleshooting
tags: developers_troubleshooting
sequence: 10 
summary: Solving problems that might arise when traing to run metasfresh from eclipse
lang: en
ref: developers_troubleshooting
---

This article assumes that you more or less followed the "Getting Started" documentation, but ran into problems.

## Eclipse doesn't properly show java pacakges and classes

Check if you have the java perspective open. In the following screenshot, the Java-EE perspective is open instead:

![printpreview](../images/developers/troubleshooting_ide_eclipse_java_ee_perspective.png)

The buttons are visible on the upper right area of your screenshot.
We never used the Java EE perspective, so frankly we can't even tell you if it makes sense to try and get it to work.

## Eclipse shows me 1000s or errors and i don't even know where to start

Allmost every project depends on antoher project. Oftentimes, if one of the "root" projects has a possibly trivial project, this cascades to thousands of secondary problems in the downstream projects.

So, in order to apropoch this kind of problem, it makes sense to go to the root.

We recoment to first check the following projects:

1 [metasfresh-parent](https://github.com/metasfresh/metasfresh-parent) (a repo of its own)
1 [de.metas.parent](https://github.com/metasfresh/metasfresh/tree/master/de.metas.parent) (comes with the metasfresh repo)
1 [de.metas.util](https://github.com/metasfresh/metasfresh/tree/master/de.metas.util) (comes with the metasfresh repo)
1 [de.metas.adempiere.adempiere.base](https://github.com/metasfresh/metasfresh/tree/master/de.metas.adempiere.adempiere/base) (also comes with the metasfresh repo)

## So how can I make eclipse on show the current project's errors?

You can configure eclipse to only show errors from the project that is currently selected.

To to that, first open the "Problems" view by clicking on its tab:

![printpreview](../images/developers/troubleshooting_ide_eclipse_problems_10.png)

Then, open the "Configure.." dialog:

![printpreview](../images/developers/troubleshooting_ide_eclipse_configure_problems_20_open_configure.png)

And change the setting such that only errors from the currently selecte project are displayed: 

![printpreview](../images/developers/troubleshooting_ide_eclipse_configure_problems_30_do_configure.png)