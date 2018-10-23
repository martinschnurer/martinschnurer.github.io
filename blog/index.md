---
layout: default
title: Hello
---

<div class="text-center"><h3>Blog</h3></div>

<div>
	{% for post in site.posts %}
	    <div class="post">
	    	<div class="post-title">
	        	<a href="{{ post.url }}">{{ post.title }}</a>
	    		<div class="post-date">
	    			{{ post.date | date: "%d.%m.%Y" }}
	    		</div>
	    	</div>
	    </div>
	{% endfor %}
</div>