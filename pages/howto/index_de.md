---
layout: default
title: Howto Tag Index
---

Diese Seite enthält alle innerhalb der Howto-Dokumentation vergebenen Tags mit Links to den betreffenden Seiten.
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
{% endcomment %}
{% assign tags =  site.howto_collection | map: 'tags' | join: ',' | join: ',' | split: ',' %}

{% comment %} Uniqe, i.e. write the distinct values of "tags" into "unique_tags" 
use uniq, see https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
{% endcomment %}
{% assign unique_tags = tags | uniq %}

{% comment %} create one section for each unique tag {% endcomment %}
{% for unique_tag in unique_tags %}
	{% if unique_tag == "" %}
		{% continue %}
	{% endif %}
## Tag "{{ unique_tag }}"

	{% comment %} iterate all pages which have the current tag and add links to them {% endcomment %}
	
	{% for link in site.howto_collection %}

		{% if link.tags contains unique_tag %}
 * [{{ link.title }}]({{ site.github.url }}/{{ link.url }})
		{% endif %}

	{% endfor %}

{% endfor %}


	
	