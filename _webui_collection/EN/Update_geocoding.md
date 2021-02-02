---
title: How do I update the georeferenced data for area search?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Usage
  - Geographical Data and Functions
  - Area Search
  - Setup
lang: en
sequence: 20
ref: update_geocoding
---

## Overview
After [setting up geocoding](Setup_geocoding_service), it may occur that some business partner locations are not considered by the area search. This can affect business partner entries that were entered before the setup or imported via SQL scripts or REST API.

To ensure that all business partner locations are included in the area search, it is recommended to update the georeferenced data after setup and after a data migration. To do so, please proceed as follows:

## Steps
1. [Log in to metasfresh](Login).
1. Go to your browser's address bar and enter the window ID `/window/121` after the base URL:

   <p style="margin-left:25%; width:50%; border:1px; border-style:solid; border-color:#dddddd; padding:0.5em; text-align:center;">https://{% raw %}<code>{{ base.URL }}</code>{% endraw %}<strong>/window/121</strong></p>

1. Hit `↵ Enter` to apply. The hidden window "Location" opens up.
1. [Start the action](StartAction#actions-menu) "Geocoding update". The geographical coordinates of all business partner locations have now been recalculated.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Use the area search to limit the results when filtering entries to a specific geographical area](Area_search_geocoding).
