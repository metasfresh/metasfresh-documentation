---
title: How to set up Jasper Studio environment
layout: default
tags:
  - Reports
lang: en
sequence: 10
ref: set_up_jasper_studio_environment
---

## Precondition
- Make sure your Jasper Studio is this specific Version 6.5.1.
    - Download the source files <a href="https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.fresh/de.metas.fresh.base/src/main/jasperreports/de/metas" title="metasfresh Repository (Public) | github.com" target="\_blank">here</a>.

## Steps

### Add Jasper Project in Jasper Studio
1. After downloading the <a href="https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.fresh/de.metas.fresh.base/src/main/jasperreports/de/metas" title="Download Jasper source files | metasfresh Github Repository (Public)" target="\_blank">source files</a>, open Jasper Studio.
1. In the menu bar, click on **File** and open **New Project**.
1. Choose **JasperReport Project** in the wizard.
1. Click **Next** and name it.
1. Under the tab **Project Explorer**, right-click the project and choose **Build Path** > **Configure Build Path**.
1. In the **Java Build Path** window, click on **Link Source** and **Browse**.
1. Locate the <a href="https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.fresh/de.metas.fresh.base/src/main/jasperreports/de/metas" title="Download Jasper source files | metasfresh Github Repository (Public)" target="\_blank">source files</a> you downloaded earlier and use the following path to access the metasfresh JasperReport documentation:
`metasfresh/backend/de.metas.fresh/de.metas.fresh.base/src/main/jasperreports`
1. Then click **Apply & Close**.
1. Right-click the project again and select **Build Project**.

## Next Steps
- [Edit your Jasper reports](Edit_reports).
