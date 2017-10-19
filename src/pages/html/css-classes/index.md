---
title: CSS Classes
---
## CSS Classes

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
You may be wondering if it is possible to give an HTML element multiple looks with CSS. Say for example that sometimes you want the font to be large and white, while other times you would prefer the font to be small and black. CSS would not be very useful if it did not allow you to have many different types of formats for a single HTML tag. Well, you are in luck! CSS allows you to do just that with the use of classes.

Using classes is simple. You just need to add an extension to the typical CSS code and make sure you specify this extension in your HTML. Let's try this with an example of making two paragraphs that behave differently. First, we begin with the CSS code, note the red text.

CSS Code:
p.first{ color: blue; }
p.second{ color: red; }


HTML Code:
<html>
<body>
<p>This is a normal paragraph.</p>
<p class="first">This is a paragraph that uses the p.first CSS code!</p>
<p class="second">This is a paragraph that uses the p.second CSS code!</p>
...

#### More Information:

