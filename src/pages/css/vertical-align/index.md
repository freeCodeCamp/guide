---
title: Vertical Align
---
## Vertical Align

**The line-height method**

This method works when you want to center vertically one line of text. All you need to do is set the line height higher than the font size.

By default, free space will be distributed evenly from the top and bottom of the text. And the line will be centered vertically. Often the height of the line is made equal to the height of the element.

HTML:

```html
<div id="parent">
  <div id="child">Some text</div>
</div>
```

CSS:

```css
#child {
  line-height: 200px;
}
```

**Centering the image with line-height**

And what if the content is a picture? Will the above method work? The answer lies in another line of CSS code.

HTML:

```html
<div id="parent">
  <img src="image.png" alt="" />
</div>
```

CSS:

```css
#parent {
  line-height: 200px;
}
#parent img {
  vertical-align: middle;
}
```
The value of the line-height property must be greater than the height of the image.

**CSS Table Method**

It was mentioned above that the vertical-align property is used for table cells, where it works perfectly. We can display our element as a table cell and use the vertical-align property for vertical content centering.

Note: The CSS table is not the same as the HTML table.

HTML:

```html
<div id="parent">
  <div id="child">Сontent</div>
</div>
```

CSS:

```css
#parent {display: table;}
#child {
  display: table-cell;
  vertical-align: middle;
}
```

We set the table output for the parent div element, and the nested div element is output as a table cell. Now you can use the vertical-align property of the inner container. All that is in it will be centered vertically.

Unlike the method described above, in this case the content can be dynamic, since the div element will resize in accordance with its content.

The disadvantage of this method is that it does not work in older versions of IE. You have to use the display: inline-block property for a nested container.

**Absolute positioning and negative margins**

This method also works in all browsers. But it requires that the centered element be given a height.

In the example code, the horizontal and vertical alignment is performed simultaneously:

HTML:

```html
<div id="parent">
  <div id="child">Сontent</div>
</div>
```

CSS:

```css
#parent {position: relative;}
#child {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 30%;
  width: 50%;
  margin: -15% 0 0 -25%;
}
```

First, set the positioning type of the elements. Then, for the nested `div` element, set the top and left properties to 50%, which corresponds to the center of the parent element. But in the center is the left upper corner of the enclosed element. Therefore, you need to raise it up (half the height) and move it to the left (half the width), and then the center will coincide with the center of the parent element. So knowledge of the height of the element in this case is necessary. Then we assign the negative values of the upper and left fields to the element equal to half the height and width, respectively.

**Absolute positioning and stretching**

In the example code, vertical and horizontal centering is performed.

HTML:

```html
<div id="parent">
  <div id="child">Сontent</div>
</div>
```
CSS:
```css
#parent {position: relative;}
#child {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 30%;
  margin: auto;
}
```

**Equal spacing from the top and bottom**

This method explicitly sets equal indentations at the top and bottom of the parent element.

HTML:

```html
<div id="parent">
  <div id="child">Сontent</div>
</div>
```

CSS:
```css
#parent {
  padding: 5% 0;
}
#child {
  padding: 10% 0;
}
```

In the CSS of the example code, the indents from the top and bottom are specified for both elements. For the nested element, the indentation will serve for vertical centering. And the indents of the parent element will center the nested element in it.

Relative units of measure are used to dynamically resize elements. And for absolute units of measurement it is necessary to make calculations.

For example, if the parent element has a height of 400 px, and the embedded element is 100px, then indentation of 150px is required from above and below.

`150 + 150 + 100 = 400`

Using % allows calculations to be left to the browser.
This method works everywhere. The downside is the need for calculations.

**Floating div**

This method uses an empty div element that floats and helps to control the position of our nested element in the document. Note that the floating div is placed before our nested element in the HTML code.

HTML:

```html
<div id="parent">
  <div id="floater"></div>
  <div id="child">Содержание</div>
</div>
```

CSS:

```css
#parent {height: 250px;}
#floater {
  float: left;
  height: 50%;
  width: 100%;
  margin-bottom: -50px;
}
#child {
  clear: both;
  height: 100px;
}
```

We move the empty `div` to the left or right and set its height to 50% of the parent element. Thus, it will fill the upper half of the parent element.

Since this `div` is floating, it is removed from the normal document flow, and we need to cancel the flow around the text for the nested element. The example uses `clear: both`, but it's enough to use the same direction as the floating div element.

The upper border of the nested `div` element is directly below the lower boundary of the empty div element. We need to move the nested element up by half the height of the floating empty element. To solve the problem, use the negative value of the `margin-bottom` property for the floating empty div element.

**Сonclusion**
All described methods are easy to use. The difficulty is that none of them is suitable for all cases. It is necessary to analyze the project and choose the one that best suits the requirements.
