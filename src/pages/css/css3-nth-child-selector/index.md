---
title: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

The Nth-Child selector is used to interact with a specific child in a tree of siblings. A practical example is shown below:
```
//Here is a parent list with three child elements 
<ul class="example">
	<li id="first">
		I'm the first child	
	</li>
	<li id="second">
		I'm the second child
	</li>
	<li id="third">
		I'm the third child
	</li>
</ul>
```
```
//CSS to make the font color for the first child blue
.example:nth-child(1) {
	color: blue;
}

//CSS to make background color green for third child
.example:nth-child(3) {
	background-color: green;
}
```
Important note: The nth-child selector is not zero based, like in many other instances of programming. This means that the first child is :nth-child(1). 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)


