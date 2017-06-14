---
title: How to setup Atom for contributing docs
layout: default
tags:
  - metasfresh Community
lang: en
---
## Install

Download Atom from [official website](http://atom.io)

## Configuring

### Autocomplete Paths
With this you can easily create links to other markdown files without having them to search.

1. press `Ctrl + Shift + P` to open search
1. search for "install packages and themes"
1. click on `Settings View: install packages and themes`
1. search for "autocomplete-paths"
1. click on "install"

**Usage:** just put / and then a part of the file you are looking for.

e.g. `/sales` will suggest `SalesOrder_recording`.

*Hint:* Combine with Markdown Snippes using `l + TAB` to get `[]()`

### Markdown Image Helper

This package allows you to easily upload and insert images into markdown pages.

1. press `Ctrl + Shift + P` to open search
1. search for "install packages and themes"
1. click on `Settings View: install packages and themes`
1. search for "markdown-image-helper"
1. click on "install"

### Enable Github Style

This setting switches the markdown preview to github style.

1. press `Ctrl + Shift + P` to open search
1. search for "install packages and themes"
1. click on `Settings View: install packages and themes`
1. search for "markdown-preview"
1. click on "settings"
1. enable "Use Github.com" style

 ![](assets/how_to_setup_atom_for_contributing_docs-6110c.png)

### Make Markdown Preview scroll with the text

This Packages automatically scrolls the markdown preview to the position of your cursor in the markdown text.

1. press `Ctrl + Shift + P` to open search
1. search for "install packages and themes"
1. click on `Settings View: install packages and themes`
1. search for "markdown-scroll-sync"
1. click on "install"

## Format Snippets

type the trigger and then press `TAB`

| Trigger     | function    |
| --- | --- |---|
| b       | bold text       |
|code|code|
|i|italic|
|img|embedded image|
|l|	link|
|table|	table|


## Text Snippets
You can edit snippets by going to **Menu** => **file** => **Snippets...**

here you find the [latest snippets:](
https://github.com/metasfresh/metasfresh-documentation/blob/gh-pages/ressources/snippets.cson)

## Shortcuts

1. Use `Ctrl + Shift + M` for markdown preview
1. Use `Ctrl + V` to paste image from clipboard
<br> image will be stored in /assets
1. Use `img` + `TAB` and then click into `()` and  `Ctrl + V` to paste image link



## General Background Info

### Other Markdown Editors

If you install other packages that support markdown, the image helper will stop to work if the language of the document is not "Github Markdown".

Make sure the core package "language-gfm" is enabled (gfm = github flavored markdown)

### User settings

atom stores your settings and packages here: `%userprofile%\.atom`
