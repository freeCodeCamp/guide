---
title: Box Shadow
---
## Box Shadow

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/box-shadow/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

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



