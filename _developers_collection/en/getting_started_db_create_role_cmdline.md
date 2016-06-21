---
---

{% highlight bash %}
CREATE ROLE metasfresh LOGIN
  ENCRYPTED PASSWORD 'metasfresh'
  SUPERUSER INHERIT CREATEDB NOCREATEROLE REPLICATION;
{% endhighlight %}