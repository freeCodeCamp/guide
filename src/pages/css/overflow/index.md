---
title: Overflow
---
# Overflow

The `overflow` property specifies what happens if content overflows an element's box (this property only works for block elements with a specified height).

This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.

For example, a given block-level element (`<div>`) set to 300px wide, that contains an image that is 400px wide. The image will stick out of the div and be visible by default. However, if the overflow value is set to hidden, the image will cut off at 300px. 

## Values

* `visible`: This is the default value of the property. Content is not clipped when it's bigger than the box. 
* `hidden`: Overflowing content will be hidden. 
* `scroll`: Similar to hidden, but users will be able to scroll through the hidden content.
* `auto`: If the content proceeds outside its box, then that content will be hidden, whilst a scrollbar should be visible for users to read the rest of the content.
* `initial`: Uses the default value which is visible.
* `inherit`: Sets the overflow to the value of its parent element. 

## Examples

### Visible: 
```css
.box-element { overflow: visible; }
```
<a href='https://s26.postimg.org/gweu6g5yh/1-vissible.png' target='_blank' rel='nofollow'>![1-vissible.png</a>](https://postimg.org/image/6z3tddycl/)

### Hidden:
```css
.box-element { overflow: hidden; }
```
<a href='https://s26.postimg.org/l49mf77e1/2-hidden.png' target='_blank' rel='nofollow'>![2-hidden.png</a>](https://postimg.org/image/9rx0xeyp1/)

### Scroll:
```css
.box-element { overflow: scroll; }
```
<a href='https://s26.postimg.org/d8z30dxrd/3-scroll.png' target='_blank' rel='nofollow'>![3-scroll.png</a>](https://postimg.org/image/mtipn9n39/)

### Auto:
```css
.box-element { overflow: auto; }
```
<a href='https://s26.postimg.org/z5q7ei0bt/4-auto.png' target='_blank' rel='nofollow'>![4-auto.png</a>](https://postimg.org/image/uju365esl/)

## overflow-x and overflow-y

* `overflow-x`: Allows the user to scroll through the content that extends beyond the height of the box element.
* `overflow-y`: Allows the user to scroll through the content that extends beyond the width of the box.

```css
  .box-element {
    overflow-x: scroll;
    overflow-y: auto;
  }
```
And the `.box-element` will look like this:
<a href='https://s26.postimg.org/ff2kmdfzd/5-_Xand_Y.png' target='_blank' rel='nofollow'>![5-_Xand_Y.png</a>](https://postimg.org/image/4fhdarpk5/)

If the content overflows the Y-axis, then that content will be hidden, whilst a scrollbar should be visible for users to read the rest of the content.
