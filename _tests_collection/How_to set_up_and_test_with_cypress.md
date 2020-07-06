---
title: How to set up and test with cypress
layout: default
tags:
  - automatic testing
lang: en
---

## SetUp / download
1. 32-bit Git for Windows Setup https://git-scm.com/download/win
1. 32-bit node LTS Version: 8.11.3 https://nodejs.org/en/download/
1. 32-bit vscode: https://code.visualstudio.com/docs/setup/windows
1. webui front-end repository: clone/sync with github, save in your explorer: where you have other github repositories
1. move it into vsc (pls ask tobi for details, can't really remember this part)
1. in node:
	* $ cd /your/project/path => metasfresh webui front end
	* $ npm install cypress --save-dev => cypress is installed
1. have a dev instance / test environment
1. create your own config file using the data from your environment


## Steps

1. open gitbash in metasfresh webui front end folder in explorer: right-click in folder, select / open gitbash here
1. run CYPRESS_baseUrl=https://yoururlforrunningtests npm run cypress:open
1. in Cypress select the test you want to run by just clicking on it


## Writing Tests:
1. write test in visual studio code
1. save in metasfresh webui front end folder in explorer: => cypress.integration



## Check your / all tests:
=> dashboard: https://dashboard.cypress.io/#/projects/5yp4q1/runs


## Updated / new tests:
1. sync metasfresh webui front end folder in github desktop
1. config for your testing instance shall remain the same, is not set back by syncing!


## More info:
=> README file in the webui-frontend repo


  >if problems, maybe bc of kaspersky: delete Cypress from user-xy-AppData-Local, and re-install via GitBash
