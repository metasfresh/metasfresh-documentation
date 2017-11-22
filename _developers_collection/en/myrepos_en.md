---
layout: default
title: Use myrepos to work with multiple repos from commandline
tags: developers_git_myrepos
sequence: 10
summary: how to make life easier without github desktop
lang: en
ref: developers_myrepos
---

## Motivation

github desktop has from my point of view the following drawbacks
* sometimes my collegues think they synched, but didn'- [ ]
* aparently it doesn't support the same repo being checked out multiple times to different locations (=> different eclipse workspaces)

## Installing myreps

* I'm working on a windows machine where I installed [perl](http://strawberryperl.com/) in order to be able to run [myrepos](https://myrepos.branchable.com/).
* I'm running myrepos from within the `git bash` shell that came together with [git](https://git-scm.com/) for windows.
  * I have individual `.mrconfig` files for different workspaces and was (on my windows system) unable to register them as trusted. Hence the `-t`

## .mrconfig file

Here is how my .mrconfig looks like (without a few private repos ^^):
```
[DEFAULT]
# make `mr zap` integrate from upstream
zap =
    git pull
    git merge origin/master

# thx to https://stackoverflow.com/questions/1417957/show-just-the-current-branch-in-git
branch =
	git rev-parse --abbrev-ref HEAD

[/c/workspaces/mf/metasfresh-parent]
checkout = git clone 'git@github.com:metasfresh/metasfresh-parent.git' 'metasfresh-parent'

[/c/workspaces/mf/metasfresh-admin]
checkout = git clone 'git@github.com:metasfresh/metasfresh-admin.git' 'metasfresh-admin'

[/c/workspaces/mf/metasfresh]
checkout = git clone 'git@github.com:metasfresh/metasfresh.git' 'metasfresh'

[/c/workspaces/mf/metasfresh-webui-api]
checkout = git clone 'git@github.com:metasfresh/metasfresh-webui-api.git' 'metasfresh-webui-api'

[/c/workspaces/mf/metasfresh-webui-frontend]
checkout = git clone 'git@github.com:metasfresh/metasfresh-webui-frontend.git' 'metasfresh-webui-frontend'

[/c/workspaces/mf/metasfresh-procurement-webui]
checkout = git clone 'git@github.com:metasfresh/metasfresh-procurement-webui.git' 'metasfresh-procurement-webui'

[/c/workspaces/mf/metasfresh-dist]
checkout = git clone 'git@github.com:metasfresh/metasfresh-dist.git' 'metasfresh-dist'
```

## Avoiding the "mr -t run" prefix

Since I (almost) always work with myrepos within the git bash shell, I'm experimenting with the following aliases:

```bash
# custom aliases; zap and branch are defined in the .mrconfig file
alias mrgit='mr -t run git'
alias mrbranch='mr -t branch'
alias mrzap='mr -t zap'
```

If you use git on windows like me, you can add those aliases to the file `C:\Program Files\Git\etc\profile.d\aliases.sh`
(thanks to [this stackoverflow answer](https://stackoverflow.com/a/46051959/1012103)).
