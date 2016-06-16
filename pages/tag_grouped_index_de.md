---
layout: default
title: Tag Index
---

Diese Seite enthält alle innerhalb der Dokumentation vergebenen Tags mit Links to den betreffenden Seiten.
Eine Seite kann mehrere zugeordnete Tags haben.

{% comment %}
Get our different categories and "flatten" them
Thx to http://stackoverflow.com/questions/34242743/distinct-in-jekyll-liquid for getting me started
{% endcomment %}

{% comment %} Create empty arrays {% endcomment %}
{% assign tags = '' | split: ',' %}
{% assign unique_tags = '' | split: ',' %}

{% comment %} 
Map and flatten 
site.documents is a list of all the documents in every collection. See https://jekyllrb.com/docs/variables/
{% endcomment %}
{% assign tags =  site.documents | map: 'tags' | join: ',' | join: ',' | split: ',' %}

{% comment %} Uniqe, i.e. write the distinct values of "tags" into "unique_tags" 
use uniq, see https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
{% endcomment %}
{% assign unique_tags = tags | uniq %}

{% comment %} create one section for each unique tag {% endcomment %}
{% for unique_tag in unique_tags %}
	{% if unique_tag == "" %}
		{% continue %}
	{% endif %}
## Tag {{ unique_tag }}

	{% comment %} iterate all pages which have the current tag and add links to them {% endcomment %}
	
	{% include tag_linklist.md pages=site.documents tag=unique_tag %}

{% endfor %}


	
	
