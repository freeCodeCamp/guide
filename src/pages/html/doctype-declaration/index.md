---
title: Doctype Declaration
---
## Doctype Declaration

The `<!DOCTYPE>` declaration must be the very first thing in your HTML document, on line 1 before anything else.
This declaration is not an HTML tag nor entity. Rather, this is telling the browser / compiler what version of HTML your code has been written in. One thing to note is that `<!DOCTYPE html>`,`<!DOCTYPE HTML>`, and `<!doctype html>` all behave the same way. This declaration is not case sensitive.
In modern web applications, using HTML5 is the standard.

#### Doctype in HTML5
Doctype in HTML5 is declared by adding `<!DOCTYPE html>` as the first line in your file. In HTML5 there is only this one, singular way to declare the doctype.

#### Doctype in HTML 4
There are three different types of declaration in HTML 4.01; Strict, Transitional, and Frameset. In HTML 4.01, the <!DOCTYPE> declaration refers to a DTD, because HTML 4.01 was based on SGML. DTD states the rules for the markup language, so each browser knows how to render the content appropriately.
##### HTML 4.01 Strict
This DTD contains all HTML elements and attributes, but does NOT INCLUDE presentational or deprecated elements (like font). Framesets are not allowed.
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

##### HTML 4.01 Transitional
This DTD contains all HTML elements and attributes, INCLUDING presentational and deprecated elements (like font). Framesets are not allowed.
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

##### HTML 4.01 Frameset
This DTD is equal to HTML 4.01 Transitional, but allows the use of frameset content.
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`
