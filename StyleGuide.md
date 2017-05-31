---
title: Style Guide for Documentation
layout: default
lang: en
ref: styleguide
---

## Technical Requirements

If you add new files ensure the following:

* filename has extension .md (markdown)
* filename shall only include letters Aa-Zz, numbers 0-9, and _
* UTF-8 **without BOM** character encoding 
* a header (called *front matter*) for jekyll like this:
```
---
title: StyleGuide
layout: default
lang: en
ref: my_lang_independen_name
---
```
* notes about the header:
 - "title" will be displayed as the page's title. Usually it makes sense to use `<h2>` (html) or `##` (markdown) for your own section titles in the file
 - "layout" isn't important right now..it might even be factored out in future
 - "lang" shall be the abbreviation for the article's language. Examples: en = english, de = german, es = spanish, zh = chinese
 - "ref" is required to identify different language version of the same article, so a german howto and its translations all need to have the same `ref` value together with their respective `lang` value. That way the system knows that they belong together and which is which language.
 - Credits for `ref` and `lang` go to https://www.sylvaindurand.org/making-jekyll-multilingual/ where it is also explained nicely.

* if your file is to be a part of a collection which is used to autogenerate table of contents, make sure its residing in a folder starting with "_"
 e.g. "_howto_collection"
 
* make use of `{{ site.github.url }}`
 - instead of `../images/myimage-png`, use `{{ site.github.url }}/images/myimage-png`
 - this makes sure that the file which contains the link can be moved around without the link breaking.

## Formatting Requirements

* Please always mark what this document relates to such as whether this is a documentation for system administrators, end-users or just a HOWTO which tells you what steps need to be taken to achieve a special goal.

* We use Markdown to structure and format our text files and use Jekyll to serve these documents. The advantage is that these pages will also become available for online help within the metasfresh ERP. A suitable Windows-based application for writing Markdown documents is an application called WriteMonkey. 

* In a HOWTO document we use numbers rather than bullet points

* As far as translation is concerned we are currently looking at various translation alternatives such as OmegaT, which is a Java-Desktop application as well as localization platforms such as transifex.com, pootle, vertaal etc. but no decision has been made so far.
 
###Title and Headers

 * Set the title in the meta data section used by jekyll 
 * When using headers start with "##" as "#" is already used by the title (also see the note about `title` in the jekyll header further up)

### Hinweise

1. dsfsd
1. sdfds Feld **tralla** 

   **Hinweis**: tesd fsdfsd fds

1. tesdf
1. sdfsdf
