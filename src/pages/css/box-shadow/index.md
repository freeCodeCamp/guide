---
title: Box Shadow
---
## Box Shadow
The box-shadow property attaches one or more shadows to an element. 
This option gives you the power to easily design wonderful shadow effects.

### Syntax:
```css
div {
  box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
}
```
* #### inset 
If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).
The presence of the inset keyword changes the shadow to one inside the frame

* #### offset-x offset-y
These are two <length> values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. <offset-y> specifies the vertical distance. Negative values place the shadow above the element. See <length> for possible units.

* #### blur-radius
This is a third <length> value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp).
  
* #### spread-radius
This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
 
* #### color 
This is the fifth value used to set shadow color

### Examples

#### Basic use
```css
div {
  width: 200px;
  height: 50px;
  background-color: #333;
  box-shadow: 10px 10px 5px #ccc;
}
```
10px - offset-x
10px - offset-y
5px -  blur
#ccc - light gray color

It will display

![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow1.png)

#### Inside box shadow
```css
div {
  width: 200px;
  height: 50px;
  background-color: #333;
  box-shadow: inset 10px 10px 5px #ccc;
}
```
It uses very similar code, but with inset value, which displays shadow inside the div element

![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow2.png)
