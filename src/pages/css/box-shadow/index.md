---
title: Box Shadow
---
## Box Shadow

The `box-shadow` property adds a drop shadow around an elements frame. Alternatively it can be used to add an inset shadow to the frame.

```css 
  box-shadow: inset offset-x offset-y blur-radius spread-radius color;
```
### inset

If specified, toggles drop shadow to inset shadow. The shadow will be placed within the borders of the element, above the background but below the content.

When not specified, `box-shadow` defaults to drop shadow.

### offset-x 

Sets the horizontal distance of the shadow from the frame. Accepts both positive and negative values. Positive values place shadow to the right of the element while negative values place the shadow to the left.

The `offset-x` value is required.

### offset-y 

Sets the vertical distance of the shadow from the frame. Accepts both positive and negative values. Positive values place shadow below the element while negative values place the shadow above.

The `offset-y` value is required.


### blur-radius

Sets the length of the shadow's blur. The larger the value the wider and lighter the shadow becomes. Only accepts positive values.

The `blur-radius` value is optional.

### spread-radius

Sets the length of the shadow's spread. The larger the value the more the shadow grows and expands. Negative values cause the shadow to shrink.

### color

Sets the color of the shadow.

The `color` value is optional.


### Example

```css 
  box-shadow: 1px -2px 5px #0f0f0f;
```


### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow' target='_blank' rel='nofollow'>MDN</a>

