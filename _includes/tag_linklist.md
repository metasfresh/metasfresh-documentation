

	{% comment %} iterate all pages which have the given tag and add links to them {% endcomment %}
	{% for link in include.pages %}

		{% if link.tags contains include.tag %}
 * [{{ link.title }}]({{ site.baseurl }}{{ link.url }})
		{% endif %}

	{% endfor %}