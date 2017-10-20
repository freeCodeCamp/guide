---
title: Comments in HTML
---
## Comments in HTML

The comment tag is a tool used to leave notes, mostly related to the project or the website. This tag is frequently used to explain something in the code or leave some recommendations about the project.

### Example
```html
<!DOCTYPE html>
<html>
	<body>
		<h1>FreeCodeCamp web</h1>
		<!-- Leave some space between the h1 and the p in order to understand what are we talking about-->
		<p>FreeCodeCamp is an open-source project that needs your help</p>
	</body>
</html>
```
## Conditional Comments
Conditional Comments defines some HTML tags to be excuted when a certain codition is fullfilled. 

### Example
```html
<!DOCTYPE html>
<html>
	<body>
		<!--[if IE 9]>
    			<h1>FreeCodeCamp web</h1>
			<p>FreeCodeCamp is an open-source project that needs your help</p>	
		<![endif]-->
	</body>
</html>
```
<h1> and <p> will be excuted only for Internet Explorer.
