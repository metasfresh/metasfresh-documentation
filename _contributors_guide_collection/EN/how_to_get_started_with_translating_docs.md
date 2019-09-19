---
title: How to get started with translating docs
layout: default
tags:
  - Translating Documentation
lang: en
---

## 1. Understand the task
1. [Get access to the latest version of metasfresh](https://metasfresh.com/en/download/).
1. [Test a feature documented in the German manual first](../../pages/webui/index_de).
1. Report any feedback by [creating a new issue on GitHub](https://github.com/metasfresh/metasfresh-documentation/issues) if the documentation needs to be updated.
1. [Switch metasfresh to English](../../webui_collection/EN/SwitchLanguage.html).
1. [Test the same feature in English](../../pages/webui/index_en).
1. Report any feedback on [GitHub](https://github.com/metasfresh/metasfresh-documentation/issues) if fields are missing translation or the documentation needs to be updated.
1. Repeat steps 2 to 6 for as many features as you want to test.

## 2. Install your tools
1. [Download and install GitHub Desktop](https://desktop.github.com/).
1. [Download, install and configure Atom Editor](http://docs.metasfresh.org/howto_collection/EN/how_to_setup_atom_for_contributing_docs.html).

## 3. Prepare Repository
1. Github Desktop: clone metasfresh/metasfresh-documentation to your local disk
1. switch to the gh-pages branch
1. create a branch with the name gh70 (gh+ issue number)

## 4. Develop translation
1. open atom and duplicate existing .md file
1. create an english translation manual in markdown language

## 5. Commit your changes
1. commit the new file using:
   - **commit title**: #`<issuenumber>` `<title of issue>`
   - **commit description**: #`<issuenumber>` and desribe your changes

1. create a pull request for review
   - the Pull request will take title and description from your last commit
   - make sure #`<issuenumber>` is in description to link the PR with the issue

## Further Reading
- [StyleGuide](../../StyleGuide)
