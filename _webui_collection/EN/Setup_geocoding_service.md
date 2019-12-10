---
title: How do I set up a geocoding service for the area search?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Usage
  - Area Search
  - Setup
lang: en
sequence: 10
ref: setup_geocoding_service
---

## Overview
To be able to use the area search in metasfresh, a geocoding service must first be set, which transforms the human-readable addresses (consisting of street, house number, city, postal code, country) into geographical coordinates and displays them on a map.

metasfresh currently offers interfaces for the following geocoding services:
- <a href="#google-maps" title="Set up Google Maps">Google Maps</a> <sup>(<em>map view available</em>)</sup>
- <a href="#open-street-maps" title="Set up Open Street Maps">Open Street Maps (OSM)</a> <sup>(<em>map view <strong>not</strong> available</em>)</sup>

| **Note:** |
| :--- |
| Only one geocoding service can be active at any one time! |

## Steps
1. Open "Geocoding Config" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Pick the desired **Geocoding Provider**.

### <a name="google-maps">Set up Google Maps</a>
1. <a href="https://cloud.google.com/maps-platform/pricing/" title="API access via the Google Maps Platform" target="blank">Follow these instructions from Google</a> to gain access to the API and generate a personal API key.
1. In the field **Google Maps - API Key**, enter the API key provided by Google for setup. It usually starts with `AIza...`.

### <a name="open-street-maps">Set up Open Street Maps</a>
No changes need to be made to the default settings.

---

| **Important note:** |
| :--- |
| If you have a large number of business partner entries and use the area search particularly frequently,  it is appropriate to increase the **Cache Capacity** from 200 to about 500. This will allow you to cache your search strings and maintain search speed even when alternating between different locations during searches. |
