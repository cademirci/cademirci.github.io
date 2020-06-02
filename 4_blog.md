---
layout: default
title: Blog
permalink: /blog-on-home
is_navlink: true
navlink_name: Blog
image: ../assets/images/icon_blog.png
---

# {{ page.title }}

<img src="{{ page.image }}" class="blog_image">

### Recent 3 Posts
{% for post in site.posts %}
{% if forloop.index < 4 %}
<ul>
    <li> <a href="{{ post.url }}">{{ post.title }}</a> &ensp; {{ post.date | date: "%d.%m.%Y" }}
        {% if post.tags.size > 0 %}
            <span class="post_tags" style="color: #53ac80">
                {% if post.tags.size > 1 %}
                    [{{ post.tags | sort | join: ", " }}]
                {% else %}
                    [{{ post.tags }}]
                {% endif %}
            </span>
        {% endif %}
    </li>
</ul>
{% endif %}
{% endfor %}

<button class="default_button" id="blogPageButton">Go to the Blog</button>
