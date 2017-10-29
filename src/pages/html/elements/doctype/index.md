---
title: DOCTYPE
---
## DOCTYPE
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The Document Type Declaration, or DOCTYPE, instructs the browser which version of HTML the document is using so that it can attempt to render the page correctly. 

### Usage
All HTML documents should include a DOCTYPE, and it should appear at the very top of the document, before the opening `<html>` tag. For HTML5 documents, the declaration looks like this: `<!DOCTYPE html>`. Your basic HTML5 webpage structure should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
  <!-- Stuff -->
  </head>
  <body>
  <!-- More stuff -->
  </body>
</html>
```

### Legacy declarations
There is very little reason to create a new web page using an old standard, however if you work with legacy code you may encounter one of the following declarations. Please note that these declarations have been split onto multiple lines; this is for readability and does not affect the declaration in any way.

##### XHTML 1.1:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

##### XHTML 1.0 Strict:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

##### XHTML 1.0 Transitional:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

##### HTML 4.01 Strict:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

[W3.org](https://www.w3.org/wiki/Doctypes_and_markup_styles)

