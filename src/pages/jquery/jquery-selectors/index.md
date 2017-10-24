---
title: jQuery Selectors
---

## jQuery Selectors

jQuery uses CSS-style selectors to select parts, or elements, of an HTML page. It then lets you do something with the elements using jQuery methods, or functions.

To use one of these selectors, type a dollar sign and parentheses after it: `$()`. This is shorthand for the `jQuery()` function. Inside the parentheses, add the element you want to select. You can use either single- or double-quotes. After this, add a dot after the parentheses and the method you want to use.

Here's an example of using jQuery to select a paragraph element, and add the class `selected` to it:

```javascript
<p>This is a paragraph selected by a jQuery method.</p>

$("p").addClass("selected");
```

In jQuery, the class and ID selectors are the same as in CSS. If you want to select elements with a certain class, use a dot (`.`) and the class name. If you want to select elements with a certain ID, use the hash symbol (`#`) and the ID name. Note that HTML is not case-sensitive, therefore it is best practice to keep HTML markup and CSS selectors lowercase.

Selecting by class:

```javascript
<p class="p-with-class">Paragraph with a class.</p>

$(".p-with-class").css("color", "blue"); // colors the text blue
```

Selecting by ID:

```javascript
<li id="li-with-id">List item with an ID.</li>

$("#li-with-id").replaceWith("<p>Socks</p>");
```

You can also select certain elements along with their classes and IDs:

Selecting with classes:

```javascript
<ul class="wish-list">My Wish List</ul>

// This adds a new li element to the end of the list
$("ul.wish-list").append("<li>New blender</li>");
```

Selecting with IDs:

```javascript
<h1 id="headline">News Headline</h1>

$("h1#headline").css("font-size", "2em");
```

There are also selectors that act as filters - they will usually start with colons. For example, the `:first` selector selects the element that is the first child of its parent. Here's an example of an unordered list with some list items. The jQuery selector below the list selects the first `<li>` element in the list - the list item containing "One" - and then uses the `.css` method to turn the text green.

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
