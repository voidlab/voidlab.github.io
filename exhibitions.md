---
layout: page
title: Exhibitions
permalink: /exhibitions/
---
<div class="exhibitions">
{% for item in site.exhibitions %}
	{% include project.html project=item %}
{% endfor %}
</div>