---
title: A Href Attribute
---
## A Href Attribute
The main use of anchor tags - <a></a> - is as hyperlinks. That basically means that they take you somewhere. Hyperlinks require the href property, because it specifies a location. 
A hash - # within a hyperlink specifies an html element id to which the window should be scrolled.

href="#some-id" would scroll to an element on the current page such as <div id="some-id">.

href="//site.com/#some-id" would go to site.com and scroll to the id on that page.
href="#" doesn't specify an id name, but does have a corresponding location - the top of the page. Clicking an anchor with href="#" will move the scroll position to the top.

For instance:

```html
<html>
  <head>
    <title>Href Attribute Example</title>
  </head>
  <body>
    <h1>
      <p>
        <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
      </p>
  </body>
</html>
```
The `<a href>` attribute is supported by all browsers.

### Examples
```html
<a href="#">This is a dead link</a>
<a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a>
```
