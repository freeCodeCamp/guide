---
title: Doctype
---
## Doctype

The `DOCTYPE` needs to be declared in order to let the browser know which version of HTML is being used. You need to declare the `DOCTYPE` at the very top of your HTML file, above everything else. Although it's not an actual HTML element, every HTML file should begin with a `DOCTYPE` declaration in order to be compliant with HTML standards. `DOCTYPE` is a null element that has no content and needs no closing tag.

For past versions of HTML, you would type it out like this:

``` HTML
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
```

However, this has become obsolete with the advent of HTML5. For HTML5 (which almost all new web pages should be), you just need to type it like this:

 ```HTML
	<!DOCTYPE html>
 ```
 
 The reason why it has been simplified is becasue the HTML standard has become a "living standard" with no fixed version numbers.

