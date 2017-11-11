---
title: Comments in HTML
---
## Comments in HTML

The comment tag is an element used to leave notes, mostly related to the project or the website. This tag is frequently used to explain something in the code or leave some recommendations about the project. The comment tag also makes it easier for the developer to come back and understand the code he's written at a later stage.

It is good practice to add comments to your code, especially when working with a team or at a company.  This helps future developers or fellow teammates know what is going on more easily when they look at your code.  

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
