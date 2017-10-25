---
title: Add Different Padding to Each Side of an Element
---
CSS allows you to control the padding of an element on all four sides with `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` attributes.

For example:

```css
.green-box {
background-color: green;
padding-top: 40px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 40px;
}
```

Alternatively this could be written as a single line for padding to keep things more organized:
```css
.green-box {
	background-color: green;
	padding: 40px 20px 20px 40px;
}
```
