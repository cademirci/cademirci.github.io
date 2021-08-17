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
    <li> 
        <a href="{{ post.url }}">
            <span style="color: #669">{% if post.is-serie %}serie {{ post.serie-title }} - {{ post.episode-number }} -{% endif %}</span>
            {{ post.title }} <br class="phone_breakline" /><span style="color: #efe">{{ post.date | date: "%d.%m.%Y" }}</span>
            {% if post.tags.size > 0 %}
                <span class="post_tags" style="color: #53ac80">
                    {% if post.tags.size > 1 %}
                        [{{ post.tags | sort | join: ", " }}]
                    {% else %}
                        [{{ post.tags }}]
                    {% endif %}
                </span>
            {% endif %}
        </a>
    </li>
</ul>
{% endif %}
{% endfor %}

<button class="default_button" id="blogPageButton">Visit Blog</button>
