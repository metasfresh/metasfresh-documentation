---
layout: default
title: How To Dokumentation
---

# Kategorien

{% comment %}
Get out different categories and "flatten" them
Thx to http://stackoverflow.com/questions/34242743/distinct-in-jekyll-liquid
{% endcomment %}

{% comment %} Create empty arrays {% endcomment %}
{% assign tags = '' | split: ',' %}
{% assign unique_tags = '' | split: ',' %}

tags (expecting empty array) = {{tags}}
<p/>
site.members = {{ site.members }}
<p/>
site.pages = {{ site.pages }}
<p/>
site.documents = {{ site.documents }}
<p/>


{% comment %} Map and flatten {% endcomment %}
{% assign tags =  site.members | map: 'tags' | join: ',' | join: ',' | split: ',' %}

tags (expecting all of them) = {{tags}}
<p/>

{% comment %} Uniqe, i.e. write the distinct values of "tags" into "unique_tags" {% endcomment %}
{% assign tags = tags | sort %}
{% for tag in tags %}

  {% comment %} If not equal to previous then it must be unique as sorted {% endcomment %}
  {% unless tag == previous %}

    {% comment %} Push to unique_tags {% endcomment %}
    {% assign unique_tags = unique_tags | push: tag %}
  {% endunless %}

  {% assign previous = tag %}
{% endfor %}

tags (uniqued) = {{tags}}
<p/>


{% comment %} create one section for each unique tag {% endcomment %}
{% for unique_tag in unique_tags %}

## {{ unique_tag }}

	{% comment %} iterate all pages which have the current tag and add links to them {% endcomment %}
	<ul>
	{% assign pages_with_tag = site.members | where:{{tag}},{{unique_tag}} %}
    {% for link in pages_with_tag %}
	        <li>
	        	<a href="{{ site.baseurl }}{{ link.url }}">{{ link.title }}</a>
	        </li>
	{% endfor %}
	</ul>

{% endfor %}


	
	