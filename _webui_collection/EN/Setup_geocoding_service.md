---
title: How do I set up a geocoding service for the area search?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Usage
  - Geographical Data and Functions
  - Area Search
  - Setup
lang: en
sequence: 10
ref: setup_geocoding_service
---

## Overview
To be able to use the [area search in metasfresh](Area_search_geocoding), a geocoding service must first be set up, which transforms the human-readable [addresses](Add_address_tab) (consisting of street, house number, city, postal code, country) into geographical coordinates and displays them on a map.

Once geocoding has been set up, it is recommended to [update the georeferenced data](Update_geocoding) to ensure that all business partner locations that have been entered or imported so far will be included in the area search.

metasfresh currently offers interfaces for the following geocoding services:
- <a href="#google-maps" title="Set up Google Maps">Google Maps</a> <sup>(<em>map view available</em>)</sup>
- <a href="#open-street-maps" title="Set up Open Street Maps">Open Street Maps (OSM)</a> <sup>(<em>map view <strong>not</strong> available</em>)</sup>

| **Note:** |
| :--- |
| ***Only one*** geocoding service can be active at any one time! |

| **Important note:** |
| :--- |
| If you have a large number of business partner entries and use the area search particularly frequently,  we recommend increasing the **Cache Capacity** from 200 to about 500. This will allow you to cache your search strings and maintain search speed even when alternating between different locations during searches. |

## Steps
1. Open "Geocoding Config" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Pick the desired **Geocoding Provider**.

### <a name="google-maps">Set up Google Maps</a>
1. <a href="https://cloud.google.com/maps-platform/pricing/" title="API access via the Google Maps Platform" target="\_blank">Follow these instructions from Google</a> to gain access to the API and generate a personal API key.
1. In the field **Google Maps - API Key**, enter the API key provided by Google for setup. It usually starts with `AIza...`.

### <a name="open-street-maps">Set up Open Street Maps</a>
No changes need to be made to the default settings.

## Next Steps
1. [Update the georeferenced data to ensure that all business partner locations will be included in the area search](Update_geocoding).
1. [Use the area search to limit the results when filtering entries to a specific geographical area](Area_search_geocoding).
