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

### Markdown Image Helper

1. press `Ctrl + Shift + P` to open search
1. search for "install packages and themes"
1. click on `Settings View: install packages and themes`
1. search for "markdown-image-helper"
1. click on "install"

### Enable Github Style

1. press `Ctrl + Shift + P` to open search
1. search for "install packages and themes"
1. click on `Settings View: install packages and themes`
1. search for "markdown-preview"
1. click on "settings"
1. enable "Use Github.com" style

 ![](assets/how_to_setup_atom_for_contributing_docs-6110c.png)

## Markdown Snippets

type the trigger and then press `TAB`

| Trigger     | Body    |
| :------------- | :------------- |
| b       | bold text       |
|code|code|
|i|italic|
|img|embedded image|
|l|	link|
|table|	table|

## Shortcuts

1. Use `Ctrl + Shift + M` for markdown preview
1. Use `Ctrl + V` to paste image from clipboard
<br> image will be stored in /assets
1. Use `img` + `TAB` and then click into `()` and  `Ctrl + V` to paste image link

## General Info

### Other Markdown Editors

If you install other packages that support markdown, the image helper will stop to work if the language of the document is not "Github Markdown".

Make sure the core package "language-gfm" is enabled (gfm = github flavored markdown)

### User settings

atom stores your settings and packages here:

windows: %userprofile%\.atom
