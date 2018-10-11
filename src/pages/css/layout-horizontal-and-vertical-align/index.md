---
title: Layout Horizontal and Vertical Align
---
# Layout Horizontal and Vertical Align

The layout-align directive takes two words. The first word says how the children will be aligned in the layout's direction, and the second word says how the children will be aligned perpendicular to the layout's direction.

Only one value is required for this directive. For example,``` layout="row" layout-align="center"``` would make the elements center horizontally and use the default behavior vertically.

```layout="column" layout-align="center end"``` would make children align along the center vertically and along the end (right) horizontally.

### Center Align Elements

To make a element(like ```<div>```) centered horizontally, we basically use the property ```margin: auto```
  
Giving width, padding, and border prevents streatching out of the element out of the container.

```css
.class_name {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}
```

### Left and Right Align - Using position

One method for aligning elements is to use ```position: absolute;```:

```css
.class_name {
    position: absolute;
    right: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```
```Note```:Absolute positioned elements are removed from the normal flow, and can overlap elements.

### Left and Right Align - Using float

Another method for aligning elements is to use the ```float``` property:

```css
.class_name {
    float: right;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

```Note: If an element is taller than the element containing it, and it is floated, it will overflow outside of its container. You can use the "clearfix" hack to fix this (see example below).```
