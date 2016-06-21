---
layout: default
title: Get the code into your IDE
tags: Getting Started
sequence: 30 
summary: how to import the source code into your IDE (eclipse)
---

Even if you just want to study the code, it probably makes a lot of sense to do so in an IDE.

# Eclipse

* Download the latest eclipse version (currently this is eclipse Mars) from [http://www.eclipse.org/](http://www.eclipse.org/)
Note: the "Eclipse IDE for Java Developers" will probably do. We found that at least for us, the "Eclipse IDE for Java EE Develeopers" has too much unneeded overhead.

* Start Eclipse. You will be asked for a workspace location. In my example, i'm using `C:\development\repos`, because it's where all my working copies are located.
* Make sure that you java the ***Java*** perspective open, not the Java EE perspective.
* If you intend to contribute changes, we recomment that you check out the [metasfresh-eclipse-config](https://github.com/metasfresh/metasfresh-eclipse-config) repository.
* Now you can import the code by 
 - switching to the workbench, right-clicking into the Package Explorer (on the left of the eclipse window) and choosing "Import..."
 - selecting "Existing Maven Projects"
 - choosing the location of your working copies 
 - and let eclipse do the rest

* Starting the server and client:
 - Start the server: use de.metas.ServerBoot_mf15 launcher (or de.metas.ServerBoot_mf15_jrebel)
 - Start the client: use de.metas.SwingUIApplication_mf15 launcher (or de.metas.SwingUIApplication_mf15_jrebel)

# Other IDEs

We don't yet have experince with code contributions that were created with e.g. Netbeans or IntelliJ.

We don't think there is a need to dictate a particular IDE,

however, when contributing, please make sure to text-format your contribution in a way that allows us to get a meaningfull diff. 
to that end, note that your IDE might be able to import our [eclipse formatting spec](https://github.com/metasfresh/metasfresh-eclipse-config/blob/master/eclipse_metas_formatter.xml).
