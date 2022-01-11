---
title: Testing HTTP endpoints from IntelliJ
layout: default
tags:
  - Testing
lang: en
sequence: 10
ref: testing_http_endpoints_from_intellij
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/9967#issuecomment-1003077013
-->

## Overview
This guide describes how to use IntelliJ for testing HTTP endpoints.

- The "HTTP Client" can be found under **Tools** in the menu bar:

    <kbd><a href="assets/intellij-tools-http-client.png" title="Click to enlarge" target="\_blank"><img src="assets/intellij-tools-http-client.png" alt="Tools menu"></a></kbd>

- A request would look like this:

    <kbd><a href="assets/intellij-request_header-body-responses.png" title="Click to enlarge" target="\_blank"><img src="assets/intellij-request_header-body-responses.png" alt="Request with header, body and responses"></a></kbd>

    - Each time a request is run, its results will be appended to the "Responses" section.

- Requests are stored under `Scratches and Consoles > Scratches`:

    <kbd><a href="assets/intellij-request_scratches-and-consoles.png" title="Click to enlarge" target="\_blank"><img src="assets/intellij-request_scratches-and-consoles.png" alt="Scratches and Consoles" style="max-width: 450px"></a></kbd>

## Using Placeholders in Environment Files
1. Create a new environment file.

    <kbd><a href="assets/intellij-create-environment-file.png" title="Click to enlarge" target="\_blank"><img src="assets/intellij-create-environment-file.png" alt="Environment file"></a></kbd>

1. Fill the environment file with appropriate data.

    <kbd><a href="assets/intellij-environment-file-data.png" title="Click to enlarge" target="\_blank"><img src="assets/intellij-environment-file-data.png" alt="Environment file data"></a></kbd>

1. When running, choose which environment file to use.

    <kbd><a href="assets/intellij-chose-environment-file.png" title="Click to enlarge" target="\_blank"><img src="assets/intellij-chose-environment-file.png" alt="Chose environment file"></a></kbd>
