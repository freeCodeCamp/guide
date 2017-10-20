---
title: A Target Attribute
---
## A Target Attribute

The `<a target>` attribute specifies where to display the link. It refers to a browsing context: a window, a tab, an <iframe>. Common targets are: _self, _blank, _parent, _top.

For instance:

```html
<html>
  <head>
    <title>Target Attribute Example</title>
  </head>
  <body>
    <h1>
      <p>
        <a href="https://www.freecodecamp.org/contribute/" target="_blank">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
      </p>
  </body>
</html>
```
The `<a target>` attribute is supported by all browsers.

### Examples
```html
<a href="https://www.freecodecamp.org" target="_blank">This opens freeCodeCamp in a new window</a>
<a href="https://www.freecodecamp.org" target="_self">This opens freeCodeCamp in the same window</a>
```
