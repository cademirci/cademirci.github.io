---
layout: default
title: Blog
permalink: /blog-on-home
is_navlink: true
navlink_name: Blog
image: ../assets/images/iconbl.png
---

# {{ page.title }}

<img src="{{ page.image }}" class="title_image">

### Recent 3
{% for post in site.posts %}
<ul>
<li> <a href="{{ post.url }}">{{ post.title }}</a> &ensp; {{ post.date | date: "%d.%m.%Y" }}
    {% if post.tags.size > 0 %}
        <span class="post_tags">
            {% if post.tags.size > 1 %}
                [{{ post.tags | sort | join: ", " }}]
            {% else %}
                [{{ post.tags }}]
            {% endif %}
        </span>
    {% endif %}
</li>
</ul>
{% endfor %}

<button class="default_button" type="button" name="button" onclick="window.location.href='/blog'">More</button>
