---
layout: main-page
title: Çağlayan Demirci
---

{% for post in site.posts %}
	<div class="post_rep"> <!-- ar.rep. -->
		<div class="post_rep_img">
			<a href="{{ post.url }}">
				<img src="{{ post.image }}">
			</a>
		</div>
		<div class="post_rep_text">
			<a href="{{ post.url }}" class="post_rep_title">{{ post.title }}</a>
			<p style="font-size: 1em; margin-top: 5px;">
				{{ post.excerpt }}
				<!-- {{ post.content | strip_html | truncatewords: 20 }} -->
			</p>
			<p class="post_rep_date">{{ post.date | date: "%d.%m.%Y" }}&ensp;&#9679;&ensp;
				<span class="post_rep_tags">
					{% if post.tags.size > 0 %}
						{% if post.tags.size > 1 %}
							{{ post.tags | sort | join: ", " }}
						{% else %}
							{{ post.tags }}
						{% endif %}
					{% endif %}
				</span>
			</p>
		</div>
	</div>
{% endfor %}