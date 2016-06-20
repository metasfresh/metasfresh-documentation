---
title: Style Guide for Documentation
layout: default
---

## Technical Requirements

If you add new files ensure the following:

* filename has extension .md (markdown)
* filename shall only include letters Aa-Zz, numbers 0-9, and _
* UTF-8 **without BOM** character encoding 
* a header for jekyll like:
```
---
title: StyleGuide
layout: default
---
```
* if your file is to be a part of a collection which is used to autogenerate table of contents, make sure its residing in a folder starting with "_"
 e.g. "_howto_collection"
 

## Formatting Requirements

* Please always mark what this document relates to such as whether this is a documentation for system administrators, end-users or just a HOWTO which tells you what steps need to be taken to achieve a special goal.

* We use Markdown to structure and format our text files and use Jekyll to serve these documents. The advantage is that these pages will also become available for online help within the metasfresh ERP. A suitable Windows-based application for writing Markdown documents is an application called WriteMonkey. 

* In a HOWTO document we use numbers rather than bullet points

* As far as translation is concerned we are currently looking at various translation alternatives such as OmegaT, which is a Java-Desktop application as well as localization platforms such as transifex.com, pootle, vertaal etc. but no decision has been made so far.
 
###Title and Headers

 * Set the title in the meta data section used by jekyll 
 * When using headers start with "##" as "#" is already used by the title
