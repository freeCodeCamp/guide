---
title: Z Index
---
## Z Index

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

`z-index` is a parameter in CSS that controls how an element is displayed on top of other elements.

An element with a greater stack order is always in front of an element with a lower stack order.

### Usage


When not set, an elements `z-index` is set to auto. This means that the stack order is determined by element placement.

For example:

```html
        <html>
        <p>This is text behind anything ahead of it.</p>
          <p>This is text in front of anything before it.</p>
        </html>
```

### Compatibility
`z-index` was implemented in CSS2, and it is compatible with most modern web browsers. 

| Web Browser  | Version |
| ------------- | ------------- |
| Chrome  | 1.0+  |
| Microsoft Edge  | 4.0+  |
| Mozilla Firefox  | 3.0+  |
| Safari  | 1.0+  |
| Opera  | 4.0+  |


### Syntax

`z-index: auto|number|initial|inherit;`

### Examples

* W3Schools- https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_z-index 
* MDN (hosted on JSFiddle) - https://jsfiddle.net/5of1o7pa/


