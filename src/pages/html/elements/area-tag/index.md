---
title: Area Tag
---
## Area Tag

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/elements/area-tag/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The `<area>` tag is used to sopecify a hotspot of an image. It is usually associated with a hypertext link attribute.
The element is only used inside of a ´<map>´ tag.
To make it work, you have to link the map to an image, using the usemap attribute.
  
### Example
```html
  <map name="any-name" id="any-name">
    <area shape="rect" coords="50,65,210,265" href="#link1">
    <area shape="rect" coords="250,65,410,265" href="#link2">
    <area shape="rect" coords="450,65,610,265" href="#link3">
  </map>
  <img src="any-image.jpg" alt="any-image" usemap="#any-name">
```
In the shape attribute, you can also use other shapes such as circle or poly.
In the coords property you will define the points based on a x,y table. You can find those points with any image editor.

### Live example
<!-- did not find how to embed a codepen example in here -->
See the Pen <a href="https://codepen.io/beumsk/pen/ePvXwB/">ePvXwB</a>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area

