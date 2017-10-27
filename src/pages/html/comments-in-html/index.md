---
title: Comments in HTML
---
## Comments in HTML

The comment tag is an element used to leave notes, mostly related to the project or the website. This tag is frequently used to explain something in the code or leave some recommendations about the project. The comment tag also makes it easier for the developer to come back and understand the code he's written at a later stage.

It is good practice to add comments to your code, especially when working with a team or at a company.  This helps future developers or fellow teammates know what is going on more easily when they look at your code. 

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

While comments can be extremely useful, keep in mind: make sure to only write where they are needed. Every line of your HTML document does not need to have a comment associated with it. 

### Example
```html

<!DOCTYPE html>
<html>
	<body><!--start of body-->
		<h1>FreeCodeCamp web</h1><!--Main header--!>
		<!-- additional comments that do not explain anything to their reader add only clutter to code! -->
		<p>FreeCodeCamp is an open-source project that needs your help</p>
	</body><!--end of body section-->
</html>
```
Additional comments that do not explain anything to their reader add only clutter to code. If it's obvious, it doesn't need a comment. 


