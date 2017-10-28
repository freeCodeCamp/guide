---
title: Height and Width Dimensions
---
## Height and Width Dimensions

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/height-and-width-dimensions/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

**CSS includes height and width properties to help you specify the size of your elements.**

### CSS Dimension properties:

*width*, *height*, *max-width*, *max-height*

### The width and height properties

The `width` and `height` property defines the width and height of an element. The property can take values of a length(px, pt, em, etc.), a percentage or the keyword `auto`(`auto` - the element will automatically adjust its height/width to allow its content to be displayed correctly).

**Example**

```
div{
   width: 300px;
   height: 200px;
}
```

### The max-height property

The `max-height` property allows you to specify the maximum height of a box. An element that has `max-height` applied will not be taller than the value specified, even if the height property is set to something larger. For example, if the `height` is 300px and the `max-height` is 100px, the actual height of the element will be 100px.

### The min-height property

The `min-height` property allows you to specify the minimum height of a box. An element to which `min-height` is applied will never be smaller than the minimum height specified.

### The max-width property

The `max-width` property allows you to specify the maximum content width of a box. An element to which a `max-width` is applied will never be wider than the value specified even if the width property is set to something larger.

### The min-width property

The `min-width` property allows you to spcify the minimum content width of a box. An element to which `min-width` is applied will never be narrower than the minimum width specified.  


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://www.w3schools.com/css/css_dimension.asp">CSS Height and Width Dimensions</a>


