---
title: How to setup Atom for contributing docs
layout: default
tags:
  - metasfresh Community
lang: en
---
## Install

Download Atom from the <a href="https://atom.io/" title="atom.io" target="\_blank">official website</a>.

## Configuring

### Autocomplete Paths
With this you can easily create links to other markdown files without having them to search.

1. press `Ctrl + Shift + P` to open search
1. search for "Install Packages and Themes"
1. click on `Settings View: Install Packages and Themes`
1. search for "autocomplete-paths"
1. click on "Install"

**Usage:** just put / and then a part of the file you are looking for.

e.g. `/sales` will suggest `SalesOrder_recording`.

*Hint:* Combine with Markdown Snippets using `l + TAB` to get `[]()`

### Markdown Image Helper

This package allows you to easily upload and insert images into markdown pages.

1. press `Ctrl + Shift + P` to open search
1. search for "Install Packages and Themes"
1. click on `Settings View: Install Packages and Themes`
1. search for "markdown-image-helper"
1. click on "Install"

### Enable GitHub Style

This setting switches the markdown preview to GitHub style.

1. press `Ctrl + Shift + P` to open search
1. search for "Installed Packages"
1. click on `Settings View: Installed Packages`
1. search for "markdown-preview"
1. click on "Settings"
1. enable "Use GitHub.com" style

 ![](assets/how_to_setup_atom_for_contributing_docs-6110c.png)

### Make Markdown Preview scroll with the text

This Packages automatically scrolls the markdown preview to the position of your cursor in the markdown text.

1. press `Ctrl + Shift + P` to open search
1. search for "Install Packages and Themes"
1. click on `Settings View: Install Packages and Themes`
1. search for "markdown-scroll-sync"
1. click on "Install"

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
