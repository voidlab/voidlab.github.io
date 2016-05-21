---
layout: page
title: Projects
permalink: /projects/
---

<div class="exhibitions">
{% for item in site.projects %}
	{% include project.html project=item %}
{% endfor %}
</div>