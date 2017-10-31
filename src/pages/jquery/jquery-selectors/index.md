---
title: jQuery Selectors
---

## jQuery Selectors

jQuery uses CSS-style selectors to select parts, or elements, of an HTML page. It then lets you do something with the elements using jQuery methods, or functions.

To use one of these selectors, type a dollar sign and parentheses after it--`$()`. This is shorthand for the `jQuery()` function. Inside the parentheses, add the element you want to select. You can use either single- or double-quotes. After this, add a dot after the parentheses and the method you want to use.

Here's an example of a jQuery method that selects a paragraph element, and adds a class of "selected" to it:
```html
<p>This is a paragraph selected by a jQuery method.</p>
```
```javascript
$("p").addClass("selected");
```

In jQuery, the class and ID selectors are like those in CSS.

### Selecting by class
If you want to select elements with a certain class, use a dot (.) and the class name.
```html
<p class="pWithClass">Paragraph with a class.</p>
```
```javascript
$(".pWithClass").css("color", "blue"); // colors the text blue
```

You can also use the class selector in combination with a tag name to be more specific.
```html
<ul class="wishList">My Wish List</ul>`<br>
```
```javascript
$("ul.wishList").append("<li>New blender</li>");
```

### Selecting by ID
If you want to select elements with a certain ID value, use the hash symbol (#) and the ID name.
```html
<li id="liWithID">List item with an ID.</li>
```
```javascript
$("#liWithID").replaceWith("<p>Socks</p>");
```

As with the class selector, this can also be used in combination with a tag name.
```html
<h1 id="headline">News Headline</h1>
```
```javascript
$("h1#headline").css("font-size", "2em");
```

### Selectors that act as filters
There are also selectors that act as filters - they will usually start with colons. For example, the `:first` selector selects the element that is the first child of its parent. Here's an example of an unordered list with some list items. The jQuery selector below the list selects the first `<li>` element in the list--the "One" list item--and then uses the `.css` method to turn the text green.

```html
   <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
   </ul>
```
```javascript
$("li:first").css("color", "green");
```

Another filtering selector, `:contains(text)`, selects elements that have a certain text. Place the text you want to match in the parentheses. Here's an example with two paragraphs. The jQuery selector takes the word "Moto" and changes its color to yellow.

```html
    <p>Hello</p>
    <p>World</p>
```
```javascript
$("p:contains('World')").css("color", "yellow");
```

**Note:** In the jQuery selector, `World` is in single-quotes because it is already inside a pair of double-quotes. Always use single-quotes inside double-quotes to avoid unintentionally ending a string.

These are just a few of the selectors available for use in jQuery. See the More Information section for a link to the complete list on the jQuery website.

#### More Information:
<a href="http://api.jquery.com/category/selectors/" target="_blank">Full list of jQuery selectors.</a>
