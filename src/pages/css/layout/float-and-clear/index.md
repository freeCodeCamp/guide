---
title: Float and Clear
---
## Float and Clear

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/layout/float-and-clear/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Float

The _CSS Box Model_ treats every element like a box. You can _position_ these boxes on the page. A _float_ (or floated box) is one that has been taken out of normal flow and moved to the far left or right of its container (container meaning the element that contains the floated element). 

Floated elements are inline, they let content flow alongside.

Here are **five things you need to know about floats**:

1. A floated element is taken out of the normal document flow. Meaning it'll leave the place it was originially at in the document and move to the far left or far right of it's parent (i.e. far right/left of the element which contains the floated element)
2. A floated element only takes up the width of the content inside. If you want it to be a certain size, you add size related properties (`height`, `width`, `padding`) to it
3. Vertically, the floated element is aligned with the top of the containing box
4. Floated items allow content to float alongside them. If there is text, it'll wrap around the floated element. If you want to prevent that, you can use the `clear` property
5. Floated elements are not part of the _normal flow_ of the document, but still remain a part of _the flow_. If you're confused by that statement, read up on [absolute positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning). Basically, a floated element may not be at it's normal position in the flow, but it's still a part of it. Unlike absolutely positioned items where if the position is `absolute`, it'll take the element out of the flow and the elements around the absolutely positioned elements will flow like it didn't exist.

```css
float: none /* this is the default value */
float: left /* move it to the far left of its container */
float: right /* move it to the far right of its container */
```

### Clear
The `clear` property is set on any element that appears after the floated element. You will normally set `clear` to `left`, `right` or `both`.

In very simple words, your are telling the element to stay `clear` of a particular side of a floated element, i.e. do not touch that side. 

Most commonly, the `clear` property is used when the floated elements are of different sizes and are not aligning properly, or you don't want any elements to appear alongside the floated element.

```css
clear: none /* this is the default value */
clear: left /* stay clear of the left side of the floated element */
clear: right /* stay clear of the right side of the floated element */
clear: both /* don't touch either side of the floated element */
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [MDN Web Docs: float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [MDN Web Docs: clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

