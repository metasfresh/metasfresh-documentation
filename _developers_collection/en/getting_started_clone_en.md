
---
layout: default
title: Get the code
tags: Getting Started
sequence: 10 
summary: how to obtain the source code from Github
---



* Go to the metasfresh repository at https://github.com/metasfresh/metasfresh and create your initial clone.
Check the screenshot [developers/getting_started_initial_clone.png] for where to click.
Particularly if you are new to git, we recommend installing _GitHub Desktop_ from https://desktop.github.com/ and then use the "Open in Desktop"
option. Also note that we basically follow the "GitHub Flow" which is documented at https://guides.github.com/introduction/flow/.

* In addition to the metasfresh repo, you will also need the https://github.com/metasfresh/metasfresh-parent repo. 
It basically contains only one `pom.xml` file, but that file is very important to build any of the metasfresh code
therefore, please also get a clone of this repository.

As a sidenote: we recomment that you clone all the metasfresh repos to the same location.
For this documentation, i'm using `C:\developement\repos`, so the individual repos' working copies are located at be `C:\developement\repos\metasfresh` and `C:\developement\repos\metasfres-parent` etc.
