---
title: How to install and use Yarn
layout: default
tags:  
  - Yarn
lang: en
sequence:
ref: install_use_yarn
---

## Download and Install Yarn

- Go to https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable and download the Yarn windows installer .msi file and follow the instructions in the Setup Wizard.

- Open the windows Command Prompt and locate the yarn folder or use this path: `C:\Program Files (x86)\Yarn\bin`.

- After locating the folder, run this command: `yarn install`.

<kbd><a href="assets/bin_yarn_install.png" title="install yarn from bin folder"><img src="assets/bin_yarn_install.png" alt="Fig.: Install yarn from bin folder in cmd" style="max-width: 450px"></a></kbd>


## Using Yarn in metasfresh

- Open windows Command Prompt and navigate to the metasfresh frontend folder, in the example it would be this path: `C:\work-metas\metasfresh\frontend`.

- Than open IntelliJ, go to services and get  `ServerBoot` and `WebRestApiApplication` up and running.

- Than go back to Command Prompt and run this command : `yarn install & yarn start;`.

<kbd><a href="assets/yarn_cmd_start.png" title="start yarn local webui in cmd "><img src="assets/yarn_cmd_start.png" alt="Fig.: start yarn local webui in cmd " style="max-width: 450px"></a></kbd>


- In your Browser, go to `localhost:3000` that will be your local webUI.

<kbd><a href="assets/yarn_localhost_browser.png" title="localhost webui in browser"><img src="assets/yarn_localhost_browser.png" alt="Fig.: localhost webui in browser" style="max-width: 450px"></a></kbd>
