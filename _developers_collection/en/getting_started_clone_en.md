---
layout: default
title: Get the code
tags: developers_getting_started
sequence: 10 
summary: how to obtain the source code from Github
lang: en
ref: developers_getting_started_clone
---


* Go to the metasfresh repository at [https://github.com/metasfresh/metasfresh](https://github.com/metasfresh/metasfresh) and create your initial clone.
Particularly if you are new to git, we recommend installing _GitHub Desktop_ from [https://desktop.github.com/](https://desktop.github.com/) and then use the "Open in Desktop"
option. Also note that we basically follow the "GitHub Flow" which is documented at [https://guides.github.com/introduction/flow/](https://guides.github.com/introduction/flow/).

* ***Important note:*** In addition to the metasfresh repo, you will also need the [https://github.com/metasfresh/metasfresh-parent](https://github.com/metasfresh/metasfresh-parent) repo. 
It basically contains only one `pom.xml` file, but that file is very important to build any of the metasfresh code.
Therefore, please also get a clone of this repository.

As a sidenote: we recomment that you clone all the metasfresh repos to the same location.
For this documentation, i'm using `C:\developement\repos`, so the individual repos' working copies are located at be `C:\developement\repos\metasfresh` and `C:\developement\repos\metasfres-parent` etc.