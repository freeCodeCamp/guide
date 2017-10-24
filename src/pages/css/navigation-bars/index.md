---
title: Navigation Bars
---
## Navigation Bars

CSS can do a lot of things to plain HTML navigation bars.

### Example HTML

```
<ul>
	<li><a href="#cats">Cats</a></li>
	<li><a href="#dogs">Dogs</a></li>
	<li><a href="#goldfish">Goldfish</a></li>
</ul>
```

### Notes

The below examples make use of these CSS styling properties.
list-style-type: none; - Removes the bullets. A navigation bar does not need list markers
`margin: 0;` - by default, the browser will set the margin. This will remove it
`padding: 0;` - by default, the browser will set the padding. This will remove it
`float: left;` - use float to get block elements to slide next to each other
`display: block;` - Displaying the links as block elements makes the whole link area clickable (not just the text), and it allows us to specify padding (and height, width, margins, etc. if you want)
`padding: 5px;` - As block elements take up the full width available, they cannot float next to each other. Therefore some padding needs to be specified to make them look better.
`overflow: hidden;` - Overflow specifies whether to clip/add scrollbars when the content of an element is too big to fit in a specified area.  In this case the overflow is clipped, and the rest of the content will be invisible

### Vertical Navigation Bar

Use together with the exmaple HTML code to [see how it looks!](https://jsfiddle.net/)
```
ul {
	list-style-type: none;
	margin: 0;
	padding:0;
}

a {
	display: block;
	width: 60px;
	background-color: #ffee66;
}
```

### Horizontal Navigation Bar

Use together with the exmaple HTML code to [see how it looks!](https://jsfiddle.net/)
```
ul {
	list-style-type: none;
	margin: 0;
	padding:0;
}

li {
	display: inline;
}
```

### Floating List Items

Use together with the exmaple HTML code to [see how it looks!](https://jsfiddle.net/)
```
ul {
	list-style-type: none;
	margin: 0;
	padding:0;
	overflow:hidden;
}

li {
	float: left;
}

a {
	display: block;
	width: 60px;
	background-color: #aaddbb;
}
```
