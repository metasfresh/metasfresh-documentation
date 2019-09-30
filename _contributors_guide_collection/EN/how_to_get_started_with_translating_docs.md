---
title: How to get started with translating docs
layout: default
tags:
  - Translating Documentation
lang: en
---

## 1. Understand the task
1. <a href="https://metasfresh.com/en/download/" title="Download the latest version on metasfresh.com" target="blank">Get access to the latest version of metasfresh</a>.
1. [Test a feature documented in the German manual first](../../pages/webui/index_de).
1. Report any feedback by <a href="https://github.com/metasfresh/metasfresh-documentation/issues" title="metasfresh-documentation on GitHub" target="blank">creating a new issue on GitHub</a> if the documentation needs to be updated.
1. [Switch metasfresh to English](../../webui_collection/EN/SwitchLanguage.html).
1. [Test the same feature in English](../../pages/webui/index_en).
1. Report any feedback on <a href="https://github.com/metasfresh/metasfresh-documentation/issues" title="metasfresh-documentation on GitHub" target="blank">GitHub</a> if fields are missing translation or the documentation needs to be updated.
1. Repeat steps 2 to 6 for as many features as you want to test.

## 2. Install your tools
1. <a href="https://desktop.github.com/" title="Download GitHub Desktop from the official website" target="blank">Download and install GitHub Desktop</a>.
1. [Download, install and configure Atom Editor](how_to_setup_atom_for_contributing_docs).

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
