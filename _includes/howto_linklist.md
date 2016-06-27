{% comment %} 
Just includes tag_linklist with the "howto_collection" collection
{% endcomment %}
<!-- include howto_linklist.md with tag='{{include.tag}}' -->
{% include tag_linklist.html pages=site.howto_collection tag=include.tag %}
