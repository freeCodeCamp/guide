---
title: Display Property
---
## Display Property

`display` is a shorthand property which describes the position of an element within the flow of the page, and/or the position and flow of its child elements.

There are a number of values for `display`, but the four most common are `inline`, `block`, `flex`, and `none`

### None

An element with `{display: none}` will not render; that is, it will not be seen by the user.


### Inline

Elements with `{display: inline}` will fall in line with their parent and sibling elements. An inline element will not break to a new line. Think of an `<a>` tag sitting within a `<p>`. 

Inline is the default behavior for elements like `<em>`, `<span>`, and `<a>`


### Block

The easiest way to think of `{display: block}` is that it causes the element to break to a new line with a full width bounding box. 

Block is the default behavior for elements like `<p>`, `<div>`, and `<section>`


### Flex

`{display: flex}` is slightly more complex in that it describes the position of the target element's children, rather than describing its own position within the page. Along with a variety of supporting rules, flex will distribute or arrange child elements along the main axis of the parent. 
![see more](https://guide.freecodecamp.org/css/layout/flexbox)

### Two More Things

1) `display` is a shorthand property; that is, it is a combination of two or more properties. In this case, it is shorthand for, among others, `display-inside` and `display-outside`. In practically, this means that an element can have `{display: block flex}`

2) There are over 20 values for `display`, but these four are the most common and the ones working developers will see, and work with, most of the time. 


#### More Information:
https://developer.mozilla.org/en-US/docs/Web/CSS/display
https://css-tricks.com/almanac/properties/d/display/


