---
layout: default
permalink: /stats
---

<style>
table {
	border: 1px solid #ccc;
}
td {
	border: 1px solid #ccc;
	padding: 10px;
}
</style>


<h3>MSB</h3>
<table>
	<th><td>date</td><td>count</td></th>
{% for s in site.data.msb %}
	<tr>
		<td>{{ s.id }}</td>
		<td>{{ s.date }}</td>
		<td>{{ s.count }}</td>
	</tr>
{% endfor %}
</table>