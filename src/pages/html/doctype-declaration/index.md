---
title: Doctype Declaration
---
## Doctype Declaration

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/doctype-declaration/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

# Doctype Declaration

A document type declaration, or DOCTYPE, is an instruction that associates a particular SGML or XML document (for example, a webpage) with a document type definition (DTD). In the serialized form of the document, it manifests as a short string of markup that conforms to a particular syntax. 

* The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.
* The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
  
## Common DOCTYPE Declarations

## HTML 5
```html
<!DOCTYPE html>
```

## HTML 4.01
This DTD contains all HTML elements and attributes, but does NOT INCLUDE presentational or deprecated elements (like font). Framesets are not allowed.
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
## XHTML 1.1
This DTD is equal to XHTML 1.0 Strict, but allows you to add modules (for example to provide ruby support for East-Asian languages).
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

