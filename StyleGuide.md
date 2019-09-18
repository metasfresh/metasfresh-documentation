---
title: Style Guide for Documentation
layout: default
lang: en
ref: styleguide
---

## Technical Requirements
If you add new files ensure the following:
- thr filename has the extension `.md` (markdown)
- the filename only includes letters `Aa-Zz`, numbers `0-9`, and `_` (underscore)
- UTF-8 **without BOM** character encoding
- the file begins with a YAML-header (called [*front matter*](https://jekyllrb.com/docs/front-matter/)) containing meta data for Jekyll that looks something like this:

  ```
  ---
  title: Title of the Article
  layout: default
  tags:
    - Category name
    - Another category
  lang: en
  sequence: 10
  ref: reference_filename_in_english
  ---
  ```

### Notes about the YAML-header:
  - `title` will be displayed as the page's title. Usually it makes sense to use `<h2>` (html) or `##` (markdown) for your own section titles in the file.
  - `layout` should always be set to *default* value for the time being.
  - `tags` will sort the pages into category (sub)sections.
  - `lang` shall be the two-letter language code (in acc. with ISO 639-1:2002).<br>Examples: en = English, de = German, es = Spanish, zh = Chinese, etc.
  - `sequence` will put the articles in the defined order (10, 20, 30, ...). If no sequence is defined, the articles are sorted alphabetically.
  - `ref` is required to identify different language versions of the same article, i.e. a German how-to and its translations all need to have the same identical `ref` value together with their respective `lang` value. That way the system knows that they belong together and it can determine the language of each article.
    - Credits for `ref` and `lang` go to ***Sylvain Durand*** who explains this comprehensibly on his [website](https://www.sylvaindurand.org/making-jekyll-multilingual/).
  - If your file is to be a part of a collection which is used to auto-generate table of contents, make sure it is residing in a folder starting with `_` (underscore), e.g. `_howto_collection`.
  - Make use of `{{ site.github.url }}`.
    - Instead of `../images/myimage.png`, use `{{ site.github.url }}/images/myimage.png`. This ensures that the file which contains the link can be moved around without the link breaking.

## Formatting Requirements

### Title and Headers
- Put the page title of the how-to in the meta data section (front matter) used by Jekyll.
- When using headers, start with `##` as `#` is already reserved for the page title (also see the note above about `title` in the Jekyll header).

### Notes
When you are creating a new how-to, best practice is to start off with duplicating an existing file and saving it under a new meaningful filename. Then just edit the file as required. This way mistakes in the front matter are prevented and you can use the existing documentation as a point of reference for formatting and layout.
