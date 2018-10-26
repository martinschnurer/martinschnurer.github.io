---
layout: default
title: Hello
---

<div class="text-center"><h3>Blog</h3></div>

<div class="container">
	{% for post in site.posts %}
		<div class="row post clickable" onclick="window.location='{{ post.url }}'">
			<div class="post-title col-sm-3">
				<a href="{{ post.url }}">{{ post.title }}</a>
				<div class="post-date">
					{{ post.date | date: "%d.%m.%Y" }}
				</div>
			</div>
			<div class="description col-sm-9">
			{%if post.description %} {{ post.description }} {% endif %}
			</div>
		</div>
	{% endfor %}
</div>