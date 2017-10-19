---
title: Box Shadow
---
# Box Shadow
The box-shadow CSS property allows to add shadow effects to a block-level element.
It takes 5 parameters:
* The horizontal offset
* The vertical offset
* The blur radius (optional)
* The spread radius (optional)
* Color
<br />
You can also set the optional "inset" keyword that changes the shadow from an outer shadow (outset) to an inner shadow.

#### For more informations and examples:
* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b)
* [CSS Tricks - CSS Box Shadow](https://css-tricks.com/snippets/css/css-box-shadow/)

<h3>Box Shadow</h3>
<p>This CSS property shadow effects with different parameters.</p>
<h4>Sample Code</h4>

```box-shadow: 10px 5px 5px black;```

<h4>Box Shadow has following parameters</h4>
<hr>

  <p><strong>1-Horizontal Offset:</strong> positive value means the shadow will be on the right of the box and a negative offset will put the shadow on the left of the box.</p>
  <p><strong>2-Vertical Offset:</strong> negative value means the box-shadow will be above the box and positive one means the shadow will be below the box.</p>
  <p><strong>3-Blur Radius:</strong> if set to 0 the shadow will be sharp, the higher the number, the more blurred it will be, and the further out the shadow will extend. For instance a shadow with 5px of horizontal offset that also has a 5px blur radius will be 10px of total shadow.</p>
  <p><strong>4-spread radius:</strong> positive values increase the size of the shadow, negative values decrease the size. </p>
  <p><strong>5-color:</strong>  takes any color value, like hex, named, rgba or hsla. If the color value is omitted, box shadows are drawn in the foreground color.
  
  <h3>Inner Shadow</h3>
  <p>It is also possible to set an inner shadow</p>
  <h4>Sample Code</h4>
  
  ```box-shadow: inset 0 0 30px #eee;```
  
  <p><strong>Note:</strong> Not all browsers support box-shadow. So you will have to write it separetaly for other non-supporting browsers</p>



