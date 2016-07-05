{% comment %} 
Just includes tag_linklist with the "howto_collection" collection
{% endcomment %}

<!-- DEBUG include howto_linklist.md with tag='{{include.tag}}' and lang='{{include.lang}}' -->
{% include tag_linklist.html pages=site.howto_collection tag=include.tag lang=include.lang %}
