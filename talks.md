---
layout: page
title: Talks
permalink: /talks/
---
<div class="talks">
{% for item in site.talks %}
	{% include project.html project=item %}
{% endfor %}
</div>