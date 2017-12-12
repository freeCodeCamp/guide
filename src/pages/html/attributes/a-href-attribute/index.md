---
title: A Href Attribute
---
## A Href Attribute

The `<a href>` attribute refers to a destination provided by a link. The `a` (anchor) tag is dead without the `<href>` attribute. Sometimes in your workflow, you don't want a live link or you won't know the link destination yet. In this case, it's useful to set the `href` attribute to `"#"` to create a dead link.

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
