---
layout: default
title: Arşiv
---

**2018**

{% for posts in site.posts %}
{{ post.date | date: "%d.%m.%Y" }} <a href="{{ post.url }}">{{ post.title }}</a>
{% if post.tags.size > 0 %}
{% if post.tags.size > 1 %}
{{ post.tags | sort | join: ", " }}
{% else %}
{{ post.tags }}
{% endif %}
{% endif %}
{% endfor %}

<style>
#ar { box-shadow: 0 5px 5px rgb(0, 128, 64, 0.5)}
</style>
