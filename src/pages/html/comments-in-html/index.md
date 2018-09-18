---
title: Comments in HTML
---
## Comments in HTML

The comment tag is an element used to leave notes, mostly related to the project or the website. It will not be rendered in the browser. This tag is frequently used to explain something in the code or leave some recommendations about the project. The comment tag also makes it easier for the developer to come back and understand the code they've written at a later stage.

It is good practice to add comments to your code, especially when working with a team or at a company.  

Comments are started with `<!--` and ended with `-->`, and can span multiple lines. They can contain code or text, and won't appear on the front-end of the website when a user visits a page. You can view comments through the Inspector Console, or by viewing Page Source.

### Example
```html

<!-- You can comment out a large number of lines like this.
Author: xyz
Date: xx/xx/xxxx
Purpose: abc
-->
Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR
<!DOCTYPE html>
<html>
	<body>
		<h1>FreeCodeCamp web</h1>
		<!-- Leave some space between the h1 and the p in order to understand what are we talking about-->
		<p>FreeCodeCamp is an open-source project that needs your help</p>
	        <!-- For readability of code use proper indentation -->
	</body>
</html>
```
## Conditional Comments
Conditional Comments defines some HTML tags to be excuted when a certain codition is fullfilled. 

Conditional Comments are only recognised by Internet Explorer Version 5 through to Version 9 - IE5 - IE9.

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

### IE Conditional Comments

These comments are only available in Internet Explorer and can be used up to IE9. In the current times, there is a good change you will never see them, but it is good to know about their existance. Conditional comments are a way to serve a different experience for different client browsers. For example:

```html
<!--[if lt IE 9]> <p>Your browser is lower then IE9</p> <![endif]-->     
<!--[if IE 9]> <p>Your browser is IE9</p> <![endif]-->
<!--[if gt IE 9]> <p>Your browser is greater then IE9</p> <![endif]-->
```

[About conditional comments](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)
